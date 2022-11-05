// Scroll to the top, every page reload
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

//Typewritting Effect
const typed = new Typed("#typed", {
  stringsElement: "#typed-strings",
  typeSpeed: 60,
  loop: true,
});

//Adding Animation
const sectionTitles = document.querySelectorAll(".section-title");

const mainTitleObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > 0) {
      entry.target.style.animation = `movingX 0.75s ease-in-out`;
    } else {
      entry.target.style.animation = "none";
    }
  });
});

for (const entry of sectionTitles) {
  mainTitleObserver.observe(entry);
}

//Get all nodes with section-item class
const sectionItems = document.querySelectorAll(" .section-item");

const sectionItemObserver = new IntersectionObserver((entries, observer) => {
  //Looping in each nodes (per section-item)
  entries.forEach((entry) => {
    if (entry.intersectionRatio > 0) {
      entry.target.style.animation = `movingY 1.5s ease-in-out`;

      observer.unobserve(entry.target);
    }
  });
});

//Loop to all nodes and observe
for (const entry of sectionItems) {
  sectionItemObserver.observe(entry);
}

const skills = document.querySelectorAll("#skills li");

const skillsObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > 0) {
      entry.target.style.animation = `movingX .5s ease-in-out`;
      observer.unobserve(entry.target);
    }
  });
});

for (const entry of skills) {
  skillsObserver.observe(entry);
}

const skillsDesktop = document.querySelectorAll(".skills-column div");

const skillsDesktopObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > 0) {
      entry.target.style.animation = `movingY .7s ease-in-out`;

      observer.unobserve(entry.target);
    }
  });
});

for (const entry of skillsDesktop) {
  skillsDesktopObserver.observe(entry);
}

//Floating Msg icon
const floatingMsg = document.querySelector(".floating-msg");
const mainMenu = document.querySelector(".menu");

const floatingMsgObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      floatingMsg.style.animation = "fadeOut 0.3s forwards";
    } else {
      floatingMsg.style.animation = "fadeIn 0.8s forwards";
    }
  });
});

//Observes if the menu is not visible, floating msg icon will be visible
floatingMsgObserver.observe(mainMenu);
