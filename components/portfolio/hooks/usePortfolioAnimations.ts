"use client";

import { useLayoutEffect, type RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function usePortfolioAnimations(
  rootRef: RefObject<HTMLDivElement | null>,
  mainRef: RefObject<HTMLElement | null>,
  heroRef: RefObject<HTMLElement | null>,
) {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const root = rootRef.current;
    const main = mainRef.current;
    if (!root || !main) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const ctx = gsap.context(() => {
      if (reduceMotion) {
        gsap.set(".hero-headline-stack", { opacity: 1 });
        gsap.set(".hero-bg-orb", { opacity: 1, scale: 1 });
        gsap.set(".hero-portrait-reveal", { opacity: 1, scale: 1, y: 0 });
        gsap.set(".hero-bg-scroll-zoom, .hero-portrait-scroll-zoom", {
          scale: 1,
        });
        gsap.set(
          ".hero-side-labels, .hero-bottom-stack, .hero-stage-inner",
          { y: 0, opacity: 1, visibility: "visible" },
        );
        gsap.set(".site-header", { y: 0, opacity: 1 });
        gsap.set(".nav-link", { opacity: 1, y: 0 });
        gsap.set(".brand-marquee-wrap", {
          opacity: 1,
          y: 0,
        });
        gsap.set(
          ".work-section-head, .work-section-title, .work-section-lede, .projects-section-head, .projects-section-grid, .services-section-head, .services-section-body, .testimonials-section-head, .testimonials-section-body",
          { opacity: 1, y: 0 },
        );
        return;
      }

      gsap.set(".hero-headline-stack", { opacity: 0 });
      gsap.set(".hero-bg-orb", { opacity: 0, scale: 0.6 });
      gsap.set(".hero-portrait-reveal", {
        opacity: 0,
        scale: 0.88,
        y: 36,
        transformOrigin: "bottom right",
      });
      gsap.set(".hero-bg-scroll-zoom, .hero-portrait-scroll-zoom", {
        scale: 1,
      });
      gsap.set(
        ".hero-side-labels, .hero-bottom-stack, .hero-stage-inner",
        { y: 0 },
      );
      gsap.set(".site-header", { y: -16, opacity: 0 });
      gsap.set(".nav-link", { opacity: 0, y: -6 });
      gsap.set(".brand-marquee-wrap", { opacity: 0, y: 22 });

      const introTl = gsap.timeline({
        defaults: { ease: "power3.out" },
        delay: 0.12,
      });

      introTl
        .to(".site-header", { y: 0, opacity: 1, duration: 0.55 }, 0)
        .to(
          ".nav-link",
          { opacity: 1, y: 0, duration: 0.4, stagger: 0.06 },
          0.08,
        )
        .to(
          ".hero-bg-orb",
          {
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: "power2.out",
            stagger: 0.12,
          },
          0,
        )
        .to(
          ".hero-portrait-reveal",
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.95,
            ease: "power2.out",
          },
          0.12,
        )
        .to(
          ".hero-headline-stack",
          { opacity: 1, duration: 0.7, ease: "power2.out" },
          0.22,
        );

      gsap.set(".work-section-head", { opacity: 0, y: 28 });
      gsap.set(".work-section-title", { opacity: 0, y: 40 });
      gsap.set(".work-section-lede", { opacity: 0, y: 28 });
      gsap.set(".projects-section-head", { opacity: 0, y: 28 });
      gsap.set(".projects-section-grid", { opacity: 0, y: 36 });
      gsap.set(".services-section-head", { opacity: 0, y: 28 });
      gsap.set(".services-section-body", { opacity: 0, y: 36 });
      gsap.set(".testimonials-section-head", { opacity: 0, y: 28 });
      gsap.set(".testimonials-section-body", { opacity: 0, y: 36 });

      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: main,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.65,
          invalidateOnRefresh: true,
        },
      });

      const heroStage = heroRef.current;
      const heroInner = heroStage?.querySelector(".hero-stage-inner");
      const heroBg = heroStage?.querySelector(".hero-bg-wrap");
      if (heroInner) {
        scrollTl.fromTo(
          heroInner,
          { opacity: 1 },
          {
            opacity: 0.72,
            ease: "none",
            duration: 0.35,
          },
          0,
        );
      }
      if (heroBg) {
        scrollTl.fromTo(
          heroBg,
          { opacity: 1 },
          { opacity: 0.35, ease: "none", duration: 0.35 },
          0,
        );
      }

      const heroBgScrollZoom = heroStage?.querySelector(".hero-bg-scroll-zoom");
      const heroPortraitScrollZoom = heroStage?.querySelector(
        ".hero-portrait-scroll-zoom",
      );
      if (heroStage && heroBgScrollZoom && heroPortraitScrollZoom) {
        const heroScrollTl = gsap.timeline({
          scrollTrigger: {
            trigger: heroStage,
            start: "top top",
            end: "bottom top",
            scrub: 0.65,
            invalidateOnRefresh: true,
          },
        });
        const heroScrollEase = { ease: "none", duration: 1 } as const;
        heroScrollTl.fromTo(
          heroBgScrollZoom,
          { scale: 1, transformOrigin: "50% 50%" },
          { scale: 1.14, ...heroScrollEase },
        );
        heroScrollTl.fromTo(
          heroPortraitScrollZoom,
          {
            scale: 1,
            transformOrigin: "100% 100%",
          },
          { scale: 1.02, ...heroScrollEase },
          0,
        );
      }

      scrollTl.to(
        ".brand-marquee-wrap",
        { opacity: 1, y: 0, duration: 0.12, ease: "power2.out" },
        0.08,
      );

      /* Work: page scrub ≥1365px; choti screen = section enter par reveal */
      ScrollTrigger.matchMedia({
        "(min-width: 1365px)": () => {
          scrollTl.to(
            ".work-section-head",
            { opacity: 1, y: 0, duration: 0.11, ease: "power2.out" },
            0.16,
          );
          scrollTl.to(
            ".work-section-title",
            { opacity: 1, y: 0, duration: 0.14, ease: "power2.out" },
            0.2,
          );
          scrollTl.to(
            ".work-section-lede",
            { opacity: 1, y: 0, duration: 0.12, ease: "power2.out" },
            0.24,
          );
        },
        "(max-width: 1364px)": () => {
          let revealed = false;
          const revealWork = () => {
            if (revealed) return;
            revealed = true;
            gsap
              .timeline({ defaults: { ease: "power2.out" } })
              .to(".work-section-head", {
                opacity: 1,
                y: 0,
                duration: 0.42,
              })
              .to(
                ".work-section-title",
                { opacity: 1, y: 0, duration: 0.48 },
                "-=0.22",
              )
              .to(
                ".work-section-lede",
                { opacity: 1, y: 0, duration: 0.42 },
                "-=0.28",
              );
          };

          const workSt = ScrollTrigger.create({
            trigger: "#work",
            start: "top 88%",
            once: true,
            invalidateOnRefresh: true,
            onEnter: revealWork,
            onEnterBack: revealWork,
          });

          const revealIfPastTrigger = () => {
            if (revealed || workSt.scroll() < workSt.start) return;
            revealWork();
          };

          requestAnimationFrame(revealIfPastTrigger);
          ScrollTrigger.addEventListener("refresh", revealIfPastTrigger);

          return () => {
            ScrollTrigger.removeEventListener("refresh", revealIfPastTrigger);
          };
        },
      });

      scrollTl.to(
        ".projects-section-head",
        { opacity: 1, y: 0, duration: 0.12, ease: "power2.out" },
        0.3,
      );
      scrollTl.to(
        ".projects-section-grid",
        { opacity: 1, y: 0, duration: 0.14, ease: "power2.out" },
        0.34,
      );

      scrollTl.to(
        ".services-section-head",
        { opacity: 1, y: 0, duration: 0.12, ease: "power2.out" },
        0.42,
      );
      scrollTl.to(
        ".services-section-body",
        { opacity: 1, y: 0, duration: 0.14, ease: "power2.out" },
        0.48,
      );

      scrollTl.to(
        ".testimonials-section-head",
        { opacity: 1, y: 0, duration: 0.12, ease: "power2.out" },
        0.56,
      );
      scrollTl.to(
        ".testimonials-section-body",
        { opacity: 1, y: 0, duration: 0.14, ease: "power2.out" },
        0.62,
      );
    }, root);

    return () => {
      ctx.revert();
    };
  }, [rootRef, mainRef, heroRef]);
}
