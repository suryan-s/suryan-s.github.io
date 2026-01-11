import React from 'react';
import { motion } from 'motion/react';
import { Heart } from 'lucide-react';

export const ShareWidget = () => (
    <div className="fixed bottom-12 left-8 md:left-12 z-30 hidden md:block mix-blend-difference text-white">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="origin-bottom-left -rotate-90 translate-x-3 translate-y-full"
        >
            <div className="flex items-center gap-3 hover:text-cyan-400 transition-colors cursor-pointer group">
                <span className="text-[10px] md:text-xs font-bold tracking-[0.25em] uppercase whitespace-nowrap">
                    Share with
                </span>
                <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                    <Heart className="w-3 h-3 md:w-4 md:h-4 fill-current group-hover:text-red-500 transition-colors" />
                </motion.div>
            </div>
        </motion.div>
    </div>
);
