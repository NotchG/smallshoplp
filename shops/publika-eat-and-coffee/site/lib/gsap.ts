"use client";
// Register GSAP plugins once. Import gsap, ScrollTrigger and useGSAP from here, not from the packages.
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export { gsap, ScrollTrigger, useGSAP };
