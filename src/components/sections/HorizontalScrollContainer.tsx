"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import React, { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

type Panel = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  imageUrl?: string;
  links: {
    demo?: string;
    github?: string;
  };
};

const panels: Panel[] = [
  {
    id: 1,
    title: "Project Alpha",
    description:
      "A revolutionary approach to building scalable applications. This project showcases modern architecture patterns and cutting-edge technologies.",
    tags: ["React", "TypeScript", "GSAP"],
    links: {
      demo: "https://demo.example.com",
      github: "https://github.com/example",
    },
  },
  {
    id: 2,
    title: "Digital Experience",
    description:
      "Immersive digital experiences powered by advanced animation techniques and interactive elements.",
    tags: ["Animation", "Interactive", "Web"],
    links: {
      demo: "https://demo.example.com",
    },
  },
  {
    id: 3,
    title: "Data Visualization",
    description:
      "Transform complex data into beautiful, intuitive visualizations that tell compelling stories.",
    tags: ["D3.js", "SVG", "Data"],
    links: {
      github: "https://github.com/example",
    },
  },
  {
    id: 4,
    title: "AI Integration",
    description:
      "Leveraging artificial intelligence to create smarter, more responsive user interfaces.",
    tags: ["AI", "Machine Learning", "UX"],
    links: {
      demo: "https://demo.example.com",
      github: "https://github.com/example",
    },
  },
];

const HorizontalScrollContainer: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const panelsRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    const container = containerRef.current;
    const panelElements = panelsRef.current.filter(
      (panel): panel is HTMLDivElement => panel !== null
    );

    if (!container || panelElements.length === 0) return;

    gsap.to(panelElements, {
      xPercent: -100 * (panelElements.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: container,
        pin: true,
        scrub: 1,
        snap: 1 / (panelElements.length - 1),
        end: () => "+=" + container.offsetWidth * (panelElements.length - 1),
        invalidateOnRefresh: true,
      },
    });
  }, []);

  return (
    <div
      className="relative w-full h-screen overflow-hidden bg-gray-900"
      ref={containerRef}
    >
      <div className="flex h-full">
        {panels.map((panel, index) => (
          <div
            key={panel.id}
            ref={(el) => (panelsRef.current[index] = el)}
            className="flex-shrink-0 w-screen h-full flex items-center justify-center p-8"
          >
            <div className="max-w-2xl w-full bg-gray-800 rounded-xl p-8 shadow-2xl transform transition-transform hover:scale-105">
              <div className="space-y-6">
                {/* Header */}
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold text-white">
                    {panel.title}
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {panel.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                {/* Description */}
                <p className="text-gray-300 text-lg leading-relaxed">
                  {panel.description}
                </p>
                {/* Links */}
                <div className="flex gap-4 pt-4">
                  {panel.links.demo && (
                    <a
                      href={panel.links.demo}
                      className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                  )}
                  {panel.links.github && (
                    <a
                      href={panel.links.github}
                      className="flex items-center gap-2 px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
                    >
                      <Github size={18} />
                      View Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 text-white flex items-center gap-2 animate-pulse">
        <span className="text-sm">Scroll to explore</span>
        <ArrowRight size={20} />
      </div>
    </div>
  );
};

export default HorizontalScrollContainer;
