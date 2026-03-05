"use client";
import React, { useEffect, useRef } from "react";

interface Skill {
    label: string;
    icon: React.ReactNode;
    color?: string;
}

interface OrbitingSkillsProps {
    skills?: Skill[];
    centerContent?: React.ReactNode;
    radius?: number;
    speed?: number;
}

const defaultSkills: Skill[] = [
    { label: "Next.js", icon: "▲", color: "#fff" },
    { label: "AI/ML", icon: "🧠", color: "#8B5CF6" },
    { label: "SEO", icon: "🔍", color: "#D946EF" },
    { label: "CRM", icon: "🗂", color: "#8B5CF6" },
    { label: "Automation", icon: "⚡", color: "#D946EF" },
    { label: "Analytics", icon: "📊", color: "#8B5CF6" },
    { label: "Ads", icon: "📣", color: "#D946EF" },
    { label: "Cloud", icon: "☁️", color: "#8B5CF6" },
];

export function OrbitingSkills({
    skills = defaultSkills,
    centerContent,
    radius = 140,
    speed = 0.3,
}: OrbitingSkillsProps) {
    const animRef = useRef<number>(0);
    const angleRef = useRef<number>(0);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let lastTime = 0;
        const animate = (time: number) => {
            const delta = (time - lastTime) / 1000;
            lastTime = time;
            angleRef.current += speed * delta;

            const container = containerRef.current;
            if (container) {
                const items = container.querySelectorAll<HTMLElement>(".orbit-item");
                const count = items.length;
                items.forEach((el, i) => {
                    const angle = angleRef.current + (i / count) * Math.PI * 2;
                    const x = Math.cos(angle) * radius;
                    const y = Math.sin(angle) * radius;
                    el.style.transform = `translate(${x}px, ${y}px)`;
                });
            }
            animRef.current = requestAnimationFrame(animate);
        };
        animRef.current = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animRef.current);
    }, [radius, speed]);

    return (
        <div
            ref={containerRef}
            className="relative flex items-center justify-center"
            style={{ width: radius * 2 + 80, height: radius * 2 + 80 }}
        >
            {/* Orbit ring */}
            <div
                className="absolute rounded-full border border-dashed border-eikon-violet/20"
                style={{ width: radius * 2, height: radius * 2 }}
            />
            {/* Center */}
            <div className="absolute z-10 flex flex-col items-center justify-center w-24 h-24 rounded-full border border-eikon-violet/40 bg-obsidian shadow-lg shadow-eikon-violet/20">
                {centerContent ?? (
                    <span className="text-xs font-mono text-eikon-violet text-center leading-tight">EIKON<br />STACK</span>
                )}
            </div>
            {/* Orbiting items */}
            {skills.map((skill, i) => (
                <div
                    key={i}
                    className="orbit-item absolute flex flex-col items-center gap-1 transition-none"
                    style={{ top: "50%", left: "50%", marginTop: -24, marginLeft: -24 }}
                >
                    <div
                        className="w-12 h-12 rounded-xl border border-white/10 bg-zinc-900/80 flex items-center justify-center text-lg shadow-md backdrop-blur-sm hover:border-eikon-violet/60 transition-colors"
                        title={skill.label}
                    >
                        <span>{skill.icon}</span>
                    </div>
                    <span className="text-[9px] text-zinc-500 font-mono tracking-wider uppercase">{skill.label}</span>
                </div>
            ))}
        </div>
    );
}
