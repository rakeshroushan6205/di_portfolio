document.addEventListener("DOMContentLoaded", () => {
  const data = {
    name: "Diksha Singh",
    about:
      "A Food Process Engineering student pursuing M.Tech at IIT Kharagpur, with a strong foundation in Machine Learning, Data Analysis, and Deep Learning. Experienced in food product development, post-harvest technology, and applying data science techniques to optimize processes and solve problems in food science and other domains.",
    skills: {
      areas_of_interest: [
        "Machine Learning",
        "Probability and Statistics",
        "Data Analysis",
        "Deep Learning",
        "Data Science",
        "Time Series Forecasting",
        "Data Visualization",
        "Food Product Development",
        "Functional Foods",
        "Food Safety and Quality Standards",
        "Water Quality Management Practices",
        "Food Chemistry and Microbiology",
        "Advanced Mechanical Operations in Food Processing",
        "Cooling Technology in Food Processing & Preservation",
      ],
      languages_softwares: [
        "Python",
        "SQL",
        "Ms-Excel",
        "Power BI",
        "Jupyter Notebook",
        "MySQL",
        "Design-Expert software",
      ],
      libraries: [
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Seaborn",
        "Scikit-learn",
        "TensorFlow",
        "Keras",
        "Transformers",
        "BeautifulSoup",
        "NLTK",
        "XGBoost",
        "SHAP",
        "SMOTE",
      ],
      soft_skills: [
        "Problem Solving",
        "Team Work",
        "Project Management",
        "Time Management",
        "Critical Thinking",
        "Creative Writing",
      ],
    },
    experience: [
      {
        title: "Agribusiness Management Intern",
        company: "IATR, Dehradun",
        duration: "Jun'23 - Jul'23",
        description: [
          "Gained hands-on experience in the preparation of value-added food products including jam, squash, cookies, and murabba.",
          "Learned fundamental post-harvest handling, processing, and preservation techniques to enhance shelf life and quality.",
          "Acquired understanding of supply chain management from raw material sourcing to manufacturer–retailer distribution.",
          "Developed awareness of food safety, hygiene practices, and quality standards followed in food processing units.",
        ],
        keywords: [
          "Post-Harvest Technology",
          "Food Processing",
          "Value Addition",
          "Food Safety",
        ],
      },
    ],
    projects: [
      {
        title:
          "Optimization of Flour Blends for Water Soluble and Diabetic-Friendly Food Powder",
        type: "Postgraduate Project",
        institution: "IIT Kharagpur",
        duration: "Ongoing",
        guide: "Prof. Kanishka Bhunia",
        description: [
          "Studied functional, nutritional, and physicochemical properties of multiple flours for formulation development.",
          "Designed and optimized multi-flour blends to improve water solubility and develop diabetic-friendly food powder formulations.",
          "Applied screening and Response Surface Methodology (RSM) in Design-Expert software to optimize flour blend composition.",
          "Integrated Machine learning regression and classification models using experimental data to predict glycemic index and water solubility and classify formulations as diabetic-friendly.",
        ],
        keywords: [
          "Food Product Development",
          "Machine Learning",
          "Functional Foods",
          "RSM",
          "Data Analysis",
        ],
      },
      {
        title: "Potato Leaf Disease Classification",
        type: "Course Project",
        institution: "IIT Kharagpur",
        duration: "Apr'25 - May'25",
        guide: "Prof. Kanishka Bhunia",
        description: [
          "Utilized a curated subset of the PlantVillage dataset containing potato leaf images classified into Early Blight, Late Blight, and Healthy categories.",
          "Designed and trained a Convolutional Neural Network (CNN) with image preprocessing techniques such as resizing and data augmentation to improve generalization.",
          "Achieved 97.40% validation and 96.09% test accuracy, demonstrating strong predictive power and reliability in image-based tasks.",
        ],
        keywords: [
          "Deep Learning",
          "TensorFlow",
          "Keras",
          "Python",
          "CNN",
          "NumPy",
          "Pandas",
          "Matplotlib",
        ],
      },
      {
        title: "Machine Learning-based Milk Quality Detection",
        type: "Course Project",
        institution: "IIT Kharagpur",
        duration: "Mar'25 - Apr'25",
        guide: "Prof. Kanishka Bhunia",
        description: [
          "Developed and evaluated baseline to advanced machine learning models for milk quality grading using physicochemical and sensory attributes.",
          "Improved model robustness and generalization by addressing class imbalance through SMOTE within a structured ML pipeline.",
          "Applied SHAP-based explainability to interpret model predictions, ensuring transparency and reliability for food safety applications.",
        ],
        keywords: [
          "Scikit-learn",
          "XGBoost",
          "SHAP",
          "SMOTE",
          "Pandas",
          "NumPy",
          "Machine Learning",
        ],
      },
      {
        title:
          "Text Extraction and Analysis Pipeline for Sentiment and Readability Insights",
        type: "Self Project",
        duration: "Jan'25 - Feb'25",
        description: [
          "Developed an end-to-end NLP pipeline to scrape web content, extract clean text, and perform sentiment analysis across multiple URLs.",
          "Implemented sentence and word-level tokenization using NLTK to compute sentiment polarity and basic readability metrics.",
          "Designed a structured data workflow using Pandas to store analytical results and export insights into an automated Excel report.",
        ],
        keywords: [
          "NLP",
          "NLTK",
          "Python",
          "BeautifulSoup",
          "Pandas",
          "Web Scraping",
          "Excel",
        ],
      },
      {
        title: "Retail Sales Analytics Dashboard for Blinkit Grocery Data",
        type: "Self Project",
        duration: "Nov'24 - Dec'24",
        description: [
          "Built an interactive Power BI dashboard using Blinkit grocery sales data with KPI cards, slicers, and multi-level analysis to enable end-to-end retail sales performance tracking and business insights.",
          "Designed dynamic visualizations including sales trends, category-wise and outlet-wise analysis to improve data exploration.",
          "Applied DAX measures for total sales, average sales, ratings, and interactive filtering to support decision-making.",
        ],
        keywords: ["PowerBI", "Data Visualisation", "DAX"],
      },
    ],
    education: [
      {
        degree: "M.TECH",
        field: "Food Process Engineering",
        institution: "IIT Kharagpur",
        year: 2026,
        score: "8.29 / 10 CGPA",
      },
      {
        degree: "B.TECH",
        institution: "Jawaharlal Nehru Krishi Vishwavidyalaya, Jabalpur",
        year: 2024,
        score: "8.39 / 10 CGPA",
      },
      {
        degree: "Senior Secondary Examination",
        institution: "Central Board of Secondary Education",
        year: 2020,
        score: "78.8%",
      },
      {
        degree: "Matriculation",
        institution: "Central Board of Secondary Education",
        year: 2018,
        score: "86.6%",
      },
    ],
    contact_links: {
      linkedin:
        "https://www.linkedin.com/in/diksha-singh1005/?originalSubdomain=in",
      github: null,
      email: "mailto:dikshasinghmyr2002@gmail.com",
    },
    achievements: [
      {
        type: "Award",
        description:
          "Achieved AIR-104 in Graduate Aptitude Test in Engineering (GATE) 2024.",
      },
      {
        type: "Award",
        description:
          "Awarded 62nd rank in Madhya Pradesh Pre Agriculture Test (MPPAT) 2020 for B.TECH.",
      },
      {
        type: "Certification",
        name: "Supervised Machine Learning: Regression and Classification",
        issuer: "Deep Learning.AI",
        platform: "Coursera",
      },
      {
        type: "Certification",
        name: "Machine Learning with Python",
        issuer: "IBM",
        platform: "Coursera",
      },
      {
        type: "Certification",
        name: "Python for Data Science, AI, and Development",
        issuer: "IBM",
        platform: "Coursera",
      },
      {
        type: "Certification",
        name: "Python complete course for Beginners",
        issuer: "HorizonTech",
        platform: "Udemy",
      },
      {
        type: "Position of Responsibility",
        title: "Head Girl",
        description:
          "Led the student body and organized extra-curricular activities.",
      },
      {
        type: "Position of Responsibility",
        title: "Mess Secretary",
        description:
          "Managed Rs. 1,14,000 monthly budget and meals for hostel residents.",
      },
      {
        type: "Extracurricular Activity",
        description:
          "Member of Indian Society of Agricultural Engineers (ISAE) from Jan 2022 to Jun 2024.",
      },
      {
        type: "Extracurricular Activity",
        description:
          "Member of National Service Scheme (NSS) from Jan 2021 to Jun 2023.",
      },
      {
        type: "Extracurricular Activity",
        description:
          "Participated in Hands-on Training on Tractor Driving and Maintenance organized by Department of Farm Machinery & Power Engineering and Indian Society of Agricultural Engineers Jabalpur Chapter, JNKVV, Jabalpur.",
      },
    ],
  };

  const heroNameElement = document.querySelector(".hero-title .gradient-text");
  if (heroNameElement) {
    heroNameElement.textContent = data.name;
  }
  const heroAboutElement = document.getElementById("hero-about");
  if (heroAboutElement) {
    heroAboutElement.textContent = data.about;
  }

  document.getElementById("about-content").textContent = data.about;

  const socialLinksHtml = `
        ${
          data.contact_links.linkedin
            ? `<a href="${data.contact_links.linkedin}" target="_blank" aria-label="LinkedIn"><i class="fab fa-linkedin"></i></a>`
            : `<a href="#" title="LinkedIn (Coming Soon)" aria-label="LinkedIn"><i class="fab fa-linkedin"></i></a>`
        }
        ${
          data.contact_links.github
            ? `<a href="${data.contact_links.github}" target="_blank" aria-label="GitHub"><i class="fab fa-github"></i></a>`
            : `<a href="#" title="GitHub (Coming Soon)" aria-label="GitHub"><i class="fab fa-github"></i></a>`
        }
        ${
          data.contact_links.email
            ? `<a href="mailto:${data.contact_links.email}" aria-label="Email"><i class="fas fa-envelope"></i></a>`
            : `<a href="#" title="Email (Coming Soon)" aria-label="Email"><i class="fas fa-envelope"></i></a>`
        }
    `;
  document.getElementById("hero-social-links").innerHTML = socialLinksHtml;
  document.getElementById("contact-social-links").innerHTML = socialLinksHtml;

  const skillsContent = document.getElementById("skills-content");
  const skillLevelsByCategory = {
    areas_of_interest: 78,
    languages_softwares: 92,
    libraries: 88,
    soft_skills: 84,
  };
  for (const category in data.skills) {
    const skillCategoryDiv = document.createElement("div");
    skillCategoryDiv.classList.add("skill-category", "reveal");
    const categoryTitle = category
      .replace(/_/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase());
    skillCategoryDiv.innerHTML = `<h3>${categoryTitle}</h3><ul></ul>`;
    const ul = skillCategoryDiv.querySelector("ul");
    data.skills[category].forEach((skill) => {
      const li = document.createElement("li");
      li.classList.add("skill-item");
      const level = skillLevelsByCategory[category] || 82;
      li.innerHTML = `
                <span class="skill-label">
                    <span>${skill}</span>
                    <span>${level}%</span>
                </span>
                <div class="skill-bar">
                    <span class="skill-bar-fill"></span>
                </div>
            `;
      const barFill = li.querySelector(".skill-bar-fill");
      barFill.style.setProperty("--skill-level", `${level}%`);
      ul.appendChild(li);
    });
    skillsContent.appendChild(skillCategoryDiv);
  }

  const experienceContent = document.getElementById("experience-content");
  data.experience.forEach((exp) => {
    const card = document.createElement("div");
    card.classList.add("card", "reveal");
    card.innerHTML = `
            <div class="card-content">
                <h3>${exp.title}</h3>
                <p class="meta">${exp.company} | ${exp.duration}</p>
                <ul>
                    ${exp.description
                      .map((desc) => `<li>${desc}</li>`)
                      .join("")}
                </ul>
                <div class="keywords">
                    ${exp.keywords
                      .map(
                        (keyword) => `<span class="keyword">${keyword}</span>`,
                      )
                      .join("")}
                </div>
            </div>
        `;
    experienceContent.appendChild(card);
  });

  const projectsContent = document.getElementById("projects-content");
  data.projects.forEach((project) => {
    const card = document.createElement("div");
    card.classList.add("card", "card-project", "reveal");
    card.innerHTML = `
            <div class="card-content">
                <h3>${project.title}</h3>
                <p class="meta">
                    ${project.type ? `<span>${project.type}</span>` : ""}
                    ${
                      project.institution
                        ? `<span>${project.institution}</span>`
                        : ""
                    }
                    ${
                      project.duration ? `<span>${project.duration}</span>` : ""
                    }
                    ${
                      project.guide
                        ? `<span>Guide: ${project.guide}</span>`
                        : ""
                    }
                </p>
                <ul>
                    ${project.description
                      .map((desc) => `<li>${desc}</li>`)
                      .join("")}
                </ul>
                <div class="keywords">
                    ${project.keywords
                      .map(
                        (keyword) => `<span class="keyword">${keyword}</span>`,
                      )
                      .join("")}
                </div>
            </div>
            <div class="card-overlay">
                <div class="card-overlay-inner">
                    <span class="card-overlay-label">Project Focus</span>
                    <div class="card-overlay-icons">
                        <i class="fas fa-code"></i>
                        <i class="fas fa-external-link-alt"></i>
                    </div>
                </div>
            </div>
        `;
    projectsContent.appendChild(card);
  });

  const educationContent = document.getElementById("education-content");
  data.education.forEach((edu) => {
    const card = document.createElement("div");
    card.classList.add("card", "reveal");
    card.innerHTML = `
            <div class="card-content">
                <h3>${edu.degree} ${edu.field ? `in ${edu.field}` : ""}</h3>
                <p class="meta">
                    <span>${edu.institution}</span>
                    <span>${edu.year}</span>
                    <span>Score: ${edu.score}</span>
                </p>
            </div>
        `;
    educationContent.appendChild(card);
  });

  const achievementsContent = document.getElementById("achievements-content");
  const groupedAchievements = data.achievements.reduce((acc, achievement) => {
    acc[achievement.type] = [...(acc[achievement.type] || []), achievement];
    return acc;
  }, {});

  for (const type in groupedAchievements) {
    const categoryDiv = document.createElement("div");
    categoryDiv.classList.add("achievement-category", "reveal");
    categoryDiv.innerHTML = `<h3>${type
      .replace(/_/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase())}</h3><ul></ul>`;
    const ul = categoryDiv.querySelector("ul");
    groupedAchievements[type].forEach((ach) => {
      const li = document.createElement("li");
      let icon = "";
      if (type === "Award") icon = '<i class="fas fa-trophy"></i>';
      else if (type === "Certification")
        icon = '<i class="fas fa-certificate"></i>';
      else if (type === "Position of Responsibility")
        icon = '<i class="fas fa-user-tie"></i>';
      else if (type === "Extracurricular Activity")
        icon = '<i class="fas fa-running"></i>';

      let descriptionText = ach.description;
      if (ach.name)
        descriptionText = `<strong>${ach.name}</strong> - ${descriptionText}`;
      if (ach.issuer)
        descriptionText += ` (${ach.issuer}${
          ach.platform ? `, ${ach.platform}` : ""
        })`;
      if (ach.title)
        descriptionText = `<strong>${ach.title}</strong>: ${descriptionText}`;

      li.innerHTML = `${icon} ${descriptionText}`;
      ul.appendChild(li);
    });
    achievementsContent.appendChild(categoryDiv);
  }

  document.querySelectorAll("nav a").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      document.querySelector(targetId).scrollIntoView({
        behavior: "smooth",
      });

      if (navMenu.classList.contains("active")) {
        navMenu.classList.remove("active");
        menuToggle.classList.remove("active");
      }
    });
  });

  document.querySelectorAll(".hero-actions a").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (targetId && targetId.startsWith("#")) {
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth",
          });
        }
      }
    });
  });

  const menuToggle = document.getElementById("mobile-menu");
  const navMenu = document.querySelector(".nav-list");

  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    menuToggle.classList.toggle("active");
  });

  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav .nav-list a");

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${entry.target.id}`) {
            link.classList.add("active");
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach((section) => {
    observer.observe(section);
  });

  const heroSection = document.getElementById("hero");
  const heroObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navLinks.forEach((link) => link.classList.remove("active"));
          document
            .querySelector('nav .nav-list a[href="#about"]')
            .classList.add("active");
        }
      });
    },
    { threshold: 0.7 },
  );
  heroObserver.observe(heroSection);

  const header = document.querySelector("header");
  const updateHeaderState = () => {
    if (!header) return;
    if (window.scrollY > 10) {
      header.classList.add("is-scrolled");
    } else {
      header.classList.remove("is-scrolled");
    }
  };

  updateHeaderState();
  window.addEventListener("scroll", updateHeaderState);

  const revealElements = document.querySelectorAll(".reveal");
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.18 },
  );

  revealElements.forEach((element) => revealObserver.observe(element));

  const skillBarFills = document.querySelectorAll(".skill-bar-fill");
  const skillsObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
          skillsObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.4 },
  );

  skillBarFills.forEach((bar) => skillsObserver.observe(bar));
});
