import React from 'react';
import { motion } from 'motion/react';

export const ScrambleText = ({
    text,
    className = "",
    delay = 0
}: {
    text: string;
    className?: string;
    delay?: number;
}) => {
    const [display, setDisplay] = React.useState(text);
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?';
    const [started, setStarted] = React.useState(false);

    React.useEffect(() => {
        const startTimeout = setTimeout(() => {
            setStarted(true);
            let iteration = 0;
            const interval = setInterval(() => {
                setDisplay(
                    text
                        .split('')
                        .map((letter, index) => {
                            if (index < iteration) {
                                return text[index];
                            }
                            return characters[Math.floor(Math.random() * characters.length)];
                        })
                        .join('')
                );

                if (iteration >= text.length) {
                    clearInterval(interval);
                }

                iteration += 1 / 3;
            }, 30);

            return () => clearInterval(interval);
        }, delay);

        return () => clearTimeout(startTimeout);
    }, [text, delay]);

    return <span className={className}>{display}</span>;
};
