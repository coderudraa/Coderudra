// Enhanced CodeRudra Platform JavaScript with Advanced Features - Fixed Version

// Application data with enhanced structure
const appData = {
  "siteInfo": {
    "name": "CodeRudra",
    "tagline": "Learn, Code, Grow",
    "description": "Master programming with comprehensive tutorials, courses, and hands-on projects",
    "email": "hello@coderudra.com",
    "phone": "+1 (555) 123-4567",
    "address": "123 Tech Street, San Francisco, CA 94107",
    "analytics": {
      "gaId": "GA_MEASUREMENT_ID",
      "gtmId": "GTM-XXXXXXX"
    },
    "newsletter": {
      "mailchimpUrl": "https://coderudra.us1.list-manage.com/subscribe/post?u=XXXXXX&id=XXXXXX",
      "apiKey": "MAILCHIMP_API_KEY_PLACEHOLDER"
    }
  },
  "blogPosts": [
    {
      "id": 1,
      "title": "Mastering JavaScript Async/Await",
      "excerpt": "Learn how to handle asynchronous operations in JavaScript effectively with modern async/await syntax and best practices.",
      "content": "Asynchronous programming is a fundamental concept in JavaScript that allows you to handle operations that take time to complete without blocking the execution of other code. The async/await syntax provides a more readable and intuitive way to work with promises.",
      "author": "Sarah Chen",
      "date": "2025-08-05",
      "category": "JavaScript",
      "readTime": "8 min read",
      "tags": ["javascript", "async", "promises", "programming"],
      "image": "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=250&fit=crop"
    },
    {
      "id": 2,
      "title": "Building RESTful APIs with Node.js",
      "excerpt": "A comprehensive guide to creating robust and scalable REST APIs using Node.js, Express, and MongoDB.",
      "content": "RESTful APIs are the backbone of modern web applications. In this comprehensive guide, we'll explore how to build scalable and maintainable APIs using Node.js and Express framework with MongoDB as our database.",
      "author": "Mike Rodriguez",
      "date": "2025-08-03",
      "category": "Backend",
      "readTime": "12 min read",
      "tags": ["nodejs", "api", "rest", "express", "mongodb"],
      "image": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=250&fit=crop"
    },
    {
      "id": 3,
      "title": "React Hooks: Complete Guide",
      "excerpt": "Master React Hooks and learn how to build functional components with state management and lifecycle methods.",
      "content": "React Hooks revolutionized the way we write React components. This complete guide covers all built-in hooks and shows you how to create custom hooks for reusable stateful logic.",
      "author": "Emily Watson",
      "date": "2025-08-01",
      "category": "React",
      "readTime": "15 min read",
      "tags": ["react", "hooks", "state", "functional-components"],
      "image": "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=300&h=200&fit=crop"
    },
    {
      "id": 4,
      "title": "Python Data Structures Fundamentals",
      "excerpt": "Understand the core data structures in Python and when to use each one for optimal performance in your applications.",
      "content": "Data structures are essential building blocks in programming. Python provides several built-in data structures that can help you organize and manipulate data efficiently in your applications.",
      "author": "Alex Thompson",
      "date": "2025-07-30",
      "category": "Python",
      "readTime": "10 min read",
      "tags": ["python", "data-structures", "lists", "dictionaries"],
      "image": "https://images.unsplash.com/photo-1526379879527-8559ecfcaec0?w=400&h=250&fit=crop"
    },
    {
      "id": 5,
      "title": "CSS Grid vs Flexbox: When to Use Each",
      "excerpt": "Learn the differences between CSS Grid and Flexbox, and discover when to use each layout method in your projects.",
      "content": "CSS Grid and Flexbox are two powerful layout systems in CSS. Understanding when to use each one can significantly improve your ability to create responsive and maintainable layouts.",
      "author": "Jordan Kim",
      "date": "2025-07-28",
      "category": "CSS",
      "readTime": "7 min read",
      "tags": ["css", "grid", "flexbox", "layout", "responsive"],
      "image": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop"
    },
    {
      "id": 6,
      "title": "Docker for Developers: Complete Guide",
      "excerpt": "Master containerization with Docker and learn how to streamline your development workflow with containers.",
      "content": "Docker has become an essential tool for modern software development. This guide covers everything from basic concepts to advanced techniques for containerizing your applications.",
      "author": "David Park",
      "date": "2025-07-25",
      "category": "DevOps",
      "readTime": "18 min read",
      "tags": ["docker", "containers", "devops", "deployment"],
      "image": "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=400&h=250&fit=crop"
    }
  ],
  "courses": [
    {
      "id": 1,
      "title": "Complete JavaScript Fundamentals",
      "description": "Master JavaScript from basics to advanced concepts including ES6+, async programming, and modern development practices.",
      "instructor": "Sarah Chen",
      "level": "Beginner",
      "duration": "8 weeks",
      "lessons": 45,
      "students": 12500,
      "rating": 4.9,
      "price": "$89",
      "progress": 75,
      "enrolled": true,
      "image": "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=300&h=200&fit=crop"
    },
    {
      "id": 2,
      "title": "React Development Bootcamp",
      "description": "Build modern web applications with React, including hooks, context, routing, and state management with Redux.",
      "instructor": "Mike Rodriguez",
      "level": "Intermediate",
      "duration": "10 weeks",
      "lessons": 60,
      "students": 8900,
      "rating": 4.8,
      "price": "$129",
      "progress": 45,
      "enrolled": true,
      "image": "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=300&h=200&fit=crop"
    },
    {
      "id": 3,
      "title": "Node.js Backend Development",
      "description": "Create scalable backend applications with Node.js, Express, MongoDB, and learn about API design and security.",
      "instructor": "Emily Watson",
      "level": "Intermediate",
      "duration": "12 weeks",
      "lessons": 55,
      "students": 6700,
      "rating": 4.7,
      "price": "$149",
      "progress": 0,
      "enrolled": false,
      "image": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=300&h=200&fit=crop"
    },
    {
      "id": 4,
      "title": "Python for Beginners",
      "description": "Start your programming journey with Python. Learn syntax, data structures, OOP, and build real projects.",
      "instructor": "Alex Thompson",
      "level": "Beginner",
      "duration": "6 weeks",
      "lessons": 35,
      "students": 15200,
      "rating": 4.9,
      "price": "Free",
      "progress": 100,
      "enrolled": true,
      "image": "https://images.unsplash.com/photo-1526379879527-8559ecfcaec0?w=300&h=200&fit=crop"
    },
    {
      "id": 5,
      "title": "Data Structures & Algorithms",
      "description": "Master essential DSA concepts for coding interviews and efficient programming. Includes practice problems and solutions.",
      "instructor": "Jordan Kim",
      "level": "Advanced",
      "duration": "14 weeks",
      "lessons": 75,
      "students": 4300,
      "rating": 4.8,
      "price": "$199",
      "progress": 25,
      "enrolled": true,
      "image": "https://images.unsplash.com/photo-1509966756634-9c23dd6e6815?w=300&h=200&fit=crop"
    },
    {
      "id": 6,
      "title": "Full-Stack Web Development",
      "description": "Complete web development course covering HTML, CSS, JavaScript, React, Node.js, and database design.",
      "instructor": "David Park",
      "level": "Beginner",
      "duration": "20 weeks",
      "lessons": 120,
      "students": 9800,
      "rating": 4.9,
      "price": "$299",
      "progress": 0,
      "enrolled": false,
      "image": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=300&h=200&fit=crop"
    },
    {
      "id": 7,
      "title": "Mobile App Development with React Native",
      "description": "Build cross-platform mobile applications using React Native and learn app deployment to iOS and Android stores.",
      "instructor": "Lisa Chang",
      "level": "Intermediate",
      "duration": "16 weeks",
      "lessons": 80,
      "students": 5400,
      "rating": 4.6,
      "price": "$179",
      "progress": 0,
      "enrolled": false,
      "image": "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=300&h=200&fit=crop"
    },
    {
      "id": 8,
      "title": "Machine Learning with Python",
      "description": "Introduction to machine learning concepts, algorithms, and implementation using Python, pandas, and scikit-learn.",
      "instructor": "Robert Kumar",
      "level": "Advanced",
      "duration": "18 weeks",
      "lessons": 95,
      "students": 3200,
      "rating": 4.7,
      "price": "$249",
      "progress": 0,
      "enrolled": false,
      "image": "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=300&h=200&fit=crop"
    }
  ],
  "youtubeVideos": [
    {
      "id": 1,
      "title": "JavaScript ES6 Features Explained",
      "description": "Learn about arrow functions, destructuring, modules, and other ES6 features that every developer should know.",
      "views": "45K",
      "duration": "18:32",
      "date": "3 days ago",
      "thumbnail": "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=225&fit=crop"
    },
    {
      "id": 2,
      "title": "Building a REST API in 30 Minutes",
      "description": "Complete tutorial on creating a RESTful API with Node.js and Express from scratch.",
      "views": "32K",
      "duration": "28:45",
      "date": "1 week ago",
      "thumbnail": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=225&fit=crop"
    },
    {
      "id": 3,
      "title": "React Components Best Practices",
      "description": "Learn how to write clean, reusable React components following industry best practices.",
      "views": "28K",
      "duration": "22:15",
      "date": "2 weeks ago",
      "thumbnail": "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=225&fit=crop"
    }
  ],
  "userProgress": {
    "totalCourses": 8,
    "enrolledCourses": 4,
    "completedCourses": 1,
    "totalProgress": 49,
    "streak": 7,
    "badges": ["JavaScript Master", "First Course Completed", "Week Streak"]
  }
};

