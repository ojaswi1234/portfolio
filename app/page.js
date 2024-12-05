"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";


export default function Home() {
  const gsapref = useRef([]);
  const gsapref2 = useRef([]);
  const gsapimage = useRef(null);

  useEffect(() => {

    gsap.registerPlugin(ScrollTrigger);

    gsap.from(gsapref.current, {
      y: 50,
      opacity: 0,
      duration: 1,
      stagger: 0.5,
    });

    gsap.from(gsapref2.current, {
      opacity: 0,
      x: 100,
      duration: 0.5,
      delay: 2,
      stagger: 0.1,
    });

    gsap.from(gsapimage.current, {
      scale: 1.5,
      duration: 2,
      opacity: 0,
    });

    gsap.from("#intro", {
      opacity: 0,
      duration: 2,
      x: -200,
      delay: 2
    });

    gsap.to("#box1 h3", {
      transform:"translateX(-110%)",
      textShadow: "10px 0 50px white",
      stagger: 1, 
      scrollTrigger: {
        trigger: "#box1",
        start: "top 40%",
        scrub: 3,
        pin: true,
      }
    });
    gsap.from("#intro2",{
      opacity:0,
      transform:"translateX(-100%)",
      scrollTrigger:{
        trigger:"#intro2",
        start:"top 70%",
        end: "bottom 65%",
        stagger: 0.01,
        scrub: 2,
      },
    });
   gsap.from("#intro3",{
      opacity:0,
      scrollTrigger:{
        trigger:"#intro3",
        start:"top 77%",
        end: "bottom 80%",
        stagger: 0.01,
        scrub: true,
      },
    });
  }, []);

  return (
    <main className="w-screen h-screen ">
      <div className="w-screen h-16 bg-white flex items-center text-black sticky">
        <div className="w-fit h-fit flex ml-10 font-bold font-merienda text-3xl">
          {["P", "O", "R", "T", "F", "O", "L", "I", "O"].map((item, index) => (
            <h1
              ref={(el) => (gsapref2.current[index] = el)}
              key={index}
              className="flex"
            >
              {item}
            </h1>
          ))}
        </div>
        <div className="w-screen h-fit flex justify-end mr-24 gap-4 font-merienda">
          {["home", "about", "contact"].map((item, index) => (
            <button
              ref={(el) => (gsapref.current[index] = el)}
              key={index}
              className="flex justify-end text-pretty p-3 rounded-lg text-slate-900 hover:bg-black hover:text-white ease-in-out justify-self-end hover:shadow-white hover:shadow-2xl"
            >
              {item}
            </button>
          ))}
        </div>
      </div>
      <div className="w-screen h-full  bg-cover  flex flex-col items-center justify-center" >
      <video autoPlay loop muted className="absolute inset-0 w-full h-full object-cover">
          <source src="/vecteezy_fading-green-and-blue-line-for-technology-background_2404976.mp4" type="video/mp4" />
          < source src="/vecteezy_fading-green-and-blue-line-for-technology-background_2404976.webm" type="video/webm" />
        </video>
        <Image
          src="/pexels-moose-photos-170195-1036627.jpg"
          ref={gsapimage}
          width={400}
          height={400}
          unoptimized={true}
          className="rounded-full"
          alt="Hero image of OJASWI"
        />
        <h2
          id="intro"
          className="text-5xl text-white mt-10 font-merienda"
        >
          <strong>Hello! </strong> This is OJASWI
        </h2>
        <h3 className="mt-10 pb-5 text-2xl" id="intro2">I am an  Aspiring Full Stack developer</h3>
        <p className="text-3xl mt-24 font-merienda" id="intro3">And Yeah,  Nice TO Meet You !</p>
      </div>
      <div className="w-screen h-[500px]  flex flex-row justify-start item-center overflow-hidden " id="box1">
        <h3  className="text-[400px] w-fit h-fit  text-center bg-clip-text text-transparent font-serif whitespace-nowrap  bg-gradient-to-r from-blue-600 to-green-600 ">
        WELCOME TO MY PORTFOLIO
        </h3>
      </div>
      <div className="w-screen h-full bg-gradient-to-tl from-indigo-900 via-violet-500 to-indigo-900 flex flex-col items-center justify-center">
        
      </div>
    </main>
  );
}
