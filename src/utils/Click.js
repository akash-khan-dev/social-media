import { useEffect } from "react";

export default function OutSideClick(ref, func) {
  useEffect(() => {
    let click = (e) => {
      if (!ref.current || ref.current.contains(e.target)) {
        return false;
      }
      func();
    };

    document.addEventListener("mousedown", click);
    document.addEventListener("touchstart", click);
    return () => {
      document.removeEventListener("mousedown", click);
      document.removeEventListener("touchstart", click);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref, func]);
}
