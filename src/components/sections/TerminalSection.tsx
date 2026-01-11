import React from 'react';

export const TerminalSection = () => {
    const [input, setInput] = React.useState("");

    const initialHistory: Array<{ type: 'cmd' | 'output', content: React.ReactNode }> = [
        { type: 'output', content: "Welcome to Suryan's interactive terminal v1.0.0" },
        { type: 'output', content: "Type 'help' to see available commands." }
    ];

    const [history, setHistory] = React.useState(initialHistory);
    const inputRef = React.useRef<HTMLInputElement>(null);
    const containerRef = React.useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        if (containerRef.current) {
            containerRef.current.scrollTo({
                top: containerRef.current.scrollHeight,
                behavior: 'smooth'
            });
        }
    };

    React.useEffect(scrollToBottom, [history]);

    const handleCommand = (cmd: string) => {
        const cleanCmd = cmd.trim().toLowerCase();
        const newHistory = [...history, { type: 'cmd' as const, content: cmd }];

        let output: React.ReactNode = "";

        switch (cleanCmd) {
            case 'help':
            case 'ls':
                output = (
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-cyan-400">
                        <span>about</span>
                        <span>experience</span>
                        <span>stack</span>
                        <span>academics</span>
                        <span>contact</span>
                        <span>clear</span>
                    </div>
                );
                break;
            case 'whoami':
            case 'about':
                output = "Suryan. Full Stack Engineer. System Architect. Minimalist.";
                break;
            case 'experience':
            case 'exp':
                output = (
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
                );
                break;
            case 'stack':
            case 'skills':
                output = (
                    <div className="space-y-2">
                        <div><span className="text-cyan-500">Frontend:</span> React, Next.js, Tailwind, Motion, WebGL</div>
                        <div><span className="text-cyan-500">Backend:</span> Node.js, Go, Rust, Python, gRPC</div>
                        <div><span className="text-cyan-500">Infra:</span> AWS, Docker, Kubernetes, Terraform</div>
                        <div><span className="text-cyan-500">Databases:</span> PostgreSQL, Redis, MongoDB, Cassandra</div>
                    </div>
                );
                break;
            case 'academics':
            case 'edu':
                output = (
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
                );
                break;
            case 'certs':
                output = (
                    <ul className="list-disc list-inside text-gray-300">
                        <li>AWS Certified Solutions Architect - Professional</li>
                        <li>CKA (Certified Kubernetes Administrator)</li>
                        <li>Google Cloud Professional Cloud Architect</li>
                    </ul>
                );
                break;
            case 'contact':
                output = (
                    <div className="text-gray-300">
                        <div>Email: <a href="mailto:hello@suryan.dev" className="text-cyan-400 hover:underline">hello@suryan.dev</a></div>
                        <div>GitHub: <a href="#" className="text-cyan-400 hover:underline">@suryan</a></div>
                        <div>Twitter: <a href="#" className="text-cyan-400 hover:underline">@suryan_dev</a></div>
                    </div>
                );
                break;
            case 'clear':
            case 'cls':
                setHistory(initialHistory);
                setInput("");
                return;
            default:
                output = <span className="text-red-400">Command not found: {cleanCmd}. Type 'help' for options.</span>;
        }

        setHistory([...newHistory, { type: 'output', content: output }]);
        setInput("");
    };

    return (
        <section className="relative w-full min-h-[80vh] flex items-center justify-center py-20 px-4 md:px-0">
            <div className="w-full max-w-4xl bg-[#111] border border-white/10 rounded-lg shadow-2xl overflow-hidden font-mono text-sm md:text-base">
                {/* Terminal Header */}
                <div className="bg-[#1a1a1a] px-4 py-2 border-b border-white/5 flex items-center gap-2">
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/50" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                        <div className="w-3 h-3 rounded-full bg-green-500/50" />
                    </div>
                    <div className="flex-1 text-center text-xs text-gray-500 font-sans">visitor@suryan.dev: ~</div>
                </div>

                {/* Terminal Body */}
                <div
                    ref={containerRef}
                    className="p-6 h-[500px] overflow-y-auto scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent"
                    onClick={() => inputRef.current?.focus()}
                >
                    {history.map((line, i) => (
                        <div key={i} className="mb-2">
                            {line.type === 'cmd' ? (
                                <div className="flex gap-2 text-gray-400">
                                    <span className="text-green-500">➜</span>
                                    <span className="text-cyan-400">~</span>
                                    <span>{line.content}</span>
                                </div>
                            ) : (
                                <div className="text-gray-300 pl-6 leading-relaxed">
                                    {line.content}
                                </div>
                            )}
                        </div>
                    ))}

                    <div className="flex gap-2 items-center">
                        <span className="text-green-500">➜</span>
                        <span className="text-cyan-400">~</span>
                        <input
                            ref={inputRef}
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    e.preventDefault();
                                    handleCommand(input);
                                } else if (e.ctrlKey && e.key === 'l') {
                                    e.preventDefault();
                                    setHistory(initialHistory);
                                }
                            }}
                            className="bg-transparent border-none outline-none text-white flex-1 focus:ring-0"
                            autoFocus
                            spellCheck={false}
                            autoComplete="off"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};
