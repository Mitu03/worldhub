import { useEffect, useRef } from "react";
import Typed from "typed.js";

function Para() {
  const textRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(textRef.current, {
      strings: ["Search for Economic...", "Search for Demographic...", "Search for Education...", "Search for Trade and Globalization..", "Search for Infrastructure.."],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return <span className="typed-text" ref={textRef}></span>;
}

export default Para;


