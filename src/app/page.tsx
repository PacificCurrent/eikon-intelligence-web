"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Code, Cpu, Globe, Zap, BarChart3, Database } from 'lucide-react';

// --- COMPONENTS ---

const BauhausCard = ({ title, desc, icon: Icon }: any) => (
  <motion.div 
    whileHover={{ scale: 1.02 }}
    className="relative p-[1px] bg-gradient-to-br from-eikon-violet to-eikon-fuchsia rounded-lg overflow-hidden group"
  >
    <div className="bg-obsidian p-8 rounded-lg h-full flex flex-col justify-between border border-white/5 group-hover:bg-zinc-900/50 transition-colors">
      <div>
        <Icon className="text-eikon-fuchsia mb-4 w-10 h-10" />
        <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-tighter">{title}</h3>
        <p className="text-zinc-400 text-sm leading-relaxed">{desc}</p>
      </div>
      <div className="mt-6 flex items-center text-xs font-mono text-eikon-violet opacity-50 group-hover:opacity-100 transition-opacity">
        // SYSTEM_READY // 001
      </div>
    </div>
  </motion.div>
);

export default function EikonHome() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: (e.clientX / window.innerWidth) - 0.5, y: (e.clientY / window.innerHeight) - 0.5 });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="bg-obsidian text-white min-h-screen font-sans selection:bg-eikon-fuchsia selection:text-white">
      
      {/* 1. HERO SECTION (Serafim Splite Style) */}
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="h-full w-full bg-[radial-gradient(#8B5CF6_1px,transparent_1px)] [background-size:40px_40px]" />
        </div>
        
        <div className="flex flex-col md:flex-row gap-4 md:gap-20 z-10">
          <motion.h1 
            animate={{ x: mousePos.x * -20, y: mousePos.y * -20 }}
            className="text-7xl md:text-9xl font-black tracking-tighter text-white"
          >
            EIKON
          </motion.h1>
          <motion.h1 
            animate={{ x: mousePos.x * 20, y: mousePos.y * 20 }}
            className="text-7xl md:text-9xl font-black tracking-tighter bg-gradient-to-r from-eikon-violet to-eikon-fuchsia bg-clip-text text-transparent"
          >
            INTEL
          </motion.h1>
        </div>
        <p className="mt-8 text-zinc-400 tracking-[0.3em] uppercase text-sm animate-pulse">Initializing Growth Protocols</p>
      </section>

      {/* 2. SERVICES GRID (Bauhaus Cards) */}
      <section className="max-w-7xl mx-auto py-32 px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <BauhausCard icon={Globe} title="Web Architecture" desc="High-performance Next.js ecosystems designed for elite conversion rates." />
          <BauhausCard icon={Zap} title="Neural SEO" desc="Algorithmic optimization that places your intelligence at the center of search." />
          <BauhausCard icon={Cpu} title="Synthetic Agents" desc="Autonomous AI integration to handle customer logic and lead nurturing 24/7." />
          <BauhausCard icon={BarChart3} title="Growth Funnels" desc="Full-stack sales systems designed to turn cold traffic into recurring revenue." />
          <BauhausCard icon={Database} title="Scale Ops" desc="Enterprise-grade hosting and CRM maintenance for zero-downtime growth." />
          <div className="p-8 border border-dashed border-zinc-800 rounded-lg flex items-center justify-center italic text-zinc-600">
            More Intelligent Solutions Loading...
          </div>
        </div>
      </section>

      {/* 3. VORTEX CTA (Aceternity Vortex Style) */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black z-10" />
        {/* Simple Vortex Placeholder */}
        <div className="absolute w-[500px] h-[500px] border border-eikon-violet/20 rounded-full animate-spin-slow opacity-20 blur-xl" />
        
        <div className="relative z-20 text-center px-4">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">Ready to evolve?</h2>
          <a 
            href="mailto:contact@eikonintelligence.com"
            className="px-10 py-4 bg-white text-black font-bold rounded-full hover:bg-eikon-violet hover:text-white transition-all duration-300 transform hover:scale-110 inline-block"
          >
            INITIALIZE PROJECT
          </a>
        </div>
      </section>

      {/* 4. FOOTER (Hover Footer) */}
      <footer className="py-20 border-t border-white/5 bg-black/50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-xl font-bold tracking-tighter">EIKON <span className="text-eikon-fuchsia">INTEL</span></div>
          <div className="flex gap-10 text-zinc-400 text-sm font-mono">
            <a href="#" className="hover:text-eikon-violet transition-colors underline-offset-8 hover:underline">SERVICES</a>
            <a href="#" className="hover:text-eikon-violet transition-colors underline-offset-8 hover:underline">PROCESS</a>
            <a href="#" className="hover:text-eikon-violet transition-colors underline-offset-8 hover:underline">PRIVACY</a>
          </div>
          <div className="text-zinc-600 text-[10px] uppercase tracking-widest">©2024 Eikon Intelligence. All Rights Reserved.</div>
        </div>
      </footer>
    </div>
  );
}