// Enhanced state management
let currentSection = 'home';
let filteredBlogPosts = [...appData.blogPosts];
let filteredYouTubeVideos = [...appData.youtubeVideos];
let filteredCourses = [...appData.courses];
let searchTerm = '';
let currentTheme = 'light'; // Default theme
let debounceTimer = null;
let modalShown = false;

// Analytics helper functions
const analytics = {
  trackEvent: function(eventName, parameters = {}) {
    if (typeof gtag !== 'undefined') {
      gtag('event', eventName, {
        event_category: parameters.category || 'general',
        event_label: parameters.label || '',
        value: parameters.value || 0,
        custom_parameter: parameters.custom || '',
        ...parameters
      });
    }
    console.log('Analytics tracked:', eventName, parameters);
  },

  trackPageView: function(pageName) {
    this.trackEvent('page_view', {
      category: 'navigation',
      label: pageName,
      page_title: `CodeRudra - ${pageName}`,
      page_location: window.location.href
    });
  },

  trackSearch: function(query, resultsCount, section) {
    this.trackEvent('search', {
      category: 'search',
      label: section,
      search_term: query,
      results_count: resultsCount,
      custom: `${section}_search`
    });
  },

  trackButtonClick: function(buttonName, section = '') {
    this.trackEvent('button_click', {
      category: 'interaction',
      label: `${section}_${buttonName}`,
      button_name: buttonName,
      section: section
    });
  },

  trackCourseFilter: function(level, count) {
    this.trackEvent('course_filter', {
      category: 'courses',
      label: level || 'all',
      filter_level: level,
      results_count: count
    });
  },

  trackNewsletterSignup: function(source, email) {
    this.trackEvent('newsletter_signup', {
      category: 'conversion',
      label: source,
      signup_source: source,
      user_email: email.substring(0, 3) + '***'
    });
  },

  trackThemeToggle: function(newTheme) {
    this.trackEvent('theme_toggle', {
      category: 'ui',
      label: newTheme,
      theme: newTheme
    });
  }
};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    console.log('Enhanced CodeRudra app initializing...');
    
    try {
        // Initialize theme first
        initializeTheme();
        
        // Initialize all components
        initializeNavigation();
        initializeMobileMenu();
        initializeThemeToggle();
        initializeModalPopup();
        renderHomeBlogPosts();
        renderHomeYouTubeVideos();
        renderBlogPosts();
        renderYouTubeVideos();
        renderCourses();
        renderUserProgress();
        initializeEnhancedSearch();
        initializeFilters();
        initializeCourseCategories();
        initializeButtonHandlers();
        initializeNewsletterForms();
        
        // Track initial page view
        analytics.trackPageView('home');
        
        console.log('Enhanced CodeRudra app initialized successfully');
    } catch (error) {
        console.error('Error initializing app:', error);
    }
});

