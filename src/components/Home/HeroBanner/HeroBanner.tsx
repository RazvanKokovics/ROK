"use client";

import dynamic from "next/dynamic";
import StyledHeroBanner from "./StyledHeroBanner.style";
import Button from "@/components/shared/Button";
import { Brain } from "lucide-react";

const BuilderAnimation = dynamic(
  () => import("@/components/Home/HeroBanner/components/BuilderAnimation"),
  { ssr: false }
);

export default function HeroBanner() {
  return (
    <StyledHeroBanner>
      <h1 className="heading">Crafting Ideas into Quality Software.</h1>
      <h4 className="subheading">
        Elegance in Every Byte: Precision, Passion, and Cutting-Edge Code.
      </h4>
      <Button className="find-more">
        <Brain size={16} />
        <span>Get Details</span>
      </Button>
      <div className="animation">
        <BuilderAnimation />
      </div>
    </StyledHeroBanner>
  );
}
