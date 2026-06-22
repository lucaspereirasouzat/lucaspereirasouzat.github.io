"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import {
  Code2,
  Database,
  Leaf,
  Zap,
  FileCode,
  Container,
  ExternalLink,
  Star,
  GitBranch,
  Smartphone,
  Bot,
  Wrench,
  Search,
  Shield,
  Network,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";

const technologies = [
  {
    name: "React",
    description:
      "Uma biblioteca JavaScript para construir interfaces de usuário interativas e componentes reutilizáveis.",
    category: "Frontend",
    icon: Code2,
    color: "bg-blue-500",
    glowColor: "shadow-blue-500/20",
    features: ["Virtual DOM", "Component-Based", "JSX", "Hooks"],
    popularity: "★★★★★",
  },
  {
    name: "PostgreSQL",
    description:
      "Sistema de gerenciamento de banco de dados relacional avançado, open-source e altamente extensível.",
    category: "Database",
    icon: Database,
    color: "bg-blue-600",
    glowColor: "shadow-blue-600/20",
    features: ["ACID Compliant", "JSON Support", "Extensions", "Scalable"],
    popularity: "★★★★★",
  },
  {
    name: "MongoDB",
    description:
      "Banco de dados NoSQL orientado a documentos, flexível e escalável para aplicações modernas.",
    category: "Database",
    icon: Leaf,
    color: "bg-green-600",
    glowColor: "shadow-green-600/20",
    features: [
      "Document-Based",
      "Flexible Schema",
      "Horizontal Scaling",
      "Aggregation",
    ],
    popularity: "★★★★☆",
  },
  {
    name: "Apache Kafka",
    description:
      "Plataforma de streaming distribuída para construir pipelines de dados em tempo real e aplicações de streaming.",
    category: "Messaging",
    icon: Zap,
    color: "bg-orange-500",
    glowColor: "shadow-orange-500/20",
    features: ["High Throughput", "Fault Tolerant", "Real-time", "Distributed"],
    popularity: "★★★★☆",
  },
  {
    name: "TypeScript",
    description:
      "Superset do JavaScript que adiciona tipagem estática, melhorando a produtividade e qualidade do código.",
    category: "Language",
    icon: FileCode,
    color: "bg-blue-700",
    glowColor: "shadow-blue-700/20",
    features: [
      "Static Typing",
      "IntelliSense",
      "Compile-time Errors",
      "Modern JS",
    ],
    popularity: "★★★★★",
  },
  {
    name: "Kubernetes",
    description:
      "Sistema de orquestração de containers que automatiza deployment, scaling e gerenciamento de aplicações.",
    category: "DevOps",
    icon: Container,
    color: "bg-purple-600",
    glowColor: "shadow-purple-600/20",
    features: [
      "Container Orchestration",
      "Auto-scaling",
      "Service Discovery",
      "Rolling Updates",
    ],
    popularity: "★★★★☆",
  },
  {
    name: "Next.js",
    description:
      "Framework React full-stack com renderização server-side, roteamento automático e otimizações built-in.",
    category: "Framework",
    icon: Code2,
    color: "bg-black",
    glowColor: "shadow-gray-500/20",
    features: [
      "SSR/SSG",
      "API Routes",
      "File-based Routing",
      "Image Optimization",
    ],
    popularity: "★★★★★",
  },
  {
    name: "Redis",
    description:
      "Estrutura de dados em memória ultra-rápida, usada como cache, broker de mensagens e banco de dados.",
    category: "Database",
    icon: Database,
    color: "bg-red-600",
    glowColor: "shadow-red-600/20",
    features: ["In-Memory", "Key-Value Store", "Pub/Sub", "High Performance"],
    popularity: "★★★★★",
  },
  {
    name: "Express.js",
    description:
      "Framework web minimalista e flexível para Node.js, ideal para construir APIs e aplicações web.",
    category: "Backend",
    icon: Zap,
    color: "bg-gray-700",
    glowColor: "shadow-gray-700/20",
    features: ["Lightweight", "Middleware", "RESTful APIs", "Fast Development"],
    popularity: "★★★★★",
  },
  {
    name: "RabbitMQ",
    description:
      "Broker de mensagens robusto que implementa AMQP, ideal para comunicação assíncrona entre serviços.",
    category: "Messaging",
    icon: Zap,
    color: "bg-orange-600",
    glowColor: "shadow-orange-600/20",
    features: [
      "Message Queuing",
      "Reliable Delivery",
      "Clustering",
      "Management UI",
    ],
    popularity: "★★★★☆",
  },
  {
    name: "Jest",
    description:
      "Framework de testes JavaScript com foco em simplicidade, oferecendo mocking, coverage e snapshots.",
    category: "Testing",
    icon: FileCode,
    color: "bg-green-700",
    glowColor: "shadow-green-700/20",
    features: ["Zero Config", "Snapshot Testing", "Mocking", "Code Coverage"],
    popularity: "★★★★★",
  },
  {
    name: "Lodash",
    description:
      "Biblioteca utilitária JavaScript que fornece funções para manipulação de arrays, objetos e strings.",
    category: "Library",
    icon: Code2,
    color: "bg-blue-800",
    glowColor: "shadow-blue-800/20",
    features: [
      "Utility Functions",
      "Performance",
      "Modular",
      "Functional Programming",
    ],
    popularity: "★★★★☆",
  },
  {
    name: "Axios",
    description:
      "Cliente HTTP baseado em Promises para Node.js e navegadores, com interceptors e transformações.",
    category: "Library",
    icon: ExternalLink,
    color: "bg-purple-700",
    glowColor: "shadow-purple-700/20",
    features: [
      "Promise-based",
      "Request/Response Interceptors",
      "Automatic JSON",
      "Request Cancellation",
    ],
    popularity: "★★★★★",
  },
  {
    name: "Socket.io",
    description:
      "Biblioteca para comunicação em tempo real entre cliente e servidor usando WebSockets e fallbacks.",
    category: "Library",
    icon: Zap,
    color: "bg-indigo-600",
    glowColor: "shadow-indigo-600/20",
    features: ["Real-time", "WebSocket", "Room Support", "Auto Reconnection"],
    popularity: "★★★★☆",
  },
  {
    name: "Docker",
    description:
      "Plataforma de containerização que permite empacotar aplicações e suas dependências em containers portáteis.",
    category: "DevOps",
    icon: Container,
    color: "bg-blue-500",
    glowColor: "shadow-blue-500/20",
    features: [
      "Containerization",
      "Portability",
      "Microservices",
      "CI/CD Integration",
    ],
    popularity: "★★★★★",
  },
  {
    name: "React Native",
    description:
      "Framework para desenvolvimento mobile multiplataforma usando React e JavaScript nativo.",
    category: "Mobile",
    icon: Smartphone,
    color: "bg-cyan-600",
    glowColor: "shadow-cyan-600/20",
    features: [
      "Cross-platform",
      "Native Performance",
      "Hot Reload",
      "Code Sharing",
    ],
    popularity: "★★★★☆",
  },
  {
    name: "Git",
    description:
      "Sistema de controle de versão distribuído para rastrear mudanças no código e colaboração em equipe.",
    category: "DevOps",
    icon: GitBranch,
    color: "bg-orange-700",
    glowColor: "shadow-orange-700/20",
    features: ["Version Control", "Branching", "Distributed", "Collaboration"],
    popularity: "★★★★★",
  },
  {
    name: "gRPC",
    description:
      "Framework RPC de alta performance que usa Protocol Buffers para comunicação entre serviços.",
    category: "Backend",
    icon: Network,
    color: "bg-teal-600",
    glowColor: "shadow-teal-600/20",
    features: [
      "High Performance",
      "Protocol Buffers",
      "Streaming",
      "Language Agnostic",
    ],
    popularity: "★★★★☆",
  },
  {
    name: "Artificial Intelligence",
    description:
      "Tecnologias de IA incluindo Machine Learning, Deep Learning e processamento de linguagem natural.",
    category: "AI/ML",
    icon: Bot,
    color: "bg-violet-600",
    glowColor: "shadow-violet-600/20",
    features: ["Machine Learning", "Neural Networks", "NLP", "Computer Vision"],
    popularity: "★★★★★",
  },
  {
    name: "Jenkins",
    description:
      "Servidor de automação open-source para CI/CD, facilitando integração e deployment contínuos.",
    category: "DevOps",
    icon: Wrench,
    color: "bg-red-700",
    glowColor: "shadow-red-700/20",
    features: ["CI/CD", "Pipeline as Code", "Plugin Ecosystem", "Automation"],
    popularity: "★★★★☆",
  },
  {
    name: "Elasticsearch",
    description:
      "Motor de busca e análise distribuído, ideal para busca em tempo real e análise de big data.",
    category: "Database",
    icon: Search,
    color: "bg-yellow-600",
    glowColor: "shadow-yellow-600/20",
    features: [
      "Full-text Search",
      "Real-time Analytics",
      "Distributed",
      "RESTful API",
    ],
    popularity: "★★★★☆",
  },
  {
    name: "Keycloak",
    description:
      "Solução de gerenciamento de identidade e acesso open-source com SSO e autenticação robusta.",
    category: "Security",
    icon: Shield,
    color: "bg-emerald-700",
    glowColor: "shadow-emerald-700/20",
    features: ["SSO", "Identity Management", "OAuth 2.0", "SAML"],
    popularity: "★★★★☆",
  },
  {
    name: "Kong",
    description:
      "API Gateway de alta performance para gerenciar, monitorar e proteger APIs e microserviços.",
    category: "Backend",
    icon: Network,
    color: "bg-slate-600",
    glowColor: "shadow-slate-600/20",
    features: [
      "API Gateway",
      "Load Balancing",
      "Rate Limiting",
      "Plugin Architecture",
    ],
    popularity: "★★★★☆",
  },
];

