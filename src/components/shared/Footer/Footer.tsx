"use client";

import { Copyright } from "lucide-react";
import StyledFooter from "./Footer.style";

function Footer() {
  return (
    <StyledFooter>
      <Copyright size={12} fontWeight={100} />
      <span>ROK TRANSYLVANIA DEVELOPMENT SRL</span>
    </StyledFooter>
  );
}

export default Footer;
