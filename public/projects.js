import React from 'react'
import Image from 'next/image'
import consulting from '../public/consulting.png'
import p1 from '../public/project1.jpeg'
import p2 from '../public/project2.jpeg'
import p3 from '../public/project3.jpeg'
import p4 from '../public/project4.jpeg'
import p5 from '../public/project5.jpeg'



const projects = () => {

  return (
    <div>

    
  <main className='bg-my_bg_image h-[cover] px-10 md:px-20 scroll-smooth mb-10'>
  
  

  <nav className="flex sm:justify-center space-x-4">
{[
['Portfolio', '/'],
['resume', ''],
['Projects', '/projects'],

].map(([title, url]) => (
<a href={url} className="rounded-lg px-3 py-2 text-white font-medium hover:bg-slate-100 hover:text-slate-900">{title}</a>
))}
</nav>

    <div 
    
    className="grid lg:grid-cols-3 gap-4 opacity-0">
    <div class=" p-4">
    <div className='text-center p-10, rounded-xl my-10 bg-white bg-opacity-20 backdrop-blur-lg drop-shadow-lg h-[100%]  pt-5'>
                <Image  src={p1} width={100} height={100} className="mx-auto w-[40%] " />
                <h3 className='text-lg font-bold pt-8 pb-2'> Spanky Blog </h3>
                <p className='py-2'>
                This is my debut blog and it was built with <span className='text-teal-500'>NEXTJS</span>, <span className='text-teal-500'>TAILWINDCSS</span>
                , <span className='text-teal-500'>Nodejs</span> and <span className='text-teal-500'>Graphcms</span>
                </p>
                <h4 className='py-4 text-teal-600'>PROGRAMMING FRAMEWORKS I USE</h4>
                <p className="text-white py-1">NEXTJS</p>
                <p className="text-white py-1">TAILWINDCSS</p>
                <p className="text-white py-1">Nodejs and GraphCms </p>

                <button className='bg-teal-500 text-white py-1 px-8 m-3 rounded-md'>
                <a href='https://gleaming-nougat-681ad3.netlify.app/' target="_blank">GO</a>
                </button>
              </div>
    </div>

    


    <div class=" p-4">
    
    <div className='text-center p-10, rounded-xl my-10 bg-white bg-opacity-20 backdrop-blur-lg drop-shadow-lg h-[100%] pt-5 mb-5'>
                <Image src={p2} width={100} height={100} className="mx-auto w-[40%]" />
                <h3 className='text-lg font-bold pt-8 pb-2'> Bank App </h3>
                <p className='py-2'>
                This project introduced me to advanced concept in  <span className='text-teal-500'>NEXTJS</span>, <span className='text-teal-500'>TAILWINDCSS</span>
                ,  and the core<span className='text-teal-500'> jsx</span>
                </p>
                <h4 className='py-4 text-teal-600'>PROGRAMMING TOOLS I USED</h4>
                <p className="text-white py-1">NEXTJS</p>
                <p className="text-white py-1">TAILWINDCSS</p>
                <p className="text-white py-1">VSCODE</p>

            

                <button className='bg-teal-500 text-white py-1 px-8 m-3 rounded-md'>
                <a href='https://gleaming-gumdrop-79e9b8.netlify.app/' target="_blank">GO</a>
                </button>
              </div>
    </div>
    <div class=" p-4">
    
    <div className='text-center p-10, rounded-xl my-10 bg-white bg-opacity-20 backdrop-blur-lg drop-shadow-lg h-[100%] pt-5 mb-5'>
    <Image src={p3} width={100} height={100} className="mx-auto w-[40%]" />
    <h3 className='text-lg font-bold pt-8 pb-2'> Psychoscope </h3>
    <p className='py-2'>
    This is one of my earlier project and was an introduction to tailwindcss iw was created with  <span className='text-teal-500'>HTML</span>, <span className='text-teal-500'>TAILWINDCSS</span>
    ,  and <span className='text-teal-500'> JAVASCRIPT</span>
    </p>
    <h4 className='py-4 text-teal-600'>PROGRAMMING TOOLS I USED</h4>
    <p className="text-white py-1">NEXTJS</p>
    <p className="text-white py-1">TAILWINDCSS</p>
    <p className="text-white py-1">VSCODE</p>



    <button className='bg-teal-500 text-white py-1 px-8 m-3 rounded-md'>
    <a href='https://thriving-queijadas-7bf4b0.netlify.app/' target="_blank">GO</a>
    </button>
  </div>
    </div>


    <div class=" p-4">
    
    <div className='text-center p-10, rounded-xl my-10 bg-white bg-opacity-20 backdrop-blur-lg h-[100%] drop-shadow-lg pt-5 mb-5'>
    <Image src={p4} width={100} height={100} className="mx-auto w-[40%]" />
    <h3 className='text-lg font-bold pt-8 pb-2'> Ollan Pharma </h3>
    <p className='py-2'>
    This project introduced me to advanced concept in  <span className='text-teal-500'>REACT</span>, <span className='text-teal-500'>TAILWINDCSS</span>
    ,  and the core<span className='text-teal-500'> jsx</span>
    </p>
    <h4 className='py-4 text-teal-600'>PROGRAMMING TOOLS I USED</h4>
    <p className="text-white py-1">REACT</p>
    <p className="text-white py-1">TAILWINDCSS</p>
    <p className="text-white py-1">VSCODE</p>



    <button className='bg-teal-500 text-white py-1 px-8 m-3 rounded-md'>
    <a href='https://phenomenal-dieffenbachia-563bb7.netlify.app/' target="_blank">GO</a>
    </button>
  </div>
    </div>


    <div class=" p-4">
    
    <div className='text-center p-10, rounded-xl my-10 bg-white bg-opacity-20 backdrop-blur-lg h-[100%] drop-shadow-lg pt-5 mb-5'>
    <Image src={p5} width={100} height={100} className="mx-auto w-[40%]" />
    <h3 className='text-lg font-bold pt-8 pb-2'> Decode Analytics </h3>
    <p className='py-2'>
    This is an open Source project i participated in, i was responsible for the site homepage, i used  <span className='text-teal-500'>REACT</span>, <span className='text-teal-500'>TAILWINDCSS</span>
    ,  and the core<span className='text-teal-500'> Nextjs</span>
    </p>
    <h4 className='py-4 text-teal-600'>PROGRAMMING TOOLS I USED</h4>
    <p className="text-white py-1">REACT</p>
    <p className="text-white py-1">TAILWINDCSS</p>
    <p className="text-white py-1">Nextjs</p>
    <p className="text-white py-1">FIGMA</p>
    <p className="text-white py-1">VSCODE</p>


    <button className='bg-teal-500 text-white py-1 px-8 m-3 rounded-md'>
    <a href='https://animated-mooncake-72b289.netlify.app/' target="_blank">GO</a>
    </button>
  </div>
    </div>
  </div>
  </main>
    </div>
  )
}

export default projects
