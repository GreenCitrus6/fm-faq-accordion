# Frontend Mentor - FAQ accordion solution

This is a solution to the [FAQ accordion challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-wyfFdeBwBz). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- Hide/Show the answer to a question when the question is clicked
- Navigate the questions and hide/show answers using keyboard navigation alone
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![image](https://github.com/GreenCitrus6/fm-faq-accordion/assets/145170576/fa1e93c2-2951-48ee-a871-997095301620)


### Links

- Solution URL: [Solution on Frontend Mentor](https://www.frontendmentor.io/solutions/faq-accordion-using-reactjs-DMzBMd7ppW)
- Live Site URL: [Deployed with Vercel](https://fm-faq-accordion-8clpnvyow-greencitrus6s-projects.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- TailwindCSS
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework


### What I learned

I had some difficulty in this challenge with swapping images responsively, such as the image in the background or the plus and minus buttons upon expanding an accordion item. I solved this problem by having both images in the DOM, but toggling whether they were visible or not. For the background image I did this with a media query, and for the plus and minus icons I did this with a function that executes when a tab of the accordion menu is expanded. 


The function in question: 
```jsx
function toggleAnswer(answer, icon) {
  let answerHtml = document.getElementById(`${answer}`);
  
  if (answerHtml.classList.contains('h-0')) {
    //display answer text
    answerHtml.classList.remove('h-0');
    answerHtml.classList.add('h-36')
    //hide plus icon, show minus icon
    document.getElementById(`${icon}-plus`).classList.add('hidden');
    document.getElementById(`${icon}-minus`).classList.remove('hidden');
  } else {
    //hide answer text
    answerHtml.classList.add('h-0');
    answerHtml.classList.remove('h-36');
    //hide minus icon, display plus icon
    document.getElementById(`${icon}-minus`).classList.add('hidden');
    document.getElementById(`${icon}-plus`).classList.remove('hidden');
  }
}
```

### Continued development

It seems that Tailwind will only animate the expansion of the accordion menu if the height is explicitly defined, and not if it goes from 0 to auto. I would like to figure out a way to address this so that the accordion menu can hold text blocks of various sizes and still animate properly. I think I might have to do this with custom animation, so that might be something to learn next. 

## Author

- Website - [Daniel Aadland](https://portfolio-website-git-main-greencitrus6s-projects.vercel.app/)
- Frontend Mentor - [@GreenCitrus6](https://www.frontendmentor.io/profile/GreenCitrus6)
