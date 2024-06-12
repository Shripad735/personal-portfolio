'use strict';

// element toggle function
const elementToggleFunc = function (elem) {
  elem.classList.toggle("active");
}

// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav links
navigationLinks.forEach((link) => {
  link.addEventListener("click", function () {
    const targetPage = this.innerHTML.toLowerCase();

    pages.forEach((page) => {
      if (page.dataset.page === targetPage) {
        page.classList.add("active");
      } else {
        page.classList.remove("active");
      }
    });

    navigationLinks.forEach((navLink) => {
      if (navLink === this) {
        navLink.classList.add("active");
      } else {
        navLink.classList.remove("active");
      }
    });

    window.scrollTo(0, 0);
  });
});

// Sidebar toggle functionality for mobile
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");
sidebarBtn.addEventListener("click", function () {
  elementToggleFunc(sidebar);
});
