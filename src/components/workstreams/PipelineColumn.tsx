'use client';

import { useDroppable } from "@dnd-kit/core"
import {
    SortableContext,
    verticalListSortingStrategy,
    useSortable
} from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"

import { AgentTaskCard, PipelineAgentTask, AgentTaskStatus } from "./AgentTaskCard"
import { cn } from "@/lib/utils"

export type PipelineColumnProps = {
    column: {
        id: AgentTaskStatus
        title: string
    }
    tasks: PipelineAgentTask[]
}

export function PipelineColumn({ column, tasks }: PipelineColumnProps) {
    const { isOver, setNodeRef } = useDroppable({
        id: column.id,
        data: {
            type: "Column",
            column,
        },
    })

    return (
        <div
            ref={setNodeRef}
            className={cn(
                "flex-shrink-0 flex flex-col w-80 min-h-[500px] rounded-2xl border bg-slate-50/50 dark:bg-slate-900/20 p-3 transition-colors snap-start",
                isOver ? "border-blue-400 dark:border-blue-500 bg-blue-50/20 dark:bg-blue-900/10" : "border-slate-200/60 dark:border-slate-800/60"
            )}
        >
            <div className="flex items-center justify-between mb-4 px-1">
                <h3 className="font-semibold text-sm text-slate-800 dark:text-slate-200">{column.title}</h3>
                <span className="text-xs font-medium text-slate-500 bg-slate-200/50 dark:bg-slate-800 px-2 py-0.5 rounded-full">
                    {tasks.length}
                </span>
            </div>

            <div className="flex flex-col gap-3 flex-1 overflow-y-auto scrollbar-hide">
                <SortableContext items={tasks.map(t => t.id)} strategy={verticalListSortingStrategy}>
                    {tasks.map((task) => (
                        <SortableAgentTask key={task.id} task={task} />
                    ))}
                    {tasks.length === 0 && (
                        <div className="flex-1 flex items-center justify-center border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-xl mt-2 text-xs text-slate-400">
                            Drop agents here
                        </div>
                    )}
                </SortableContext>
            </div>
        </div>
    )
}

function SortableAgentTask({ task }: { task: PipelineAgentTask }) {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
        isDragging,
    } = useSortable({
        id: task.id,
        data: {
            type: "Task",
            task,
        },
    })

    // Framer motion style transformations applied by DNDkit
    const style = {
        transition,
        transform: CSS.Transform.toString(transform),
    }

    return (
        <div
            ref={setNodeRef}
            style={style}
            {...attributes}
            {...listeners}
            className={cn("touch-none", isDragging && "opacity-0")}
        >
            <AgentTaskCard task={task} />
        </div>
    )
}
