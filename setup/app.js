// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************

// ********** close links ************

// ********** fixed navbar ************

// ********** smooth scroll ************
// select links

//dynamic date
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

// toggle navbar
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener("click", () => {
  //   linksContainer.classList.toggle("show-links");
  const containerHeight = linksContainer.getBoundingClientRect().height;
  console.log("height container " + containerHeight);

  const linksHeight = links.getBoundingClientRect().height;
  console.log("height link " + linksHeight);

  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
});

// fixed nav bar
const nav = document.getElementById("nav");
const toTop = document.querySelector(".top-link");

window.addEventListener("scroll", () => {
  const navHeight = nav.getBoundingClientRect().height;
  //   const scrollHeight = window.pageYOffset;
  const scrollHeight = window.scrollY;
  // console.log(scrollHeight);
  if (scrollHeight > navHeight) {
    nav.classList.add("fixed-nav");
  } else {
    nav.classList.remove("fixed-nav");
  }
  if (scrollHeight > 400) {
    toTop.classList.add("show-link");
  } else {
    toTop.classList.remove("show-link");
  }
});

const scrollLinks = document.querySelectorAll(".scroll-link");

const navbar = document.getElementById("nav");
scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const id = e.currentTarget.getAttribute("href").slice(1);
    console.log(id);
    const element = document.getElementById(id);
    console.log(element);

    const navHeight = navbar.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const fixednav = navbar.classList.contains("fixed-nav");
    let position = element.offsetTop - navHeight;

    if (!fixednav) {
      position = position - navHeight;
    }
    if (navHeight > 82) {
      position = position + containerHeight;
    }
    window.scrollTo({
      left: 0,
      top: position,
    });
    linksContainer.style.height = 0;
  });
});
