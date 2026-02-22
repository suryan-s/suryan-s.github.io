import React from 'react';
import { ProjectCard } from './projects/ProjectCard';
import { projects } from './projects/projects-data';

export const ProjectsSection = () => {
    const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null);

    const handleHoverStart = (index: number) => {
        if (typeof window === 'undefined' || window.innerWidth >= 768) {
            setHoveredIndex(index);
        }
    };

    return (
        <section className="relative w-full py-20 px-4 md:px-0">
            <div className="w-full max-w-full grid grid-cols-1 md:grid-cols-12 gap-8 relative z-10 px-8 md:px-0 mb-12">
                <div className="col-span-1 md:col-start-2 md:col-span-5">
                    <h2 className="text-6xl md:text-8xl lg:text-[7rem] font-sans font-bold leading-none tracking-tight mb-8">
                        Pro_
                        <br />
                        jects<span className="text-[#ff4d4d]">:</span>
                    </h2>
                    <p className="text-gray-500 font-mono text-sm max-w-md">
                        Select a directory to inspect source code and deployment status.
                    </p>
                </div>
            </div>

            <div className="w-full max-w-full grid grid-cols-1 md:grid-cols-12 gap-8 relative z-10 px-8 md:px-0">
                <div className="col-span-1 md:col-start-2 md:col-span-10">
                    <div className="w-full h-[500px] flex gap-4 md:gap-2 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-8 md:pb-0 scrollbar-none">
                        {projects.map((project, index) => (
                            <ProjectCard
                                key={project.id}
                                project={project}
                                isActive={hoveredIndex === index}
                                onHoverStart={() => handleHoverStart(index)}
                                onTap={() => setHoveredIndex(index)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
