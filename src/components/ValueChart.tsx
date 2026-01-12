"use client";

import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

interface ValueChartProps {
    data: { year: string; value: number }[];
    color?: string;
}

export default function ValueChart({ data, color = "#3b82f6" }: ValueChartProps) {
    return (
        <div className="h-32 w-full">
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                    <XAxis
                        dataKey="year"
                        hide
                    />
                    <YAxis
                        hide
                        domain={['auto', 'auto']}
                    />
                    <Tooltip
                        contentStyle={{ backgroundColor: '#111', border: '1px solid #333', color: '#fff' }}
                        formatter={(value: number | undefined) => [value ? `€ ${value.toLocaleString()}` : '', 'Valore']}
                        labelStyle={{ display: 'none' }}
                    />
                    <Line
                        type="monotone"
                        dataKey="value"
                        stroke={color}
                        strokeWidth={2}
                        dot={false}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}
