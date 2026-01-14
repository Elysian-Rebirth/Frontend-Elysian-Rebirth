'use client';

import { Handle, Position, NodeProps } from 'reactflow';
import { Card, Select, Slider } from 'antd';
import { RobotOutlined } from '@ant-design/icons';

interface LLMNodeData {
    label: string;
    model?: string;
    temperature?: number;
    systemPrompt?: string;
}

export function LLMNode({ data, selected }: NodeProps<LLMNodeData>) {
    return (
        <div>
            <Handle type="target" position={Position.Top} />
            <Card
                size="small"
                title={
                    <span>
                        <RobotOutlined style={{ marginRight: 8 }} />
                        {data.label}
                    </span>
                }
                style={{
                    width: 300,
                    border: selected ? '2px solid #1890ff' : '1px solid #d9d9d9',
                }}
            >
                <div style={{ marginBottom: 12 }}>
                    <label style={{ fontSize: 12, color: '#888' }}>Model</label>
                    <Select
                        value={data.model || 'gpt-4'}
                        style={{ width: '100%', marginTop: 4 }}
                        size="small"
                        options={[
                            { value: 'gpt-4', label: 'GPT-4' },
                            { value: 'gpt-3.5-turbo', label: 'GPT-3.5 Turbo' },
                            { value: 'claude-3-opus', label: 'Claude 3 Opus' },
                            { value: 'deepseek-chat', label: 'DeepSeek Chat' },
                        ]}
                    />
                </div>
                <div>
                    <label style={{ fontSize: 12, color: '#888' }}>
                        Temperature: {(data.temperature || 0.7).toFixed(1)}
                    </label>
                    <Slider
                        min={0}
                        max={2}
                        step={0.1}
                        value={data.temperature || 0.7}
                        style={{ marginTop: 4 }}
                    />
                </div>
            </Card>
            <Handle type="source" position={Position.Bottom} />
        </div>
    );
}
