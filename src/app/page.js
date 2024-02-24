'use client';

import Image from "next/image";
import bgPatternDesktop from "../../public/assets/images/background-pattern-desktop.svg";
import bgPatternMobile from "../../public/assets/images/background-pattern-mobile.svg";
import iconPlus from "../../public/assets/images/icon-plus.svg";
import iconMinus from "../../public/assets/images/icon-minus.svg";
import iconStar from "../../public/assets/images/icon-star.svg"

function toggleAnswer(answer) {
  if (document.getElementById(`${answer}`).classList.contains('hidden')) {
    document.getElementById(`${answer}`).classList.remove('hidden');
  } else {
    document.getElementById(`${answer}`).classList.add('hidden');
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
      <div className="accordionContainer h-screen w-full grid gap-1  grid-cols-1 grid-rows-1 justify-items-center items-center z-10 font-sans">
        <section className="faqAccordion col-span-1 max-h-[90%] w-full max-w-[90%] overflow-scroll mx-10 bg-white z-10 rounded-lg
        ">
          <h1 className="flex items-center w-full"><Image src={ iconStar }/>FAQs</h1>

          <section className="questionButton flex justify-between items-center" onClick={ () => toggleAnswer("0-ans") }>
            <h2>What is Frontend Mentor, and how will it help me?</h2>
            <Image src={ iconPlus } />
          </section>
          <section id="0-ans" className="questionAnswer hidden">
            <p>Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.</p>
          </section>

          <section className="questionButton flex justify-between items-center" onClick={ () => toggleAnswer("1-ans") }>
            <h2>Is Frontend Mentor free?</h2>
            <Image src={ iconPlus } />
          </section>
          <section id="1-ans" className="questionAnswer hidden">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
          </section>

          <section className="questionButton flex justify-between items-center" onClick={ () => toggleAnswer("2-ans") }>
            <h2>Can I use Frontend Mentor projects in my portfolio?</h2>
            <Image src={ iconPlus } />
          </section>
          <section id="2-ans" className="questionAnswer hidden">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
          </section>

          <section className="questionButton flex justify-between items-center" onClick={ () => toggleAnswer("3-ans") }>
            <h2>How can I get help if I'm stuck on a challenge?</h2>
            <Image src={ iconPlus } />
          </section>
          <section id="3-ans" className="questionAnswer hidden">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
          </section>
        </section>
      </div>
      
    </>
  );
}
