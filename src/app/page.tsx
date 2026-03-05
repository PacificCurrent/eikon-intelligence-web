"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Globe, Zap, Cpu, BarChart3, Database, ArrowUpRight } from "lucide-react";
import dynamic from "next/dynamic";
import { Vortex } from "@/components/ui/vortex";
import { Sparkles } from "@/components/ui/sparkles";
import { OrbitingSkills } from "@/components/ui/orbiting-skills";
import { TextHoverEffect, FooterBackgroundGradient } from "@/components/ui/hover-footer";

// Load canvas component client-side only
const NeuralBackground = dynamic(() => import("@/components/ui/flow-field-background"), { ssr: false });

// ─── BAUHAUS CARD ────────────────────────────────────────────────────────────
const BauhausCard = ({ title, desc, icon: Icon }: { title: string; desc: string; icon: React.ElementType }) => (
  <motion.div
    whileHover={{ scale: 1.03, y: -4 }}
    transition={{ type: "spring", stiffness: 300 }}
    className="relative p-[1px] rounded-xl overflow-hidden group"
  >
    {/* Animated gradient border */}
    <div className="absolute inset-0 bg-gradient-to-br from-eikon-violet/60 via-eikon-fuchsia/40 to-eikon-violet/20 rounded-xl group-hover:from-eikon-violet group-hover:to-eikon-fuchsia transition-all duration-500" />
    <div className="relative bg-zinc-950/90 backdrop-blur-sm p-6 rounded-xl h-full flex flex-col justify-between border border-white/5 group-hover:bg-zinc-900/70 transition-colors duration-300">
      <div>
        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-eikon-violet/20 to-eikon-fuchsia/10 border border-eikon-violet/20 flex items-center justify-center mb-4 group-hover:border-eikon-violet/50 transition-colors">
          <Icon className="text-eikon-fuchsia w-6 h-6" />
        </div>
        <h3 className="text-lg font-bold text-white mb-2 uppercase tracking-tight">{title}</h3>
        <p className="text-zinc-400 text-sm leading-relaxed">{desc}</p>
      </div>
      <div className="mt-5 flex items-center justify-between text-xs font-mono text-eikon-violet/40 group-hover:text-eikon-violet transition-colors">
        <span>// SYSTEM_READY</span>
        <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
    </div>
  </motion.div>
);

// ─── PARTNER LOGOS (with sparkles) ──────────────────────────────────────────
const partners = ["Vercel", "OpenAI", "HubSpot", "Stripe", "Zapier", "Notion"];

