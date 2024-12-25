"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger} from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import { Helmet } from 'react-helmet';


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

  return (
    <><></><Helmet>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    </Helmet><main className="w-[1300px] sm:w-screen sm:h-screen">
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
        <div className="w-screen h-[500px]  flex flex-row justify-start item-center overflow-hidden " id="box1">
          <h3 className="text-[400px] w-fit h-fit uppercase text-center bg-clip-text text-transparent font-serif whitespace-nowrap bg-gradient-to-t from-pink-700 via-amber-800 to-violet-800 sm:font-merienda">
            Welcome to my Portfolio
          </h3>
        </div>

        <div className="w-fit h-fit pb-10 flex flex-col ">
          <h1 className="text-3xl translate-x-28 sm:translate-x-24 translate-y-16 font-merienda sm:font-sans text-teal-950 bg-teal-500 w-fit p-2 sm:rounded-e-full " id="skills">My Skills</h1>
          <h2 className="w-fit translate-y-32 translate-x-10 sm:translate-x-24 sm:translate-y-32 font-bold text-6xl sm:text-8xl transition-transform duration-500 hover:scale-110 underline underline-offset-8 decoration-green-400 font-m bg-gradient-to-tr from-yellow-500 to-purple-500  bg-clip-text text-transparent sm:animate-none animate-pulse">Frontend</h2>
          <div className="sm:w-screen grid grid-cols-1 sm:h-fit sm:grid sm:grid-cols-3 gap-y-5 place-items-center justify-items-center mt-44 text-black sm:ml-0 ">

            <div className="bg-sky-700 rounded-2xl shadow-a shadow-sky-500 outline outline-slate-400 -outline-offset-8 sm:-ml-0 -ml-72 sm:mr-0 ">
              <div className="group overflow-hidden relative after:duration-500 before:duration-500  duration-500 hover:after:duration-500 hover:after:translate-x-24 hover:before:translate-y-12 hover:before:-translate-x-32 hover:duration-500 after:absolute after:w-24 after:h-24 after:bg-sky-700 after:rounded-full  after:blur-xl after:bottom-32 after:right-16  before:absolute before:w-20 before:h-20 before:bg-sky-400 before:rounded-full  before:blur-xl before:top-20 before:right-16  hover:rotate-12 flex justify-center items-center h-56 w-80  bg-neutral-900 rounded-2xl outline outline-slate-400 -outline-offset-8">
                <div className="z-10 flex flex-col items-center gap-2">
                  <span className="text-slate-400 sm:text-6xl text-5xl font-bold">HTML</span>
                </div>
              </div>
            </div>

            <div className="bg-green-800 rounded-2xl shadow-a shadow-green-500 outline outline-slate-400 -outline-offset-8 -ml-72">
              <div className="group overflow-hidden relative after:duration-500 before:duration-500  duration-500 hover:after:duration-500 hover:after:translate-x-24 hover:before:translate-y-12 hover:before:-translate-x-32 hover:duration-500 after:absolute after:w-24 after:h-24 after:bg-green-700 after:rounded-full  after:blur-xl after:bottom-32 after:right-16  before:absolute before:w-20 before:h-20 before:bg-green-400 before:rounded-full  before:blur-xl before:top-20 before:right-16  hover:rotate-12 flex justify-center items-center h-56 w-80  bg-neutral-900 rounded-2xl outline outline-slate-400 -outline-offset-8">
                <div className="z-10 flex flex-col items-center gap-2">
                  <span className="text-slate-400 sm:text-6xl text-5xl font-bold">NEXT.js</span>
                </div>
              </div>
            </div>

            <div className=" bg-yellow-800 rounded-2xl shadow-a shadow-yellow-500 outline outline-slate-400 -outline-offset-8 sm:-ml-96 sm:mr-44 -ml-72">
              <div className="group overflow-hidden relative after:duration-500 before:duration-500  duration-500 hover:after:duration-500 hover:after:translate-x-24 hover:before:translate-y-12 hover:before:-translate-x-32 hover:duration-500 after:absolute after:w-24 after:h-24 after:bg-yellow-700 after:rounded-full  after:blur-xl after:bottom-32 after:right-16  before:absolute before:w-20 before:h-20 before:bg-yellow-400 before:rounded-full  before:blur-xl before:top-20 before:right-16  hover:rotate-12 flex justify-center items-center h-56 w-80  bg-neutral-900 rounded-2xl outline outline-slate-400 -outline-offset-8">
                <div className="z-10 flex flex-col items-center gap-2">
                  <span className="text-slate-400 sm:text-6xl text-5xl font-bold">React.js</span>
                </div>
              </div>
            </div>


            <div className=" sm:w-fit bg-red-900 rounded-2xl shadow-a shadow-red-500 outline outline-slate-400 -outline-offset-8  sm:ml-24 sm:mr-0 mr-72 ">
              <div className="w-fit group overflow-hidden relative after:duration-500 before:duration-500  duration-500 hover:after:duration-500 hover:after:translate-x-24 hover:before:translate-y-12 hover:before:-translate-x-32 hover:duration-500 after:absolute after:w-24 after:h-24 after:bg-red-700 after:rounded-full  after:blur-xl after:bottom-32 after:right-36  before:absolute before:w-20 before:h-20 before:bg-red-400 before:rounded-full  before:blur-xl before:top-20 before:right-36  hover:rotate-12 flex justify-center items-center h-56  bg-neutral-900 rounded-2xl outline outline-slate-400 -outline-offset-8">
                <div className="z-10 flex flex-col items-center gap-2">
                  <span className="text-slate-400 sm:text-6xl text-5xl font-bold sm:p-7 p-5">JAVASCRIPT</span>
                </div>
              </div>
            </div>

            <div className="bg-indigo-700 rounded-2xl shadow-a shadow-indigo-500 outline outline-slate-400 -outline-offset-8 sm:-mr-24 sm:ml-0 -ml-72">
              <div className="w-fit group overflow-hidden relative after:duration-500 before:duration-500  duration-500 hover:after:duration-500 hover:after:translate-x-24 hover:before:translate-y-12 hover:before:-translate-x-32 hover:duration-500 after:absolute after:w-24 after:h-24 after:bg-indigo-700 after:rounded-full  after:blur-xl after:bottom-32 after:right-52  before:absolute before:w-20 before:h-20 before:bg-indigo-400 before:rounded-full  before:blur-xl before:top-20 before:right-52  hover:rotate-12 flex justify-center items-center h-56  bg-neutral-900 rounded-2xl outline outline-slate-400 -outline-offset-8">
                <div className="z-10 flex flex-col items-center gap-2">
                  <span className="text-slate-400 sm:text-6xl text-4xl font-bold p-10">TAILWIND CSS</span>
                </div>
              </div>
            </div>

          </div>
          <h2 className=" sm:translate-x-24 sm:translate-y-32 translate-x-14 translate-y-32 font-bold text-6xl sm:text-8xl transition-transform duration-500 hover:scale-110  underline underline-offset-8 decoration-red-500 font-m  bg-gradient-to-tr from-green-500  to-red-500  bg-clip-text text-transparent sm:animate-none animate-pulse">Backend</h2>
          <div className="w-screen h-fit grid sm:grid-cols-2 grid-cols-1 gap-y-5 justify-center items-center sm:place-items-center sm:justify-items-center mt-44 text-black pb-32 ">

            <div className="w-fit  bg-sky-700 rounded-2xl shadow-a shadow-sky-500 outline outline-slate-400 -outline-offset-8 sm:-ml-60 ml-24 ">
              <div className="group overflow-hidden relative after:duration-500 before:duration-500  duration-500 hover:after:duration-500 hover:after:translate-x-24 hover:before:translate-y-12 hover:before:-translate-x-32 hover:duration-500 after:absolute after:w-24 after:h-24 after:bg-sky-700 after:rounded-full  after:blur-xl after:bottom-32 after:right-16  before:absolute before:w-20 before:h-20 before:bg-sky-400 before:rounded-full  before:blur-xl before:top-20 before:right-16  hover:rotate-12 flex justify-center items-center h-56 w-80  bg-neutral-900 rounded-2xl outline outline-slate-400 -outline-offset-8">
                <div className="z-10 flex flex-col items-center gap-2">
                  <span className="text-slate-400 sm:text-6xl text-5xl font-bold">NODE.js</span>
                </div>
              </div>
            </div>

            <div className="sm:w-fit w-fit bg-red-900 rounded-2xl shadow-a shadow-red-500 outline outline-slate-400 -outline-offset-8 sm:-translate-x-96 sm:-ml-80 ml-24 ">
              <div className="w-fit group overflow-hidden relative after:duration-500 before:duration-500  duration-500 hover:after:duration-500 hover:after:translate-x-24 hover:before:translate-y-12 hover:before:-translate-x-32 hover:duration-500 after:absolute after:w-24 after:h-24 after:bg-red-700 after:rounded-full  after:blur-xl after:bottom-32 after:right-16  before:absolute before:w-20 before:h-20 before:bg-red-400 before:rounded-full  before:blur-xl before:top-20 before:right-16  hover:rotate-12 flex justify-center items-center h-56  bg-neutral-900 rounded-2xl outline outline-slate-400 -outline-offset-8">
                <div className="z-10 flex flex-col items-center gap-2">
                  <span className="text-slate-400 text-6xl font-bold sm:p-24 p-24">SQL</span>
                </div>
              </div>
            </div>

            <div className="sm:w-fit w-fit  bg-green-800 rounded-2xl shadow-a shadow-green-500 outline outline-slate-400 -outline-offset-8 sm:ml-0  ml-5">
              <div className="w-fit group overflow-hidden relative after:duration-500 before:duration-500  duration-500 hover:after:duration-500 hover:after:translate-x-24 hover:before:translate-y-12 hover:before:-translate-x-32 hover:duration-500 after:absolute after:w-24 after:h-24 after:bg-green-700 after:rounded-full  after:blur-xl after:bottom-32 after:right-64  before:absolute before:w-20 before:h-20 before:bg-green-400 before:rounded-full  before:blur-xl before:top-20 before:right-64  hover:rotate-12 flex justify-center items-center h-56  bg-neutral-900 rounded-2xl outline outline-slate-400 -outline-offset-8">
                <div className="z-10 flex flex-col items-center gap-2">
                  <span className="text-slate-400 sm:text-6xl text-5xl font-bold sm:p-32 p-14">EXPRESS.js</span>
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
                <div></div>
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
