import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ScrollLogic = () => {
  useEffect(() => {
    // Add user agent
    document.documentElement.setAttribute(
      "data-useragent",
      navigator.userAgent
    );

    // Preloader logic
    document.documentElement.classList.add("ss-preload");
    window.addEventListener("load", () => {
      document.documentElement.classList.remove("ss-preload");
      document.documentElement.classList.add("ss-loaded");

      const loader = document.getElementById("loader");
      const preloader = document.getElementById("preloader");

      if (loader && preloader) {
        loader.style.display = "none";
        setTimeout(() => {
          preloader.style.display = "none";
        }, 300);
      }
    });

    // Sticky menu on scroll
    const header = document.querySelector(".s-header");
    const handleScroll = () => {
      if (window.scrollY > header.offsetTop) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    };
    window.addEventListener("scroll", handleScroll);

    // AOS init
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 300,
      once: true,
      disable: "mobile",
    });

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
};

export default ScrollLogic;
