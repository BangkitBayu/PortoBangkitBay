
//typing text animation
const textArray = ["Student", "Backend Developer", "UI UX"];
let index = 0;
let charIndex = 0;
const typingSpeed = 180;
const eraseSpeed = 60;
const delayBetweenText = 1500;

const typingTextAnimation = document.getElementById('text');
const blinkCursorAnimation = document.getElementsByClassName("blink")[0];

function typeText() {
    if (charIndex < textArray[index].length) {
        typingTextAnimation.textContent += textArray[index].charAt(charIndex);
        charIndex++
        setTimeout(typeText, typingSpeed);
    } else {
        setTimeout(eraseText, delayBetweenText);
    };
};

function eraseText() {
    if (charIndex > 0) {
        typingTextAnimation.textContent = textArray[index].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseText, eraseSpeed)
    } else {
        index = (index + 1) % textArray.length;
        setTimeout(typeText, typingSpeed);
    };
};

document.addEventListener('DOMContentLoaded', () => {
    if (textArray.length) setTimeout(typeText, delayBetweenText);
});


// const certificateImg = document.querySelectorAll(".certificate-container .certificate-card img")
// const showImg = document.querySelector("#showImg")

// certificateImg.forEach(img => {
//     img.addEventListener("click" , e => {
//         //alert("Gambar ini sudah diklik")
//       let src = img.src;
//       let alt = img.alt
//       showImg.innerHTML = `<img src="${src}" alt="${alt} width="50% height="80%"">`
//       showImg.style.display = "inline-block";
//       e.stopPropagation()
//     })
// })

// document.addEventListener("click" , ()=> {
//     showImg.style.display = "none"
// })