const categoryColors = {
  Frontend: "bg-blue-950 text-blue-200 border-blue-800",
  Framework: "bg-slate-950 text-slate-200 border-slate-800",
  Backend: "bg-emerald-950 text-emerald-200 border-emerald-800",
  Database: "bg-green-950 text-green-200 border-green-800",
  Messaging: "bg-orange-950 text-orange-200 border-orange-800",
  Language: "bg-purple-950 text-purple-200 border-purple-800",
  DevOps: "bg-gray-900 text-gray-200 border-gray-700",
  Testing: "bg-red-950 text-red-200 border-red-800",
  Library: "bg-cyan-950 text-cyan-200 border-cyan-800",
  Mobile: "bg-teal-950 text-teal-200 border-teal-800",
  "AI/ML": "bg-violet-950 text-violet-200 border-violet-800",
  Security: "bg-emerald-950 text-emerald-200 border-emerald-800",
};

export default function TechCards() {
  const [isExpanded, setIsExpanded] = useState(false);
  const { t } = useLanguage();
  const INITIAL_DISPLAY_COUNT = 6;

  const displayedTechnologies = isExpanded
    ? technologies
    : technologies.slice(0, INITIAL_DISPLAY_COUNT);

  const remainingCount = technologies.length - INITIAL_DISPLAY_COUNT;
  return (
    <div className="min-h-screen bg-black ">
      <div className="max-w-[80%] mx-auto mv-16">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent mb-6">
            {t.technologies.heading}
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            {t.technologies.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {displayedTechnologies.map((tech, index) => {
              const IconComponent = tech.icon;
              return (
                <motion.div
                  key={tech.name}
                  layout
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.9 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.05,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                >
                  <Card
                    className={`group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 bg-gradient-to-br from-gray-950 to-gray-900 border border-gray-700 shadow-xl hover:${tech.glowColor} hover:shadow-2xl`}
                  >
                    <CardHeader className="pb-4 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                      <div className="flex items-center justify-between mb-3 relative z-10">
                        <div
                          className={`p-3 rounded-xl ${tech.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300 group-hover:rotate-3`}
                        >
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <Badge
                          variant="secondary"
                          className={`${categoryColors[tech.category as keyof typeof categoryColors]} border backdrop-blur-sm group-hover:scale-105 transition-transform duration-300`}
                        >
                          {tech.category}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                        {tech.name}
                      </CardTitle>
                      <div className="flex items-center gap-2">
                        <Star className="w-4 h-4 text-yellow-500 group-hover:text-yellow-400 transition-colors duration-300" />
                        <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                          {tech.popularity}
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent className="relative">
                      <CardDescription className="text-gray-400 mb-4 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                        {tech.description}
                      </CardDescription>

                      <div className="space-y-3">
                        <h4 className="font-semibold text-white text-sm group-hover:text-gray-100 transition-colors duration-300">
                          {t.technologies.featuresLabel}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {tech.features.map((feature, featureIndex) => (
                            <Badge
                              key={featureIndex}
                              variant="outline"
                              className="text-xs bg-gray-800 hover:bg-gray-700 text-gray-300 border-gray-600 group-hover:border-gray-500 transition-all duration-300 hover:scale-105"
                              style={{
                                animationDelay: `${featureIndex * 100}ms`,
                              }}
                            >
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Botão de Expansão */}
        <motion.div
          className="flex justify-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.4 }}
        >
          <motion.button
            onClick={() => setIsExpanded(!isExpanded)}
            className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-500/20 hover:border-blue-400/40"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
            <div className="relative flex items-center gap-3">
              <motion.div
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isExpanded ? (
                  <ChevronUp className="w-5 h-5" />
                ) : (
                  <ChevronDown className="w-5 h-5" />
                )}
              </motion.div>
              <span>
                {isExpanded
                  ? t.technologies.showLess
                  : t.technologies.showMore.replace("{count}", String(remainingCount))}
              </span>
            </div>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
