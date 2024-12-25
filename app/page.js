"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger} from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import { Helmet } from 'react-helmet';
import Link from "next/link";

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

    gsap.to("#box1 #h3", {
      transform:"translateX(-110%)",
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
      transform:"translateX(-30%)",
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
        start:"top 80%",
        end: "bottom 50%",
        stagger: 0.01,
        scrub: true,
      },
    });
  }, []);
  const fileUrl = "/Ojaswi's Resume-hackerresume.pdf";
  return (
    <><></><Helmet>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    </Helmet>
    
    <main className="w-[1300px] sm:w-screen sm:h-screen">
        <div className="w-[1500px] sm:w-screen h-16 bg-white sm:bg-transparent flex items-center text-black sticky z-10">
          <div className="w-fit h-fit flex ml-4 sm:ml-10 font-bold font-merienda text-xl sm:text-3xl ">
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
          <div className="w-screen h-fit flex justify-end -ml-36  text-md sm:text-lg sm:mr-24 sm:gap-4 font-merienda font-bold">
            {["home", "My skills", "contact"].map((item, index) => (
              <button
                ref={(el) => (gsapref.current[index] = el)}
                key={index}
                className="relative flex justify-end text-pretty p-3 rounded-lg justify-self-end overflow-hidden group"
              >
                {item}
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-current transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100 hover:shadow-inner hover:shadow-white"></span>
              </button>
            ))}
          </div>
        </div>
        <div className="w-screen h-full bg-cover flex flex-col items-center justify-center">
          <video autoPlay loop muted className="sm:absolute inset-44 sm:inset-0  sm:w-full sm:h-fit sm:object-cover -hue-rotate-45 sm:invert">
            <source src="/vecteezy_fading-green-and-blue-line-for-technology-background_2404976.mp4" type="video/mp4" />
            <source src="/vecteezy_fading-green-and-blue-line-for-technology-background_2404976.webm" type="video/webm" />
          </video>

          <Image
            src="/pexels-moose-photos-170195-1036627.jpg"
            ref={gsapimage}
            width={400}
            height={400}
            unoptimized={true}
            className="sm:rounded-full rounded-full  -mt-24 -ml-44 sm:-ml-0 w-44 h-44  sm:mt-0 sm:w-96 sm:h-72"
            alt="Hero image of OJASWI" />
          <h2
            id="intro"
            className="text-4xl text-white  sm:text-black mt-10 font-merienda text-center sm:w-screen sm:text-5xl"
          >
            <strong>Hello! </strong> This is OJASWI
          </h2>
          <h3 className="mt-10 pb-5 sm:text-2xl text-white  sm:text-black text-lg " id="intro2">I am an  Aspiring <strong className="w-fit h-fit bg-orange-600 p-2 text-white">Full Stack developer</strong></h3>
          <p className="text-3xl mt-24 font-merienda text-white  sm:text-black" id="intro3">And Yeah, Nice TO Meet You !</p>
        </div>
        <div className="w-screen h-[500px]  flex flex-row justify-start item-center overflow-hidden sm:w-fit " id="box1">
          <Link className="text-[400px] w-fit h-fit uppercase text-center bg-clip-text text-transparent font-serif whitespace-nowrap bg-gradient-to-t from-pink-700 via-amber-800 to-violet-800 sm:font-merienda" href={fileUrl} id="h3">
      Welcome to my Portfolio
          </Link>
        </div>

        <div className="w-fit h-fit pb-10 flex flex-col ">
          <h1 className="text-3xl translate-x-28 sm:translate-x-24 translate-y-16 font-merienda sm:font-sans text-teal-950 bg-teal-500 sm:w-44 sm:h-14 p-2 sm:rounded-e-full " id="skills">My Skills</h1>
          <h2 className="w-fit translate-y-32 translate-x-10 sm:translate-x-24 sm:translate-y-32 font-bold text-6xl sm:text-8xl transition-transform duration-500 hover:scale-110 underline underline-offset-8 decoration-green-400 font-m bg-gradient-to-tr from-yellow-500 to-purple-500  bg-clip-text text-transparent sm:animate-none animate-pulse">Frontend</h2>
          <div className="sm:w-screen grid grid-cols-1 sm:h-fit sm:grid sm:grid-cols-3 gap-y-5 place-items-center justify-items-center mt-44 text-black sm:ml-0 ">

            <div className="bg-sky-700 rounded-2xl shadow-a shadow-sky-500 outline outline-slate-400 -outline-offset-8 sm:-ml-0 -ml-72 sm:mr-0 ">
              <div className="group overflow-hidden relative after:duration-500 before:duration-500  duration-500 hover:after:duration-500 hover:after:translate-x-24 hover:before:translate-y-12 hover:before:-translate-x-32 hover:duration-500 after:absolute after:w-24 after:h-24 after:bg-sky-700 after:rounded-full  after:blur-xl after:bottom-32 after:right-16  before:absolute before:w-20 before:h-20 before:bg-sky-400 before:rounded-full  before:blur-xl before:top-20 before:right-16  hover:rotate-12 flex justify-center items-center h-56 w-80  bg-neutral-900 rounded-2xl outline outline-slate-400 -outline-offset-8">
                <div className="z-10 flex flex-col items-center gap-2">
                  <span className="text-slate-400 sm:text-6xl text-5xl font-bold "><svg xmlns="http://www.w3.org/2000/svg" className="size-24 sm:pb-4 sm:mr-20 " viewBox="0 0 128 128"><path fill="#E44D26" d="M19.037 113.876L9.032 1.661h109.936l-10.016 112.198-45.019 12.48z"/><path fill="#F16529" d="M64 116.8l36.378-10.086 8.559-95.878H64z"/><path fill="#EBEBEB" d="M64 52.455H45.788L44.53 38.361H64V24.599H29.489l.33 3.692 3.382 37.927H64zm0 35.743l-.061.017-15.327-4.14-.979-10.975H33.816l1.928 21.609 28.193 7.826.063-.017z"/><path fill="#fff" d="M63.952 52.455v13.763h16.947l-1.597 17.849-15.35 4.143v14.319l28.215-7.82.207-2.325 3.234-36.233.335-3.696h-3.708zm0-27.856v13.762h33.244l.276-3.092.628-6.978.329-3.692z"/></svg>HTML</span>
                </div>
              </div>
            </div>

            <div className="bg-green-800 rounded-2xl shadow-a shadow-green-500 outline outline-slate-400 -outline-offset-8 -ml-72">
              <div className="group overflow-hidden relative after:duration-500 before:duration-500  duration-500 hover:after:duration-500 hover:after:translate-x-24 hover:before:translate-y-12 hover:before:-translate-x-32 hover:duration-500 after:absolute after:w-24 after:h-24 after:bg-green-700 after:rounded-full  after:blur-xl after:bottom-32 after:right-16  before:absolute before:w-20 before:h-20 before:bg-green-400 before:rounded-full  before:blur-xl before:top-20 before:right-16  hover:rotate-12 flex justify-center items-center h-56 w-80  bg-neutral-900 rounded-2xl outline outline-slate-400 -outline-offset-8">
                <div className="z-10 flex flex-col items-center gap-2">
                  <span className="text-slate-400 sm:text-6xl text-5xl font-bold"><svg xmlns="http://www.w3.org/2000/svg" className="size-24 sm:pb-4 invert " viewBox="0 0 128 128 "><path d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64c11.2 0 21.7-2.9 30.8-7.9L48.4 55.3v36.6h-6.8V41.8h6.8l50.5 75.8C116.4 106.2 128 86.5 128 64c0-35.3-28.7-64-64-64zm22.1 84.6l-7.5-11.3V41.8h7.5v42.8z"/></svg> NEXT.js</span>
                </div>
              </div>
            </div>

            <div className=" bg-yellow-800 rounded-2xl shadow-a shadow-yellow-500 outline outline-slate-400 -outline-offset-8 sm:-ml-96 sm:mr-44 -ml-72">
              <div className="group overflow-hidden relative after:duration-500 before:duration-500  duration-500 hover:after:duration-500 hover:after:translate-x-24 hover:before:translate-y-12 hover:before:-translate-x-32 hover:duration-500 after:absolute after:w-24 after:h-24 after:bg-yellow-700 after:rounded-full  after:blur-xl after:bottom-32 after:right-16  before:absolute before:w-20 before:h-20 before:bg-yellow-400 before:rounded-full  before:blur-xl before:top-20 before:right-16  hover:rotate-12 flex justify-center items-center h-56 w-80  bg-neutral-900 rounded-2xl outline outline-slate-400 -outline-offset-8">
                <div className="z-10 flex flex-col items-center gap-2">
                  <span className="text-slate-400 sm:text-6xl text-5xl font-bold"><svg xmlns="http://www.w3.org/2000/svg" className="sm:size-24 sm:pb-4" viewBox="0 0 128 128"><g fill="#61DAFB"><circle cx="64" cy="64" r="11.4"/><path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"/></g></svg>React.js</span>
                </div>
              </div>
            </div>


            <div className=" sm:w-fit bg-red-900 rounded-2xl shadow-a shadow-red-500 outline outline-slate-400 -outline-offset-8  sm:ml-24 sm:mr-0 mr-72 ">
              <div className="w-fit group overflow-hidden relative after:duration-500 before:duration-500  duration-500 hover:after:duration-500 hover:after:translate-x-24 hover:before:translate-y-12 hover:before:-translate-x-32 hover:duration-500 after:absolute after:w-24 after:h-24 after:bg-red-700 after:rounded-full  after:blur-xl after:bottom-32 after:right-36  before:absolute before:w-20 before:h-20 before:bg-red-400 before:rounded-full  before:blur-xl before:top-20 before:right-36  hover:rotate-12 flex justify-center items-center h-56  bg-neutral-900 rounded-2xl outline outline-slate-400 -outline-offset-8">
                <div className="z-10 flex flex-col items-center gap-2">
                  <span className="text-slate-400 sm:text-6xl text-5xl font-bold sm:p-7 p-5"><svg xmlns="http://www.w3.org/2000/svg" className="sm:size-24 sm:pb-4" viewBox="0 0 128 128"><path fill="#F0DB4F" d="M1.408 1.408h125.184v125.185H1.408z"/><path fill="#323330" d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zM69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.249 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"/></svg>JAVASCRIPT</span>
                </div>
              </div>
            </div>

            <div className="bg-indigo-700 rounded-2xl shadow-a shadow-indigo-500 outline outline-slate-400 -outline-offset-8 sm:-mr-24 sm:ml-0 -ml-72">
              <div className="w-fit group overflow-hidden relative after:duration-500 before:duration-500  duration-500 hover:after:duration-500 hover:after:translate-x-24 hover:before:translate-y-12 hover:before:-translate-x-32 hover:duration-500 after:absolute after:w-24 after:h-24 after:bg-indigo-700 after:rounded-full  after:blur-xl after:bottom-32 after:right-52  before:absolute before:w-20 before:h-20 before:bg-indigo-400 before:rounded-full  before:blur-xl before:top-20 before:right-52  hover:rotate-12 flex justify-center items-center h-56  bg-neutral-900 rounded-2xl outline outline-slate-400 -outline-offset-8">
                <div className="z-10 flex flex-col items-center gap-2">
                  <span className="text-slate-400 sm:text-6xl text-4xl font-bold p-10"><svg xmlns="http://www.w3.org/2000/svg" className="sm:size-24 sm:pb-4" viewBox="0 0 128 128"><path d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597 6.398-8.531 13.867-11.73 22.398-9.597 4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602-6.399 8.536-13.867 11.735-22.399 9.602-4.87-1.215-8.347-4.746-12.207-8.66-6.27-6.367-13.53-13.738-29.394-13.738zM32.004 64c-17.066 0-27.73 8.531-32 25.602C6.402 81.066 13.87 77.867 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66 6.274 6.367 13.536 13.738 29.395 13.738 17.066 0 27.73-8.53 32-25.597-6.399 8.531-13.867 11.73-22.399 9.597-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64zm0 0" fill="#38bdf8"/></svg>
                  TAILWIND CSS</span>
                </div>
              </div>
            </div>

          </div>
          <h2 className=" sm:translate-x-24 sm:translate-y-32 translate-x-14 translate-y-32 font-bold text-6xl sm:text-8xl transition-transform duration-500 hover:scale-110  underline underline-offset-8 decoration-red-500 font-m  bg-gradient-to-tr from-green-500  to-red-500  bg-clip-text text-transparent sm:animate-none animate-pulse">Backend</h2>
          <div className="w-screen h-fit grid sm:grid-cols-2 grid-cols-1 gap-y-5 justify-center items-center sm:place-items-center sm:justify-items-center mt-44 text-black pb-32 ">

            <div className="w-fit  bg-sky-700 rounded-2xl shadow-a shadow-sky-500 outline outline-slate-400 -outline-offset-8 sm:-ml-60 ml-24 ">
              <div className="group overflow-hidden relative after:duration-500 before:duration-500  duration-500 hover:after:duration-500 hover:after:translate-x-24 hover:before:translate-y-12 hover:before:-translate-x-32 hover:duration-500 after:absolute after:w-24 after:h-24 after:bg-sky-700 after:rounded-full  after:blur-xl after:bottom-32 after:right-16  before:absolute before:w-20 before:h-20 before:bg-sky-400 before:rounded-full  before:blur-xl before:top-20 before:right-16  hover:rotate-12 flex justify-center items-center h-56 w-80  bg-neutral-900 rounded-2xl outline outline-slate-400 -outline-offset-8">
                <div className="z-10 flex flex-col items-center gap-2">
                  <span className="text-slate-400 sm:text-6xl text-5xl font-bold"><svg xmlns="http://www.w3.org/2000/svg" className="sm:size-24 sm:pb-4" viewBox="0 0 128 128"><path fill="#83CD29" d="M112.771 30.334L68.674 4.729c-2.781-1.584-6.402-1.584-9.205 0L14.901 30.334C12.031 31.985 10 35.088 10 38.407v51.142c0 3.319 2.084 6.423 4.954 8.083l11.775 6.688c5.628 2.772 7.617 2.772 10.178 2.772 8.333 0 13.093-5.039 13.093-13.828v-50.49c0-.713-.371-1.774-1.071-1.774h-5.623C42.594 41 41 42.061 41 42.773v50.49c0 3.896-3.524 7.773-10.11 4.48L18.723 90.73c-.424-.23-.723-.693-.723-1.181V38.407c0-.482.555-.966.982-1.213l44.424-25.561c.415-.235 1.025-.235 1.439 0l43.882 25.555c.42.253.272.722.272 1.219v51.142c0 .488.183.963-.232 1.198l-44.086 25.576c-.378.227-.847.227-1.261 0l-11.307-6.749c-.341-.198-.746-.269-1.073-.086-3.146 1.783-3.726 2.02-6.677 3.043-.726.253-1.797.692.41 1.929l14.798 8.754a9.294 9.294 0 004.647 1.246c1.642 0 3.25-.426 4.667-1.246l43.885-25.582c2.87-1.672 4.23-4.764 4.23-8.083V38.407c0-3.319-1.36-6.414-4.229-8.073zM77.91 81.445c-11.726 0-14.309-3.235-15.17-9.066-.1-.628-.633-1.379-1.272-1.379h-5.731c-.709 0-1.279.86-1.279 1.566 0 7.466 4.059 16.512 23.453 16.512 14.039 0 22.088-5.455 22.088-15.109 0-9.572-6.467-12.084-20.082-13.886-13.762-1.819-15.16-2.738-15.16-5.962 0-2.658 1.184-6.203 11.374-6.203 9.105 0 12.461 1.954 13.842 8.091.118.577.645.991 1.24.991h5.754c.354 0 .692-.143.94-.396.24-.272.367-.613.335-.979-.891-10.568-7.912-15.493-22.112-15.493-12.631 0-20.166 5.334-20.166 14.275 0 9.698 7.497 12.378 19.622 13.577 14.505 1.422 15.633 3.542 15.633 6.395 0 4.955-3.978 7.066-13.309 7.066z"/></svg>NODE.js</span>
                </div>
              </div>
            </div>

            <div className="sm:w-fit w-fit bg-red-900 rounded-2xl shadow-a shadow-red-500 outline outline-slate-400 -outline-offset-8 sm:-translate-x-96 sm:-ml-44 ml-24 ">
              <div className="w-fit group overflow-hidden relative after:duration-500 before:duration-500  duration-500 hover:after:duration-500 hover:after:translate-x-24 hover:before:translate-y-12 hover:before:-translate-x-32 hover:duration-500 after:absolute after:w-24 after:h-24 after:bg-red-700 after:rounded-full  after:blur-xl after:bottom-32 after:right-16  before:absolute before:w-20 before:h-20 before:bg-red-400 before:rounded-full  before:blur-xl before:top-20 before:right-16  hover:rotate-12 flex justify-center items-center h-56  bg-neutral-900 rounded-2xl outline outline-slate-400 -outline-offset-8">
                <div className="z-10 flex flex-col items-center gap-2">
                  <span className="text-slate-400 text-6xl font-bold sm:p-20 p-24"><svg xmlns="http://www.w3.org/2000/svg" className="sm:size-24 sm:pb-4 bg-white rounded-full" viewBox="0 -24 115 130"><path fill="#00618A" d="M116.948 97.807c-6.863-.187-12.104.452-16.585 2.341-1.273.537-3.305.552-3.513 2.147.7.733.809 1.829 1.365 2.731 1.07 1.73 2.876 4.052 4.488 5.268 1.762 1.33 3.577 2.751 5.465 3.902 3.358 2.047 7.107 3.217 10.34 5.268 1.906 1.21 3.799 2.733 5.658 4.097.92.675 1.537 1.724 2.732 2.147v-.194c-.628-.8-.79-1.898-1.366-2.733l-2.537-2.537c-2.48-3.292-5.629-6.184-8.976-8.585-2.669-1.916-8.642-4.504-9.755-7.609l-.195-.195c1.892-.214 4.107-.898 5.854-1.367 2.934-.786 5.556-.583 8.585-1.365l4.097-1.171v-.78c-1.531-1.571-2.623-3.651-4.292-5.073-4.37-3.72-9.138-7.437-14.048-10.537-2.724-1.718-6.089-2.835-8.976-4.292-.971-.491-2.677-.746-3.318-1.562-1.517-1.932-2.342-4.382-3.511-6.633-2.449-4.717-4.854-9.868-7.024-14.831-1.48-3.384-2.447-6.72-4.293-9.756-8.86-14.567-18.396-23.358-33.169-32-3.144-1.838-6.929-2.563-10.929-3.513-2.145-.129-4.292-.26-6.438-.391-1.311-.546-2.673-2.149-3.902-2.927C17.811 4.565 5.257-2.16 1.633 6.682c-2.289 5.581 3.421 11.025 5.462 13.854 1.434 1.982 3.269 4.207 4.293 6.438.674 1.467.79 2.938 1.367 4.489 1.417 3.822 2.652 7.98 4.487 11.511.927 1.788 1.949 3.67 3.122 5.268.718.981 1.951 1.413 2.145 2.927-1.204 1.686-1.273 4.304-1.95 6.44-3.05 9.615-1.899 21.567 2.537 28.683 1.36 2.186 4.567 6.871 8.975 5.073 3.856-1.57 2.995-6.438 4.098-10.732.249-.973.096-1.689.585-2.341v.195l3.513 7.024c2.6 4.187 7.212 8.562 11.122 11.514 2.027 1.531 3.623 4.177 6.244 5.073v-.196h-.195c-.508-.791-1.303-1.119-1.951-1.755-1.527-1.497-3.225-3.358-4.487-5.073-3.556-4.827-6.698-10.11-9.561-15.609-1.368-2.627-2.557-5.523-3.709-8.196-.444-1.03-.438-2.589-1.364-3.122-1.263 1.958-3.122 3.542-4.098 5.854-1.561 3.696-1.762 8.204-2.341 12.878-.342.122-.19.038-.391.194-2.718-.655-3.672-3.452-4.683-5.853-2.554-6.07-3.029-15.842-.781-22.829.582-1.809 3.21-7.501 2.146-9.172-.508-1.666-2.184-2.63-3.121-3.903-1.161-1.574-2.319-3.646-3.124-5.464-2.09-4.731-3.066-10.044-5.267-14.828-1.053-2.287-2.832-4.602-4.293-6.634-1.617-2.253-3.429-3.912-4.683-6.635-.446-.968-1.051-2.518-.391-3.513.21-.671.508-.951 1.171-1.17 1.132-.873 4.284.29 5.462.779 3.129 1.3 5.741 2.538 8.392 4.294 1.271.844 2.559 2.475 4.097 2.927h1.756c2.747.631 5.824.195 8.391.975 4.536 1.378 8.601 3.523 12.292 5.854 11.246 7.102 20.442 17.21 26.732 29.269 1.012 1.942 1.45 3.794 2.341 5.854 1.798 4.153 4.063 8.426 5.852 12.488 1.786 4.052 3.526 8.141 6.05 11.513 1.327 1.772 6.451 2.723 8.781 3.708 1.632.689 4.307 1.409 5.854 2.34 2.953 1.782 5.815 3.903 8.586 5.855 1.383.975 5.64 3.116 5.852 4.879zM29.729 23.466c-1.431-.027-2.443.156-3.513.389v.195h.195c.683 1.402 1.888 2.306 2.731 3.513.65 1.367 1.301 2.732 1.952 4.097l.194-.193c1.209-.853 1.762-2.214 1.755-4.294-.484-.509-.555-1.147-.975-1.755-.556-.811-1.635-1.272-2.339-1.952z"/></svg>MySQL</span>
                </div>
              </div>
            </div>

            <div className="sm:w-fit w-fit  bg-green-800 rounded-2xl shadow-a shadow-green-500 outline outline-slate-400 -outline-offset-8 sm:mr-8 ml-5">
              <div className="w-fit group overflow-hidden relative after:duration-500 before:duration-500  duration-500 hover:after:duration-500 hover:after:translate-x-24 hover:before:translate-y-12 hover:before:-translate-x-32 hover:duration-500 after:absolute after:w-24 after:h-24 after:bg-green-700 after:rounded-full  after:blur-xl after:bottom-32 after:right-64  before:absolute before:w-20 before:h-20 before:bg-green-400 before:rounded-full  before:blur-xl before:top-20 before:right-64  hover:rotate-12 flex justify-center items-center h-56  bg-neutral-900 rounded-2xl outline outline-slate-400 -outline-offset-8">
                <div className="z-10 flex flex-col items-center gap-2">
                  <span className="text-slate-400 sm:text-6xl text-5xl font-bold sm:p-32 p-14 sm:-ml-16"><svg xmlns="http://www.w3.org/2000/svg" className="sm:size-24  sm:pb-4 fill-green-800 bg-white rounded-full" viewBox="0 -15 128 128"><path d="M126.67 98.44c-4.56 1.16-7.38.05-9.91-3.75-5.68-8.51-11.95-16.63-18-24.9-.78-1.07-1.59-2.12-2.6-3.45C89 76 81.85 85.2 75.14 94.77c-2.4 3.42-4.92 4.91-9.4 3.7l26.92-36.13L67.6 29.71c4.31-.84 7.29-.41 9.93 3.45 5.83 8.52 12.26 16.63 18.67 25.21 6.45-8.55 12.8-16.67 18.8-25.11 2.41-3.42 5-4.72 9.33-3.46-3.28 4.35-6.49 8.63-9.72 12.88-4.36 5.73-8.64 11.53-13.16 17.14-1.61 2-1.35 3.3.09 5.19C109.9 76 118.16 87.1 126.67 98.44zM1.33 61.74c.72-3.61 1.2-7.29 2.2-10.83 6-21.43 30.6-30.34 47.5-17.06C60.93 41.64 63.39 52.62 62.9 65H7.1c-.84 22.21 15.15 35.62 35.53 28.78 7.15-2.4 11.36-8 13.47-15 1.07-3.51 2.84-4.06 6.14-3.06-1.69 8.76-5.52 16.08-13.52 20.66-12 6.86-29.13 4.64-38.14-4.89C5.26 85.89 3 78.92 2 71.39c-.15-1.2-.46-2.38-.7-3.57q.03-3.04.03-6.08zm5.87-1.49h50.43c-.33-16.06-10.33-27.47-24-27.57-15-.12-25.78 11.02-26.43 27.57z"/></svg>EXPRESS.js</span>
                </div>
              </div>
            </div>
            <div className="w-fit bg-sky-700 rounded-2xl shadow-a shadow-sky-500 outline outline-slate-400 -outline-offset-8 sm:-ml-96 sm:mr-52 ml-24 sm:w-1/2">
              <div className="group overflow-hidden relative after:duration-500 before:duration-500 sm:w-full  duration-500 hover:after:duration-500 hover:after:translate-x-24 hover:before:translate-y-12 hover:before:-translate-x-32 hover:duration-500 after:absolute after:w-24 after:h-24 after:bg-sky-700 after:rounded-full  after:blur-xl after:bottom-32 after:right-16  before:absolute before:w-20 before:h-20 before:bg-sky-400 before:rounded-full  before:blur-xl before:top-20 before:right-16  hover:rotate-12 flex justify-center items-center h-56 w-80  bg-neutral-900 rounded-2xl outline outline-slate-400 -outline-offset-8">
                <div className="z-10 flex flex-col items-center gap-2 ">
                  <span className="text-slate-400 sm:text-6xl text-5xl font-bold sm:ml-10  sm:-translate-x-5"><svg xmlns="http://www.w3.org/2000/svg"  className="sm:size-24  sm:pb-4 fill-green-800 bg-white rounded-full" viewBox="0 -10 128 128"><path fill-rule="evenodd" clip-rule="evenodd" fill="#439934" d="M88.038 42.812c1.605 4.643 2.761 9.383 3.141 14.296.472 6.095.256 12.147-1.029 18.142-.035.165-.109.32-.164.48-.403.001-.814-.049-1.208.012-3.329.523-6.655 1.065-9.981 1.604-3.438.557-6.881 1.092-10.313 1.687-1.216.21-2.721-.041-3.212 1.641-.014.046-.154.054-.235.08l.166-10.051-.169-24.252 1.602-.275c2.62-.429 5.24-.864 7.862-1.281 3.129-.497 6.261-.98 9.392-1.465 1.381-.215 2.764-.412 4.148-.618z"/><path fill-rule="evenodd" clip-rule="evenodd" fill="#45A538" d="M61.729 110.054c-1.69-1.453-3.439-2.842-5.059-4.37-8.717-8.222-15.093-17.899-18.233-29.566-.865-3.211-1.442-6.474-1.627-9.792-.13-2.322-.318-4.665-.154-6.975.437-6.144 1.325-12.229 3.127-18.147l.099-.138c.175.233.427.439.516.702 1.759 5.18 3.505 10.364 5.242 15.551 5.458 16.3 10.909 32.604 16.376 48.9.107.318.384.579.583.866l-.87 2.969z"/><path fill-rule="evenodd" clip-rule="evenodd" fill="#46A037" d="M88.038 42.812c-1.384.206-2.768.403-4.149.616-3.131.485-6.263.968-9.392 1.465-2.622.417-5.242.852-7.862 1.281l-1.602.275-.012-1.045c-.053-.859-.144-1.717-.154-2.576-.069-5.478-.112-10.956-.18-16.434-.042-3.429-.105-6.857-.175-10.285-.043-2.13-.089-4.261-.185-6.388-.052-1.143-.236-2.28-.311-3.423-.042-.657.016-1.319.029-1.979.817 1.583 1.616 3.178 2.456 4.749 1.327 2.484 3.441 4.314 5.344 6.311 7.523 7.892 12.864 17.068 16.193 27.433z"/><path fill-rule="evenodd" clip-rule="evenodd" fill="#409433" d="M65.036 80.753c.081-.026.222-.034.235-.08.491-1.682 1.996-1.431 3.212-1.641 3.432-.594 6.875-1.13 10.313-1.687 3.326-.539 6.652-1.081 9.981-1.604.394-.062.805-.011 1.208-.012-.622 2.22-1.112 4.488-1.901 6.647-.896 2.449-1.98 4.839-3.131 7.182a49.142 49.142 0 01-6.353 9.763c-1.919 2.308-4.058 4.441-6.202 6.548-1.185 1.165-2.582 2.114-3.882 3.161l-.337-.23-1.214-1.038-1.256-2.753a41.402 41.402 0 01-1.394-9.838l.023-.561.171-2.426c.057-.828.133-1.655.168-2.485.129-2.982.241-5.964.359-8.946z"/><path fill-rule="evenodd" clip-rule="evenodd" fill="#4FAA41" d="M65.036 80.753c-.118 2.982-.23 5.964-.357 8.947-.035.83-.111 1.657-.168 2.485l-.765.289c-1.699-5.002-3.399-9.951-5.062-14.913-2.75-8.209-5.467-16.431-8.213-24.642a4498.887 4498.887 0 00-6.7-19.867c-.105-.31-.407-.552-.617-.826l4.896-9.002c.168.292.39.565.496.879a6167.476 6167.476 0 016.768 20.118c2.916 8.73 5.814 17.467 8.728 26.198.116.349.308.671.491 1.062l.67-.78-.167 10.052z"/><path fill-rule="evenodd" clip-rule="evenodd" fill="#4AA73C" d="M43.155 32.227c.21.274.511.516.617.826a4498.887 4498.887 0 016.7 19.867c2.746 8.211 5.463 16.433 8.213 24.642 1.662 4.961 3.362 9.911 5.062 14.913l.765-.289-.171 2.426-.155.559c-.266 2.656-.49 5.318-.814 7.968-.163 1.328-.509 2.632-.772 3.947-.198-.287-.476-.548-.583-.866-5.467-16.297-10.918-32.6-16.376-48.9a3888.972 3888.972 0 00-5.242-15.551c-.089-.263-.34-.469-.516-.702l3.272-8.84z"/><path fill-rule="evenodd" clip-rule="evenodd" fill="#57AE47" d="M65.202 70.702l-.67.78c-.183-.391-.375-.714-.491-1.062-2.913-8.731-5.812-17.468-8.728-26.198a6167.476 6167.476 0 00-6.768-20.118c-.105-.314-.327-.588-.496-.879l6.055-7.965c.191.255.463.482.562.769 1.681 4.921 3.347 9.848 5.003 14.778 1.547 4.604 3.071 9.215 4.636 13.813.105.308.47.526.714.786l.012 1.045c.058 8.082.115 16.167.171 24.251z"/><path fill-rule="evenodd" clip-rule="evenodd" fill="#60B24F" d="M65.021 45.404c-.244-.26-.609-.478-.714-.786-1.565-4.598-3.089-9.209-4.636-13.813-1.656-4.93-3.322-9.856-5.003-14.778-.099-.287-.371-.514-.562-.769 1.969-1.928 3.877-3.925 5.925-5.764 1.821-1.634 3.285-3.386 3.352-5.968.003-.107.059-.214.145-.514l.519 1.306c-.013.661-.072 1.322-.029 1.979.075 1.143.259 2.28.311 3.423.096 2.127.142 4.258.185 6.388.069 3.428.132 6.856.175 10.285.067 5.478.111 10.956.18 16.434.008.861.098 1.718.152 2.577z"/><path fill-rule="evenodd" clip-rule="evenodd" fill="#A9AA88" d="M62.598 107.085c.263-1.315.609-2.62.772-3.947.325-2.649.548-5.312.814-7.968l.066-.01.066.011a41.402 41.402 0 001.394 9.838c-.176.232-.425.439-.518.701-.727 2.05-1.412 4.116-2.143 6.166-.1.28-.378.498-.574.744l-.747-2.566.87-2.969z"/><path fill-rule="evenodd" clip-rule="evenodd" fill="#B6B598" d="M62.476 112.621c.196-.246.475-.464.574-.744.731-2.05 1.417-4.115 2.143-6.166.093-.262.341-.469.518-.701l1.255 2.754c-.248.352-.59.669-.728 1.061l-2.404 7.059c-.099.283-.437.483-.663.722l-.695-3.985z"/><path fill-rule="evenodd" clip-rule="evenodd" fill="#C2C1A7" d="M63.171 116.605c.227-.238.564-.439.663-.722l2.404-7.059c.137-.391.48-.709.728-1.061l1.215 1.037c-.587.58-.913 1.25-.717 2.097l-.369 1.208c-.168.207-.411.387-.494.624-.839 2.403-1.64 4.819-2.485 7.222-.107.305-.404.544-.614.812-.109-1.387-.22-2.771-.331-4.158z"/><path fill-rule="evenodd" clip-rule="evenodd" fill="#CECDB7" d="M63.503 120.763c.209-.269.506-.508.614-.812.845-2.402 1.646-4.818 2.485-7.222.083-.236.325-.417.494-.624l-.509 5.545c-.136.157-.333.294-.398.477-.575 1.614-1.117 3.24-1.694 4.854-.119.333-.347.627-.525.938-.158-.207-.441-.407-.454-.623-.051-.841-.016-1.688-.013-2.533z"/><path fill-rule="evenodd" clip-rule="evenodd" fill="#DBDAC7" d="M63.969 123.919c.178-.312.406-.606.525-.938.578-1.613 1.119-3.239 1.694-4.854.065-.183.263-.319.398-.477l.012 3.64-1.218 3.124-1.411-.495z"/><path fill-rule="evenodd" clip-rule="evenodd" fill="#EBE9DC" d="M65.38 124.415l1.218-3.124.251 3.696-1.469-.572z"/><path fill-rule="evenodd" clip-rule="evenodd" fill="#CECDB7" d="M67.464 110.898c-.196-.847.129-1.518.717-2.097l.337.23-1.054 1.867z"/><path fill-rule="evenodd" clip-rule="evenodd" fill="#4FAA41" d="M64.316 95.172l-.066-.011-.066.01.155-.559-.023.56z"/></svg>MONGO_DB</span>
                </div>
              </div>
            </div>

          </div>

          <div className="pb-10 flex flex-col">
            <h2 className="text-red-700 font-bold flex ml-10 sm:ml-24 text-4xl sm:text-6xl font-n">My Projects</h2>
            <div className="flex flex-col justify-center items-center gap-10 sm:ml-32 mt-14  sm:mx-0">
              <div className="w-[400px] h-[700px] sm:w-[1300px] sm:h-[600px] bg-gray-200 items-center rounded-lg flex flex-col  sm:flex-row sm:mr-0 mr-10">
                <Image src="/Screenshot 2024-12-14 030257.png" width={300} height={300} alt="ai" className="sm:ml-10 rounded-xl sm:w-[500px] sm:h-[500px] sm:mt-0 mt-10" />
                <h1 className="text-black sm:ml-32 sm:-mt-96 text-4xl min-w-fit font-m mt-10">AI PDF Summarizer</h1>
                <p className="text-black sm:-ml-96 w-fit text-center mt-10 sm:mt-0">This Website is a AI PDF Summarizer that can summarize any PDF file in seconds.</p>
                <h2 className="text-black sm:-ml-96 w-fit text-center mt-10 sm:mt-24 font-merienda sm:font-n sm:font-normal font-extrabold sm:text-lg text-xl">Technology used: </h2>
                <div className="sm:w-fit sm:h-fit sm:grid sm:justify-center sm:items-center sm:grid-rows-1 gap-5 sm:mt-56 sm:-ml-20  sm:rotate-90 ">
                <svg xmlns="http://www.w3.org/2000/svg" className="-rotate-90" viewBox="0 0 128 128"><path d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64c11.2 0 21.7-2.9 30.8-7.9L48.4 55.3v36.6h-6.8V41.8h6.8l50.5 75.8C116.4 106.2 128 86.5 128 64c0-35.3-28.7-64-64-64zm22.1 84.6l-7.5-11.3V41.8h7.5v42.8z"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="-rotate-90" viewBox="0 0 128 128"><path fill="#fff" d="M22.67 47h99.67v73.67H22.67z"/><path data-name="original" fill="#007acc" d="M1.5 63.91v62.5h125v-125H1.5zm100.73-5a15.56 15.56 0 017.82 4.5 20.58 20.58 0 013 4c0 .16-5.4 3.81-8.69 5.85-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 00-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.58 4.58 0 00.54 2.34c.83 1.73 2.38 2.76 7.24 4.86 8.95 3.85 12.78 6.39 15.16 10 2.66 4 3.25 10.46 1.45 15.24-2 5.2-6.9 8.73-13.83 9.9a38.32 38.32 0 01-9.52-.1 23 23 0 01-12.72-6.63c-1.15-1.27-3.39-4.58-3.25-4.82a9.34 9.34 0 011.15-.73L82 101l3.59-2.08.75 1.11a16.78 16.78 0 004.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 00.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48 16.48 0 01-3.43-6.25 25 25 0 01-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.66 31.66 0 019.49.26zm-29.34 5.24v5.12H56.66v46.23H45.15V69.26H28.88v-5a49.19 49.19 0 01.12-5.17C29.08 59 39 59 51 59h21.83z"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="-rotate-90" viewBox="0 0 128 128"><path fill="#83CD29" d="M112.771 30.334L68.674 4.729c-2.781-1.584-6.402-1.584-9.205 0L14.901 30.334C12.031 31.985 10 35.088 10 38.407v51.142c0 3.319 2.084 6.423 4.954 8.083l11.775 6.688c5.628 2.772 7.617 2.772 10.178 2.772 8.333 0 13.093-5.039 13.093-13.828v-50.49c0-.713-.371-1.774-1.071-1.774h-5.623C42.594 41 41 42.061 41 42.773v50.49c0 3.896-3.524 7.773-10.11 4.48L18.723 90.73c-.424-.23-.723-.693-.723-1.181V38.407c0-.482.555-.966.982-1.213l44.424-25.561c.415-.235 1.025-.235 1.439 0l43.882 25.555c.42.253.272.722.272 1.219v51.142c0 .488.183.963-.232 1.198l-44.086 25.576c-.378.227-.847.227-1.261 0l-11.307-6.749c-.341-.198-.746-.269-1.073-.086-3.146 1.783-3.726 2.02-6.677 3.043-.726.253-1.797.692.41 1.929l14.798 8.754a9.294 9.294 0 004.647 1.246c1.642 0 3.25-.426 4.667-1.246l43.885-25.582c2.87-1.672 4.23-4.764 4.23-8.083V38.407c0-3.319-1.36-6.414-4.229-8.073zM77.91 81.445c-11.726 0-14.309-3.235-15.17-9.066-.1-.628-.633-1.379-1.272-1.379h-5.731c-.709 0-1.279.86-1.279 1.566 0 7.466 4.059 16.512 23.453 16.512 14.039 0 22.088-5.455 22.088-15.109 0-9.572-6.467-12.084-20.082-13.886-13.762-1.819-15.16-2.738-15.16-5.962 0-2.658 1.184-6.203 11.374-6.203 9.105 0 12.461 1.954 13.842 8.091.118.577.645.991 1.24.991h5.754c.354 0 .692-.143.94-.396.24-.272.367-.613.335-.979-.891-10.568-7.912-15.493-22.112-15.493-12.631 0-20.166 5.334-20.166 14.275 0 9.698 7.497 12.378 19.622 13.577 14.505 1.422 15.633 3.542 15.633 6.395 0 4.955-3.978 7.066-13.309 7.066z"/></svg>
                <Image src="/2399b991025c365aafaa6fca85d91deac801e654-1046x1046.png" className="-rotate-90" width={52} height={52} alt="clerk_api" />
                  
                </div>
              </div>

              <div className=" w-[400px] h-[700px] sm:w-[1300px] bg-gray-200 hidden">
              </div>

              <div className=" w-[400px] h-[700px] sm:w-[1300px] bg-gray-200 hidden">
              </div>

            </div>

          </div>

          <section id="contact" className=" py-12 flex justify-center items-center bg-white">
            <Image src="/dribbble_3x-removebg-preview.png" width={0} height={0} className="sm:-mt-14 sm:w-[500px] sm:h-[500px] " unoptimized alt="hero" />
            <div className="container mx-auto sm:px-4 w-full sm:w-2/4 lg:w-1/2 sm:mr-0 mr-64">
              <div className="bg-slate-900 shadow-2xl rounded-lg border-2 border-solid border-green-600 ml-16 p-5 sm:w-3/4 shadow-green-600 sm:mr-0 w-full">
                <h3 className="text-3xl mb-8 text-green-400 p-4 justify-center">Contact Us</h3>
                <form id="contactForm" action="#" method="POST" className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-white font-semibold mb-2">Name</label>
                    <input type="text" id="name" name="name" placeholder="Enter your name"
                      className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-black" />
                    <div id="nameValidation" className="hidden text-red-600 text-sm">Please enter your name.</div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-white font-semibold mb-2">Email</label>
                    <input type="email" id="email" name="email" placeholder="Enter your email"
                      className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-black" />
                    <div id="emailValidation" className="hidden text-red-600 text-sm">Please enter a valid email address.</div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="subject" className="block text-white font-semibold mb-2">Subject</label>
                    <input type="text" id="subject" name="subject" placeholder="Enter the subject"
                      className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-black" />
                    <div id="subjectValidation" className="hidden text-red-600 text-sm">Please enter the subject.</div>
                  </div>
                  <div className="sm:col-span-2">
                    <label htmlFor="message" className="block text-white font-semibold mb-2">Message</label>
                    <textarea id="message" name="message" placeholder="Enter your message" rows="5"
                      className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-black"></textarea>
                    <div id="messageValidation" className="hidden text-red-600 text-sm">Please enter your message.</div>
                  </div>
                  <div className="sm:col-span-2">
                    <button type="submit"
                      className="w-full bg-green-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-green-600 transition duration-300">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </section>

        </div>

      </main></>
  );
}