// Theme Management
function initializeTheme() {
    console.log('Initializing theme system...');
    
    // Get saved theme or use system preference
    const savedTheme = localStorage.getItem('theme');
    const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    currentTheme = savedTheme || (systemDark ? 'dark' : 'light');
    
    // Apply theme
    document.documentElement.setAttribute('data-color-scheme', currentTheme);
    
    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) {
            currentTheme = e.matches ? 'dark' : 'light';
            document.documentElement.setAttribute('data-color-scheme', currentTheme);
        }
    });
    
    console.log('Theme initialized:', currentTheme);
}

function initializeThemeToggle() {
    console.log('Initializing theme toggle...');
    
    const themeToggle = document.getElementById('theme-toggle');
    
    if (themeToggle) {
        themeToggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const newTheme = currentTheme === 'light' ? 'dark' : 'light';
            
            // Smooth transition
            document.body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
            
            currentTheme = newTheme;
            document.documentElement.setAttribute('data-color-scheme', newTheme);
            localStorage.setItem('theme', newTheme);
            
            // Track theme toggle
            analytics.trackThemeToggle(newTheme);
            analytics.trackButtonClick('theme_toggle', 'navbar');
            
            // Remove transition after animation
            setTimeout(() => {
                document.body.style.transition = '';
            }, 300);
            
            console.log('Theme toggled to:', newTheme);
        });
        
        console.log('Theme toggle initialized');
    } else {
        console.warn('Theme toggle element not found');
    }
}

// Enhanced Navigation
function initializeNavigation() {
    console.log('Initializing enhanced navigation...');
    
    const navbarLinks = document.querySelectorAll('[data-section]');
    
    navbarLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const targetSection = this.getAttribute('data-section');
            console.log('Navigation clicked:', targetSection);
            
            if (targetSection && targetSection !== currentSection) {
                switchToSection(targetSection);
                analytics.trackButtonClick('navigation', targetSection);
                analytics.trackPageView(targetSection);
            }
        });
    });
    
    console.log('Enhanced navigation initialized with', navbarLinks.length, 'elements');
}

