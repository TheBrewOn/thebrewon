/* ==========================================================
   BREWON
   PREMIUM SCRIPT
========================================================== */

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";

        loader.style.pointerEvents = "none";

        setTimeout(() => {

            loader.style.display = "none";

        },1000);

    },2200);

});


/* ==========================================================
HEADER ON SCROLL
========================================================== */

const header = document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY>80){

        header.style.background="rgba(5,5,5,.82)";
        header.style.backdropFilter="blur(22px)";
        header.style.padding="16px 8%";

    }

    else{

        header.style.background="rgba(5,5,5,.45)";
        header.style.padding="22px 8%";

    }

});


/* ==========================================================
SMOOTH ACTIVE NAV
========================================================== */

const sections=document.querySelectorAll("section");
const navLinks=document.querySelectorAll("nav ul li a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const top=section.offsetTop-150;
        const height=section.clientHeight;

        if(pageYOffset>=top){

            current=section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#"+current){

            link.classList.add("active");

        }

    });

});


/* ==========================================================
COUNTER ANIMATION
========================================================== */

const counters=document.querySelectorAll(".hero-stats h2");

let counterStarted=false;

function animateCounters(){

    if(counterStarted) return;

    const hero=document.querySelector(".hero");

    const trigger=hero.offsetTop+hero.offsetHeight-250;

    if(window.scrollY+window.innerHeight>trigger){

        counterStarted=true;

        counters.forEach(counter=>{

            const text=counter.innerText;

            if(text.includes("/")) return;

            const number=parseInt(text.replace(/\D/g,""));

            if(isNaN(number)) return;

            let current=0;

            const increment=Math.ceil(number/60);

            const suffix=text.replace(/[0-9]/g,"");

            const timer=setInterval(()=>{

                current+=increment;

                if(current>=number){

                    current=number;

                    clearInterval(timer);

                }

                counter.innerText=current+suffix;

            },20);

        });

    }

}

window.addEventListener("scroll",animateCounters);


/* ==========================================================
SCROLL REVEAL
========================================================== */

const revealElements=document.querySelectorAll(

".service-card,.portfolio-card,.pricing-card,.testimonial-card,.feature,.about-card,.process-card"

);

const observer=new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";
            entry.target.style.transform="translateY(0)";
            observer.unobserve(entry.target);

        }

    });

},{
    threshold:.15
});

revealElements.forEach(el=>{

    el.style.opacity="0";
    el.style.transform="translateY(70px)";
    el.style.transition=".8s ease";

    observer.observe(el);

});


/* ==========================================================
HERO PARALLAX
========================================================== */

/* ==========================================================
FLOATING LOGO
========================================================== */

const heroLogo=document.querySelector(".hero-logo img");

let angle=0;

function floatLogo(){

    angle+=0.02;

    heroLogo.style.transform=

    `translateY(${Math.sin(angle)*8}px)`;

    requestAnimationFrame(floatLogo);

}

floatLogo();


/* ==========================================================
BUTTON RIPPLE
========================================================== */

document.querySelectorAll(".button,.primary-btn").forEach(btn=>{

    btn.addEventListener("mouseenter",()=>{

        btn.style.transform="translateY(-5px) scale(1.02)";

    });

    btn.addEventListener("mouseleave",()=>{

        btn.style.transform="translateY(0) scale(1)";

    });

});


/* ==========================================================
SCROLL INDICATOR HIDE
========================================================== */

const scrollIndicator=document.querySelector(".scroll-indicator");

window.addEventListener("scroll",()=>{

    if(window.scrollY>150){

        scrollIndicator.style.opacity="0";

    }

    else{

        scrollIndicator.style.opacity="1";

    }

});

/* ==========================================================
LUXURY CURSOR GLOW
========================================================== */

const glow=document.querySelector(".cursor-glow");

let mouseX=window.innerWidth/2;
let mouseY=window.innerHeight/2;

let glowX=mouseX;
let glowY=mouseY;

window.addEventListener("mousemove",(e)=>{

mouseX=e.clientX;
mouseY=e.clientY;

});

function animateGlow(){

glowX+=(mouseX-glowX)*0.12;
glowY+=(mouseY-glowY)*0.12;

glow.style.left=glowX+"px";
glow.style.top=glowY+"px";

requestAnimationFrame(animateGlow);

}

animateGlow();

/* Bigger glow on buttons */

document.querySelectorAll(
"a,button,.button,.primary-btn,.secondary-btn,.service-card,.portfolio-card,.pricing-card"
).forEach(item=>{

item.addEventListener("mouseenter",()=>{

glow.style.width="650px";
glow.style.height="650px";
glow.style.opacity="1";

});

item.addEventListener("mouseleave",()=>{

glow.style.width="450px";
glow.style.height="450px";
glow.style.opacity=".95";

});

});
/* ==========================================================
END
========================================================== */

/* ==========================================================
MOBILE MENU TOGGLE
========================================================== */

const hamburger=document.querySelector(".hamburger");
const navList=document.querySelector("nav ul");

if(hamburger && navList){

    hamburger.addEventListener("click",()=>{

        hamburger.classList.toggle("active");
        navList.classList.toggle("active");

    });

    navList.querySelectorAll("a").forEach(link=>{

        link.addEventListener("click",()=>{

            hamburger.classList.remove("active");
            navList.classList.remove("active");

        });

    });

}

/* ==========================================================
TESTIMONIAL SLIDER
========================================================== */

(function(){

    const slides=document.querySelectorAll(".testimonial-slide");
    const dots=document.querySelectorAll(".testimonial-dots .dot");

    if(!slides.length) return;

    let current=0;
    let timer;

    function showSlide(index){

        slides.forEach(s=>s.classList.remove("active"));
        dots.forEach(d=>d.classList.remove("active"));

        slides[index].classList.add("active");

        if(dots[index]) dots[index].classList.add("active");

        current=index;

    }

    function nextSlide(){

        const next=(current+1)%slides.length;

        showSlide(next);

    }

    function startTimer(){

        timer=setInterval(nextSlide,5000);

    }

    function resetTimer(){

        clearInterval(timer);

        startTimer();

    }

    dots.forEach(dot=>{

        dot.addEventListener("click",()=>{

            showSlide(parseInt(dot.dataset.slide));

            resetTimer();

        });

    });

    startTimer();

})();
