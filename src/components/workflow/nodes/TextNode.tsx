'use client';

import { Handle, Position, NodeProps } from 'reactflow';
import { Card, Input } from 'antd';
import { FileTextOutlined } from '@ant-design/icons';

const { TextArea } = Input;

interface TextNodeData {
    label: string;
    text?: string;
}

export function TextNode({ data, selected }: NodeProps<TextNodeData>) {
    return (
        <div>
            <Handle type="target" position={Position.Top} />
            <Card
                size="small"
                title={
                    <span>
                        <FileTextOutlined style={{ marginRight: 8 }} />
                        {data.label}
                    </span>
                }
                style={{
                    width: 300,
                    border: selected ? '2px solid #1890ff' : '1px solid #d9d9d9',
                }}
            >
                <TextArea
                    value={data.text}
                    placeholder="Enter text content..."
                    rows={4}
                    style={{ fontSize: 12 }}
                />
            </Card>
            <Handle type="source" position={Position.Bottom} />
        </div>
    );
}