function switchToSection(sectionName) {
    console.log('Switching to section:', sectionName);
    
    try {
        currentSection = sectionName;
        
        const sections = document.querySelectorAll('.section');
        const navbarLinks = document.querySelectorAll('.navbar-link');
        
        // Hide all sections
        sections.forEach(section => {
            section.classList.remove('active');
        });
        
        // Show target section
        const targetSection = document.getElementById(sectionName);
        if (targetSection) {
            targetSection.classList.add('active');
            console.log('Activated section:', sectionName);
        } else {
            console.error('Section not found:', sectionName);
            return;
        }
        
        // Update navbar active state
        navbarLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-section') === sectionName) {
                link.classList.add('active');
            }
        });
        
        // Close mobile menu if open
        const navbarMenu = document.getElementById('navbar-menu');
        if (navbarMenu) {
            navbarMenu.classList.remove('active');
        }
        
        // Scroll to top smoothly
        window.scrollTo({ top: 0, behavior: 'smooth' });
        
    } catch (error) {
        console.error('Error switching section:', error);
    }
}

// Enhanced Mobile Menu
function initializeMobileMenu() {
    console.log('Initializing mobile menu...');
    
    const navbarToggle = document.getElementById('navbar-toggle');
    const navbarMenu = document.getElementById('navbar-menu');
    
    if (navbarToggle && navbarMenu) {
        navbarToggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            navbarMenu.classList.toggle('active');
            analytics.trackButtonClick('mobile_menu_toggle', 'navbar');
        });
        
        const mobileLinks = navbarMenu.querySelectorAll('.navbar-link');
        mobileLinks.forEach(link => {
            link.addEventListener('click', function() {
                navbarMenu.classList.remove('active');
            });
        });
        
        console.log('Mobile menu initialized');
    }
}

// Newsletter Modal System
function initializeModalPopup() {
    console.log('Initializing newsletter modal...');
    
    const modal = document.getElementById('newsletter-modal');
    if (!modal) {
        console.warn('Newsletter modal not found');
        return;
    }
    
    const modalClose = document.getElementById('modal-close');
    const modalBackdrop = modal.querySelector('.modal-backdrop');
    
    let scrollTriggered = false;
    
    const showModal = () => {
        if (!modalShown) {
            modal.classList.remove('hidden');
            modal.classList.add('show');
            modalShown = true;
            analytics.trackEvent('modal_shown', {
                category: 'newsletter',
                label: 'popup',
                trigger: scrollTriggered ? 'scroll' : 'time'
            });
            console.log('Newsletter modal shown');
        }
    };
    
    // Time trigger - show after 30 seconds
    setTimeout(showModal, 30000);
    
    // Scroll trigger
    let scrollTimeout;
    window.addEventListener('scroll', () => {
        if (scrollTimeout) clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            if (window.scrollY > 1000 && !modalShown) {
                scrollTriggered = true;
                showModal();
            }
        }, 100);
    });
    
    // Close modal handlers
    const closeModal = () => {
        modal.classList.remove('show');
        setTimeout(() => modal.classList.add('hidden'), 300);
        analytics.trackButtonClick('modal_close', 'newsletter');
    };
    
    if (modalClose) modalClose.addEventListener('click', closeModal);
    if (modalBackdrop) modalBackdrop.addEventListener('click', closeModal);
    
    console.log('Newsletter modal initialized');
}

// Enhanced Newsletter Forms
function initializeNewsletterForms() {
    console.log('Initializing newsletter forms...');
    
    const forms = [
        { id: 'hero-newsletter-form', source: 'hero' },
        { id: 'footer-newsletter-form', source: 'footer' },
        { id: 'newsletter-modal-form', source: 'modal' }
    ];
    
    forms.forEach(formConfig => {
        const form = document.getElementById(formConfig.id);
        if (form) {
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                handleNewsletterSubmission(this, formConfig.source);
            });
            console.log('Newsletter form initialized:', formConfig.id);
        }
    });
    
    console.log('Newsletter forms initialized');
}

