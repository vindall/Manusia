const splash = document.querySelector(".splash-screen");
const body = document.getElementById("body");

document.addEventListener("DOMContentLoaded", function () {
  // navbar
  setTimeout(() => {
    splash.classList.add("display-none");
    body.style.overflow = "unset";
  }, 3000);

  setTimeout(()=>{
    splash.remove();
  }, 4000)
  const logo = document.getElementById("logoBtn");
  const synopsis = document.getElementById("synopsis");
  const crew = document.getElementById("crew");
  const watchNow = document.getElementById("watchNow");

  //sections
  const homeSection = document.querySelector(".home");
  const synopsisSection = document.querySelector(".synopsis");
  const crewSection = document.querySelector(".casts");
  const watchNowSection = document.querySelector(".watch-now");

  logo.addEventListener("click", function () {
    homeSection.scrollIntoView({ behavior: "smooth" });
  });
  synopsis.addEventListener("click", function () {
    synopsisSection.scrollIntoView({ behavior: "smooth" });
  });
  crew.addEventListener("click", function () {
    crewSection.scrollIntoView({ behavior: "smooth" });
  });
  watchNow.addEventListener("click", function () {
    watchNowSection.scrollIntoView({ behavior: "smooth" });
  });

  //Btns
  const watchBtn = document.getElementById("watchBtn");
  const learnBtn = document.getElementById("learnBtn");

  watchBtn.addEventListener("click", function () {
    console.log("a");
    watchNowSection.scrollIntoView({ behavior: "smooth" });
  });
  learnBtn.addEventListener("click", function () {
    console.log("a");
    synopsisSection.scrollIntoView({ behavior: "smooth" });
  });
});
