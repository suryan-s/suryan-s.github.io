import React from 'react';
import type { TerminalLine } from './terminal-types';

type TerminalFrameProps = {
    history: TerminalLine[];
    input: string;
    inputRef: React.RefObject<HTMLInputElement>;
    containerRef: React.RefObject<HTMLDivElement>;
    onInputChange: (value: string) => void;
    onSubmit: () => void;
    onClear: () => void;
};

export const TerminalFrame = ({
    history,
    input,
    inputRef,
    containerRef,
    onInputChange,
    onSubmit,
    onClear
}: TerminalFrameProps) => {
    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            onSubmit();
            return;
        }

        if (event.ctrlKey && event.key === 'l') {
            event.preventDefault();
            onClear();
        }
    };

    return (
        <div className="w-full bg-[#111] border border-white/10 rounded-lg shadow-2xl overflow-hidden font-mono text-sm md:text-base">
            <TerminalHeader />
            <div
                ref={containerRef}
                className="p-6 h-[500px] overflow-y-auto scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent"
                onClick={() => inputRef.current?.focus()}
            >
                <TerminalHistory history={history} />
                <TerminalInputRow
                    input={input}
                    inputRef={inputRef}
                    onChange={onInputChange}
                    onKeyDown={handleKeyDown}
                />
            </div>
        </div>
    );
};

const TerminalHeader = () => (
    <div className="bg-[#1a1a1a] px-4 py-2 border-b border-white/5 flex items-center gap-2">
        <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/50" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
            <div className="w-3 h-3 rounded-full bg-green-500/50" />
        </div>
        <div className="flex-1 text-center text-xs text-gray-500 font-sans">visitor@suryan.dev: ~</div>
    </div>
);

const TerminalHistory = ({ history }: { history: TerminalLine[] }) => (
    <>
        {history.map((line, index) => (
            <div key={index} className="mb-2">
                {line.type === 'cmd' ? (
                    <div className="flex gap-2 text-gray-400">
                        <span className="text-green-500">➜</span>
                        <span className="text-cyan-400">~</span>
                        <span>{line.content}</span>
                    </div>
                ) : (
                    <div className="text-gray-300 pl-6 leading-relaxed">
                        {line.content}
                    </div>
                )}
            </div>
        ))}
    </>
);

type TerminalInputRowProps = {
    input: string;
    inputRef: React.RefObject<HTMLInputElement>;
    onChange: (value: string) => void;
    onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
};

const TerminalInputRow = ({
    input,
    inputRef,
    onChange,
    onKeyDown
}: TerminalInputRowProps) => (
    <div className="flex gap-2 items-center">
        <span className="text-green-500">➜</span>
        <span className="text-cyan-400">~</span>
        <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(event) => onChange(event.target.value)}
            onKeyDown={onKeyDown}
            className="bg-transparent border-none outline-none text-white flex-1 focus:ring-0"
            spellCheck={false}
            autoComplete="off"
        />
    </div>
);