async function handleNewsletterSubmission(form, source) {
    console.log('Newsletter submission from:', source);
    
    const emailInput = form.querySelector('input[type="email"]');
    const nameInput = form.querySelector('input[type="text"]');
    const consentCheckbox = form.querySelector('input[type="checkbox"]');
    const submitButton = form.querySelector('button[type="submit"]');
    const messageContainer = form.closest('.modal-body')?.querySelector('#modal-message') || 
                           form.parentNode.querySelector('.form-message') || 
                           document.getElementById(`${source}-message`);
    
    if (!emailInput || !emailInput.value.trim()) {
        showMessage(messageContainer, 'Please enter a valid email address.', 'error');
        return;
    }
    
    if (consentCheckbox && !consentCheckbox.checked) {
        showMessage(messageContainer, 'Please accept the privacy policy to continue.', 'error');
        return;
    }
    
    // Show loading state
    const originalText = submitButton.textContent;
    submitButton.textContent = 'Subscribing...';
    submitButton.disabled = true;
    
    try {
        // Simulate API call to Mailchimp
        const response = await simulateMailchimpSubscription({
            email: emailInput.value,
            name: nameInput?.value || '',
            source: source,
            timestamp: new Date().toISOString()
        });
        
        if (response.success) {
            showMessage(messageContainer, 'Thank you for subscribing! Welcome to the CodeRudra community.', 'success');
            form.reset();
            
            // Track successful signup
            analytics.trackNewsletterSignup(source, emailInput.value);
            
            // Close modal if it's from modal
            if (source === 'modal') {
                setTimeout(() => {
                    const modal = document.getElementById('newsletter-modal');
                    if (modal) {
                        modal.classList.remove('show');
                        setTimeout(() => modal.classList.add('hidden'), 300);
                    }
                }, 2000);
            }
        } else {
            throw new Error(response.message || 'Subscription failed');
        }
    } catch (error) {
        console.error('Newsletter subscription error:', error);
        showMessage(messageContainer, 'Subscription failed. Please try again later.', 'error');
        
        analytics.trackEvent('newsletter_error', {
            category: 'newsletter',
            label: source,
            error: error.message
        });
    } finally {
        // Reset button state
        submitButton.textContent = originalText;
        submitButton.disabled = false;
    }
}

function simulateMailchimpSubscription(data) {
    return new Promise((resolve) => {
        // Simulate network delay
        setTimeout(() => {
            // Simulate 90% success rate
            if (Math.random() > 0.1) {
                resolve({
                    success: true,
                    message: 'Successfully subscribed',
                    data: data
                });
            } else {
                resolve({
                    success: false,
                    message: 'Email already subscribed or invalid'
                });
            }
        }, 1000);
    });
}

function showMessage(container, message, type) {
    if (!container) {
        // Create a temporary message element if container doesn't exist
        const tempMessage = document.createElement('div');
        tempMessage.className = `form-message ${type}`;
        tempMessage.textContent = message;
        tempMessage.style.position = 'fixed';
        tempMessage.style.top = '20px';
        tempMessage.style.right = '20px';
        tempMessage.style.zIndex = '9999';
        tempMessage.style.padding = '12px 16px';
        tempMessage.style.borderRadius = '8px';
        tempMessage.style.fontWeight = '500';
        
        if (type === 'success') {
            tempMessage.style.backgroundColor = 'rgba(34, 197, 94, 0.1)';
            tempMessage.style.border = '1px solid rgba(34, 197, 94, 0.2)';
            tempMessage.style.color = 'rgb(34, 197, 94)';
        } else {
            tempMessage.style.backgroundColor = 'rgba(239, 68, 68, 0.1)';
            tempMessage.style.border = '1px solid rgba(239, 68, 68, 0.2)';
            tempMessage.style.color = 'rgb(239, 68, 68)';
        }
        
        document.body.appendChild(tempMessage);
        
        setTimeout(() => {
            if (tempMessage.parentNode) {
                tempMessage.parentNode.removeChild(tempMessage);
            }
        }, 5000);
        return;
    }
    
    container.textContent = message;
    container.className = `form-message ${type}`;
    container.classList.remove('hidden');
    
    // Auto-hide after 5 seconds
    setTimeout(() => {
        container.classList.add('hidden');
    }, 5000);
}

// Enhanced Search Functionality
function initializeEnhancedSearch() {
    console.log('Initializing enhanced search...');
    
    const blogSearch = document.getElementById('blog-search');
    const searchClear = document.getElementById('search-clear');
    const resultsCount = document.getElementById('search-results-count');
    const noResults = document.getElementById('no-results');
    
    if (blogSearch) {
        blogSearch.addEventListener('input', function() {
            const query = this.value.trim();
            
            // Show/hide clear button
            if (searchClear) {
                if (query) {
                    searchClear.classList.add('show');
                } else {
                    searchClear.classList.remove('show');
                }
            }
            
            // Debounce search
            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(() => {
                performBlogSearch(query, resultsCount, noResults);
            }, 300);
        });
        
        console.log('Blog search initialized');
    }
    
    if (searchClear) {
        searchClear.addEventListener('click', function() {
            clearBlogSearch();
        });
    }
    
    // Video search
    const videoSearch = document.getElementById('video-search');
    if (videoSearch) {
        videoSearch.addEventListener('input', function() {
            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(() => {
                const query = this.value.toLowerCase();
                filteredYouTubeVideos = query ? 
                    appData.youtubeVideos.filter(video =>
                        video.title.toLowerCase().includes(query) ||
                        video.description.toLowerCase().includes(query)
                    ) : [...appData.youtubeVideos];
                
                renderYouTubeVideos();
                analytics.trackSearch(query, filteredYouTubeVideos.length, 'youtube');
            }, 300);
        });
        
        console.log('Video search initialized');
    }
}

