import { useEffect, useRef, useState } from "react";

/** Counts from 0 to `target` once the element enters the viewport, or immediately if `immediate` is true. */
export function useCounter(target, durationMs = 1800, immediate = false) {
  const ref = useRef(null);
  const [value, setValue] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (immediate) {
      if (started.current) return;
      started.current = true;
      const start = performance.now();
      const isFloat = !Number.isInteger(target);
      const tick = (now) => {
        const t = Math.min(1, (now - start) / durationMs);
        const isFloat = !Number.isInteger(target);
        const eased = 1 - Math.pow(1 - t, 3);
        const rawVal = target * eased;
        setValue(isFloat ? Number(rawVal.toFixed(1)) : Math.round(rawVal));
        if (t < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
      return;
    }

    const el = ref.current;
    if (!el || typeof window === "undefined") return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          const isFloat = !Number.isInteger(target);
          const tick = (now) => {
            const t = Math.min(1, (now - start) / durationMs);
            const eased = 1 - Math.pow(1 - t, 3);
            const rawVal = target * eased;
            setValue(isFloat ? Number(rawVal.toFixed(1)) : Math.round(rawVal));
            if (t < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [target, durationMs, immediate]);

  return { ref, value };
}
