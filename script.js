let words = document.querySelectorAll(".logo");
words.forEach((word)=>{
    let letters = word.textContent.split("");
    word.textContent="";
    letters.forEach((letter)=>{
        let span = document.createElement("span");
        span.textContent = letter;
        span.className = "letter";
        word.append(span);
        });
    });

    let CurrentWordIndex = 0;
    let maxWordIndex = words.length -1;
    words[CurrentWordIndex].style.opacity = "1";

    let changeText = ()=>{
        let currentWord = words[CurrentWordIndex];
        let nextword = CurrentWordIndex === maxWordIndex ? words[0] : words[CurrentWordIndex + 1];

        Array.from(currentWord.children).forEach((letter,i)=>{
            setTimeout(()=>{
                letter.className = "letter out";
            },i * 80);    
        });
        nextword.style.opacity="1";
        Array.from(nextword.children).forEach((letter,i)=>{
            letter.className = "letter behind";
            setTimeout(()=>{
                letter.className = "letter in";
            },340 + i * 80);    
    });
    CurrentWordIndex = CurrentWordIndex === maxWordIndex ? 0 : CurrentWordIndex + 1;
};
changeText();
setInterval(changeText,3000);

// circle skill

const circles = document.querySelectorAll('.circle');
circles.forEach(elem=>{
    var dots = elem.getAttribute("data-dots");
    var marked = elem.getAttribute("data-percent");
    var percent = Math.floor(dots*marked/100);
    var points ="";
    var rotate = 360 / dots;


    for(let i = 0; i < dots ; i++){
        points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
    }
    elem.innerHTML = points;

    const pointsMarked = elem.querySelectorAll('.points');
    for(let i = 0; i<percent ; i++){
        pointsMarked[i].classList.add('marked')
    }
})

// footer menu
let menuLi = document.querySelectorAll('header ul li a');
let section = document.querySelectorAll('section');

function activeMenu(){
    let len = section.length;
    while(--len && window.scrollY + 97 < section[len].offsetTop){}
    menuLi.forEach(sec => sec.classList.remove("active"));
    menuLi[len].classList.add("active");
}

activeMenu();
window.addEventListener("scroll",activeMenu);

// sticky navbar
const header = document.querySelector("header");
window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",window.scrollY > 50)
})

// navbar
let menuIcon = document.querySelector("#icon");
let navlist = document.querySelector(".nav");

menuIcon.onclick = ()=>{
    menuIcon.classList.toggle("bx-x");
    navlist.classList.toggle("open");
}

window.onscroll = ()=>{
    menuIcon.classList.remove("bx-x");
    navlist.classList.remove("open");
}