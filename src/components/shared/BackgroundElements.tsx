import React from 'react';

export const BackgroundGrid = () => (
    <div className="fixed inset-0 flex pointer-events-none z-0 select-none">
        {/* 5 columns, lines at 20%, 40%, 60%, 80% */}
        <div className="flex-1 border-r border-white/[0.05] h-full" />
        <div className="flex-1 border-r border-white/[0.05] h-full" />
        <div className="flex-1 border-r border-white/[0.05] h-full" />
        <div className="flex-1 border-r border-white/[0.05] h-full" />
        <div className="flex-1 h-full" />
    </div>
);

export const BackgroundWatermark = () => (
    <div className="fixed top-1/2 left-[48%] -translate-x-1/2 -translate-y-1/2 z-0 select-none pointer-events-none overflow-hidden w-full flex justify-center opacity-50">
        <span className="text-[20vw] font-bold font-mono text-white/[0.04] leading-none tracking-tighter">
            &lt;DEVELOP /&gt;
        </span>
    </div>
);
