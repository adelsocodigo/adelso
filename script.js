document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".site-header");
  const menuButton = document.querySelector(".menu-toggle");
  const nav = document.querySelector("#site-nav");
  const yearNodes = document.querySelectorAll("[data-current-year]");

  yearNodes.forEach((node) => {
    node.textContent = new Date().getFullYear();
  });

  if (!header || !menuButton || !nav) {
    return;
  }

  const closeMenu = () => {
    header.classList.remove("is-open");
    document.body.classList.remove("nav-locked");
    menuButton.setAttribute("aria-expanded", "false");
  };

  const openMenu = () => {
    header.classList.add("is-open");
    document.body.classList.add("nav-locked");
    menuButton.setAttribute("aria-expanded", "true");
  };

  menuButton.addEventListener("click", () => {
    const isOpen = header.classList.contains("is-open");
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 900) {
      closeMenu();
    }
  });
});
