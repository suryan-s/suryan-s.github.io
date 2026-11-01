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
                        <span>education</span>
                        <span>projects</span>
                        <span>certifications</span>
                        <span>contact</span>
                        <span>clear</span>
                    </div>
                )
            };
        case 'whoami':
        case 'about':
            return {
                output: "Suryan S — Product Engineer @ CARESTACK | Top100Coders23 Fellow | .NET | Rust | Python | K8s | Full Stack Developer | Based in Thiruvananthapuram, Kerala, India"
            };
        case 'experience':
        case 'exp':
            return {
                output: (
                    <div className="flex flex-col gap-4">
                        <div>
                            <div className="text-white font-bold">Product Engineer @ CARESTACK</div>
                            <div className="text-gray-500 text-xs">Oct 2024 - Present · 2 yrs 2 mos · Thiruvananthapuram, Kerala · On-site</div>
                            <div className="text-gray-400 pl-4 border-l border-gray-700 mt-1">
                                Building dental practice management software. .NET, Rust, Python, Kubernetes.
                            </div>
                        </div>
                        <div>
                            <div className="text-white font-bold">KKEM Campus Ambassador @ Kerala Knowledge Economy Mission</div>
                            <div className="text-gray-500 text-xs">Aug 2023 - Jul 2024 · 1 yr · Thiruvananthapuram · Hybrid</div>
                        </div>
                        <div>
                            <div className="text-white font-bold">Campus Lead @ MuLearn UCEK</div>
                            <div className="text-gray-500 text-xs">Apr 2023 - Jul 2024 · 1 yr 4 mos · Thiruvananthapuram · On-site</div>
                            <div className="text-gray-400 pl-4 border-l border-gray-700 mt-1">Team Leadership, Leadership</div>
                        </div>
                        <div>
                            <div className="text-white font-bold">Chairperson @ FOSS UCEK</div>
                            <div className="text-gray-500 text-xs">Nov 2022 - Jul 2024 · 1 yr 9 mos · Thiruvananthapuram · On-site</div>
                            <div className="text-gray-400 pl-4 border-l border-gray-700 mt-1">Free & Open Source Software community leadership</div>
                        </div>
                        <div>
                            <div className="text-white font-bold">Back End Developer Intern @ GTech MuLearn</div>
                            <div className="text-gray-500 text-xs">May 2023 - Dec 2023 · 8 mos · Thiruvananthapuram · Hybrid</div>
                            <div className="text-gray-400 pl-4 border-l border-gray-700 mt-1">Discord API, Analytical Skills, Python</div>
                        </div>
                        <div>
                            <div className="text-white font-bold">Board Member @ Workspace</div>
                            <div className="text-gray-500 text-xs">Sep 2022 - May 2023 · 9 mos · Thiruvananthapuram</div>
                            <div className="text-gray-400 pl-4 border-l border-gray-700 mt-1">Git, version control workflows</div>
                        </div>
                        <div>
                            <div className="text-white font-bold">Engineering Team Lead</div>
                            <div className="text-gray-500 text-xs">Mar 2022 - Sep 2022 · 7 mos</div>
                            <div className="text-gray-400 pl-4 border-l border-gray-700 mt-1">Machine Learning, IoT</div>
                        </div>
                        <div>
                            <div className="text-white font-bold">Internet of Things Manager</div>
                            <div className="text-gray-500 text-xs">Jun 2021 - Mar 2022 · 10 mos</div>
                            <div className="text-gray-400 pl-4 border-l border-gray-700 mt-1">Azure IoT, Industrial IoT</div>
                        </div>
                        <div>
                            <div className="text-white font-bold">Technical Co-lead @ IEDC UCEK</div>
                            <div className="text-gray-500 text-xs">Feb 2022 - May 2023 · 1 yr 4 mos</div>
                            <div className="text-gray-400 pl-4 border-l border-gray-700 mt-1">Innovation & Entrepreneurship Development Cell</div>
                        </div>
                        <div>
                            <div className="text-white font-bold">Vice Campus Lead @ TinkerHub UCEK</div>
                            <div className="text-gray-500 text-xs">Sep 2022 - Apr 2023 · 8 mos · On-site</div>
                            <div className="text-gray-400 pl-4 border-l border-gray-700 mt-1">Team Leadership, Communication, Community building</div>
                        </div>
                        <div>
                            <div className="text-white font-bold">Python Developer Intern @ TechnoBeetle IT Solutions</div>
                            <div className="text-gray-500 text-xs">Feb 2022 - Nov 2022 · 10 mos · Thiruvananthapuram</div>
                            <div className="text-gray-400 pl-4 border-l border-gray-700 mt-1">Flask, Computer Vision, OpenCV</div>
                        </div>
                    </div>
                )
            };
        case 'stack':
        case 'skills':
            return {
                output: (
                    <div className="space-y-2">
                        <div><span className="text-cyan-500">Languages:</span> Python, Rust, C#, JavaScript, TypeScript, C</div>
                        <div><span className="text-cyan-500">Backend:</span> FastAPI, Django, ASP.NET, Flask, REST APIs, Microservices</div>
                        <div><span className="text-cyan-500">Frontend:</span> Flutter, React, TypeScript</div>
                        <div><span className="text-cyan-500">Cloud/Infra:</span> Kubernetes, Docker, Azure IoT, CI/CD, Linux</div>
                        <div><span className="text-cyan-500">Data/ML:</span> PyTorch, NLTK, Computer Vision, Data Mining, Data Science</div>
                        <div><span className="text-cyan-500">IoT:</span> Azure IoT, Industrial IoT (IIoT), Industry 4.0</div>
                        <div><span className="text-cyan-500">Tools:</span> Git, Linux, DBMS, Ekipa, Coding Standards</div>
                        <div><span className="text-cyan-500">Soft Skills:</span> Leadership, Critical Thinking, Team Leadership, Communication</div>
                    </div>
                )
            };
        case 'education':
        case 'edu':
            return {
                output: (
                    <div className="space-y-2">
                        <div>
                            <span className="text-white font-bold">University of Kerala</span>
                            <span className="block text-gray-500 text-xs">Bachelor's in Computer Science · Dec 2020 - Sep 2024</span>
                            <span className="block text-gray-400 text-xs">Activities: FOSS, Python, RASA, Flutter, IoT, TinkerHub, IEDC, E-CELL</span>
                            <span className="block text-gray-400 text-xs">Skills: Leadership, Startups, Python, Critical Thinking</span>
                        </div>
                        <div>
                            <span className="text-white font-bold">Kendriya Vidyalaya Pattom, Thiruvananthapuram</span>
                            <span className="block text-gray-500 text-xs">Apr 2007 - Mar 2019</span>
                        </div>
                    </div>
                )
            };
        case 'projects':
        case 'proj':
            return {
                output: (
                    <div className="space-y-4">
                        <div>
                            <div className="text-white font-bold">GridNLP</div>
                            <div className="text-gray-500 text-xs">Oct 2023 - Present</div>
                            <div className="text-gray-400 pl-4 border-l border-gray-700 mt-1">
                                NLP chat bot for Substation Asset Maintenance. NLTK, PyTorch, FastAPI (Python), Flutter (mobile).
                                Cosine similarity & tag matching for retrieval. Integrated spell checker.
                                <a href="https://github.com/suryan-s/GridNLP" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline ml-2">GitHub</a>
                            </div>
                        </div>
                        <div>
                            <div className="text-white font-bold">Certificato</div>
                            <div className="text-gray-500 text-xs">Feb 2023 - Present</div>
                            <div className="text-gray-400 pl-4 border-l border-gray-700 mt-1">
                                Web app for bulk certificate generation & emailing. Streamlit, Google App Passwords for security.
                                Reads Excel sheets, generates customized PDF certificates, emails recipients.
                            </div>
                        </div>
                        <div>
                            <div className="text-white font-bold">Synopysor-Pro</div>
                            <div className="text-gray-500 text-xs">Ongoing</div>
                            <div className="text-gray-400 pl-4 border-l border-gray-700 mt-1">Code analysis & synthesis tool. Ekipa framework.</div>
                        </div>
                        <div>
                            <div className="text-white font-bold">Ekipa</div>
                            <div className="text-gray-500 text-xs">Ongoing</div>
                            <div className="text-gray-400 pl-4 border-l border-gray-700 mt-1">Development framework/tooling project.</div>
                        </div>
                    </div>
                )
            };
        case 'certifications':
        case 'certs':
            return {
                output: (
                    <ul className="list-disc list-inside text-gray-300 space-y-1">
                        <li>Advanced Django Project: Build High-Traffic Websites with Django (LinkedIn, Jan 2024)</li>
                        <li>Building RESTful Web APIs with Django (LinkedIn, Apr 2024)</li>
                        <li>Microservices: Design Patterns (LinkedIn, Mar 2024)</li>
                        <li>Microservices Foundations (LinkedIn, Feb 2024)</li>
                        <li>Python (Basic) Certificate - HackerRank (Oct 2023)</li>
                        <li>Internet of Things (IoT) - NPTEL (May 2023)</li>
                        <li>Data Mining - NPTEL (Apr 2023)</li>
                        <li>Data Science for Engineers - NPTEL (Apr 2023)</li>
                        <li>Introduction to Industry 4.0 and Industrial IoT - NPTEL (May 2022)</li>
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
                        <div>Location: Thiruvananthapuram, Kerala, India</div>
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