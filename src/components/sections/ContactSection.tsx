import React from 'react';
import { motion } from 'motion/react';

export const ContactSection = () => {
    return (
        <section className="relative w-full min-h-[80vh] flex flex-col justify-center py-20">
            <div className="w-full max-w-full grid grid-cols-1 md:grid-cols-12 h-full px-8 md:px-0">
                <div className="col-span-1 md:col-start-2 md:col-span-10 flex flex-col justify-center h-full">

                    {/* Main Text */}
                    <div className="font-sans font-bold tracking-tighter leading-[1] mb-24 relative z-10">
                        <h2 className="text-5xl md:text-7xl lg:text-[7rem] text-white mb-6">
                            Always open to
                            <br />
                            learning &
                            <br />
                            discussing tech.
                            <br />
                            Got an idea?
                        </h2>
                        <div className="mt-2 md:mt-4">
                            <motion.a
                                href="mailto:hello@suryan.dev"
                                className="group relative inline-block text-5xl md:text-7xl lg:text-[7rem] text-[#ff4d4d] cursor-pointer"
                                whileHover={{ scale: 1.05, x: 20 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <span className="relative z-10">Let's talk.</span>
                            </motion.a>
                        </div>
                    </div>

                    {/* Footer Links */}

                </div>
            </div>
        </section>
    );
};
