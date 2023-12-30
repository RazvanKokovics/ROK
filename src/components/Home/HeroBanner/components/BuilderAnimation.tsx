"use client";

import "@dotlottie/player-component";

export default function BuilderAnimation() {
  return (
    <dotlottie-player
      src="/animations/builder.lottie"
      autoplay
      loop
      style={{ height: "100%", width: "auto" }}
    />
  );
}
