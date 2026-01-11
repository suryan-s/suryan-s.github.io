import React from 'react';
import { motion } from 'motion/react';

export const Ring = ({
    className = "",
    size = "w-16 h-16",
    color = "border-cyan-500",
    width = "border-[12px]",
    opacity = "opacity-100",
    rounded = "rounded-full",
    float = false,
    delay = 0
}: {
    className?: string;
    size?: string;
    color?: string;
    width?: string;
    opacity?: string;
    rounded?: string;
    float?: boolean;
    delay?: number;
}) => {
    // Extract values from Tailwind arbitrary classes
    const getArbitraryValue = (cls: string) => {
        const match = cls.match(/\[(.*?)\]/);
        return match ? match[1] : null;
    };

    let strokeColor = getArbitraryValue(color);
    if (!strokeColor) {
        if (color.includes('cyan-500')) strokeColor = '#06b6d4';
        else if (color.includes('cyan-400')) strokeColor = '#22d3ee';
        else strokeColor = '#06b6d4';
    }

    const strokeWidth = getArbitraryValue(width) || "4px";
    const isCircle = rounded === "rounded-full";
    const radius = getArbitraryValue(rounded) || "12px";

    return (
        <motion.div
            className={`absolute ${size} ${className} pointer-events-none flex items-center justify-center`}
            animate={float ? { y: [0, -15, 0] } : undefined}
            transition={float ? {
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: delay
            } : undefined}
        >
            <svg className={`w-full h-full overflow-visible ${opacity}`}>
                {isCircle ? (
                    <motion.circle
                        cx="50%"
                        cy="50%"
                        r="46%"
                        fill="none"
                        stroke={strokeColor}
                        strokeWidth={strokeWidth}
                        initial={{ pathLength: 0, rotate: -90 }}
                        whileInView={{ pathLength: 1, rotate: -90 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeInOut", delay }}
                    />
                ) : (
                    <motion.rect
                        x="2%"
                        y="2%"
                        width="96%"
                        height="96%"
                        rx={radius}
                        ry={radius}
                        fill="none"
                        stroke={strokeColor}
                        strokeWidth={strokeWidth}
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeInOut", delay }}
                    />
                )}
            </svg>
        </motion.div>
    );
};
