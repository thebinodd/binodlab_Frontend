"use client";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import { images } from "./constants/images";
import Link from "next/link";
import BlogCard from "@/components/BlogCard";
import { Stack, Chip } from "@mui/material";
import GithubButton from "@/components/GithubButton";



export default function PortfolioPage() {

  const Router = useRouter();

  //Toast
  const notify = () =>
    toast.error("Enter Something to Send", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });



  const scrollToAboutMe = () => {
    const el = document.getElementById("about_me");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };
    const scrollToResources = () => {
    const el = document.getElementById("resources");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };
    const scrollToProjects = () => {
    const el = document.getElementById("projects");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };
      const scrollToConnect = () => {
    const el = document.getElementById("connect");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };


  return (
    <div className="font-sans bg-gradient-to-r from-[#FFFCF4] to-[#F0F6EE]  overflow-x-hidden">
      <ToastContainer />

      <div className="homepage  text-black  w-screen  flex flex-col items-start  justify-between lg:justify-evenly ">

        <div className="navbar border-b-4 rounded-sm  neoBrutalism h-[5vh] lg:h-[7vh] w-[90vw] mx-[5vw] py-5 flex flex-row justify-between  items-center from-[#FFFCF4] to-[#F0F6EE]">

          <div className="logoSide">
            <h1 className="flex flex-row items-center lg:gap-1"><span className="text-green-600 lg:text-2xl lg:flex hidden text-md">&lt;</span> <span className="lg:text-2xl lg:flex hidden text-md">/</span> <span className="text-red-500 lg:flex hidden text-md lg:text-2xl">&gt;</span> <Link href="#" className="lg:text-2xl neoBrutalism font-semibold lg:cursor-none text-neutral-700  lg:px-4 text-sm">Binod Sharma</Link> </h1>
          </div>

          <div className="buttonsSide flex flex-row justify-evenly items-center lg:gap-5 gap-2">
            <button onClick={scrollToAboutMe} className="lg:cursor-none lg:text-lg hidden lg:flex text-sm lg:px-2">About Me</button>
            <button onClick={scrollToProjects} className="lg:cursor-none lg:text-lg text-sm lg:px-2">Projects</button>
            <button onClick={scrollToConnect} className="lg:cursor-none lg:text-lg  lg:flex text-sm lg:px-2">Connect</button>
          </div>

        </div>

        <div className="myDetails  lg:mt-5 lg:h-screeen justify-center flex lg:px-5  flex-col lg:flex-row  gap-5 items-center ">

          <div className="intro lg:h-screen w-screen flex lg:flex-row flex-col items-center lg:gap-4 gap-5 justify-evenly bg-gradient-to-r from-[#FFFCF4] to-[#F0F6EE] px-5   py-1 ">


            <div className="Hero   flex flex-col lg:h-screen justify-center   items-start gap-6 lg:gap-6">

              <h2 className="lg:text-6xl text-3xl font-bold tracking-wide text-center lg:hidden neoBrutalism mt-5 lg:mt-0">Hey, This is Binod</h2>

              <h2 className="lg:text-3xl lg:tracking-wider text-3xl font-bold hidden lg:flex text-center neoBrutalism">Hey, This is</h2>
              <h1 className='lg:text-7xl lg:tracking-wider text-5xl font-extrabold hidden lg:flex text-center -mt-5  neoBrutalismforHero'>Binod Sharma</h1>
              <h2 className='italic text-start lg:w-4/5 lg:text-xl text-slate-600 text-sm paraFont'>Hi! I am Binod. A React/React Native Full Stack Developer and AI/ML enthusiast.</h2>


              
              <div className="impButtons flex flex-row lg:mt-[10vh] gap-5 w-full  mb-1">

                <button onClick={scrollToAboutMe}
                  className="relative cursor-none group border-none bg-transparent p-0 outline-none   font-mono font-light uppercase text-base"
                >
                  <span
                    className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-25 rounded-lg transform translate-y-0.5 transition duration-600 ease-[cubic-bezier(0.3,0.7,0.4,1)] group-hover:translate-y-1 group-hover:duration-250 group-active:translate-y-px"
                  ></span>

                  <span
                    className="absolute top-0 left-0 w-full h-full rounded-lg bg-linear-to-l from-[hsl(217,33%,16%)] via-[hsl(217,33%,32%)] to-[hsl(217,33%,16%)]"
                  ></span>

                  <div
                    className="relative flex items-center justify-between lg:py-3 py-2  lg:px-6 px-2 text-lg text-white rounded-lg transform -translate-y-1 bg-linear-to-r from-[#FFD900] via-[#FFD900] to-[#FFD900] gap-3 transition duration-600 ease-[cubic-bezier(0.3,0.7,0.4,1)] group-hover:-translate-y-1.5 group-hover:duration-250 group-active:-translate-y-0.5 brightness-100 group-hover:brightness-110"
                  >
                    <span className="select-none lg:font-bold lg:text-xl text-xs text-black ">About Me</span>

                    <svg
                      viewBox="0 0 20 20"
                      fill="black"
                      className="w-5 h-5 ml-2 -mr-1 transition duration-250 group-hover:translate-x-1"
                    >
                      <path
                        clipRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        fillRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </button>
                <Link href={"https://blogs.binodlab.tech/blogs"} target="_blank"
                  className="relative group border-none bg-transparent p-0 outline-none cursor-none font-mono font-light uppercase text-base"
                >
                  <span
                    className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-25 rounded-lg transform translate-y-0.5 transition duration-600 ease-[cubic-bezier(0.3,0.7,0.4,1)] group-hover:translate-y-1 group-hover:duration-250 group-active:translate-y-px"
                  ></span>

                  <span
                    className="absolute top-0 left-0 w-full h-full rounded-lg bg-linear-to-l from-[hsl(217,33%,16%)] via-[hsl(217,33%,32%)] to-[hsl(217,33%,16%)]"
                  ></span>

                  <div
                    className="relative flex items-center justify-between lg:py-3 py-2 lg:px-6 px-2 text-lg text-white rounded-lg transform -translate-y-1 bg-linear-to-r from-[#FFD900] via-[#FFD900] to-[#FFD900] gap-3 transition duration-600 ease-[cubic-bezier(0.3,0.7,0.4,1)] group-hover:-translate-y-1.5 group-hover:duration-250 group-active:-translate-y-0.5 brightness-100 group-hover:brightness-110"
                  >
                    <span className="select-none text-xs lg:text-xl lg:font-bold text-black ">Read All Blogs</span>

                    <svg
                      viewBox="0 0 20 20"
                      fill="black"
                      className="w-5 h-5 ml-2 -mr-1 transition duration-250 group-hover:translate-x-1"
                    >
                      <path
                        clipRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        fillRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </Link>


              </div>








            </div>

            <div className="blogsSection  h-full flex justify-center ">
              <div className="LatestPosts flex flex-col justify-start items-center gap-3   ">
                <h1 className="lg:text-lg text-md neoBrutalism font-semmibold text-neutral-600">-- Read Latest Articles --</h1>
               <BlogCard
                  link={`https://blogs.binodlab.tech/blogs/leetcode-problem-153-find-minimum-in-rotated-sorted-array-using-python`}
                  title={"Leetcode Problem 153 - Find Minimum in Rotated Sorted Array using Python"}
                  excerpt={"Complete solution for Leetcode using Binary Search in Python"}
                  category={"LEETCODE"}
                  readTime="25"
                  author={"Binod Sharma"}
                  color="lime"
                  date="2/13/2026"
                />
                <BlogCard
                  link={`https://blogs.binodlab.tech/blogs/why-70s-c-language-refuse-to-die-`}
                  title={"Why 70s C Language Refuse to Die"}
                  excerpt={"The truth behind 50 Years of dominance of C Language which still refuse to get replaced."}
                  category={"C PROGRAMMING"}
                  readTime="7"
                  author={"Binod Sharma"}
                  color="orange"
                  date="2/5/2026"
                />
                <BlogCard
                  link={`https://blogs.binodlab.tech/blogs/leetcode-problem-238-product-of-array-except-self`}
                  title={"Leetcode Problem 238 - Product of Array Except Self"}
                  excerpt={"Leetcode Problem 238 - Product of Array Except Self"}
                  category={"LEETCODE"}
                  readTime="15"
                  author={"Binod Sharma"}
                  color="lime"
                  date="2/9/2026"

                />
              </div>
            </div>
          </div>
        </div>


        {/* Projects Section */}
        <h1 className="lg:text-4xl text-2xl neoBrutalism mt-[5vh] w-screen text-center">My Recent Works : </h1>
        <section id="projects" className=" bg-gradient-to-r from-[#FFFCF4] to-[#F0F6EE]  w-screen h-auto flex-col">

          <div className="grid  grid-cols-1 py-10 lg:px-8 px-4 md:grid-cols-2 lg:grid-cols-3 gap-6  lg:max-w-[80vw] mx-auto ">
            {[
              {
                title: "Data Analysis Of IPL",
                isCompleted: false,
                description:
                  "The website showing numeric and graphical stats of Indian Premier League with the help of Pandas and Next Js",
                githubLink: "https://github.com/thebinodd/data-analysis-of-IPL"
              },
              {
                title: "BinodLab Blogs",
                isCompleted: true,
                description:
                  "Blogging platform built with  dynamic routing, SEO optimization, and a user-friendly interface for sharing tech insights and CS Blogs",
                link: "https://blogs.binodlab.tech/blogs",
                githubLink: null
              },
              {
                title: "Authentication",
                isCompleted: true,
                description:
                  "Ready to use custom web authentication based on NextAuth and JWT for time-based session and Email Sending feature.",
                githubLink: "https://github.com/binnoodx/Authentication"
              },
              {
                title: "BeatIOE",
                isCompleted: true,
                description:
                  "Quiz platform for engineering students. Full-stack app with question feeds, ranking, solutions, and user authentication.",
                link: "https://beatioe.vercel.app",
                githubLink: "https://github.com/binnoodx/beatIOE.com"
              },

              {
                title: "AI Resume Analysis",
                isCompleted: true,
                description:
                  "Using Openrouter Tokens, this website takes pdf and extract text and recieve feedback from AI ",
                link: "https://airesume.binodlab.tech",
                githubLink: "https://github.com/thebinodd/AI_ResumeAnalysis"
              },

              {
                title: "Movie App",
                isCompleted: true,
                description:
                  "App made on React Native that fetch Movie Detail from TMDB and Display Trending as well as Search Queries",
                githubLink: "https://github.com/binnoodx/MovieApp"

              }
            ].map((project, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-r lg:h-[25vh] flex flex-col justify-evenly items-start gap-3 from-[#FFFCF4] to-[#F0F6EE] text-black border-2 border-black p-6 rounded-xl shadow-md shadow-cyan-500/20 text-left"
              >
                <h3 className="text-lg font-bold text-black mb-2">

                  {(
                    <div className="flex flex-row justify-center items-center gap-1 text-sm">
                      <h1 className="lg:text-xl text-lg font-semibold lg:font-bold cursor-none" >
                        {project.title}
                      </h1>
                      <Stack spacing={1} sx={{ alignItems: 'center' }}>
                        <Stack direction="row" spacing={0}>
                          {project.isCompleted ? <Chip label="Completed" className="lg:scale-75 scale-60" color="success" /> : <Chip className="scale-75" label="Working" color="primary" />}

                        </Stack>

                      </Stack>

                      {project.link && (
                        <Link target="_blank" href={project.link} className="italic font-normal lg:text-lg underline cursor-none">
                          Live →
                        </Link>
                      )}



                    </div>
                  )}
                </h3>
                <p className="text-black text-sm lg:text-sm">{project.description}</p>
                {
                  project.githubLink && (
                    <GithubButton params={{ link: project.githubLink }} />
                  )
                }
              </div>
            ))}
          </div>
        </section>






        {/* About me Section */}
        <div id="about_me" className="aboutMeSection lg:px-[10vw] h-auto w-screen flex flex-col lg:flex-row lg:justify-center  justify-start items-center">



          <div id="about_me" className="gap-5  overflow-scroll lg:overflow-hidden  overflow-x-hidden   h-auto  flex lg:justify-center justify-start items-center  text-center py-10  lg:px-4  ">

            <div className="mt-3   flex justify-center items-center  text-center">


              <h1 className="text-start lg:w-4/5 text-slate-800 px-10 paraFont py-2">Hello World , This is <br></br><span className="normalFont text-4xl font-extrabold">Binod Sharma</span><br></br> An aspiring and  multidisciplinary Software Developer Engineer from Nepal. Currently, I am pursuing my Bsc. CSIT at Patan Mutliple Campus. I have high urge to build projects that doesn't even make sense. All I do is put all Creativity and Logics for best outcomes.<br></br><br></br>Behind Programming I have several hobbies like <br></br>- Competitive Programming<br></br>- Reading Novels and manga<br></br>- Playing Chess<br></br>- Touring in Bike<br></br>- Doing Maths and Physics<br></br>- Listening Music<br></br>- Photography<br></br>- Watching Anime </h1>




            </div>

          </div>

          {/* Social Handle Section */}

          <div id="connect" className=" gap-5 lg:mt-0 mt-20 text-slate-800 lg:w-1/2 w-screen flex lg:justify-center justify-start lg:items-center lg:h-auto  text-center">

            <div className="flex flex-col justify-start items-start px-5">
              <Link target="_blank" href={"https://leetcode.com/u/e1pKm0hxGM/"} className="oneByone cursor-none flex flex-row items-center mx-5 my-2 gap-3">
                <img src={images.leetcode.src} className="h-8" alt="" />
                <h1 className="paraFont"> /binod_docs </h1>
              </Link>
              <Link target="_blank" href={"https://www.pinterest.com/thebinodd/_"} className="oneByone cursor-none flex flex-row items-center mx-5 my-2 gap-3">
                <img src={images.pinterest.src} className="h-8" alt="" />
                <h1 className="paraFont"> /the_binod </h1>
              </Link>

              
              <Link target="_blank" href={"https://www.instagram.com/the_binodd"} className="oneByone cursor-none flex flex-row items-center mx-5 my-2 gap-3">
                <img src={images.instagram.src} className="h-8" alt="" />
                <h1 className="paraFont"> /the_binodd </h1>
              </Link>
              <Link target="_blank" href={"https://www.linkedin.com/in/binoddsharma"} className="oneByone cursor-none flex flex-row items-center mx-5 my-2 gap-3">
                <img src={images.linkedin.src} className="h-8" alt="" />
                <h1 className="paraFont"> /Binod Sharma </h1>
              </Link>
              <Link target="_blank" href={"https://x.com/the_binodd"} className="oneByone cursor-none flex flex-row items-center mx-5 my-2 gap-3">
                <img src={images.twitter.src} className="h-8" alt="" />
                <h1 className="paraFont"> /the_binod </h1>
              </Link>
              
              <Link target="_blank" href={"https://github.com/thebinodd"} className="oneByone cursor-none flex flex-row items-center mx-5 my-2 gap-3">
                <img src={images.github.src} className="h-8" alt="" />
                <h1 className="paraFont"> /thebinodd </h1>
              </Link>
              <Link target="_blank" href={"https://www.chess.com/member/the_binodd"} className="oneByone cursor-none flex flex-row items-center mx-5 my-2 gap-3">
                <img src={images.chess.src} className="h-8" alt="" />
                <h1 className="paraFont"> /the_binodd </h1>
              </Link>
            

            </div>

          </div>



        </div>


        {/*Footer */}
        <footer className="text-center w-screen py-6 text-slate-700  text-sm px-4">
          © {new Date().getFullYear()} Binod Sharma. All rights reserved.
        </footer>

      </div>
    </div>



  );
}
