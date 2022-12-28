import { throttle } from "@/utils";
import { useEffect, useState } from "react";

// 页面滚动距离Hook
export function useScroll() {
  const [scrollX, setScrollX] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    function handleScroll() {
      setScrollX(window.scrollX);
      setScrollY(window.scrollY);
    }
    const throttleFunc = throttle(handleScroll, 250);
    window.addEventListener("scroll", throttleFunc);
    return () => window.removeEventListener("scroll", throttleFunc);
  }, []);
  return [scrollX, scrollY];
}
