export type Project = {
    id: string;
    title: string;
    desc: string;
    stack: string[];
    stat: string;
    link?: string;
};

export const projects: Project[] = [
    {
        id: "01",
        title: "CERTIFICATO",
        desc: "Bulk certificate generation web app. Upload Excel sheets, generate customized PDF certificates, and email recipients automatically using Google App Passwords for security.",
        stack: ["Python", "Streamlit", "Pandas", "ReportLab", "SMTP"],
        stat: "⭐ 14",
        link: "https://github.com/suryan-s/Certificato"
    },
    {
        id: "02",
        title: "PRECIO",
        desc: "Precision farming application for modern farmers to optimize agricultural operations. Built with modern web technologies for real-time crop monitoring and yield prediction.",
        stack: ["TypeScript", "React", "Node.js", "PostgreSQL", "Tailwind"],
        stat: "⭐ 4",
        link: "https://github.com/suryan-s/Precio"
    },
    {
        id: "03",
        title: "SYNOPYSOR",
        desc: "YouTube video summarizer using OpenAI Whisper for transcription and Hugging Face Transformers for summarization. Extract key insights from long-form video content automatically.",
        stack: ["Python", "Streamlit", "Whisper", "Transformers", "PyTorch"],
        stat: "⭐ 3",
        link: "https://github.com/suryan-s/Synopysor"
    },
    {
        id: "04",
        title: "GRIDNLP",
        desc: "NLP chatbot for Substation Asset Maintenance support. Handles maintenance procedures, troubleshooting, safety protocols, and equipment recommendations using cosine similarity and tag matching retrieval.",
        stack: ["Dart", "Flutter", "Python", "FastAPI", "NLTK", "PyTorch"],
        stat: "⭐ 1",
        link: "https://github.com/suryan-s/GridNLP"
    },
    {
        id: "05",
        title: "IRONGATE",
        desc: "High-performance, distributed API Gateway and Layer 7 traffic controller built on .NET. Designed for microservices architectures with rate limiting, routing, and observability.",
        stack: ["C#", ".NET", "ASP.NET Core", "Kubernetes", "Docker"],
        stat: "Active",
        link: "https://github.com/suryan-s/IronGate"
    }
];