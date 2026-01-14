'use client';

import { Handle, Position, NodeProps } from 'reactflow';
import { Card, Input } from 'antd';
import { BranchesOutlined } from '@ant-design/icons';

interface BranchNodeData {
    label: string;
    condition?: string;
}

export function BranchNode({ data, selected }: NodeProps<BranchNodeData>) {
    return (
        <div>
            <Handle type="target" position={Position.Top} />
            <Card
                size="small"
                title={
                    <span>
                        <BranchesOutlined style={{ marginRight: 8 }} />
                        {data.label}
                    </span>
                }
                style={{
                    width: 300,
                    border: selected ? '2px solid #1890ff' : '1px solid #d9d9d9',
                }}
            >
                <div>
                    <label style={{ fontSize: 12, color: '#888' }}>Condition</label>
                    <Input
                        value={data.condition}
                        placeholder="e.g., score > 0.8"
                        size="small"
                        style={{ marginTop: 4 }}
                    />
                </div>
                <div style={{ marginTop: 12, fontSize: 11, color: '#888' }}>
                    ← True branch on left
                    <br />→ False branch on right
                </div>
            </Card>
            <Handle type="source" position={Position.Left} id="true" />
            <Handle type="source" position={Position.Right} id="false" />
        </div>
    );
}
