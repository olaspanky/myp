import React from "react";
import { gsap, Power1  } from "gsap"
import { useLayoutEffect, useRef,  } from "react";
import { ScrollTrigger } from "gsap/all";
import { TextPlugin } from "gsap/all";





export default function App() {


  const app = useRef();
  const circle = useRef();
  const headerRef = useRef();
  const textRef = useRef();
  
  

  


  
  
  
  
    // create our context. This function is invoked immediately and all GSAP animations and ScrollTriggers created during the execution of this function get recorded so we can revert() them later (cleanup)
    useLayoutEffect(() => {

      gsap.registerPlugin(ScrollTrigger)
      gsap.registerPlugin(TextPlugin)


      gsap.timeline({
        scrollTrigger:{
          trigger:'.hearedListing',
          scrub:true,
          start: 'top 70%',
          end: 'bottom top',
          markers: false,
        }
      })
      .fromTo(
        '.hearedListingdivs',{
          x: 100,
          autoAlpha: 0,
        },
        {x:0,
        autoAlpha: 1,
        duration: 4,
        stagger: 2,
        ease: Power1.out
        }
      )

      gsap.timeline({
        scrollTrigger:{
          trigger:'.cardlist',
          scrub: true,
          start: 'top 50%',
          end: 'bottom 20%',
          markers: false
        }
      })
        .fromTo(
        '.cardlistdivs',{
          opacity: 0,
          autoAlpha: 0,
        },
        {
        autoAlpha: 1,
        opacity: 1,
        duration: 4,
        delay: 0.5,
        ease: Power1.out
        }
      )

      let ctx = gsap.context(() => {
        gsap.from(headerRef.current, {
          y: 50,
          opacity: 0,
          duration: 1,
          delay:1,
          ScrollTrigger: {
            trigger: headerRef.current,
            start: 'top 80%',
            end: 'center center',
            toggleAction: 'play none none reverse'
          }
        })
        // use scoped selectors
        gsap.to(".box", { rotation: 290 });
        // or refs
        gsap.to(circle.current, { rotation: 360 });

        gsap.from(textRef.current, {
          y: 200,
          opacity: 0,
          duration: 1,
          delay: 2,
          ScrollTrigger: {
            trigger: textRef.current,
            start: 'top 80%',
            end: 'center center',
            toggleAction: 'play none none reverse'
          }
        })

        const texts = ["",'Developer', "", 'Designer',"", 'Engineer']
        const textAnimation = gsap.timeline({repeat: -1})


        texts.forEach((text, index)=>{
          textAnimation.to(textRef.current, {text: text, duration:2, delay: 0});
        })
      

        
      }, app);
      
      return () => ctx.revert();
    }, []);
  


 return (
  <div className="bg-black p-3 ">

   <nav className="flex sm:justify-center space-x-4">
  {[
    ['Portfolio', '/'],
    
  
  ].map(([title, url]) => (
    <a href={url} className="rounded-lg px-3 py-2 text-white font-medium hover:bg-slate-100 hover:text-slate-900">{title}</a>
  ))}
</nav>
  <div ref={headerRef} className=' p-0 lg:p-10 py-10  '>
            <div className=' lg:flex  '>
            <h2 className='text-5xl lg:py-2 lg:pt-20 text-white lg:font-extrabold md:text-6xl'> Hi,  <br className='hidden md:block' /> I am <br /> Olakareem <br /> Omobolarinwa</h2>
  
             <div className="relative mx-auto bg-gradient-to-b mt-4 from-blue-200 rounded-full w-80 h-80 overflow-hidden md:h-96 md:w-96">
              <img src='./meme.jpeg' alt="deved"  />
            </div>
  
            </div>
              
              <h3 ref={textRef} className=' h-5 m-3 text-2xl py-2 md:tex-3xl text-center text-teal-500 font-semibold lg:pt-4'> ...</h3>
              <p className='text-md py-5 leading-8 text-white md:text-xl max-w-xl mx-auto'> <span className='text-teal-500'>Hello!</span>  I'm a frontend developer specializing in <span className='text-teal-500'>HTML</span>, <span className='text-teal-500'>CSS</span>, and <span className='text-teal-500'>JAVASCRIPT</span>. 
              <br /> I am also vast in <span className='text-teal-500'>CSS</span> frameworks like <span className='text-teal-500'>REACTBOOTSTRAP</span> and <span className='text-teal-500'>TAILWINDCSS</span> and <span className='text-teal-500'>REACT</span>,
              the most popular <span className='text-teal-500'>JAVASCRIPT</span> framework. <br />
              I have a passion for creating visually stunning and user-friendly websites. With 3 years of experience, I pride myself on writing clean and efficient <span className='text-teal-500'>code</span>. 
              Thank you for visiting my website. Let's create something amazing together!</p>

             
  
            </div>
  
           
            
    
  
           
  
          
  
          {/* this is another section */}
  
          <section className="">
            <div>
              <h3 className='text-3xl py-1 text-white'>Services I offer</h3>
              <p className='text-md py-2 leading-8 text-white'>
                Since the beginning of my journey as a developer i have done remote work for a couple of <span className='text-teal-500 font-bold'>companies </span>  
                and colaborated in numerous <span className='text-teal-500 font-bold'>projects,</span>, as a self thought developer i am very versatile and skilled.
              </p>
              <p className='text-white'>
                I offer a wide range of services, including <span className='text-teal-500 font-bold'>Web design</span> and <span className='text-teal-500 font-bold'>Website maintenance</span>
              </p>
            </div>

            <div className="cardlist">
            <div  className='lg:flex gap-10 text-white cardlistdivs '>
              <div className='text-center p-10, rounded-xl my-10 bg-white bg-opacity-20 backdrop-blur-lg drop-shadow-lg p-3  '>
                <img src='./design.png' alt="" width={100} height={100} className="mx-auto animate-bounce"/>
                <h3 className='text-lg font-bold pt-8 pb-2'>"Code is not just a career, it's a craft."</h3>
                <p className='py-2'>
                 This motto speaks to the dedication and attention to detail that is required to be a successful developer. 
                It's not just about punching a clock and completing tasks, but about taking pride in the work that is produced and constantly striving for improvement. 
                A true developer approaches their work with the same level of care and attention as a craftsman, 
                always looking for ways to refine and perfect their creations.
                </p>
                <h4 className='py-4 text-teal-600'>Design tools i use</h4>
                <p className="text-white py-1">Photoshop</p>
                <p className="text-white py-1">FIGMA</p>
                <p className="text-white py-1">ADOBE ILLUSTRATOR </p>
              </div>
  
              <div className='text-center p-10, rounded-xl my-10 bg-white bg-opacity-20 backdrop-blur-lg drop-shadow-lg p-3 "'>
                <img src='code.png' alt="" width={100} height={100} className="mx-auto animate-bounce"/>
                <h3 className='text-lg font-bold pt-8 pb-2'> "Innovation through code."</h3>
                <p className='py-2'>
                This motto emphasizes the role that developers play in driving forward new ideas and technologies. 
                From creating innovative applications to building new platforms, code is at the heart of progress. 
                A developer who embraces this motto is always looking for ways to push the boundaries and find new solutions through their work.
                </p>
                <h4 className='py-4 text-teal-600'>PROGRAMMING TOOLS I USE</h4>
                <p className="text-white py-1">HTML</p>
                <p className="text-white py-1">CSS</p>
                <p className="text-white py-1">JAVASCRIPT </p>
              </div>
  
              <div  className='text-center p-10, rounded-xl my-10 bg-white bg-opacity-20 backdrop-blur-lg drop-shadow-lg p-3 '>
                <img alt="" src='./consulting.png' width={100} height={100} className="mx-auto animate-bounce" />
                <h3 className='text-lg font-bold pt-8 pb-2'>"Building a better future, one line of code at a time." </h3>
                <p className='py-2'>
                This motto highlights the impact that developers can have on the world around them. 
                By creating tools and platforms that improve people's lives and make the world a better place, developers have the power to shape the future in a positive way. 
                This motto speaks to the sense of purpose and responsibility that should drive every developer to create their best work.
                </p>
                <h4 className='py-4 text-teal-600'>PROGRAMMING FRAMEWORKS I USE</h4>
                <p className="text-white py-1">REACT/NEXTJS</p>
                <p className="text-white py-1">TAILWINDCSS</p>
                <p className="text-white py-1">BOOTSTRAP </p>
              </div>
  
  
            </div>
            </div>
          </section>
  
          <section>
            <div>
              <h3 className='text-3xl py-1 text-teal-500 font-bold'> Portfolio</h3>
              <p className='text-md py-2 leading-8 text-white'>
                Since the beginning of my journey as a developer i have done remote work for a couple of <span className='text-teal-500 font-bold'>companies</span> 
                and colaborated in numerous <span className='text-teal-500 font-bold'>projects,</span>, as a self thought developer i am very versatile and skilled.
              </p>
              <p className="text-white">
                I offer a wide range of services, including <span className='text-teal-500 font-bold'>Web design</span> and <span className='text-teal-500 font-bold'>Website maintenance</span>
              </p>
  
           

              <div className="hearedListing p-10">
              <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10 pt-10 hearedListingdivs">
              <div className="col-span-1"><img alt="" src="./project1.jpeg" className="rounded-lg object-cover"width={"100%"} height={"100%"} layout="responsive"/></div>
              <div className="col-span-1 grid place-content-center">
              <h3 className='text-lg font-bold pt-8 pb-2 text-white'> Spanky Blog </h3>
              <p className='py-2 text-white'>
              This is my debut blog and it was built with <span className='text-teal-500'>NEXTJS</span>, <span className='text-teal-500'>TAILWINDCSS</span>
              , <span className='text-teal-500'>Nodejs</span> and <span className='text-teal-500'>Graphcms</span>
              </p>
              <h4 className='py-4 text-teal-600'>PROGRAMMING FRAMEWORKS I USE</h4>
              <p className="text-white py-1">NEXTJS</p>
              <p className="text-white py-1">TAILWINDCSS</p>
              <p className="text-white py-1">Nodejs and GraphCms </p>

              <button className='bg-teal-500 text-white py-1 px-8 w-[20%] my-3 rounded-md'>
              <a href='https://gleaming-nougat-681ad3.netlify.app/' target="_blank">GO</a>
              </button>
              </div>
            </div>

              
              <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10 pt-10 hearedListingdivs">
              <div className="col-span-1"><img alt="" src="./project2.jpeg" className="rounded-lg object-cover"width={"100%"} height={"100%"} layout="responsive"/></div>
              <div className="col-span-1 grid place-content-center">
              
              <h3 className='text-lg font-bold pt-8 pb-2 text-white'> Bank App </h3>
              <p className='py-2 text-white'>
              This project introduced me to advanced concept in  <span className='text-teal-500'>NEXTJS</span>, <span className='text-teal-500'>TAILWINDCSS</span>
              ,  and the core<span className='text-teal-500'> jsx</span>
              </p>
              <h4 className='py-4 text-teal-600'>PROGRAMMING TOOLS I USED</h4>
              <p className="text-white py-1">NEXTJS</p>
              <p className="text-white py-1">TAILWINDCSS</p>
              <p className="text-white py-1">VSCODE</p>

          

              <button className='bg-teal-500 text-white py-1 px-8 w-[20%] my-3 rounded-md'>
              <a href='https://gleaming-gumdrop-79e9b8.netlify.app/' target="_blank">GO</a>
              </button>
              
              </div></div>

              <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10 pt-10 hearedListingdivs">
              <div className="col-span-1"><img alt="" src="./project3.jpeg" className="rounded-lg object-cover"width={"100%"} height={"100%"} layout="responsive"/></div>
              <div className="col-span-1 grid place-content-center">
              <h3 className='text-lg font-bold pt-8 pb-2 text-white'> Psychoscope </h3>
    <p className='py-2 text-white'>
    This is one of my earlier project and was an introduction to tailwindcss iw was created with  <span className='text-teal-500'>HTML</span>, <span className='text-teal-500'>TAILWINDCSS</span>
    ,  and <span className='text-teal-500'> JAVASCRIPT</span>
    </p>
    <h4 className='py-4 text-teal-600'>PROGRAMMING TOOLS I USED</h4>
    <p className="text-white py-1">NEXTJS</p>
    <p className="text-white py-1">TAILWINDCSS</p>
    <p className="text-white py-1">VSCODE</p>



    <button className='bg-teal-500 text-white py-1 px-8 w-[20%] my-3 rounded-md'>
    <a href='https://thriving-queijadas-7bf4b0.netlify.app/' target="_blank">GO</a>
    </button>
              </div></div>

              <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10 pt-10 hearedListingdivs">
              <div className="col-span-1"><img alt="" src="./project4.jpeg" className="rounded-lg object-cover"width={"100%"} height={"100%"} layout="responsive"/></div>
              <div className="col-span-1 grid place-content-center">
              
              <h3 className='text-lg font-bold pt-8 pb-2 text-white'> Ollan Pharma </h3>
    <p className='py-2 text-white'>
    This project introduced me to advanced concept in  <span className='text-teal-500'>REACT</span>, <span className='text-teal-500'>TAILWINDCSS</span>
    ,  and the core<span className='text-teal-500'> jsx</span>
    </p>
    <h4 className='py-4 text-teal-600'>PROGRAMMING TOOLS I USED</h4>
    <p className="text-white py-1">REACT</p>
    <p className="text-white py-1">TAILWINDCSS</p>
    <p className="text-white py-1">VSCODE</p>



    <button className='bg-teal-500 text-white py-1 px-8 w-[20%] my-3 rounded-md'>
    <a href='https://phenomenal-dieffenbachia-563bb7.netlify.app/' target="_blank">GO</a>
    </button>
              
              </div></div>

              <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10 pt-10 hearedListingdivs">
              <div className="col-span-1"><img alt="" src="./project5.jpeg" className="rounded-lg object-cover"width={"100%"} height={"100%"} layout="responsive"/></div>
              <div className="col-span-1 grid place-content-center">
              
              <h3 className='text-lg font-bold pt-8 pb-2 text-white'> Decode Analytics </h3>
    <p className='py-2 text-white'>
    This is an open Source project i participated in, i was responsible for the site homepage, i used  <span className='text-teal-500'>REACT</span>, <span className='text-teal-500'>TAILWINDCSS</span>
    ,  and the core<span className='text-teal-500'> Nextjs</span>
    </p>
    <h4 className='py-4 text-teal-600'>PROGRAMMING TOOLS I USED</h4>
    <p className="text-white py-1">REACT</p>
    <p className="text-white py-1">TAILWINDCSS</p>
    <p className="text-white py-1">Nextjs</p>
    <p className="text-white py-1">FIGMA</p>
    <p className="text-white py-1">VSCODE</p>


    <button className='bg-teal-500 w-[20%] text-white py-1 px-8 my-3 rounded-md'>
    <a href='https://animated-mooncake-72b289.netlify.app/' target="_blank">GO</a>
    </button>
  
              
              </div></div>


              </div>
            </div>
            </section>



      <footer>
      <div
      class="bg-neutral-300 p-4 text-center text-neutral-700 dark:bg-neutral-700 dark:text-neutral-200">
      © 2023 Copyright:
      <h1 class="text-neutral-800 dark:text-neutral-400"> Olakareem A.O</h1>

    </div>
      </footer>


            
</div>
 );
}
