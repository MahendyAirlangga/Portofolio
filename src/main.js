const sections = document.querySelectorAll(".section")

document.addEventListener("scroll", function () {
    sections.forEach((section)=> {
        if(isInView(section)) {
            section.classList.add("section--visible")
        } else {
            section.classList.remove("section--visible")
        }
    })
})

function isInView(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.bottom > 0 &&
        rect.top <
        (window.innerHeight - 150 || document.documentElement.clientHeight - 150)
    )
}

console.log(sections);

// for (let i = 0; i < sections.length; i++) {
//     let windowheight = window.innerHeight;
//     // console.log(windowheight);
//     let revealtop = sections[i].getBoundingClientRect().top;
//     console.log(revealtop);
//     let revealpoint = 150;
//     // console.log(revealpoint);

//     if(revealtop < windowheight - revealpoint){
//         sections[i].classList.add('section--visible')
//     }
//     else{
//         sections[i].classList.remove('section--visible')
//     }
    
// }