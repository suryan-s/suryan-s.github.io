import React from 'react';
import { motion } from 'motion/react';

export const Logo = () => {
    const [isScrolled, setIsScrolled] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > window.innerHeight * 0.2);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            {/* Stationary Underline that text "spills" from */}
            <motion.div
                className="fixed top-8 left-8 md:left-12 z-30 mix-blend-difference text-white"
                animate={{
                    opacity: isScrolled ? 0 : 1,
                    scaleX: isScrolled ? 0.5 : 1,
                    filter: isScrolled ? "blur(4px)" : "blur(0px)"
                }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                style={{ originX: 0 }}
            >
                <div className="relative">
                    {/* Invisible text to maintain exact width for underline */}
                    <span className="font-mono text-xl md:text-2xl font-bold tracking-tighter opacity-0 pointer-events-none">
                        Suryan<span className="text-[#ff4d4d]">.Dev</span>
                    </span>
                    <div className="hidden absolute -bottom-1 left-0 w-full h-[2px] bg-white rounded-full" />
                </div>
            </motion.div>

            {/* Moving Text */}
            <motion.div
                className="fixed left-8 md:left-12 z-30 mix-blend-difference text-white origin-left"
                initial={{ top: "2rem" }}
                animate={{
                    top: isScrolled ? "12rem" : "2rem",
                    rotate: isScrolled ? -90 : 0,
                    x: isScrolled ? "0.75rem" : "0rem"
                }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
            >
                <div className="relative group cursor-pointer">
                    <span className={`font-mono text-xl md:text-2xl font-bold tracking-tighter transition-opacity duration-300 ${isScrolled ? 'opacity-0 md:opacity-100' : 'opacity-80 md:opacity-100'} backdrop-blur-sm md:backdrop-blur-none bg-black/30 md:bg-transparent px-2 md:px-0 py-1 md:py-0 rounded`}>
                        Suryan<span className="text-[#ff4d4d]">.Dev</span>
                    </span>
                </div>
            </motion.div>
        </>
    );
};