function performBlogSearch(query, resultsCount, noResults) {
    searchTerm = query.toLowerCase();
    
    if (query) {
        filteredBlogPosts = appData.blogPosts.filter(post =>
            post.title.toLowerCase().includes(searchTerm) ||
            post.excerpt.toLowerCase().includes(searchTerm) ||
            post.content.toLowerCase().includes(searchTerm) ||
            post.author.toLowerCase().includes(searchTerm) ||
            post.category.toLowerCase().includes(searchTerm) ||
            post.tags.some(tag => tag.toLowerCase().includes(searchTerm))
        );
        
        // Update results count
        if (resultsCount) {
            resultsCount.textContent = `${filteredBlogPosts.length} articles found for "${query}"`;
            resultsCount.classList.add('show');
        }
        
        // Show/hide no results message
        if (noResults) {
            if (filteredBlogPosts.length === 0) {
                noResults.classList.remove('hidden');
            } else {
                noResults.classList.add('hidden');
            }
        }
        
        analytics.trackSearch(query, filteredBlogPosts.length, 'blog');
    } else {
        filteredBlogPosts = [...appData.blogPosts];
        if (resultsCount) {
            resultsCount.classList.remove('show');
        }
        if (noResults) {
            noResults.classList.add('hidden');
        }
    }
    
    renderBlogPosts();
}

function clearBlogSearch() {
    const blogSearch = document.getElementById('blog-search');
    const searchClear = document.getElementById('search-clear');
    const resultsCount = document.getElementById('search-results-count');
    const noResults = document.getElementById('no-results');
    
    if (blogSearch) blogSearch.value = '';
    if (searchClear) searchClear.classList.remove('show');
    if (resultsCount) resultsCount.classList.remove('show');
    if (noResults) noResults.classList.add('hidden');
    
    searchTerm = '';
    filteredBlogPosts = [...appData.blogPosts];
    renderBlogPosts();
    
    analytics.trackButtonClick('search_clear', 'blog');
}

// Course filtering with enhanced animations
function initializeCourseCategories() {
    console.log('Initializing enhanced course categories...');
    
    const categoryButtons = document.querySelectorAll('.category-btn');
    updateCourseCounts();
    
    categoryButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const selectedLevel = this.getAttribute('data-level');
            
            // Update active state
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter courses with smooth animation
            filterCoursesWithAnimation(selectedLevel);
            
            // Track filtering
            const count = selectedLevel ? 
                appData.courses.filter(course => course.level === selectedLevel).length :
                appData.courses.length;
            
            analytics.trackCourseFilter(selectedLevel, count);
            analytics.trackButtonClick('course_filter', selectedLevel || 'all');
        });
    });
    
    console.log('Course categories initialized with', categoryButtons.length, 'buttons');
}

function filterCoursesWithAnimation(selectedLevel) {
    const courseCards = document.querySelectorAll('.course-card');
    
    // Phase 1: Hide all cards with animation
    courseCards.forEach(card => {
        card.classList.add('filtering');
    });
    
    // Phase 2: Update filtered data and re-render after animation
    setTimeout(() => {
        if (selectedLevel === '') {
            filteredCourses = [...appData.courses];
        } else {
            filteredCourses = appData.courses.filter(course => course.level === selectedLevel);
        }
        
        renderCourses();
        
        // Phase 3: Show new cards with animation
        setTimeout(() => {
            const newCards = document.querySelectorAll('.course-card');
            newCards.forEach(card => {
                card.classList.remove('filtering');
            });
        }, 50);
    }, 200);
}

function updateCourseCounts() {
    const counts = {
        all: appData.courses.length,
        Beginner: appData.courses.filter(c => c.level === 'Beginner').length,
        Intermediate: appData.courses.filter(c => c.level === 'Intermediate').length,
        Advanced: appData.courses.filter(c => c.level === 'Advanced').length
    };
    
    const countElements = {
        'count-all': counts.all,
        'count-beginner': counts.Beginner,
        'count-intermediate': counts.Intermediate,
        'count-advanced': counts.Advanced
    };
    
    Object.keys(countElements).forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.textContent = `(${countElements[id]})`;
        }
    });
}

// Enhanced render functions
function renderHomeBlogPosts() {
    const container = document.getElementById('home-blog-posts');
    if (!container) return;

    const recentPosts = appData.blogPosts.slice(0, 3);
    container.innerHTML = recentPosts.map(post => `
        <div class="blog-card">
            <img src="${post.image}" alt="${post.title}" class="blog-card-image">
            <div class="blog-card-content">
                <div class="blog-card-meta">
                    <span class="blog-card-category">${post.category}</span>
                    <span>${post.readTime}</span>
                    <span>${formatDate(post.date)}</span>
                </div>
                <h3>${post.title}</h3>
                <p>${post.excerpt}</p>
                <button class="btn btn--primary btn--sm" onclick="showReadMore('${post.title}')">Read More</button>
            </div>
        </div>
    `).join('');
    
    console.log('Home blog posts rendered');
}

