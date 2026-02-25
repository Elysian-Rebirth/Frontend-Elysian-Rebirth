'use client';

import { useMemo, useState } from "react"
import {
    DndContext,
    DragOverlay,
    closestCorners,
    KeyboardSensor,
    PointerSensor,
    useSensor,
    useSensors,
    DragStartEvent,
    DragEndEvent,
} from "@dnd-kit/core"
import {
    SortableContext,
    arrayMove,
    sortableKeyboardCoordinates,
    verticalListSortingStrategy,
} from "@dnd-kit/sortable"

import { AgentTaskCard, PipelineAgentTask, AgentTaskStatus } from "./AgentTaskCard"
import { PipelineColumn } from "./PipelineColumn"
import { useMoveWorkstreamStage } from "@/hooks/useWorkstreams"
import { useEffect } from "react"

export type PipelineBoardProps = {
    initialTasks: PipelineAgentTask[]
}

const COLUMNS: { id: AgentTaskStatus; title: string }[] = [
    { id: "data_ingestion", title: "Data Ingestion" },
    { id: "processing", title: "Thinking/Processing" },
    { id: "final_review", title: "Final Review" },
]

export function PipelineBoard({ initialTasks }: PipelineBoardProps) {
    const [tasks, setTasks] = useState<PipelineAgentTask[]>(initialTasks)
    const [activeId, setActiveId] = useState<string | null>(null)

    const sensors = useSensors(
        useSensor(PointerSensor, {
            activationConstraint: {
                distance: 5,
            },
        }),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    )

    const { mutate: moveStage } = useMoveWorkstreamStage();

    // Sync state with upstream TanStack Query
    useEffect(() => {
        setTasks(initialTasks);
    }, [initialTasks]);

    const columns = useMemo(() => {
        return COLUMNS.map(col => ({
            ...col,
            tasks: tasks.filter(t => t.status === col.id)
        }))
    }, [tasks])

    function handleDragStart(event: DragStartEvent) {
        setActiveId(event.active.id as string)
    }

    function handleDragOver(event: any) {
        const { active, over } = event
        if (!over) return

        const activeId = active.id
        const overId = over.id

        if (activeId === overId) return

        const isActiveTask = active.data.current?.type === "Task"
        const isOverTask = over.data.current?.type === "Task"
        const isOverColumn = over.data.current?.type === "Column"

        if (!isActiveTask) return

        // Dropping a Task over another Task
        if (isActiveTask && isOverTask) {
            setTasks(tasks => {
                const activeIndex = tasks.findIndex(t => t.id === activeId)
                const overIndex = tasks.findIndex(t => t.id === overId)

                if (tasks[activeIndex].status !== tasks[overIndex].status) {
                    const newStatus = tasks[overIndex].status;
                    const updatedTasks = [...tasks]
                    updatedTasks[activeIndex].status = newStatus;

                    // Trigger async TanStack Mutation for Optimistic Update sync
                    moveStage({ id: activeId as string, newStatus });

                    return arrayMove(updatedTasks, activeIndex, overIndex)
                }

                return arrayMove(tasks, activeIndex, overIndex)
            })
        }

        // Dropping a Task over an empty Column area
        if (isActiveTask && isOverColumn) {
            setTasks(tasks => {
                const activeIndex = tasks.findIndex(t => t.id === activeId)
                const newStatus = overId as AgentTaskStatus;

                const updatedTasks = [...tasks]
                updatedTasks[activeIndex].status = newStatus

                // Trigger async TanStack Mutation for Optimistic Update sync
                moveStage({ id: activeId as string, newStatus });

                return arrayMove(updatedTasks, activeIndex, activeIndex)
            })
        }
    }

    function handleDragEnd(event: DragEndEvent) {
        setActiveId(null)
    }

    const activeTask = useMemo(
        () => tasks.find((task) => task.id === activeId),
        [activeId, tasks]
    )

    return (
        <DndContext
            sensors={sensors}
            collisionDetection={closestCorners}
            onDragStart={handleDragStart}
            onDragOver={handleDragOver}
            onDragEnd={handleDragEnd}
        >
            <div className="flex gap-4 md:gap-6 mt-6 overflow-x-auto pb-8 snap-x snap-mandatory">
                {columns.map(column => (
                    <PipelineColumn key={column.id} column={column} tasks={column.tasks} />
                ))}
            </div>

            <DragOverlay>
                {activeTask ? <AgentTaskCard task={activeTask} isDragging /> : null}
            </DragOverlay>
        </DndContext>
    )
}
