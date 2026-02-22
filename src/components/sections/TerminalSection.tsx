import React from 'react';
import { TerminalFrame } from './terminal/TerminalFrame';
import { getCommandResult, initialHistory } from './terminal/terminal-commands';
import type { TerminalLine } from './terminal/terminal-types';

export const TerminalSection = () => {
    const [input, setInput] = React.useState("");
    const [history, setHistory] = React.useState<TerminalLine[]>(initialHistory);
    const inputRef = React.useRef<HTMLInputElement>(null);
    const containerRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        if (window.scrollY > 0) {
            window.scrollTo(0, 0);
        }

        const focusTimer = setTimeout(() => {
            if (inputRef.current && window.scrollY === 0) {
                inputRef.current.focus();
            }
        }, 100);

        return () => clearTimeout(focusTimer);
    }, []);

    const scrollToBottom = React.useCallback(() => {
        if (!containerRef.current) {
            return;
        }

        containerRef.current.scrollTo({
            top: containerRef.current.scrollHeight,
            behavior: 'smooth'
        });
    }, []);

    React.useEffect(() => {
        scrollToBottom();
    }, [history, scrollToBottom]);

    const handleCommand = (cmd: string) => {
        const cleanCmd = cmd.trim().toLowerCase();
        const result = getCommandResult(cleanCmd);

        if (result.clear) {
            setHistory(initialHistory);
            setInput("");
            return;
        }

        const output = result.output ?? "";
        setHistory((previous) => ([
            ...previous,
            { type: 'cmd', content: cmd },
            { type: 'output', content: output }
        ]));
        setInput("");
    };

    const handleClear = () => {
        setHistory(initialHistory);
        setInput("");
    };

    const handleSubmit = () => {
        handleCommand(input);
    };

    return (
        <section className="relative w-full min-h-[80vh] flex items-center py-20 px-4 md:px-0">
            <div className="w-full max-w-full grid grid-cols-1 md:grid-cols-12 gap-8 relative z-10 px-8 md:px-0">
                <div className="col-span-1 md:col-start-2 md:col-span-10">
                    <TerminalFrame
                        history={history}
                        input={input}
                        inputRef={inputRef}
                        containerRef={containerRef}
                        onInputChange={setInput}
                        onSubmit={handleSubmit}
                        onClear={handleClear}
                    />
                </div>
            </div>
        </section>
    );
};
