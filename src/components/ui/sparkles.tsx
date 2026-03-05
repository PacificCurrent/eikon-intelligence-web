"use client";
import { useEffect, useId, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export function Sparkles({
    className,
    size = 1,
    minSize = null,
    density = 300,
    speed = 0.5,
    opacity = 0.6,
    opacitySpeed = 2,
    minOpacity = null,
    color = "#8B5CF6",
    background = "transparent",
    options = {},
}: {
    className?: string;
    size?: number;
    minSize?: number | null;
    density?: number;
    speed?: number;
    minSpeed?: number | null;
    opacity?: number;
    opacitySpeed?: number;
    minOpacity?: number | null;
    color?: string;
    background?: string;
    options?: object;
}) {
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => setIsReady(true));
    }, []);

    const id = useId();

    const defaultOptions = {
        background: { color: { value: background } },
        fullScreen: { enable: false, zIndex: 1 },
        fpsLimit: 120,
        particles: {
            color: { value: color },
            move: {
                enable: true,
                direction: "none" as const,
                speed: { min: (minSize ?? size) / 10, max: speed },
                straight: false,
            },
            number: { value: density },
            opacity: {
                value: { min: minOpacity ?? opacity / 10, max: opacity },
                animation: { enable: true, sync: false, speed: opacitySpeed },
            },
            size: { value: { min: minSize ?? size / 2.5, max: size } },
        },
        detectRetina: true,
    };

    return isReady ? (
        <Particles id={id} options={{ ...defaultOptions, ...options }} className={className} />
    ) : null;
}
