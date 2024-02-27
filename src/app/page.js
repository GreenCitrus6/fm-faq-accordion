'use client';

import Image from "next/image";
import bgPatternDesktop from "../../public/static/images/background-pattern-desktop.svg";
import bgPatternMobile from "../../public/static/images/background-pattern-mobile.svg";
import iconPlus from "../../public/static/images/icon-plus.svg";
import iconMinus from "../../public/static/images/icon-minus.svg";
import iconStar from "../../public/static/images/icon-star.svg"
import Link from "next/link";

function toggleAnswer(questionNum) {
  let answerHtml = document.getElementById(`${questionNum}-ans`);
  
  if (answerHtml.classList.contains('h-0') && questionNum === "3") {
  // the final answer can not have a negative margin, or it will cause the accordion to be smaller than its contents and overflow
      //display answer text
        answerHtml.classList.remove('h-0', '-pt-6', 'opacity-0');
        answerHtml.classList.add('h-auto', 'mt-0', 'opacity-100')
        //remove mb from question button
        document.getElementById(`${questionNum}-button`).classList.remove('pb-6');
        //hide plus icon, show minus icon
        document.getElementById(`icon-${questionNum}-plus`).classList.add('hidden');
        document.getElementById(`icon-${questionNum}-minus`).classList.remove('hidden');
        console.log('a');
  } else if (questionNum === "3") {
    answerHtml.classList.add('h-0', '-pt-6', 'opacity-0');
    answerHtml.classList.remove('h-auto', 'mt-0', 'opacity-100');
    //add mb to question button
    document.getElementById(`${questionNum}-button`).classList.add('pb-6');
    //hide plus icon
    //hide minus icon, display plus icon
    document.getElementById(`icon-${questionNum}-minus`).classList.add('hidden');
    document.getElementById(`icon-${questionNum}-plus`).classList.remove('hidden');
  } else if (answerHtml.classList.contains('h-0') && questionNum != "3") {
    //display answer text
    answerHtml.classList.remove('h-0', '-mt-6', 'opacity-0');
    answerHtml.classList.add('h-auto', 'mt-0', 'opacity-100')
    //remove mb from question button
    document.getElementById(`${questionNum}-button`).classList.remove('pb-6');
    //hide plus icon, show minus icon
    document.getElementById(`icon-${questionNum}-plus`).classList.add('hidden');
    document.getElementById(`icon-${questionNum}-minus`).classList.remove('hidden');
  } else {
    //hide answer text
    answerHtml.classList.add('h-0', '-mt-6', 'opacity-0');
    answerHtml.classList.remove('h-auto', 'mt-0', 'opacity-100');
    //add mb to question button
    document.getElementById(`${questionNum}-button`).classList.add('pb-6');
    //hide plus icon
    //hide minus icon, display plus icon
    document.getElementById(`icon-${questionNum}-minus`).classList.add('hidden');
    document.getElementById(`icon-${questionNum}-plus`).classList.remove('hidden');
  }
}