function renderHomeYouTubeVideos() {
    const container = document.getElementById('home-youtube-videos');
    if (!container) return;

    const recentVideos = appData.youtubeVideos.slice(0, 3);
    container.innerHTML = recentVideos.map(video => `
        <div class="video-card">
            <div class="video-thumbnail">
                <img src="${video.thumbnail}" alt="${video.title}">
                <span class="video-duration">${video.duration}</span>
            </div>
            <div class="video-card-content">
                <h3>${video.title}</h3>
                <div class="video-card-meta">
                    <span>${video.views} views</span>
                    <span>${video.date}</span>
                </div>
                <button class="btn btn--primary btn--sm" onclick="showWatchVideo('${video.title}')">Watch Now</button>
            </div>
        </div>
    `).join('');
    
    console.log('Home YouTube videos rendered');
}

function renderBlogPosts() {
    const container = document.getElementById('blog-posts');
    if (!container) return;

    container.innerHTML = filteredBlogPosts.map(post => `
        <article class="blog-post-large">
            <div class="blog-post-header">
                <img src="${post.image}" alt="${post.title}" class="blog-post-image">
                <div class="blog-post-info">
                    <h3>${highlightSearchTerm(post.title)}</h3>
                    <p class="blog-post-excerpt">${highlightSearchTerm(post.excerpt)}</p>
                    <div class="blog-card-meta">
                        <span class="blog-card-category">${post.category}</span>
                        <span>By ${highlightSearchTerm(post.author)}</span>
                        <span>${formatDate(post.date)}</span>
                        <span>${post.readTime}</span>
                    </div>
                </div>
            </div>
            <button class="btn btn--primary" onclick="showReadMore('${post.title}')">Read Full Article</button>
        </article>
    `).join('');
    
    console.log('Blog posts rendered with highlighting');
}

function highlightSearchTerm(text) {
    if (!searchTerm || !text) return text;
    
    const regex = new RegExp(`(${searchTerm})`, 'gi');
    return text.replace(regex, '<span class="highlight">$1</span>');
}

function renderYouTubeVideos() {
    const container = document.getElementById('youtube-videos');
    if (!container) return;

    container.innerHTML = filteredYouTubeVideos.map(video => `
        <div class="video-card">
            <div class="video-thumbnail">
                <img src="${video.thumbnail}" alt="${video.title}">
                <span class="video-duration">${video.duration}</span>
            </div>
            <div class="video-card-content">
                <h3>${video.title}</h3>
                <div class="video-card-meta">
                    <span>${video.views} views</span>
                    <span>${video.date}</span>
                </div>
                <p>${video.description}</p>
                <button class="btn btn--primary" onclick="showWatchVideo('${video.title}')">Watch Video</button>
            </div>
        </div>
    `).join('');
    
    console.log('YouTube videos rendered');
}

function renderCourses() {
    const container = document.getElementById('courses-grid');
    if (!container) return;

    container.innerHTML = filteredCourses.map(course => `
        <div class="course-card" data-level="${course.level}">
            <img src="${course.image}" alt="${course.title}" class="course-card-image">
            <div class="course-card-content">
                <div class="course-card-header">
                    <h3>${course.title}</h3>
                    <span class="course-level ${course.level.toLowerCase()}">${course.level}</span>
                </div>
                <p class="course-description">${course.description}</p>
                <div class="course-meta">
                    <span>Duration: ${course.duration}</span>
                    <span>${course.students.toLocaleString()} students</span>
                </div>
                <div class="course-meta">
                    <span>⭐ ${course.rating}</span>
                    <span class="course-price">${course.price}</span>
                </div>
                ${course.enrolled ? `
                    <div class="progress-section">
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: ${course.progress}%"></div>
                        </div>
                        <div class="progress-text">${course.progress}% Complete</div>
                    </div>
                    <button class="btn btn--primary btn--full-width" onclick="showCourseAction('${course.title}', ${course.progress})">
                        ${course.progress > 0 ? 'Continue Learning' : 'Start Course'}
                    </button>
                ` : `
                    <button class="btn btn--outline btn--full-width" onclick="showEnrollment('${course.title}')">Enroll Now</button>
                `}
            </div>
        </div>
    `).join('');
    
    console.log('Courses rendered');
}

function renderUserProgress() {
    const progress = appData.userProgress;
    
    const elements = {
        'enrolled-courses': progress.enrolledCourses,
        'completed-courses': progress.completedCourses,
        'overall-progress': `${progress.totalProgress}%`,
        'learning-streak': progress.streak
    };
    
    Object.keys(elements).forEach(id => {
        const element = document.getElementById(id);
        if (element) element.textContent = elements[id];
    });

    const badgesContainer = document.getElementById('user-badges');
    if (badgesContainer) {
        badgesContainer.innerHTML = progress.badges.map(badge => `
            <span class="badge">${badge}</span>
        `).join('');
    }
    
    console.log('User progress rendered');
}

