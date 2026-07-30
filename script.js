// ==========================================
// BREWON WEBSITE
// SCRIPT PART 1
// ==========================================

// Wait until page is fully loaded

window.addEventListener("load", function () {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";

        loader.style.pointerEvents = "none";

        setTimeout(() => {

            loader.style.display = "none";

        },1000);

    },3000);

});


// ==========================================
// Smooth Scroll Animation
// ==========================================

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.15
});

document.querySelectorAll(".reveal").forEach((el)=>{

    observer.observe(el);

});


// ==========================================
// Navbar Blur On Scroll
// ==========================================

window.addEventListener("scroll",()=>{

const navbar=document.querySelector(".navbar");

if(!navbar) return;

if(window.scrollY>60){

navbar.style.background="rgba(5,5,5,.82)";
navbar.style.backdropFilter="blur(22px)";

}

else{

navbar.style.background="rgba(5,5,5,.45)";
navbar.style.backdropFilter="blur(18px)";

}

});
