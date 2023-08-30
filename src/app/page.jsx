"use client";
import localFont from "next/font/local";
import React, { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

const maziusReview = localFont({
  src: [
    {
      path: "../../public/fonts/maziusreview-regular.woff2",
      style: "normal",
    },
    {
      path: "../../public/fonts/maziusreview-extraitalic.woff2",
      style: "italic",
    },
  ],
});

export default function Home() {
  const heroRef = useRef(null);
  const arrowRef = useRef(null);

  useEffect(() => {
    const hero = heroRef.current;
    const arrow = arrowRef.current;
    const lenis = new Lenis();

    // lenis smooth scroll
    lenis.on("scroll", (e) => {
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // fade in & out header
    const fadeHeader = () => {
      const pixels = window.scrollY;
      hero.style.opacity = 1 - pixels / 330;
    };

    const fadeArrow = () => {
      const pixels = window.scrollY;
      arrow.style.opacity = 1 - pixels / 175;
    };

    // blob animations on scroll
    const checkBlobs = () => {
      const pixels = window.scrollY;
      const blobGroup = document.querySelectorAll("g.blob");
      const sectionTags = document.querySelectorAll("section");

      blobGroup.forEach((blob, index) => {
        const currentSection = sectionTags[index];

        if (pixels > currentSection.offsetTop - 300) {
          blob.classList.add("in-view");
        } else {
          blob.classList.remove("in-view");
        }
      });
    };

    const onScroll = () => {
      fadeHeader();
      checkBlobs();
      fadeArrow();
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // fade in header on load
  useEffect(() => {
    const hero = heroRef.current;

    hero.style.opacity = 0;
    hero.style.transform = "translate(0, 48px)";
    hero.style.transition =
      "opacity 0.4s cubic-bezier(0.9, 0.03, 0.69, 0.22), transform 0.4s cubic-bezier(0.9, 0.03, 0.69, 0.22)";

    setTimeout(() => {
      hero.style.opacity = 1;
      hero.style.transform = "translate(0, 0)";
    }, 1000);
  }, []);

  return (
    <div
      className={`${maziusReview.className} overflow-x-hidden text-black bg-white`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="xMidYMid slice"
      >
        <g className="blob">
          <g transform="translate(1100, 1100)">
            <path
              fill="#CCE3DE"
              d="M1553 61.2301C1553 1032.46 128.215 1547 -479.59 1547C-1087.39 1547 -1820 822.326 -1820 144.907C-1820 -532.513 -1098.52 -2530.94 -250.694 -1536.79C532.772 -526.915 1553 -1408.45 1553 61.2301Z"
            />
          </g>
          <g transform="translate(110, 110)">
            <path
              fill="#CCE3DE"
              d="M1553 61.2301C1553 1032.46 128.215 1547 -479.59 1547C-1087.39 1547 -1820 822.326 -1820 144.907C-1820 -532.513 -1098.52 -2530.94 -250.694 -1536.79C532.772 -526.915 1553 -1408.45 1553 61.2301Z"
            />
          </g>
        </g>

        <g className="blob">
          <g transform="translate(1000, 800)">
            <path
              fill="#F6FFF8"
              d="M1788 -300.584C1788 480.383 1053.95 1278 232.323 1278C-589.301 1278 -2333 647.35 -2333 -539.035C-2333 -1725.42 -1731.33 -1887 300.319 -1887C1121.94 -1887 1788 -1081.55 1788 -300.584Z"
            />
          </g>
          <g transform="translate(500, 1000)">
            <path
              fill="#F6FFF8"
              d="M1788 -300.584C1788 480.383 1053.95 1278 232.323 1278C-589.301 1278 -2333 647.35 -2333 -539.035C-2333 -1725.42 -1731.33 -1887 300.319 -1887C1121.94 -1887 1788 -1081.55 1788 -300.584Z"
            />
          </g>
        </g>

        <g className="blob">
          <g transform="translate(250, 0)">
            <path
              fill="#A4C3B2"
              d="M1553 61.2301C1553 1032.46 128.215 1547 -479.59 1547C-1087.39 1547 -1820 822.326 -1820 144.907C-1820 -532.513 -1098.52 -2530.94 -250.694 -1536.79C532.772 -526.915 1553 -1408.45 1553 61.2301Z"
            />
          </g>
          <g transform="translate(300, 800)">
            <path
              fill="#A4C3B2"
              d="M1553 61.2301C1553 1032.46 128.215 1547 -479.59 1547C-1087.39 1547 -1820 822.326 -1820 144.907C-1820 -532.513 -1098.52 -2530.94 -250.694 -1536.79C532.772 -526.915 1553 -1408.45 1553 61.2301Z"
            />
          </g>
        </g>

        <g className="blob">
          <g transform="translate(500, 1100)">
            <path
              fill="#EAF4F4"
              d="M1788 -300.584C1788 480.383 1053.95 1278 232.323 1278C-589.301 1278 -2333 647.35 -2333 -539.035C-2333 -1725.42 -1731.33 -1887 300.319 -1887C1121.94 -1887 1788 -1081.55 1788 -300.584Z"
            />
          </g>
          <g transform="translate(-100, -100)">
            <path
              fill="#EAF4F4"
              d="M1788 -300.584C1788 480.383 1053.95 1278 232.323 1278C-589.301 1278 -2333 647.35 -2333 -539.035C-2333 -1725.42 -1731.33 -1887 300.319 -1887C1121.94 -1887 1788 -1081.55 1788 -300.584Z"
            />
          </g>
        </g>
      </svg>

      <main
        ref={heroRef}
        id="hero"
        className="fixed top-0 left-0 flex flex-col h-screen w-full items-center justify-center"
      >
        <div className="flex  flex-col hero w-full h-full items-center justify-center">
          <h1 className={`italic text-[10vw] text-center`}>
            Jessie <span></span> Cullen
          </h1>
          <h2 className={`max-w-[480px] text-[36px] leading-tight text-center`}>
            Fine art curator, living and working in Berlin, Germany
          </h2>
        </div>
      </main>

      <img ref={arrowRef} className="arrow-icon" src="/icons/arrow.svg" />

      <div className="paintings">
        <section className="p-48">
          <figure className="max-w-[900px] mx-auto">
            <img src="/images/image1.jpg" alt="painting 01" />
            <figcaption className="mt-6 text-3xl">
              Vase with Flowers. Circa 1700. Institution: Mauritshuis
            </figcaption>
          </figure>
        </section>

        <section className="p-48">
          <figure className="max-w-[900px] mx-auto">
            <img className="" src="/images/image2.jpg" alt="painting 02" />
            <figcaption className="mt-6 text-3xl">
              Cat with kittens. Date: 1844. Institution: Rijksmuseum
            </figcaption>
          </figure>
        </section>

        <section className="p-48">
          <figure className="max-w-[900px] mx-auto">
            <img className="" src="/images/image3.jpg" alt="painting 03" />
            <figcaption className="mt-6 text-3xl">
              Still Life with Flowers and Fruit. Date: 1728. Institution:
              Rijksmuseum
            </figcaption>
          </figure>
        </section>

        <section className="p-48">
          <figure className="max-w-[900px] mx-auto">
            <img className="" src="/images/image4.jpg" alt="painting 04" />
            <figcaption className="mt-6 text-3xl">
              Still Life with Flowers. Date: 1718. Institution: Rijksmuseum
            </figcaption>
          </figure>
        </section>
      </div>
    </div>
  );
}
