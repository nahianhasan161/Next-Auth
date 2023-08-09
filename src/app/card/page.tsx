import Image from 'next/image';
import Link from 'next/link';
import * as React from 'react';
import { Rajdhani } from 'next/font/google';
export interface ICardPageProps {
}

const rajdhani = Rajdhani({subsets: ["devanagari"],weight:["300","400","500","600","700"] }  )
export default function CardPage (props: ICardPageProps) {
    
  return (
    
    <section className={`${rajdhani.className} flex justify-center items-center h-screen md:p-10 p-0 bg-[#13141E]`}>
      
      
      <div 
      className='flex md:flex-row flex-col items-center md:justify-around justify-center
      bg-[#5231d4] w-[300px] md:w-full md:h-[280px] rounded-md gap-[15px] p-[30px] md:p-[55px] text-white
      bg-[url("https://seedify.fund/_next/static/media/circles-min.bed410cb.svg")] bg-center bg-cover'
      style={{backdropFilter: 'blur(21px)'}}
      >
            <div>
                <h1 className='font-bold text-[40px] md:text-5xl '>Apply as a Project</h1>
                <p 
                className='text-lg md:text-xl  max-w-[210px] md:max-w-[500px] '
                style={{color: 'hsla(0,0%,100%,.71)'}}
                >Do you have an amazing collection that you would love to launch with Seedify? Apply today!
</p>
            </div>
            <Link
             className='flex justify-around items-center cursor transition-all ease-out bg-slate-100/10 hover:bg-slate-100/20
              w-[230px] md:w-[246px] md:h-[61px] h-[60px] rounded-lg font-bold'
             
             href={"/"}
             >Apply Now 
                 <Image className="w-[21px]" src={"https://seedify.fund/_next/image?url=%2Fino%2Farrow.png&w=32&q=75"} alt='arrow' width={21} height={13}/>
                {/* <svg
                className='fill-white w-[30px] '
                 xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 512 512" id="right-arrow"><g data-name="<Group>"><polygon points="278.249 356.851 292.391 370.993 407.385 256 292.391 141.007 278.249 155.149 369.1 246 105 246 105 266 369.1 266 278.249 356.851" data-name="<Path>"></polygon></g></svg>
                  */}
            </Link>
      </div>
    </section>
    
  );
}
