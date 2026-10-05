import { PropsWithChildren, useEffect, useRef, useState } from "react";

/** Renders children only when the placeholder gets near the viewport. */
const LazyMount = ({
  children,
  minHeight = "100vh",
}: PropsWithChildren<{ minHeight?: string }>) => {
  const ref = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || show) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          io.disconnect();
        }
      },
      { rootMargin: "600px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [show]);

  return <div ref={ref} style={show ? undefined : { minHeight }}>{show && children}</div>;
};

export default LazyMount;
