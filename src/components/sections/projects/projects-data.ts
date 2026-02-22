export type Project = {
    id: string;
    title: string;
    desc: string;
    stack: string[];
    stat: string;
};

export const projects: Project[] = [
    {
        id: "01",
        title: "DISTRIBUTED_LEDGER",
        desc: "High-throughput consensus algorithm implementation in Rust.",
        stack: ["Rust", "gRPC", "RocksDB"],
        stat: "50k TPS"
    },
    {
        id: "02",
        title: "NEURAL_VISUALIZER",
        desc: "Real-time WebGL visualization of neural network activation patterns.",
        stack: ["Three.js", "React", "Python"],
        stat: "60FPS"
    },
    {
        id: "03",
        title: "CLOUD_ORCHESTRATOR",
        desc: "Custom container orchestration system for edge computing nodes.",
        stack: ["Go", "Docker API", "Raft"],
        stat: "99.9% Uptime"
    },
    {
        id: "04",
        title: "DEFI_EXCHANGE",
        desc: "Decentralized exchange with automated market maker logic.",
        stack: ["Solidity", "Ethers.js", "GraphQL"],
        stat: "$2M TVL"
    },
    {
        id: "05",
        title: "SYSTEM_MONITOR",
        desc: "Kernel-level metrics collection and visualization dashboard.",
        stack: ["C++", "eBPF", "Next.js"],
        stat: "0.1% Overhead"
    }
];
