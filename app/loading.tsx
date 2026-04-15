"use client";
import Lottie from "lottie-react";
import fireAnimation from "@/assets/Fire.json";

export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4">
      <Lottie animationData={fireAnimation} loop className="w-48 h-48" />
      <p className="text-muted-foreground text-sm tracking-widest uppercase">Loading...</p>
    </div>
  );
}