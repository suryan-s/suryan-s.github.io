import React from 'react';
import type { CommandResult, TerminalLine } from './terminal-types';

export const initialHistory: TerminalLine[] = [
    { type: 'output', content: "Welcome to Suryan's interactive terminal v1.0.0" },
    { type: 'output', content: "Type 'help' to see available commands." }
];

export const getCommandResult = (cleanCmd: string): CommandResult => {
    switch (cleanCmd) {
        case 'help':
        case 'ls':
            return {
                output: (
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-cyan-400">
                        <span>about</span>
                        <span>experience</span>
                        <span>stack</span>
                        <span>academics</span>
                        <span>contact</span>
                        <span>clear</span>
                    </div>
                )
            };
        case 'whoami':
        case 'about':
            return {
                output: "Suryan. Full Stack Engineer. System Architect. Minimalist."
            };
        case 'experience':
        case 'exp':
            return {
                output: (
                    <div className="flex flex-col gap-4">
                        <div>
                            <div className="text-white font-bold">Senior System Architect @ TechCorp</div>
                            <div className="text-gray-500 text-xs">2023 - Present</div>
                            <div className="text-gray-400 pl-4 border-l border-gray-700 mt-1">
                                Leading microservices migration and high-scale distributed systems design.
                            </div>
                        </div>
                        <div>
                            <div className="text-white font-bold">Full Stack Lead @ StartUp Inc</div>
                            <div className="text-gray-500 text-xs">2020 - 2023</div>
                            <div className="text-gray-400 pl-4 border-l border-gray-700 mt-1">
                                Built core product from 0 to 1M users. React, Node, AWS.
                            </div>
                        </div>
                    </div>
                )
            };
        case 'stack':
        case 'skills':
            return {
                output: (
                    <div className="space-y-2">
                        <div><span className="text-cyan-500">Frontend:</span> React, Next.js, Tailwind, Motion, WebGL</div>
                        <div><span className="text-cyan-500">Backend:</span> Node.js, Go, Rust, Python, gRPC</div>
                        <div><span className="text-cyan-500">Infra:</span> AWS, Docker, Kubernetes, Terraform</div>
                        <div><span className="text-cyan-500">Databases:</span> PostgreSQL, Redis, MongoDB, Cassandra</div>
                    </div>
                )
            };
        case 'academics':
        case 'edu':
            return {
                output: (
                    <div className="space-y-2">
                        <div>
                            <span className="text-white font-bold">M.S. Computer Science</span>
                            <span className="block text-gray-500 text-xs">BITS Pilani (2018 - 2020)</span>
                        </div>
                        <div>
                            <span className="text-white font-bold">B.Tech Computer Science</span>
                            <span className="block text-gray-500 text-xs">IIT Delhi (2014 - 2018)</span>
                        </div>
                    </div>
                )
            };
        case 'certs':
            return {
                output: (
                    <ul className="list-disc list-inside text-gray-300">
                        <li>AWS Certified Solutions Architect - Professional</li>
                        <li>CKA (Certified Kubernetes Administrator)</li>
                        <li>Google Cloud Professional Cloud Architect</li>
                    </ul>
                )
            };
        case 'contact':
            return {
                output: (
                    <div className="text-gray-300">
                        <div>Email: <a href="mailto:hello@suryan.dev" className="text-cyan-400 hover:underline">hello@suryan.dev</a></div>
                        <div>GitHub: <a href="https://github.com/suryan-s" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">@suryan-s</a></div>
                        <div>LinkedIn: <a href="https://www.linkedin.com/in/suryansanal/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">@suryansanal</a></div>
                        <div>Instagram: <a href="https://www.instagram.com/me_suryan/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">@me_suryan</a></div>
                    </div>
                )
            };
        case 'clear':
        case 'cls':
            return { clear: true };
        default:
            return {
                output: <span className="text-red-400">Command not found: {cleanCmd}. Type 'help' for options.</span>
            };
    }
};
