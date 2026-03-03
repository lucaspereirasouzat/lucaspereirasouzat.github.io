import React from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Github, ExternalLink } from "lucide-react";

export interface Project {
    title: string;
    description: string;
    image: string;
    tags: string[];
    github?: string;
    website?: string;
}

const defaultProjects: Project[] = [
    {
        title: "E-Commerce Platform",
        description:
            "Full-stack e-commerce application with payment integration, admin dashboard and real-time inventory management.",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
        tags: ["React", "Node.js", "MongoDB", "Stripe"],
        github: "https://github.com",
        website: "https://example.com",
    },
    {
        title: "Task Management App",
        description:
            "Collaborative project management tool with real-time updates, drag-and-drop boards and team chat.",
        image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
        tags: ["React", "TypeScript", "Socket.io", "PostgreSQL"],
        github: "https://github.com",
    },
    {
        title: "AI Chat Assistant",
        description:
            "Intelligent chat application powered by OpenAI API with conversation history and context awareness.",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
        tags: ["Next.js", "OpenAI", "Tailwind", "Prisma"],
        github: "https://github.com",
        website: "https://example.com",
    },
    {
        title: "Fitness Tracker",
        description:
            "Mobile-first fitness tracking app with workout plans, progress charts and social features.",
        image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=600&h=400&fit=crop",
        tags: ["React Native", "Firebase", "Chart.js"],
        github: "https://github.com",
        website: "https://example.com",
    },
];

interface PortifolioCardProps {
    project: Project;
}

function PortifolioCardItem({ project }: PortifolioCardProps) {
    return (
        <Card className="overflow-hidden group hover:shadow-xl hover:shadow-black/30 transition-all duration-300 bg-zinc-900 border-zinc-800 text-white">
            {/* Image */}
            <div className="relative h-52 overflow-hidden">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            <CardHeader className="pb-2">
                <CardTitle className="text-xl text-white">{project.title}</CardTitle>
                <CardDescription className="line-clamp-2 text-zinc-400">
                    {project.description}
                </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                        <span
                            key={i}
                            className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-zinc-800 text-zinc-300"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-1">
                    {project.github && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-sm text-zinc-400 hover:text-white transition-colors"
                        >
                            <Github className="w-4 h-4" />
                            Code
                        </a>
                    )}
                    {project.website && (
                        <a
                            href={project.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-sm text-zinc-400 hover:text-white transition-colors"
                        >
                            <ExternalLink className="w-4 h-4" />
                            Website
                        </a>
                    )}
                </div>
            </CardContent>
        </Card>
    );
}

interface PortifolioGridProps {
    projects?: Project[];
}

export function PortifolioCard({ projects = defaultProjects }: PortifolioGridProps) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
                <PortifolioCardItem key={index} project={project} />
            ))}
        </div>
    );
}