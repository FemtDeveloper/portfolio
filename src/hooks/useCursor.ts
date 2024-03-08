// useOnMove.ts
import { gsap } from "gsap";
import { RefObject, useEffect, useState } from "react";

export const useOnMove = (
    ref: RefObject<HTMLDivElement>,
    targetId: string,
    dividedBy: number = 2
) => {
    return (e: MouseEvent) => {
        if (ref.current) {
            const { left, top, width, height } = ref.current.getBoundingClientRect();

            const halfW = width / dividedBy;
            const halfH = height / dividedBy;
            const mouseX = e.clientX - left;
            const mouseY = e.clientY - top;

            const x = gsap.utils.mapRange(0, width, -halfW, halfW, mouseX);
            const y = gsap.utils.mapRange(0, height, -halfH, halfH, mouseY);

            gsap.to(targetId, {
                x: x,
                y: y,
                duration: 0.6,
                ease: "power1",
                overwrite: "auto",
            });
        }
    };
};

// useOnLeave.ts

export const useOnLeave = (targetId: string) => {
    return () => {
        gsap.to(targetId, {
            x: 0,
            y: 0,
            ease: "power3",
            duration: 0.6,
            overwrite: "auto",
        });
    };
};

export const useMousePosition = (containerRef: RefObject<HTMLDivElement>) => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });



    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            if (containerRef.current) {
                const { left, top } = containerRef.current.getBoundingClientRect();
                setMousePosition({
                    x: e.clientX - left,
                    y: e.clientY - top
                });
            }
        };
        const container = containerRef.current;
        container?.addEventListener("mousemove", updateMousePosition);

        return () => {
            container?.removeEventListener("mousemove", updateMousePosition);
        };
    }, [containerRef]);

    return mousePosition;
};