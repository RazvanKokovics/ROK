"use client";

import Image from "next/image";
import StyledHeader from "./Header.style";
import { SunMoon } from "lucide-react";
import { useEffect, useState } from "react";

function Header() {
  const [isLightTheme, setIsLightTheme] = useState<Boolean>(false);

  useEffect(() => {
    document.body.setAttribute("theme", isLightTheme ? "light" : "dark");
  }, [isLightTheme]);

  return (
    <StyledHeader>
      <Image
        src={isLightTheme ? "/logo_dark.png" : "/logo_light.png"}
        width="120"
        height="40"
        alt="logo"
      />
      <SunMoon size={32} onClick={() => setIsLightTheme(!isLightTheme)} />
    </StyledHeader>
  );
}

export default Header;
