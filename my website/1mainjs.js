window.addEventListener("scroll", () => 
{
    const backgroundSection = document.querySelector(".background");
    backgroundSection.style.backgroundSize = `${window.scrollY * 1.8 + 1600}px`;
    const h1Element = backgroundSection.querySelector("h1");
    h1Element.style.opacity = `${(-window.scrollY + 300) * 0.004}`;
});
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('header-scroll');
    } else {
        header.classList.remove('header-scroll');
    }
});

