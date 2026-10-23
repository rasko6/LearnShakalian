const mainWrap = document.getElementsByClassName('main-wrap')[0];
mainWrap.style="display: none;";
document.addEventListener("DOMContentLoaded", (event) => {
mainWrap.style.display = "block"; 
mainWrap.animate(
    [
    { opacity: 0, transform: "translateY(-50px)"},
    { opacity: 1, transform: "translateY(0px)" },
    ],
    {
        duration: 800,
        easing: 'ease-out',
        },
    );
});