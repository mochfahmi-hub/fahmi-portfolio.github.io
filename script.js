document.addEventListener("DOMContentLoaded", () => {
  /* TRANSLATION */
  const translations = {
    id: {
      navHome: "Home",
      navAbout: "Tentang",
      navSkill: "Skill",
      navProject: "Project",
      navPortfolio: "Portfolio",
      navContact: "Kontak",

      learnMore: "Pelajari",
      contactMe: "Hubungi Saya",

      aboutLabel: "Tentang Saya",
      aboutTitle: "Dari design menuju dunia programming.",
      aboutText1: "Saya adalah seorang designer yang sedang belajar programming dari nol. Karena saya sudah terbiasa dengan visual, layout, warna, dan komposisi, saya ingin mengembangkan skill tersebut menjadi kemampuan membuat website.",
      aboutText2: "Saat ini fokus saya adalah memahami dasar-dasar web development, mulai dari struktur HTML, styling menggunakan CSS, sampai interaksi sederhana menggunakan JavaScript.",

      skillLabel: "Skill Yang Dipelajari",
      skillTitle: "Fondasi awal sebagai Front-End Developer.",
      skillHtml: "Membuat struktur halaman website seperti heading, paragraf, gambar, tombol, dan section.",
      skillCss: "Mengatur warna, layout, ukuran teks, jarak, background, responsive, dan tampilan modern.",
      skillJs: "Membuat website menjadi interaktif seperti klik tombol, slider, popup, dan animasi dasar.",

      projectLabel: "Project Saya",
      projectTitle: "Beberapa project latihan pertama saya.",
      projectCard1Title: "Website Portofolio",
      projectCard1Text: "Website personal pertama saya menggunakan HTML dan CSS.",
      projectCard2Title: "Landing Page Brand",
      projectCard2Text: "Konsep landing page modern untuk kebutuhan brand, jasa, atau bisnis.",
      projectCard3Title: "UI Design to Website",
      projectCard3Text: "Latihan mengubah desain visual menjadi halaman website sederhana.",
      projectDetail: "Lihat Detail",

      portfolioLabel: "Portfolio Showcase",
      portfolioTitle: "Beberapa karya visual dan project yang sedang saya kembangkan.",

      contactLabel: "Kontak Saya",
      contactTitle: "Mari terhubung dan buat project digital yang menarik.",
      sendEmail: "Kirim Email",

      footerCtaText: "Siap belajar, eksplorasi, dan membuat website modern dari ide visual menjadi tampilan digital yang nyata.",
      startProject: "Mulai Project",
      subscribeText: "Dapatkan update project, progres belajar, dan eksplorasi web design.",

      waTitle: "Butuh bantuan?",
      waText: "Halo, saya Fahmi. Silakan hubungi saya untuk diskusi project, portfolio, atau kerja sama.",
      waButton: "Chat Sekarang"
    },

    en: {
      navHome: "Home",
      navAbout: "About",
      navSkill: "Skill",
      navProject: "Project",
      navPortfolio: "Portfolio",
      navContact: "Contact",

      learnMore: "Learn More",
      contactMe: "Contact Me",

      aboutLabel: "About Me",
      aboutTitle: "From design into the world of programming.",
      aboutText1: "I am a designer currently learning programming from zero. Since I am already familiar with visuals, layout, colors, and composition, I want to develop those skills into the ability to build websites.",
      aboutText2: "Right now, my focus is understanding the basics of web development, starting from HTML structure, CSS styling, and simple interactions using JavaScript.",

      skillLabel: "Skills I Am Learning",
      skillTitle: "My first foundation as a Front-End Developer.",
      skillHtml: "Building website page structures such as headings, paragraphs, images, buttons, and sections.",
      skillCss: "Managing colors, layout, text size, spacing, background, responsiveness, and modern visual appearance.",
      skillJs: "Making websites interactive through buttons, sliders, popups, and basic animations.",

      projectLabel: "My Projects",
      projectTitle: "Some of my first practice projects.",
      projectCard1Title: "Portfolio Website",
      projectCard1Text: "My first personal website using HTML and CSS.",
      projectCard2Title: "Brand Landing Page",
      projectCard2Text: "A modern landing page concept for brands, services, or business needs.",
      projectCard3Title: "UI Design to Website",
      projectCard3Text: "Practice turning visual design into a simple website page.",
      projectDetail: "View Detail",

      portfolioLabel: "Portfolio Showcase",
      portfolioTitle: "Some visual works and projects I am currently developing.",

      contactLabel: "Contact Me",
      contactTitle: "Let’s connect and build an exciting digital project.",
      sendEmail: "Send Email",

      footerCtaText: "Ready to learn, explore, and build modern websites from visual ideas into real digital interfaces.",
      startProject: "Start Project",
      subscribeText: "Get updates about projects, learning progress, and web design exploration.",

      waTitle: "Need help?",
      waText: "Hi, I’m Fahmi. Feel free to contact me for project discussion, portfolio, or collaboration.",
      waButton: "Chat Now"
    }
  };

  /* GLOBAL ELEMENTS */
  const body = document.body;

  /* THEME ELEMENTS */
  const themeToggle = document.getElementById("themeToggle");
  const themeIcon = document.getElementById("themeIcon");

  /* HERO ELEMENTS */
  const heroSlides = document.querySelectorAll(".hero-slide");
  const heroPrev = document.getElementById("heroPrev");
  const heroNext = document.getElementById("heroNext");
  const heroKicker = document.getElementById("heroKicker");
  const heroTitle = document.getElementById("heroTitle");
  const heroSubtitle = document.getElementById("heroSubtitle");
  const heroCategory = document.getElementById("heroCategory");
  const heroMenuTrack = document.getElementById("heroMenuTrack");
  const heroContent = document.querySelector(".hero-dji-content");

  /* LANGUAGE ELEMENTS */
  const languageToggle = document.getElementById("languageToggle");
  const languageLabel = document.getElementById("languageLabel");

  let currentLanguage = localStorage.getItem("language") || "id";
  let currentHero = 0;
  let currentVisualIndex = 1;
  let isHeroAnimating = false;

  const heroItemHeight = 34;

  function getHeroText(slide, key) {
    const suffix = currentLanguage === "id" ? "Id" : "En";
    return slide.dataset[`${key}${suffix}`] || "";
  }

  function applyLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem("language", lang);
    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach(element => {
      const key = element.dataset.i18n;

      if (translations[lang][key]) {
        element.textContent = translations[lang][key];
      }
    });

    if (languageLabel) {
      languageLabel.textContent = lang === "id" ? "ID / EN" : "EN / ID";
    }

    const activeSlide = heroSlides[currentHero];

    if (activeSlide) {
      heroKicker.textContent = getHeroText(activeSlide, "kicker");
      heroTitle.textContent = getHeroText(activeSlide, "title");
      heroSubtitle.textContent = getHeroText(activeSlide, "subtitle");
      heroCategory.textContent = getHeroText(activeSlide, "category");
    }

    setupHeroMenu();
  }

  /* THEME */
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme) {
    body.setAttribute("data-theme", savedTheme);
    updateThemeIcon(savedTheme);
  } else {
    updateThemeIcon(body.getAttribute("data-theme"));
  }

  function updateThemeIcon(theme) {
    if (!themeIcon) return;

    if (theme === "dark") {
      themeIcon.classList.remove("fa-moon");
      themeIcon.classList.add("fa-sun");
    } else {
      themeIcon.classList.remove("fa-sun");
      themeIcon.classList.add("fa-moon");
    }
  }

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const currentTheme = body.getAttribute("data-theme");
      const newTheme = currentTheme === "dark" ? "light" : "dark";

      body.setAttribute("data-theme", newTheme);
      localStorage.setItem("theme", newTheme);
      updateThemeIcon(newTheme);
    });
  }

  /* HERO MANUAL CAROUSEL */
  heroSlides.forEach(slide => {
    const imagePath = slide.dataset.image;
    slide.style.backgroundImage = `url('${imagePath}')`;
  });

  function getLoopIndex(index) {
    if (index < 0) return heroSlides.length - 1;
    if (index >= heroSlides.length) return 0;
    return index;
  }

  function setupHeroMenu() {
    if (!heroMenuTrack || heroSlides.length === 0) return;

    heroMenuTrack.innerHTML = "";

    const lastSlide = heroSlides[heroSlides.length - 1];
    const firstSlide = heroSlides[0];

    const menuData = [
      {
        realIndex: heroSlides.length - 1,
        title: getHeroText(lastSlide, "menuTitle"),
        clone: true
      },
      ...Array.from(heroSlides).map((slide, index) => ({
        realIndex: index,
        title: getHeroText(slide, "menuTitle"),
        clone: false
      })),
      {
        realIndex: 0,
        title: getHeroText(firstSlide, "menuTitle"),
        clone: true
      }
    ];

    menuData.forEach((item, visualIndex) => {
      const button = document.createElement("button");

      button.className = "hero-menu-item";
      button.type = "button";
      button.dataset.realIndex = item.realIndex;
      button.dataset.visualIndex = visualIndex;
      button.innerHTML = `<span></span>${item.title}`;

      button.addEventListener("click", () => {
        if (isHeroAnimating) return;

        const targetIndex = Number(button.dataset.realIndex);

        if (targetIndex === currentHero) return;

        let direction = "next";

        if (
          targetIndex === getLoopIndex(currentHero - 1) ||
          targetIndex < currentHero
        ) {
          direction = "prev";
        }

        updateHero(targetIndex, direction);
      });

      heroMenuTrack.appendChild(button);
    });

    currentVisualIndex = currentHero + 1;
    moveHeroMenu(false);
    updateHeroMenuClasses();
  }

  function moveHeroMenu(withTransition = true) {
    if (!heroMenuTrack) return;

    const centerOffset = heroItemHeight;
    const moveY = centerOffset - currentVisualIndex * heroItemHeight;

    heroMenuTrack.style.transition = withTransition
      ? "transform 0.72s cubic-bezier(0.22, 1, 0.36, 1)"
      : "none";

    heroMenuTrack.style.transform = `translateY(${moveY}px)`;
  }

  function updateHeroMenuClasses() {
    if (!heroMenuTrack) return;

    const items = heroMenuTrack.querySelectorAll(".hero-menu-item");

    items.forEach(item => {
      const visualIndex = Number(item.dataset.visualIndex);

      item.classList.remove("active", "is-prev", "is-next", "is-hidden");

      if (visualIndex === currentVisualIndex) {
        item.classList.add("active");
      } else if (visualIndex === currentVisualIndex - 1) {
        item.classList.add("is-prev");
      } else if (visualIndex === currentVisualIndex + 1) {
        item.classList.add("is-next");
      } else {
        item.classList.add("is-hidden");
      }
    });
  }

  function updateHero(index, direction = "next") {
    if (isHeroAnimating || heroSlides.length === 0) return;

    isHeroAnimating = true;

    const newIndex = getLoopIndex(index);
    const activeSlide = heroSlides[newIndex];

    heroContent.classList.add("is-changing");

    if (direction === "next" && currentHero === heroSlides.length - 1 && newIndex === 0) {
      currentVisualIndex = heroSlides.length + 1;
    } else if (direction === "prev" && currentHero === 0 && newIndex === heroSlides.length - 1) {
      currentVisualIndex = 0;
    } else {
      currentVisualIndex = newIndex + 1;
    }

    updateHeroMenuClasses();
    moveHeroMenu(true);

    setTimeout(() => {
      currentHero = newIndex;

      heroSlides.forEach(slide => {
        slide.classList.remove("active", "from-next", "from-prev");
      });

      activeSlide.classList.add("active");
      activeSlide.classList.add(direction === "next" ? "from-next" : "from-prev");

      heroKicker.textContent = getHeroText(activeSlide, "kicker");
      heroTitle.textContent = getHeroText(activeSlide, "title");
      heroSubtitle.textContent = getHeroText(activeSlide, "subtitle");
      heroCategory.textContent = getHeroText(activeSlide, "category");

      requestAnimationFrame(() => {
        heroContent.classList.remove("is-changing");
      });
    }, 230);

    setTimeout(() => {
      if (currentVisualIndex === heroSlides.length + 1) {
        currentVisualIndex = 1;
        moveHeroMenu(false);
      }

      if (currentVisualIndex === 0) {
        currentVisualIndex = heroSlides.length;
        moveHeroMenu(false);
      }

      updateHeroMenuClasses();
      isHeroAnimating = false;
    }, 760);
  }

  if (heroNext) {
    heroNext.addEventListener("click", () => {
      updateHero(currentHero + 1, "next");
    });
  }

  if (heroPrev) {
    heroPrev.addEventListener("click", () => {
      updateHero(currentHero - 1, "prev");
    });
  }

  if (languageToggle) {
    languageToggle.addEventListener("click", () => {
      const newLanguage = currentLanguage === "id" ? "en" : "id";
      applyLanguage(newLanguage);
    });
  }

  /* WHATSAPP POPUP CLOSE */
  const waWidget = document.querySelector(".wa-widget");
  const waPopup = document.querySelector(".wa-popup");
  const waClose = document.querySelector(".wa-close");

  if (waWidget && waPopup && waClose) {
    waClose.addEventListener("click", () => {
      waPopup.style.opacity = "0";
      waPopup.style.visibility = "hidden";
      waPopup.style.pointerEvents = "none";
      waPopup.style.transform = "translateY(14px) scale(0.96)";
    });

    waWidget.addEventListener("mouseleave", () => {
      waPopup.removeAttribute("style");
    });
  }

  /* PORTFOLIO AUTO CAROUSEL */
  const carousel = document.getElementById("portfolioCarousel");
  const track = document.getElementById("portfolioTrack");
  const dotsContainer = document.getElementById("portfolioDots");
  const sliderToggle = document.getElementById("sliderToggle");

  if (carousel && track && dotsContainer && sliderToggle) {
    let originalSlides = Array.from(track.children);
    let totalSlides = originalSlides.length;
    let currentIndex = 1;
    let isPlaying = true;
    let autoplay;
    let isDragging = false;
    let startX = 0;
    let currentTranslate = 0;
    let dragDistance = 0;

    const firstClone = originalSlides[0].cloneNode(true);
    const lastClone = originalSlides[totalSlides - 1].cloneNode(true);

    firstClone.classList.add("clone");
    lastClone.classList.add("clone");

    track.appendChild(firstClone);
    track.insertBefore(lastClone, originalSlides[0]);

    let allSlides = Array.from(track.children);

    for (let i = 0; i < totalSlides; i++) {
      const dot = document.createElement("button");

      dot.classList.add("dot");
      dot.type = "button";
      dot.dataset.slide = i;

      if (i === 0) dot.classList.add("active");

      dotsContainer.appendChild(dot);
    }

    const dots = document.querySelectorAll(".dot");

    function getSlideData() {
      const slide = allSlides[0];
      const slideWidth = slide.offsetWidth;
      const gap = parseInt(window.getComputedStyle(track).gap) || 0;
      const carouselWidth = carousel.offsetWidth;
      const centerOffset = (carouselWidth - slideWidth) / 2;

      return { slideWidth, gap, centerOffset };
    }

    function updatePortfolioActiveSlide() {
      allSlides.forEach(slide => slide.classList.remove("is-active"));

      if (allSlides[currentIndex]) {
        allSlides[currentIndex].classList.add("is-active");
      }
    }

    function setPosition(withTransition = true) {
      const data = getSlideData();
      const moveAmount = currentIndex * (data.slideWidth + data.gap);
      currentTranslate = data.centerOffset - moveAmount;

      track.style.transition = withTransition
        ? "transform 1.18s cubic-bezier(0.22, 1, 0.36, 1)"
        : "none";

      track.style.transform = `translate3d(${currentTranslate}px, 0, 0)`;

      updateDots();
      updatePortfolioActiveSlide();
    }

    function updateDots() {
      let activeIndex = currentIndex - 1;

      if (activeIndex < 0) activeIndex = totalSlides - 1;
      if (activeIndex >= totalSlides) activeIndex = 0;

      dots.forEach(dot => dot.classList.remove("active"));
      dots[activeIndex].classList.add("active");
    }

    function nextSlide() {
      currentIndex++;
      setPosition(true);
    }

    function prevSlide() {
      currentIndex--;
      setPosition(true);
    }

    track.addEventListener("transitionend", event => {
      if (event.target !== track) return;

      if (allSlides[currentIndex].classList.contains("clone")) {
        if (currentIndex === allSlides.length - 1) {
          currentIndex = 1;
        }

        if (currentIndex === 0) {
          currentIndex = totalSlides;
        }

        setPosition(false);
      }
    });

    function startAutoplay() {
      autoplay = setInterval(() => {
        nextSlide();
      }, 4300);
    }

    function stopAutoplay() {
      clearInterval(autoplay);
    }

    dots.forEach(dot => {
      dot.addEventListener("click", () => {
        currentIndex = Number(dot.dataset.slide) + 1;
        setPosition(true);

        if (isPlaying) {
          stopAutoplay();
          startAutoplay();
        }
      });
    });

    sliderToggle.addEventListener("click", () => {
      if (isPlaying) {
        stopAutoplay();
        sliderToggle.innerHTML = '<i class="fa-solid fa-play"></i>';
        isPlaying = false;
      } else {
        startAutoplay();
        sliderToggle.innerHTML = '<i class="fa-solid fa-pause"></i>';
        isPlaying = true;
      }
    });

    carousel.addEventListener("pointerdown", event => {
      isDragging = true;
      startX = event.clientX;
      dragDistance = 0;

      track.style.transition = "none";
      carousel.setPointerCapture(event.pointerId);

      if (isPlaying) stopAutoplay();
    });

    carousel.addEventListener("pointermove", event => {
      if (!isDragging) return;

      dragDistance = event.clientX - startX;
      track.style.transform = `translate3d(${currentTranslate + dragDistance}px, 0, 0)`;
    });

    carousel.addEventListener("pointerup", () => {
      if (!isDragging) return;

      isDragging = false;

      if (dragDistance < -70) {
        nextSlide();
      } else if (dragDistance > 70) {
        prevSlide();
      } else {
        setPosition(true);
      }

      if (isPlaying) startAutoplay();
    });

    carousel.addEventListener("pointerleave", () => {
      if (!isDragging) return;

      isDragging = false;
      setPosition(true);

      if (isPlaying) startAutoplay();
    });

    window.addEventListener("resize", () => {
      setPosition(false);
    });

    setPosition(false);
    startAutoplay();
  }

  applyLanguage(currentLanguage);
});