export default function Home() {
  return (
    <div className="overflow-y-hidden">
      {/* background elements */}
      <div className="bgElements w-full h-screen bg-LightPink absolute z-0">
        <Image src={ bgPatternMobile } id="bg-image-mobile" className="w-full z-0 hidden" alt="background image" priority={ true } />
        <Image src={ bgPatternDesktop } id="bg-image-desktop" className="w-full z-0 hidden" alt="background image" priority={ true } />
      </div>

      {/* FAQ accordion */}
      <main id="accordionContainer" className="h-screen w-full grid gap-1  grid-cols-1 grid-rows-1 justify-items-center items-center z-10">
        <div id="accordionContents" className="flex flex-col justify-center items-center ">
        <section id="accordionContentsInner" className="faqAccordion col-span-1  w-full max-w-[90%] min-w-[285px] max-h-[90vh] h-[calc(1000px_+_100%)] overflow-x-hidden mx-10 px-5 pt-4 pb-5 bg-white z-20 rounded-lg shadow-sm">
          {/* FAQ HEADER */}
          <h1 className="flex items-center w-full pt-2 pb-4"><Image src={ iconStar } className="w-[25px] min-[749px]:w-[40px]" alt="star icon" /><span className="text-2xl font-extrabold pl-4 text-DarkPurple">FAQs</span></h1>
          {/* ACCORDION */}
          <section id="0-button" className="questionButton flex justify-between items-center pb-6" onClick={ () => toggleAnswer("0") }>
            <h2 className="font-bold text-DarkPurple w-3/4 py-2 text-lg leading-5 hover:cursor-pointer hover:text-purple-700 ease-out duration-300 active:text-purple-400 align-middle">What is Frontend Mentor, and how will it help me?</h2>
            <Image id="icon-0-plus" src={ iconPlus } className=" w-[35px] min-[749px]:w-[50px] hover:cursor-pointer" alt="plus" />
            <Image id="icon-0-minus" src= { iconMinus } className="hidden w-[35px] min-[749px]:w-[50px] hover:cursor-pointer" alt="minus" />
          </section>
          
          <section id="0-ans" className="questionAnswer -mt-6 opacity-0 h-0 transition-all duration-300 overflow-hidden w-full">
            <p className="text-GrayishPurple">Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It&apos;s suitable for all levels and ideal for portfolio building.</p>
          </section>
          <hr className="mt-2 pb-4 border-LightPink" />
          <section id="1-button" className="questionButton flex justify-between items-center pb-6" onClick={ () => toggleAnswer("1") }>
            <h2 className="font-bold text-DarkPurple w-3/4 py-2 text-lg leading-5 hover:cursor-pointer hover:text-purple-700 ease-out duration-300 active:text-purple-400 ">Is Frontend Mentor free?</h2>
            <Image id="icon-1-plus" src={ iconPlus } className=" w-[35px] min-[749px]:w-[50px] hover:cursor-pointer" alt="plus" />
            <Image id="icon-1-minus" src= { iconMinus } className="hidden w-[35px] min-[749px]:w-[50px] hover:cursor-pointer" alt="minus" />  
          </section>

          <section id="1-ans" className="questionAnswer -mt-6 h-0 transition-all duration-300 overflow-hidden w-full">
            <p className="text-GrayishPurple">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
          </section>
          <hr className="mt-2 pb-4 border-LightPink" />
          <section id="2-button" className="questionButton flex justify-between items-center pb-6" onClick={ () => toggleAnswer("2") }>
            <h2 className="font-bold text-DarkPurple w-3/4 py-2 text-lg leading-5 hover:cursor-pointer hover:text-purple-700 ease-out duration-300 active:text-purple-400 ">Can I use Frontend Mentor projects in my portfolio?</h2>
            <Image id="icon-2-plus" src={ iconPlus } className=" w-[35px] min-[749px]:w-[50px] hover:cursor-pointer" alt="plus" />
            <Image id="icon-2-minus" src= { iconMinus } className="hidden w-[35px] min-[749px]:w-[50px] hover:cursor-pointer" alt="minus" />
          </section>
          <section id="2-ans" className="questionAnswer -mt-6 h-0 transition-all duration-300 overflow-hidden w-full">
            <p className="text-GrayishPurple">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
          </section>
          <hr className="mt-2 pb-4 border-LightPink" />
          <section id="3-button" className="questionButton flex justify-between items-center pb-6" onClick={ () => toggleAnswer("3") }>
            <h2 className="font-bold text-DarkPurple w-3/4 py-2 text-lg leading-5 hover:cursor-pointer hover:text-purple-700 ease-out duration-300 active:text-purple-400 ">How can I get help if I&apos;m stuck on a challenge?</h2>
            <Image id="icon-3-plus" src={ iconPlus } className=" w-[35px] min-[749px]:w-[50px] hover:cursor-pointer" alt="plus" />
            <Image id="icon-3-minus" src= { iconMinus } className="hidden w-[35px] min-[749px]:w-[50px] hover:cursor-pointer" alt="minus" />
          </section>
          <section id="3-ans" className="questionAnswer -pt-6 h-0 transition-all duration-300 overflow-hidden w-full">
            <p className="text-GrayishPurple">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
          </section>
        </section>
        {/* ATTRIBUTION */}
        <h3 className="z-10 relative pt-3 px-5 text-sm text-center">Challenge by <Link href="https://www.frontendmentor.io/challenges/faq-accordion-wyfFdeBwBz" target="_blank" className="text-blue-600 hover:text-blue-300 active:text-blue-200 ease-out duration-300">Frontend Mentor</Link>, Solution coded by <Link href="https://portfolio-website-git-main-greencitrus6s-projects.vercel.app/" target="_blank" className="text-blue-600 hover:text-blue-300 active:text-blue-200 ease-out duration-300">Daniel Aadland</Link></h3>
      </div>
      </main>
    </div>
  );
}