// ─── MAIN PAGE ───────────────────────────────────────────────────────────────
export default function EikonHome() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth) - 0.5,
        y: (e.clientY / window.innerHeight) - 0.5,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="bg-obsidian text-white min-h-screen font-sans overflow-x-hidden selection:bg-eikon-fuchsia selection:text-white">

      {/* ── 1. HERO: Flow Field BG + Spotlight ─────────────────────────────── */}
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden border-b border-white/5">
        {/* Flow field background */}
        {mounted && <NeuralBackground color="#8B5CF6" particleCount={500} trailOpacity={0.06} />}

        {/* Logo background image — semi-transparent, centered */}
        <div className="absolute inset-0 z-[5] flex items-center justify-center pointer-events-none">
          <img
            src="/logo.jpeg"
            alt=""
            className="w-full h-full object-cover opacity-[0.12] mix-blend-luminosity scale-110"
            style={{ objectPosition: "center 30%" }}
          />
        </div>

        {/* Spotlight gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(139,92,246,0.2),transparent)] pointer-events-none z-10" />

        {/* Grid dots overlay */}
        <div className="absolute inset-0 opacity-10 z-10 pointer-events-none">
          <div className="h-full w-full bg-[radial-gradient(#8B5CF6_1px,transparent_1px)] [background-size:40px_40px]" />
        </div>

        {/* Hero text */}
        <div className="relative z-20 flex flex-col items-center gap-6 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-xs font-mono tracking-[0.4em] uppercase text-eikon-violet/70 mb-2"
          >
            — Intelligence, Engineered —
          </motion.div>
          <div className="flex flex-col md:flex-row gap-2 md:gap-8">
            <motion.h1
              animate={{ x: mousePos.x * -18, y: mousePos.y * -12 }}
              transition={{ type: "spring", stiffness: 60, damping: 20 }}
              className="text-7xl md:text-9xl font-black tracking-tighter text-white drop-shadow-2xl"
            >
              EIKON
            </motion.h1>
            <motion.h1
              animate={{ x: mousePos.x * 18, y: mousePos.y * 12 }}
              transition={{ type: "spring", stiffness: 60, damping: 20 }}
              className="text-7xl md:text-9xl font-black tracking-tighter bg-gradient-to-r from-eikon-violet via-eikon-fuchsia to-eikon-violet bg-clip-text text-transparent"
            >
              INTEL
            </motion.h1>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-zinc-400 tracking-[0.3em] uppercase text-sm mt-2 animate-pulse"
          >
            Initializing Growth Protocols
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="flex gap-4 mt-4"
          >
            <a
              href="mailto:contact@eikonintelligence.com"
              className="px-8 py-3 bg-gradient-to-r from-eikon-violet to-eikon-fuchsia text-white font-bold rounded-full hover:opacity-90 transition-opacity tracking-wide text-sm"
            >
              START A PROJECT
            </a>
            <a
              href="#services"
              className="px-8 py-3 border border-white/20 text-white font-bold rounded-full hover:border-eikon-violet/60 hover:bg-eikon-violet/10 transition-all text-sm"
            >
              VIEW SERVICES
            </a>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 z-20 flex flex-col items-center gap-1 text-zinc-600"
        >
          <div className="w-px h-8 bg-gradient-to-b from-transparent to-eikon-violet/50" />
          <span className="text-[10px] font-mono tracking-widest uppercase">Scroll</span>
        </motion.div>
      </section>

      {/* ── 2. SERVICES: Bauhaus Cards ─────────────────────────────────────── */}
      <section id="services" className="max-w-7xl mx-auto py-32 px-6">
        <div className="text-center mb-16">
          <p className="text-xs font-mono text-eikon-violet tracking-[0.3em] uppercase mb-3">// 001 SERVICES</p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter">Capabilities</h2>
          <p className="text-zinc-500 mt-3 max-w-lg mx-auto text-sm">Full-spectrum digital intelligence for businesses ready to scale beyond the ordinary.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <BauhausCard icon={Globe} title="Web Architecture" desc="High-performance Next.js ecosystems designed for elite conversion rates and zero-downtime scale." />
          <BauhausCard icon={Zap} title="Neural SEO" desc="Algorithmic optimization that places your intelligence at the center of search." />
          <BauhausCard icon={Cpu} title="Synthetic Agents" desc="Autonomous AI integration to handle customer logic and lead nurturing 24/7." />
          <BauhausCard icon={BarChart3} title="Growth Funnels" desc="Full-stack sales systems designed to turn cold traffic into recurring revenue." />
          <BauhausCard icon={Database} title="Scale Ops" desc="Enterprise-grade hosting and CRM maintenance for zero-downtime growth." />
          <div className="p-6 border border-dashed border-zinc-800 rounded-xl flex flex-col items-center justify-center gap-2 text-zinc-600 hover:border-eikon-violet/30 transition-colors">
            <span className="text-2xl">⟳</span>
            <span className="text-sm italic font-mono">More solutions loading...</span>
          </div>
        </div>
      </section>

      {/* ── 3. ORBITING SKILLS ─────────────────────────────────────────────── */}
      <section className="py-24 px-6 border-y border-white/5 bg-zinc-950/30">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16">
          <div className="max-w-md">
            <p className="text-xs font-mono text-eikon-violet tracking-[0.3em] uppercase mb-3">// 002 STACK</p>
            <h2 className="text-4xl font-black tracking-tighter mb-4">Our Technology Stack</h2>
            <p className="text-zinc-400 text-sm leading-relaxed">
              We deploy best-in-class tools across every layer of your digital infrastructure — from intelligent front-ends to automated back-end workflows.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-3">
              {["7+ Years Experience", "50+ Projects Delivered", "AI-First Approach", "Global Deployments"].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-zinc-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-eikon-violet flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>
          {mounted && <OrbitingSkills />}
        </div>
      </section>

      {/* ── 4. PARTNERS / SPARKLES SECTION ────────────────────────────────── */}
      <section className="relative py-28 px-6 overflow-hidden">
        {/* Sparkles background */}
        <div className="absolute inset-0 z-0">
          {mounted && (
            <Sparkles
              className="w-full h-full"
              color="#8B5CF6"
              density={200}
              opacity={0.4}
              size={1.5}
            />
          )}
        </div>
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <p className="text-xs font-mono text-eikon-violet tracking-[0.3em] uppercase mb-3">// 003 TRUSTED BY</p>
          <h2 className="text-4xl font-black tracking-tighter mb-12">Tools & Partners</h2>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {partners.map((p, i) => (
              <motion.div
                key={p}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05, borderColor: "rgba(139,92,246,0.5)" }}
                className="px-6 py-3 border border-white/10 rounded-full text-zinc-400 text-sm font-mono tracking-wider hover:text-white transition-colors bg-zinc-950/60 backdrop-blur-sm"
              >
                {p}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. CTA: VORTEX ─────────────────────────────────────────────────── */}
      <section className="relative h-[60vh] overflow-hidden">
        <Vortex
          containerClassName="h-full w-full"
          className="flex flex-col items-center justify-center h-full"
          baseHue={270}
          particleCount={500}
        >
          <div className="text-center px-4">
            <p className="text-xs font-mono text-eikon-violet/70 tracking-[0.3em] uppercase mb-4">// 004 READY</p>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-8">Ready to evolve?</h2>
            <a
              href="mailto:contact@eikonintelligence.com"
              className="px-10 py-4 bg-white text-black font-bold rounded-full hover:bg-eikon-violet hover:text-white transition-all duration-300 hover:scale-105 inline-block tracking-wide"
            >
              INITIALIZE PROJECT
            </a>
          </div>
        </Vortex>
      </section>

      {/* ── 6. FOOTER: Hover Effect ─────────────────────────────────────────── */}
      <footer className="relative py-16 border-t border-white/5 overflow-hidden">
        <FooterBackgroundGradient />
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          {/* Hover footer text */}
          <div className="h-24 mb-12 opacity-20 hover:opacity-40 transition-opacity duration-500">
            <TextHoverEffect text="EIKON INTEL" duration={0.3} />
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-t border-white/5 pt-8">
            <div className="text-xl font-black tracking-tighter">
              EIKON <span className="text-eikon-fuchsia">INTEL</span>
            </div>
            <div className="flex gap-8 text-zinc-400 text-sm font-mono">
              {["SERVICES", "PROCESS", "CONTACT", "PRIVACY"].map((link) => (
                <a key={link} href="#" className="hover:text-eikon-violet transition-colors hover:underline underline-offset-4">
                  {link}
                </a>
              ))}
            </div>
            <div className="text-zinc-600 text-[10px] uppercase tracking-widest">
              ©2025 Eikon Intelligence. All Rights Reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
