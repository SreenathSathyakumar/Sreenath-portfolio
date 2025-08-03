document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();

    // Dark Mode Toggle
    const toggleBtn = document.getElementById('darkModeToggle');
    const currentTheme = localStorage.getItem('theme') || 'light';
    
    document.documentElement.setAttribute('data-theme', currentTheme);
    toggleBtn.innerHTML = currentTheme === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';

    toggleBtn.addEventListener('click', () => {
        const newTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        toggleBtn.innerHTML = newTheme === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    });

    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // Typing Effect for Name
    const name = "Sreenath Sathyakumar";
    const typingElement = document.querySelector('.typing-text');
    let i = 0;
    
    function typeWriter() {
        if (i < name.length) {
            typingElement.textContent += name.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        } else {
            typingElement.classList.remove('typing-text');
            typingElement.classList.add('completed'); 
        }
    }
    
    // Start typing animation after a slight delay
    setTimeout(typeWriter, 1000);

    // Skills Data
    const skills = [
        { icon: 'fa-bug', title: 'Manual Testing', description: 'Test cases, bug reporting, exploratory testing' },
        { icon: 'fa-robot', title: 'Test Automation', description: 'Selenium, Page Object Model, TestNG' },
        { icon: 'fa-code', title: 'Programming', description: ' Java for test automation' },
        { icon: 'fa-server', title: 'API Testing', description: 'Postman, RestAssured, SoapUI' },
        { icon: 'fa-database', title: 'Database Testing', description: 'SQL queries, data validation' },
        { icon: 'fa-tasks', title: 'CI/CD', description: 'Jenkins' },
        { icon: 'fa-mobile', title: 'Mobile Testing', description: 'Manual Testing,Appium' },
        
    ];

    // Populate Skills
    const skillsContainer = document.getElementById('skillsContainer');
    skills.forEach((skill, index) => {
        const skillCard = document.createElement('div');
        skillCard.className = 'skill-card';
        skillCard.innerHTML = `
            <i class="fas ${skill.icon}"></i>
            <h3>${skill.title}</h3>
            <p>${skill.description}</p>
        `;
        skillCard.style.animationDelay = `${index * 0.1}s`;
        skillsContainer.appendChild(skillCard);
    });

    // Projects Data
    const projects = [
        { 
            title: 'E-commerce Platform Testing', 
            description: 'Comprehensive testing of a large-scale e-commerce platform including functional, performance, and security testing.',
            tags: ['Selenium', 'Postman'],
            links: [
                { text: 'Case Study', url: '#' },
                { text: 'GitHub', url: 'https://github.com/SreenathSathyakumar/Selenium-Projects' }
            ]
        },
        { 
            title: 'Mobile Banking App Automation', 
            description: 'Built an Appium framework for testing a cross-platform mobile banking application.',
            tags: ['Appium', 'Java', 'JUnit'],
            links: [
                { text: 'Case Study', url: '#' },
                { text: 'wORKING...', url: '#' }
            ]
        },
        { 
            title: 'API Test Automation', 
            description: 'Created an automated test suite for REST APIs with 95% coverage.',
            tags: ['RestAssured', 'TestNG', 'Allure'],
            links: [
                { text: 'Case Study', url: '#' },
                { text: 'GitHub', url: '#' }
            ]
        }
    ];

    // Populate Projects
    const projectsContainer = document.getElementById('projectsContainer');
    projects.forEach((project, index) => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        
        projectCard.innerHTML = `
            <img src="assets/images/project-screenshot.png" alt="${project.title}" class="project-img">
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
                <div class="project-links">
                    ${project.links.map(link => `<a href="${link.url}" class="btn secondary-btn">${link.text}</a>`).join('')}
                </div>
            </div>
        `;
        projectCard.style.animationDelay = `${index * 0.15}s`;
        projectsContainer.appendChild(projectCard);
    });

    // GitHub Integration
   // if(document.querySelector('.github-calendar')) {
     //   GitHubCalendar(".github-calendar", "your-github-username", {
       //     responsive: true,
         //   tooltips: true,
           // global_stats: false
       // }).then(r => {
            // Remove the ugly "How to contribute" text
       //     document.querySelector('.calendar .float-left.text-gray')?.remove();
        //});
   // }

    // GitHub Repos
    const repos = [
        { name: 'Test Automation Framework', description: 'Selenium-based framework with Page Object Model', stars: 12, forks: 3 },
        { name: 'API Test Suite', description: 'RestAssured tests for REST APIs', stars: 8, forks: 2 },
        { name: 'Mobile Test Automation', description: 'Appium tests for iOS/Android', stars: 5, forks: 1 }
    ];

    const reposContainer = document.getElementById('reposContainer');
    repos.forEach((repo, index) => {
        const repoCard = document.createElement('div');
        repoCard.className = 'repo-card';
        repoCard.innerHTML = `
            <h4>${repo.name}</h4>
            <p>${repo.description}</p>
            <div class="repo-stats">
                <span class="repo-stat"><i class="fas fa-star"></i> ${repo.stars}</span>
                <span class="repo-stat"><i class="fas fa-code-branch"></i> ${repo.forks}</span>
            </div>
            <a href="https://github.com/SreenathSathyakumar/Selenium-Projects" class="btn primary-btn">View Repository</a>
        `;
        repoCard.style.animationDelay = `${index * 0.1}s`;
        reposContainer.appendChild(repoCard);
    });

    // Animate stats counting
    const statNumbers = document.querySelectorAll('.stat-number');
    statNumbers.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-count'));
        const duration = 2000;
        const step = target / (duration / 16);
        let count = 0;
        
        const counter = setInterval(() => {
            count += step;
            if (count >= target) {
                clearInterval(counter);
                count = target;
            }
            stat.textContent = Math.floor(count);
        }, 16);
    });

    // Back to Top Button
    const backToTopBtn = document.querySelector('.back-to-top');
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('active');
        } else {
            backToTopBtn.classList.remove('active');
        }
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Initialize particles.js
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: {
                    value: 80,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: "#ffffff"
                },
                shape: {
                    type: "circle",
                    stroke: {
                        width: 0,
                        color: "#000000"
                    }
                },
                opacity: {
                    value: 0.5,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false
                    }
                },
                size: {
                    value: 3,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 2,
                        size_min: 0.1,
                        sync: false
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: "#ffffff",
                    opacity: 0.4,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 1,
                    direction: "none",
                    random: true,
                    straight: false,
                    out_mode: "out",
                    bounce: false,
                    attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200
                    }
                }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: {
                        enable: true,
                        mode: "grab"
                    },
                    onclick: {
                        enable: true,
                        mode: "push"
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 140,
                        line_linked: {
                            opacity: 1
                        }
                    },
                    push: {
                        particles_nb: 4
                    }
                }
            },
            retina_detect: true
        });
    }

    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.skill-card, .project-card, .repo-card, .contact-card, .contact-form').forEach(element => {
        observer.observe(element);
    });
});