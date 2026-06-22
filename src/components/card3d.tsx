import React from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Github, ExternalLink } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const projectImages = [
    "https://github.com/lucaspereirasouzat/nlwmoveitnext/raw/refs/heads/main/screenshots/image1.png",
    "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=600&h=400&fit=crop",
];

const projectLinks: { github?: string; website?: string }[] = [
    { github: "https://github.com/lucaspereirasouzat/nlwmoveitnext", website: "https://nlw-moveit-next-j9b8zt2yy-warmachine13.vercel.app" },
    { github: "https://github.com", website: "https://example.com" },
    { github: "https://github.com" },
    { github: "https://github.com", website: "https://example.com" },
    { github: "https://github.com", website: "https://example.com" },
];

function PortifolioCardItem({
    title,
    description,
    image,
    tags,
    github,
    website,
    codeLabel,
    websiteLabel,
}: {
    title: string;
    description: string;
    image: string;
    tags: string[];
    github?: string;
    website?: string;
    codeLabel: string;
    websiteLabel: string;
}) {
    return (
        <Card className="overflow-hidden group hover:shadow-xl hover:shadow-black/30 transition-all duration-300 bg-zinc-900 border-zinc-800 text-white">
            <div className="relative h-52 overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            <CardHeader className="pb-2">
                <CardTitle className="text-xl text-white">{title}</CardTitle>
                <CardDescription className="line-clamp-2 text-zinc-400">
                    {description}
                </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                    {tags.map((tag, i) => (
                        <span
                            key={i}
                            className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-zinc-800 text-zinc-300"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="flex gap-3 pt-1">
                    {github && (
                        <a
                            href={github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-sm text-zinc-400 hover:text-white transition-colors"
                        >
                            <Github className="w-4 h-4" />
                            {codeLabel}
                        </a>
                    )}
                    {website && (
                        <a
                            href={website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-sm text-zinc-400 hover:text-white transition-colors"
                        >
                            <ExternalLink className="w-4 h-4" />
                            {websiteLabel}
                        </a>
                    )}
                </div>
            </CardContent>
        </Card>
    );
}

export function PortifolioCard() {
    const { t } = useLanguage();

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {t.portfolio.projects.map((project, index) => (
                <PortifolioCardItem
                    key={index}
                    title={project.title}
                    description={project.description}
                    image={projectImages[index]}
                    tags={project.tags}
                    github={projectLinks[index]?.github}
                    website={projectLinks[index]?.website}
                    codeLabel={t.portfolio.code}
                    websiteLabel={t.portfolio.website}
                />
            ))}
        </div>
    );
}
