import React, {
    useRef,
    useState,
    useLayoutEffect,
    useCallback,
    useEffect,
} from "react";
import ResizeObserver from "resize-observer-polyfill";
import {
    motion,
    useScroll,
    useTransform,
    useSpring,
    useMotionValue,
} from "framer-motion";

import { useScrollPercentage } from "react-scroll-percentage";

const SmoothScroll = ({ children }) => {
    const scrollRef = useRef(null);
    const ghostRef = useRef(null);
    const [scrollRange, setScrollRange] = useState(0);
    const [viewportW, setViewportW] = useState(0);

    const scrollPerc = useMotionValue(0);

    useLayoutEffect(() => {
        scrollRef && setScrollRange(scrollRef.current.scrollWidth);
    }, [scrollRef]);

    const onResize = useCallback((entries) => {
        for (let entry of entries) {
            setViewportW(entry.contentRect.width);
        }
    }, []);

    useLayoutEffect(() => {
        const resizeObserver = new ResizeObserver((entries) =>
            onResize(entries)
        );
        resizeObserver.observe(ghostRef.current);
        return () => resizeObserver.disconnect();
    }, [onResize]);

    const [containerRef, percentage] = useScrollPercentage({
        /* Optional options */
        threshold: 0.1,
    });

    useEffect(() => {
        scrollPerc.set(percentage);
    }, [percentage]);

    const { scrollYProgress } = useScroll();
    const transform = useTransform(
        scrollYProgress,
        [0, 1],
        [0, -scrollRange + viewportW]
    );
    const physics = { damping: 30, mass: 0.27, stiffness: 55 };
    const spring = useSpring(transform, physics);

    return (
        <div ref={containerRef}>
            <div className="scroll-container">
                {percentage}
                <motion.section
                    ref={scrollRef}
                    style={{ x: transform }}
                    className="thumbnails-container"
                >
                    {children}
                </motion.section>
            </div>
            <div
                ref={ghostRef}
                style={{ height: scrollRange }}
                className="ghost"
            />
        </div>
    );
};

export default SmoothScroll;
