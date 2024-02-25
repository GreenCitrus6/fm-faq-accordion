'use client';

import Image from "next/image";
import bgPatternDesktop from "../../public/static/images/background-pattern-desktop.svg";
import bgPatternMobile from "../../public/static/images/background-pattern-mobile.svg";
import iconPlus from "../../public/static/images/icon-plus.svg";
import iconMinus from "../../public/static/images/icon-minus.svg";
import iconStar from "../../public/static/images/icon-star.svg"

function toggleAnswer(answer, icon) {
  let answerHtml = document.getElementById(`${answer}`);
  
  if (answerHtml.classList.contains('h-0')) {
    //display answer text
    answerHtml.classList.remove('h-0');
    answerHtml.classList.add('h-36')

    document.getElementById(`${icon}-plus`).classList.add('hidden');
    document.getElementById(`${icon}-minus`).classList.remove('hidden');
  } else {
    answerHtml.classList.add('h-0');
    answerHtml.classList.remove('h-36');

    document.getElementById(`${icon}-minus`).classList.add('hidden');
    document.getElementById(`${icon}-plus`).classList.remove('hidden');
  }

}

export default function Home() {
  return (
    <>
      {/* background elements */}
      <div className="bgElements w-full h-screen bg-LightPink absolute z-0">
        <Image src={ bgPatternMobile } className="w-full z-0" />
      </div>

      {/* FAQ accordion */}
      <div className="accordionContainer h-screen w-full grid gap-1  grid-cols-1 grid-rows-1 justify-items-center items-center z-10 font-WorkSans">
        <section className="faqAccordion col-span-1 max-h-[90%] w-full max-w-[90%] min-w-[285px] overflow-y-scroll overflow-x-hidden mx-10 px-5 pt-4 bg-white z-10 rounded-lg shadow-sm">
          {/* FAQ HEADER */}
          <h1 className="flex items-center w-full pt-2 pb-4"><Image src={ iconStar } width={25} /><span className="text-2xl font-extrabold pl-4 text-DarkPurple">FAQs</span></h1>
          {/* ACCORDION */}
          <section className="questionButton flex justify-between items-center" onClick={ () => toggleAnswer("0-ans", "icon-0") }>
            <h2 className="font-bold text-DarkPurple w-3/4 pb-4 text-lg leading-5">What is Frontend Mentor, and how will it help me?</h2>
            <Image id="icon-0-plus" src={ iconPlus } className="" alt="plus" />
            <Image id="icon-0-minus" src= { iconMinus } className="hidden" alt="minus" />
          </section>
          
          <section id="0-ans" className="questionAnswer h-0 transition-all delay-150 duration-300 overflow-hidden w-full">
            <p className="text-GrayishPurple">Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.</p>
          </section>
          <hr className="mt-2 pb-4 border-LightPink" />
          <section className="questionButton flex justify-between items-center" onClick={ () => toggleAnswer("1-ans", "icon-1") }>
            <h2 className="font-bold text-DarkPurple w-3/4 pb-4 text-lg leading-5">Is Frontend Mentor free?</h2>
            <Image id="icon-1-plus" src={ iconPlus } className="" alt="plus" />
            <Image id="icon-1-minus" src= { iconMinus } className="hidden" alt="minus" />  
          </section>

          <section id="1-ans" className="questionAnswer questionAnswer h-0 transition-all delay-150 duration-300 overflow-hidden w-full">
            <p className="text-GrayishPurple">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
          </section>
          <hr className="mt-2 pb-4 border-LightPink" />
          <section className="questionButton flex justify-between items-center" onClick={ () => toggleAnswer("2-ans", "icon-2") }>
            <h2 className="font-bold text-DarkPurple w-3/4 pb-4 text-lg leading-5">Can I use Frontend Mentor projects in my portfolio?</h2>
            <Image id="icon-2-plus" src={ iconPlus } className="" alt="plus" />
            <Image id="icon-2-minus" src= { iconMinus } className="hidden" alt="minus" />
          </section>
          <section id="2-ans" className="questionAnswer questionAnswer h-0 transition-all delay-150 duration-300 overflow-hidden w-full">
            <p className="text-GrayishPurple">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
          </section>
          <hr className="mt-2 pb-4 border-LightPink" />
          <section className="questionButton flex justify-between items-center" onClick={ () => toggleAnswer("3-ans", "icon-3") }>
            <h2 className="font-bold text-DarkPurple w-3/4 pb-4 text-lg leading-5">How can I get help if I'm stuck on a challenge?</h2>
            <Image id="icon-3-plus" src={ iconPlus } className="" alt="plus" />
            <Image id="icon-3-minus" src= { iconMinus } className="hidden" alt="minus" />
          </section>
          <section id="3-ans" className="questionAnswer questionAnswer h-0 transition-all delay-150 duration-300 overflow-hidden w-full">
            <p className="text-GrayishPurple">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
          </section>
        </section>
      </div>
      
    </>
  );
}
