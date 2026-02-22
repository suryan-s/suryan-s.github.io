import type { ReactNode } from 'react';

export type TerminalLine = {
    type: 'cmd' | 'output';
    content: ReactNode;
};

export type CommandResult = {
    output?: ReactNode;
    clear?: boolean;
};