// Enhanced filter functionality
function initializeFilters() {
    console.log('Initializing filters...');
    
    const blogFilter = document.getElementById('blog-filter');
    if (blogFilter) {
        blogFilter.addEventListener('change', function() {
            const selectedCategory = this.value;
            filteredBlogPosts = selectedCategory ? 
                appData.blogPosts.filter(post => post.category === selectedCategory) :
                [...appData.blogPosts];
            
            renderBlogPosts();
            analytics.trackEvent('blog_filter', {
                category: 'blog',
                label: selectedCategory || 'all',
                results_count: filteredBlogPosts.length
            });
        });
    }

    const videoFilter = document.getElementById('video-filter');
    if (videoFilter) {
        videoFilter.addEventListener('change', function() {
            filteredYouTubeVideos = [...appData.youtubeVideos];
            renderYouTubeVideos();
            analytics.trackButtonClick('video_filter', this.value || 'all');
        });
    }
    
    console.log('Filters initialized');
}

// Enhanced button handlers
function initializeButtonHandlers() {
    console.log('Initializing button handlers...');
    
    document.addEventListener('click', function(e) {
        // Subscribe button
        if (e.target.classList.contains('subscribe-btn')) {
            e.preventDefault();
            analytics.trackButtonClick('youtube_subscribe', 'youtube');
            alert('Thank you for your interest! This would redirect to our YouTube channel.');
        }
        
        // Track all button clicks for analytics
        if (e.target.classList.contains('btn')) {
            const section = e.target.closest('.section')?.id || 'unknown';
            const buttonText = e.target.textContent.trim().substring(0, 20);
            analytics.trackEvent('button_interaction', {
                category: 'ui',
                label: `${section}_${buttonText}`,
                section: section
            });
        }
    });
    
    console.log('Button handlers initialized');
}

// Interactive functions
function showReadMore(title) {
    analytics.trackEvent('blog_read_more', {
        category: 'content',
        label: 'blog_post',
        article_title: title
    });
    alert(`Opening article: "${title}"\n\nFull article view coming soon!`);
}

function showWatchVideo(title) {
    analytics.trackEvent('video_watch', {
        category: 'content',
        label: 'youtube_video',
        video_title: title
    });
    alert(`Opening video: "${title}"\n\nVideo player coming soon!`);
}

function showCourseAction(title, progress) {
    const action = progress > 0 ? 'continue' : 'start';
    analytics.trackEvent('course_action', {
        category: 'courses',
        label: action,
        course_title: title,
        progress: progress
    });
    alert(`${progress > 0 ? 'Continuing' : 'Starting'} course: "${title}"\n\nCourse platform coming soon!`);
}

function showEnrollment(title) {
    analytics.trackEvent('course_enrollment', {
        category: 'courses',
        label: 'enroll',
        course_title: title
    });
    alert(`Enrolling in course: "${title}"\n\nEnrollment system coming soon!`);
}

// Utility functions
function formatDate(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return '1 day ago';
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) {
        const weeks = Math.floor(diffDays / 7);
        return weeks === 1 ? '1 week ago' : `${weeks} weeks ago`;
    }
    const months = Math.floor(diffDays / 30);
    return months === 1 ? '1 month ago' : `${months} months ago`;
}

// Event listeners
window.addEventListener('resize', function() {
    const navbarMenu = document.getElementById('navbar-menu');
    if (window.innerWidth > 768 && navbarMenu) {
        navbarMenu.classList.remove('active');
    }
});

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    const navbarMenu = document.getElementById('navbar-menu');
    const modal = document.getElementById('newsletter-modal');
    
    if (e.key === 'Escape') {
        if (navbarMenu?.classList.contains('active')) {
            navbarMenu.classList.remove('active');
        }
        
        if (modal?.classList.contains('show')) {
            modal.classList.remove('show');
            setTimeout(() => modal.classList.add('hidden'), 300);
        }
    }
    
    // Quick navigation with number keys
    if (e.key >= '1' && e.key <= '4' && !e.target.matches('input, textarea')) {
        const sections = ['home', 'blog', 'learning', 'youtube'];
        const sectionIndex = parseInt(e.key) - 1;
        if (sections[sectionIndex]) {
            switchToSection(sections[sectionIndex]);
            analytics.trackEvent('keyboard_navigation', {
                category: 'accessibility',
                label: sections[sectionIndex],
                key_pressed: e.key
            });
        }
    }
});

// Global error handling
window.addEventListener('error', function(e) {
    console.error('JavaScript error:', e.error);
    analytics.trackEvent('javascript_error', {
        category: 'error',
        label: 'runtime_error',
        error_message: e.message,
        error_filename: e.filename,
        error_lineno: e.lineno
    });
});

// Global function exports
window.clearBlogSearch = clearBlogSearch;
window.showReadMore = showReadMore;
window.showWatchVideo = showWatchVideo;
window.showCourseAction = showCourseAction;
window.showEnrollment = showEnrollment;

console.log('Enhanced CodeRudra JavaScript loaded successfully');