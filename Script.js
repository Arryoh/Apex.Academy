// --- 1. DOM Element Selectors ---
const header = document.querySelector('.header');
const navMenu = document.querySelector('.nav-menu');
let toggleButton = null; // Will be assigned after creation

// --- 2. Mobile Nav Toggle Functionality ---

/**
 * Toggles the visibility of the navigation menu on small screens.
 * Uses CSS classes 'nav-open' and 'nav-closed'.
 */
function toggleMobileMenu() {
    // Check if the menu is currently visible
    const isOpen = navMenu.classList.contains('nav-open');

    if (isOpen) {
        // If open, close it
        navMenu.classList.remove('nav-open');
        navMenu.classList.add('nav-closed'); // This class controls the slide-out effect in CSS
        toggleButton.innerHTML = '&#9776;'; // Hamburger icon
        toggleButton.setAttribute('aria-expanded', 'false');

    } else {
        // If closed, open it
        navMenu.classList.add('nav-open');
        navMenu.classList.remove('nav-closed'); // This class controls the slide-in effect in CSS
        toggleButton.innerHTML = '&times;'; // 'X' icon
        toggleButton.setAttribute('aria-expanded', 'true');
    }
}

/**
 * Creates and inserts the mobile navigation toggle button into the header.
 */
function setupMobileToggle() {
    // 1. Create the button element
    toggleButton = document.createElement('button');
    toggleButton.classList.add('nav-toggle');
    toggleButton.innerHTML = '&#9776;'; // Initial Hamburger icon (Unicode for ☰)
    toggleButton.setAttribute('aria-label', 'Toggle navigation menu');
    toggleButton.setAttribute('aria-expanded', 'false');

    // 2. Insert the button into the header
    // We insert it right after the logo and before the apply button/end of header
    const applyButton = document.querySelector('.apply-button');
    if (applyButton) {
        // Insert it right before the APPLY NOW button for correct visual order
        header.insertBefore(toggleButton, applyButton);
    } else {
        header.appendChild(toggleButton); 
    }

    // 3. Attach the event listener
    toggleButton.addEventListener('click', toggleMobileMenu);

    // 4. Close menu when a link is clicked 
    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            // Only run the toggle if the menu is currently open
            if (navMenu.classList.contains('nav-open')) {
                 toggleMobileMenu();
            }
        });
    });
}


// --- 3. Initialization ---
document.addEventListener('DOMContentLoaded', () => {
    // Set up the mobile toggle button when the document is ready
    setupMobileToggle();
});<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>The Apex Academy - Leading Education for Next-Gen Design</title>
    <!-- Link to Font Awesome for icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    
    <style>
        /* ------------------------------------ */
        /* 1. Global Styles and Color Variables */
        /* ------------------------------------ */

        :root {
            --color-primary-dark: #000000;   /* BLACK */
            --color-gold: #FFD700;           /* Standard Gold */
            --color-white: #FFFFFF;
            --color-secondary-dark: #333333; /* Dark Grey for subtle backgrounds/footer */
            --color-dark-text: #333333;
            --color-light-bg: #F5F5F5;
        }

        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        body {
            /* Using Poppins (a common, clean sans-serif font) */
            font-family: 'Poppins', sans-serif;
            line-height: 1.6;
            background-color: var(--color-white);
        }

        a {
            text-decoration: none;
            color: inherit;
        }

        /* Helper Classes */
        .primary-bg { background-color: var(--color-primary-dark); }
        .secondary-dark-bg { background-color: var(--color-secondary-dark); }
        .gold-text { color: var(--color-gold); }
        .white-text { color: var(--color-white); }
        .dark-text { color: var(--color-primary-dark); }

        /* ------------------------------------ */
        /* 2. Header and Navigation Styles */
        /* ------------------------------------ */

        .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px 5%;
            background-color: var(--color-primary-dark); /* BLACK Header */
            position: relative; 
        }

        .logo {
            display: flex;
            align-items: center;
            font-size: 1.5em;
            font-weight: bold;
            color: var(--color-white);
        }

        .logo-icon i {
            color: var(--color-gold);
            margin-right: 5px;
        }

        /* Desktop Navigation Menu */
        .nav-menu ul {
            list-style: none;
            display: flex;
        }

        .nav-menu li {
            margin-left: 20px;
        }

        .nav-link {
            color: var(--color-white);
            padding: 5px 10px;
            transition: color 0.3s;
            font-size: 0.9em;
            font-weight: 500;
        }

        .nav-link:hover {
            color: var(--color-gold);
        }

        .apply-button {
            background-color: var(--color-gold);
            color: var(--color-primary-dark); /* Text is black for contrast */
            border: none;
            padding: 10px 20px;
            font-weight: bold;
            cursor: pointer;
            border-radius: 5px;
            transition: background-color 0.3s;
        }

        .apply-button:hover {
            background-color: #ecc300; 
        }

        /* ------------------------------------ */
        /* 3. Hero Section Styles */
        /* ------------------------------------ */

        .hero-section {
            position: relative;
            background: var(--color-primary-dark); /* BLACK Hero Background */
            min-height: 400px;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            padding: 40px 5%;
            overflow: hidden;
            /* Placeholder for image background on desktop - using a dark theme placeholder */
            background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), 
                              url('https://placehold.co/1200x550/000000/FFFFFF?text=Modern+Design+Studio+View'); 
            background-size: cover;
            background-position: center;
        }

        .hero-content {
            z-index: 10;
            max-width: 800px;
        }

        .hero-title {
            font-size: 3em; 
            font-weight: 900;
            line-height: 1.1;
            margin-bottom: 10px;
        }

        .hero-text {
            font-size: 1em;
            margin-bottom: 30px;
            max-width: 600px;
            margin-left: auto;
            margin-right: auto;
        }

        .start-course-button {
            display: inline-block;
            background-color: var(--color-gold);
            color: var(--color-primary-dark); /* Text is black for contrast */
            padding: 15px 30px;
            border-radius: 30px; 
            font-weight: bold;
            font-size: 1.1em;
            transition: background-color 0.3s;
            border: none;
        }

        .start-course-button:hover {
            background-color: #ecc300;
        }


        /* ------------------------------------ */
        /* 4. Facility/Features Section Styles */
        /* ------------------------------------ */

        .facility-section {
            display: flex;
            flex-direction: column; 
            padding: 20px 5%;
            gap: 15px;
            transform: translateY(-50px); /* Lifts section into the hero area */
            z-index: 20;
            position: relative;
        }

        .facility-card {
            color: var(--color-white);
            padding: 30px 20px;
            text-align: center;
            border-radius: 8px;
            flex: 1; 
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }

        .icon-container {
            background-color: rgba(255, 255, 255, 0.1);
            color: var(--color-gold);
            display: inline-block;
            font-size: 2em;
            padding: 10px;
            border-radius: 50%;
            margin-bottom: 15px;
        }

        .card-title {
            font-size: 1.2em;
            margin-bottom: 10px;
            font-weight: bold;
        }

        /* Facility Card Colors */
        .facility-card:nth-child(1) { background-color: var(--color-primary-dark); } /* Black */
        .facility-card:nth-child(2) { background-color: var(--color-secondary-dark); } /* Dark Grey */
        .facility-card:nth-child(3) { background-color: var(--color-primary-dark); } /* Black */


        /* ------------------------------------ */
        /* 5. Welcome/Content Section Styles */
        /* ------------------------------------ */

        .welcome-section {
            padding: 40px 5%;
            text-align: center;
            background-color: var(--color-white);
            padding-top: 0; 
        }

        .welcome-title {
            font-size: 2em;
            font-weight: bold;
            color: var(--color-dark-text);
            margin-bottom: 10px;
        }

        .welcome-text {
            font-size: 1em;
            color: #666;
            margin-bottom: 40px;
            max-width: 700px;
            margin-left: auto;
            margin-right: auto;
        }

        .content-images {
            display: grid;
            grid-template-columns: 1fr; 
            gap: 20px;
            margin-top: 30px;
        }

        .faculty-card {
            border: 1px solid var(--color-light-bg);
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
            padding: 30px 20px;
            border-radius: 8px;
            text-align: center;
            transition: transform 0.3s;
        }
        
        .faculty-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
        }

        .faculty-card .initial-icon {
            display: inline-flex;
            justify-content: center;
            align-items: center;
            width: 70px;
            height: 70px;
            border-radius: 50%;
            background-color: var(--color-primary-dark); /* BLACK */
            color: var(--color-gold); /* Gold text on black circle */
            font-size: 2em;
            font-weight: bold;
            margin-bottom: 10px;
        }

        .faculty-card h4 {
            margin: 5px 0;
            font-weight: bold;
            color: var(--color-dark-text);
        }

        .faculty-card p {
            font-size: 0.9em;
            color: #888;
        }

        /* ------------------------------------ */
        /* 6. Footer Styles */
        /* ------------------------------------ */

        .footer {
            padding: 20px 5%;
            text-align: center;
            font-size: 0.9em;
            background-color: var(--color-secondary-dark); /* Dark grey for footer */
        }


        /* ------------------------------------ */
        /* 7. Responsive Design (Media Queries) */
        /* ------------------------------------ */

        /* The hamburger button style */
        .nav-toggle {
            display: none; 
            background: none;
            border: none;
            color: var(--color-gold);
            font-size: 1.8em;
            cursor: pointer;
            margin-left: 20px;
            padding: 5px;
        }

        @media (max-width: 767px) {
            /* 1. Show the Toggle button on mobile */
            .nav-toggle {
                display: block;
            }
            
            /* 2. Hide the full desktop menu and apply button by default */
            .nav-menu {
                position: absolute;
                top: 100%; 
                left: 0;
                width: 100%;
                background-color: var(--color-primary-dark); /* BLACK */
                padding: 0;
                z-index: 50;
                /* State controlled by JS: Slide out */
                transform: translateY(-300%); 
                transition: transform 0.3s ease-in-out;
                overflow-y: auto; 
            }

            .apply-button {
                display: none; 
            }

            /* The list of links inside the navigation */
            .nav-menu ul {
                flex-direction: column;
                text-align: center;
            }

            .nav-menu li {
                margin: 0;
                border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            }

            .nav-link {
                display: block;
                padding: 15px 10px;
            }

            /* State controlled by JavaScript */
            .nav-menu.nav-open {
                transform: translateY(0); 
            }
        }


        /* --- Tablet and Desktop View (>= 768px) --- */
        @media (min-width: 768px) {
            .hero-title {
                font-size: 4.5em; 
            }

            .facility-section {
                flex-direction: row; 
            }

            .content-images {
                grid-template-columns: repeat(2, 1fr); 
            }
        }

        /* --- Larger Desktop View (>= 1024px) --- */
        @media (min-width: 1024px) {
            .header, .hero-section, .facility-section, .welcome-section, .footer {
                max-width: 1200px;
                margin-left: auto;
                margin-right: auto;
                padding-left: 10%;
                padding-right: 10%;
            }
            
            .content-images {
                grid-template-columns: repeat(4, 1fr); 
            }
        }
    </style>
</head>
<body>

    <!-- 🌟 Header/Navigation Section 🌟 -->
    <header class="header">
        <div class="logo">
            <span class="logo-icon"><i class="fas fa-graduation-cap gold-text"></i></span>
            <span class="logo-text white-text">THE APEX ACADEMY</span>
        </div>
        <!-- IMPORTANT: nav-closed class is the starting state for mobile JS -->
        <nav class="nav-menu nav-closed">
            <ul>
                <li><a href="#home" class="nav-link">HOME</a></li>
                <li><a href="#pages" class="nav-link">DEPARTMENTS</a></li>
                <li><a href="#courses" class="nav-link">PROGRAMS</a></li>
                <li><a href="#research" class="nav-link">INNOVATION LAB</a></li>
                <li><a href="#news" class="nav-link">STUDENT LIFE</a></li>
                <li><a href="#gallery" class="nav-link">ALUMNI</a></li>
                <li><a href="#contact" class="nav-link">CONTACT</a></li>
            </ul>
        </nav>
        <button class="apply-button">APPLY NOW</button>
    </header>7 

    <!-- 🎓 Hero Section 🎓 -->
    <section class="hero-section">
        <div class="hero-content">
            <h1 class="hero-title white-text">Leading Education For <span class="gold-text">Next-Gen Design</span></h1>
            <p class="hero-text white-text">The Apex Academy is dedicated to shaping visionary leaders who blend creativity with technology. Start your journey in UI/UX, Architecture, or Digital Arts today.</p>
            <a href="#start-course" class="start-course-button">EXPLORE PROGRAMS</a>
        </div>
    </section>

    <!-- 🏆 Facility/Features Section 🏆 -->
    <section class="facility-section">
        <div class="facility-card primary-bg white-text">
            <div class="icon-container"><i class="fas fa-award"></i></div>
            <h3 class="card-title">Merit Scholarship Programs</h3>
            <p class="card-description">Access a range of need-based and merit-based financial aid options to fund your education without compromise.</p>
        </div>
        <div class="facility-card secondary-dark-bg white-text">
            <div class="icon-container"><i class="fas fa-user-tie"></i></div>
            <h3 class="card-title">Industry-Leading Mentors</h3>
            <p class="card-description">Learn directly from professional designers, architects, and artists currently shaping global industry trends.</p>
        </div>
        <div class="facility-card primary-bg white-text">
            <div class="icon-container"><i class="fas fa-laptop-code"></i></div>
            <h3 class="card-title">24/7 Innovation Labs</h3>
            <p class="card-description">Utilize state-of-the-art equipment, including VR studios and rapid prototyping machines, available around the clock.</p>
        </div>
    </section>

    <!-- 📚 Main Content/Welcome Section (Faculty/Staff) 📚 -->
    <section class="welcome-section">
        <h2 class="welcome-title">Welcome To <span class="gold-text">The Apex Academy</span></h2>
        <p class="welcome-text">We believe great design starts with great teaching. Our faculty is composed of global experts committed to personalized mentorship and pushing the boundaries of creative innovation. Join a community that inspires transformation.</p>

        <!-- Faculty/Staff Cards (Real-world titles) -->
        <div class="content-images">
            <div class="faculty-card">
                <div class="initial-icon">V</div>
                <h4>Victoria Chen</h4>
                <p>Dean of Digital Arts</p>
            </div>
            <div class="faculty-card">
                <div class="initial-icon">R</div>
                <h4>Robert Davies</h4>
                <p>Chair of Architecture</p>
            </div>
            <div class="faculty-card">
                <div class="initial-icon">A</div>
                <h4>Aisha Khan</h4>
                <p>UI/UX Program Director</p>
            </div>
            <div class="faculty-card">
                <div class="initial-icon">S</div>
                <h4>Samir Patel</h4>
                <p>Student Affairs Liaison</p>
            </div>
        </div>
    </section>

    <!-- 🦶 Footer Section 🦶 -->
    <footer class="footer secondary-dark-bg white-text">
        <p>&copy; 2025 The Apex Academy. All rights reserved. | Style: Black, Gold, and White.</p>
    </footer>

    <script>
        // --- 1. DOM Element Selectors ---
        const header = document.querySelector('.header');
        const navMenu = document.querySelector('.nav-menu');
        let toggleButton = null; 

        // --- 2. Mobile Nav Toggle Functionality ---

        /**
         * Toggles the visibility of the navigation menu on small screens.
         */
        function toggleMobileMenu() {
            // Check if the menu is currently visible
            const isOpen = navMenu.classList.contains('nav-open');

            if (isOpen) {
                // If open, close it
                navMenu.classList.remove('nav-open');
                navMenu.classList.add('nav-closed'); 
                // Set the button to the hamburger icon (Unicode for ☰)
                toggleButton.innerHTML = '&#9776;'; 
                toggleButton.setAttribute('aria-expanded', 'false');

            } else {
                // If closed, open it
                navMenu.classList.add('nav-open');
                navMenu.classList.remove('nav-closed'); 
                // Set the button to the 'X' icon (Unicode for ×)
                toggleButton.innerHTML = '&times;'; 
                toggleButton.setAttribute('aria-expanded', 'true');
            }
        }

        /**
         * Creates and inserts the mobile navigation toggle button into the header.
         */
        function setupMobileToggle() {
            // 1. Create the button element
            toggleButton = document.createElement('button');
            toggleButton.classList.add('nav-toggle');
            toggleButton.innerHTML = '&#9776;'; // Initial Hamburger icon
            toggleButton.setAttribute('aria-label', 'Toggle navigation menu');
            toggleButton.setAttribute('aria-expanded', 'false');

            // 2. Insert the button into the header, before the apply button
            const applyButton = document.querySelector('.apply-button');
            if (applyButton) {
                header.insertBefore(toggleButton, applyButton);
            } else {
                header.appendChild(toggleButton); 
            }

            // 3. Attach the event listener
            toggleButton.addEventListener('click', toggleMobileMenu);

            // 4. Close menu when a link is clicked (UX improvement for mobile)
            navMenu.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => {
                    // Only run the toggle if the menu is currently open
                    if (navMenu.classList.contains('nav-open')) {
                         toggleMobileMenu();
                    }
                });
            });
        }


        // --- 3. Initialization ---
        document.addEventListener('DOMContentLoaded', () => {
            // Set up the mobile toggle button when the document is ready
            setupMobileToggle();
        });
    </script>
</body>
</html><!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>The Apex Academy - Leading Education for Next-Gen Design</title>
    <!-- Link to Font Awesome for icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    
    <style>
        /* ------------------------------------ */
        /* 1. Global Styles and Color Variables */
        /* ------------------------------------ */

        :root {
            --color-primary-dark: #000000;   /* BLACK */
            --color-gold: #FFD700;           /* Standard Gold */
            --color-white: #FFFFFF;
            --color-secondary-dark: #333333; /* Dark Grey for subtle backgrounds/footer */
            --color-dark-text: #333333;
            --color-light-bg: #F5F5F5;
        }

        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        body {
            /* Using Poppins (a common, clean sans-serif font) */
            font-family: 'Poppins', sans-serif;
            line-height: 1.6;
            background-color: var(--color-white);
        }

        a {
            text-decoration: none;
            color: inherit;
        }

        /* Helper Classes */
        .primary-bg { background-color: var(--color-primary-dark); }
        .secondary-dark-bg { background-color: var(--color-secondary-dark); }
        .gold-text { color: var(--color-gold); }
        .white-text { color: var(--color-white); }
        .dark-text { color: var(--color-primary-dark); }

        /* ------------------------------------ */
        /* 2. Header and Navigation Styles */
        /* ------------------------------------ */

        .header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px 5%;
            background-color: var(--color-primary-dark); /* BLACK Header */
            position: relative; 
        }

        .logo {
            display: flex;
            align-items: center;
            font-size: 1.5em;
            font-weight: bold;
            color: var(--color-white);
        }

        .logo-icon i {
            color: var(--color-gold);
            margin-right: 5px;
        }

        /* Desktop Navigation Menu */
        .nav-menu ul {
            list-style: none;
            display: flex;
        }

        .nav-menu li {
            margin-left: 20px;
        }

        .nav-link {
            color: var(--color-white);
            padding: 5px 10px;
            transition: color 0.3s;
            font-size: 0.9em;
            font-weight: 500;
        }

        .nav-link:hover {
            color: var(--color-gold);
        }

        .apply-button {
            background-color: var(--color-gold);
            color: var(--color-primary-dark); /* Text is black for contrast */
            border: none;
            padding: 10px 20px;
            font-weight: bold;
            cursor: pointer;
            border-radius: 5px;
            transition: background-color 0.3s;
        }

        .apply-button:hover {
            background-color: #ecc300; 
        }

        /* ------------------------------------ */
        /* 3. Hero Section Styles */
        /* ------------------------------------ */

        .hero-section {
            position: relative;
            background: var(--color-primary-dark); /* BLACK Hero Background */
            min-height: 400px;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            padding: 40px 5%;
            overflow: hidden;
            /* Placeholder for image background on desktop - using a dark theme placeholder */
            background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), 
                              url('https://placehold.co/1200x550/000000/FFFFFF?text=Modern+Design+Studio+View'); 
            background-size: cover;
            background-position: center;
        }

        .hero-content {
            z-index: 10;
            max-width: 800px;
        }

        .hero-title {
            font-size: 3em; 
            font-weight: 900;
            line-height: 1.1;
            margin-bottom: 10px;
        }

        .hero-text {
            font-size: 1em;
            margin-bottom: 30px;
            max-width: 600px;
            margin-left: auto;
            margin-right: auto;
        }

        .start-course-button {
            display: inline-block;
            background-color: var(--color-gold);
            color: var(--color-primary-dark); /* Text is black for contrast */
            padding: 15px 30px;
            border-radius: 30px; 
            font-weight: bold;
            font-size: 1.1em;
            transition: background-color 0.3s;
            border: none;
        }

        .start-course-button:hover {
            background-color: #ecc300;
        }


        /* ------------------------------------ */
        /* 4. Facility/Features Section Styles */
        /* ------------------------------------ */

        .facility-section {
            display: flex;
            flex-direction: column; 
            padding: 20px 5%;
            gap: 15px;
            transform: translateY(-50px); /* Lifts section into the hero area */
            z-index: 20;
            position: relative;
        }

        .facility-card {
            color: var(--color-white);
            padding: 30px 20px;
            text-align: center;
            border-radius: 8px;
            flex: 1; 
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }

        .icon-container {
            background-color: rgba(255, 255, 255, 0.1);
            color: var(--color-gold);
            display: inline-block;
            font-size: 2em;
            padding: 10px;
            border-radius: 50%;
            margin-bottom: 15px;
        }

        .card-title {
            font-size: 1.2em;
            margin-bottom: 10px;
            font-weight: bold;
        }

        /* Facility Card Colors */
        .facility-card:nth-child(1) { background-color: var(--color-primary-dark); } /* Black */
        .facility-card:nth-child(2) { background-color: var(--color-secondary-dark); } /* Dark Grey */
        .facility-card:nth-child(3) { background-color: var(--color-primary-dark); } /* Black */


        /* ------------------------------------ */
        /* 5. Welcome/Content Section Styles */
        /* ------------------------------------ */

        .welcome-section {
            padding: 40px 5%;
            text-align: center;
            background-color: var(--color-white);
            padding-top: 0; 
        }

        .welcome-title {
            font-size: 2em;
            font-weight: bold;
            color: var(--color-dark-text);
            margin-bottom: 10px;
        }

        .welcome-text {
            font-size: 1em;
            color: #666;
            margin-bottom: 40px;
            max-width: 700px;
            margin-left: auto;
            margin-right: auto;
        }

        .content-images {
            display: grid;
            grid-template-columns: 1fr; 
            gap: 20px;
            margin-top: 30px;
        }

        .faculty-card {
            border: 1px solid var(--color-light-bg);
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
            padding: 30px 20px;
            border-radius: 8px;
            text-align: center;
            transition: transform 0.3s;
        }
        
        .faculty-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
        }

        .faculty-card .initial-icon {
            display: inline-flex;
            justify-content: center;
            align-items: center;
            width: 70px;
            height: 70px;
            border-radius: 50%;
            background-color: var(--color-primary-dark); /* BLACK */
            color: var(--color-gold); /* Gold text on black circle */
            font-size: 2em;
            font-weight: bold;
            margin-bottom: 10px;
        }

        .faculty-card h4 {
            margin: 5px 0;
            font-weight: bold;
            color: var(--color-dark-text);
        }

        .faculty-card p {
            font-size: 0.9em;
            color: #888;
        }

        /* ------------------------------------ */
        /* 6. Footer Styles */
        /* ------------------------------------ */

        .footer {
            padding: 20px 5%;
            text-align: center;
            font-size: 0.9em;
            background-color: var(--color-secondary-dark); /* Dark grey for footer */
        }


        /* ------------------------------------ */
        /* 7. Responsive Design (Media Queries) */
        /* ------------------------------------ */

        /* The hamburger button style */
        .nav-toggle {
            display: none; 
            background: none;
            border: none;
            color: var(--color-gold);
            font-size: 1.8em;
            cursor: pointer;
            margin-left: 20px;
            padding: 5px;
        }

        @media (max-width: 767px) {
            /* 1. Show the Toggle button on mobile */
            .nav-toggle {
                display: block;
            }
            
            /* 2. Hide the full desktop menu and apply button by default */
            .nav-menu {
                position: absolute;
                top: 100%; 
                left: 0;
                width: 100%;
                background-color: var(--color-primary-dark); /* BLACK */
                padding: 0;
                z-index: 50;
                /* State controlled by JS: Slide out */
                transform: translateY(-300%); 
                transition: transform 0.3s ease-in-out;
                overflow-y: auto; 
            }

            .apply-button {
                display: none; 
            }

            /* The list of links inside the navigation */
            .nav-menu ul {
                flex-direction: column;
                text-align: center;
            }

            .nav-menu li {
                margin: 0;
                border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            }

            .nav-link {
                display: block;
                padding: 15px 10px;
            }

            /* State controlled by JavaScript */
            .nav-menu.nav-open {
                transform: translateY(0); 
            }
        }


        /* --- Tablet and Desktop View (>= 768px) --- */
        @media (min-width: 768px) {
            .hero-title {
                font-size: 4.5em; 
            }

            .facility-section {
                flex-direction: row; 
            }

            .content-images {
                grid-template-columns: repeat(2, 1fr); 
            }
        }

        /* --- Larger Desktop View (>= 1024px) --- */
        @media (min-width: 1024px) {
            .header, .hero-section, .facility-section, .welcome-section, .footer {
                max-width: 1200px;
                margin-left: auto;
                margin-right: auto;
                padding-left: 10%;
                padding-right: 10%;
            }
            
            .content-images {
                grid-template-columns: repeat(4, 1fr); 
            }
        }
    </style>
</head>
<body>

    <!-- 🌟 Header/Navigation Section 🌟 -->
    <header class="header">
        <div class="logo">
            <span class="logo-icon"><i class="fas fa-graduation-cap gold-text"></i></span>
            <span class="logo-text white-text">THE APEX ACADEMY</span>
        </div>
        <!-- IMPORTANT: nav-closed class is the starting state for mobile JS -->
        <nav class="nav-menu nav-closed">
            <ul>
                <li><a href="#home" class="nav-link">HOME</a></li>
                <li><a href="#pages" class="nav-link">DEPARTMENTS</a></li>
                <li><a href="#courses" class="nav-link">PROGRAMS</a></li>
                <li><a href="#research" class="nav-link">INNOVATION LAB</a></li>
                <li><a href="#news" class="nav-link">STUDENT LIFE</a></li>
                <li><a href="#gallery" class="nav-link">ALUMNI</a></li>
                <li><a href="#contact" class="nav-link">CONTACT</a></li>
            </ul>
        </nav>
        <button class="apply-button">APPLY NOW</button>
    </header>7 

    <!-- 🎓 Hero Section 🎓 -->
    <section class="hero-section">
        <div class="hero-content">
            <h1 class="hero-title white-text">Leading Education For <span class="gold-text">Next-Gen Design</span></h1>
            <p class="hero-text white-text">The Apex Academy is dedicated to shaping visionary leaders who blend creativity with technology. Start your journey in UI/UX, Architecture, or Digital Arts today.</p>
            <a href="#start-course" class="start-course-button">EXPLORE PROGRAMS</a>
        </div>
    </section>

    <!-- 🏆 Facility/Features Section 🏆 -->
    <section class="facility-section">
        <div class="facility-card primary-bg white-text">
            <div class="icon-container"><i class="fas fa-award"></i></div>
            <h3 class="card-title">Merit Scholarship Programs</h3>
            <p class="card-description">Access a range of need-based and merit-based financial aid options to fund your education without compromise.</p>
        </div>
        <div class="facility-card secondary-dark-bg white-text">
            <div class="icon-container"><i class="fas fa-user-tie"></i></div>
            <h3 class="card-title">Industry-Leading Mentors</h3>
            <p class="card-description">Learn directly from professional designers, architects, and artists currently shaping global industry trends.</p>
        </div>
        <div class="facility-card primary-bg white-text">
            <div class="icon-container"><i class="fas fa-laptop-code"></i></div>
            <h3 class="card-title">24/7 Innovation Labs</h3>
            <p class="card-description">Utilize state-of-the-art equipment, including VR studios and rapid prototyping machines, available around the clock.</p>
        </div>
    </section>

    <!-- 📚 Main Content/Welcome Section (Faculty/Staff) 📚 -->
    <section class="welcome-section">
        <h2 class="welcome-title">Welcome To <span class="gold-text">The Apex Academy</span></h2>
        <p class="welcome-text">We believe great design starts with great teaching. Our faculty is composed of global experts committed to personalized mentorship and pushing the boundaries of creative innovation. Join a community that inspires transformation.</p>

        <!-- Faculty/Staff Cards (Real-world titles) -->
        <div class="content-images">
            <div class="faculty-card">
                <div class="initial-icon">V</div>
                <h4>Victoria Chen</h4>
                <p>Dean of Digital Arts</p>
            </div>
            <div class="faculty-card">
                <div class="initial-icon">R</div>
                <h4>Robert Davies</h4>
                <p>Chair of Architecture</p>
            </div>
            <div class="faculty-card">
                <div class="initial-icon">A</div>
                <h4>Aisha Khan</h4>
                <p>UI/UX Program Director</p>
            </div>
            <div class="faculty-card">
                <div class="initial-icon">S</div>
                <h4>Samir Patel</h4>
                <p>Student Affairs Liaison</p>
            </div>
        </div>
    </section>

    <!-- 🦶 Footer Section 🦶 -->
    <footer class="footer secondary-dark-bg white-text">
        <p>&copy; 2025 The Apex Academy. All rights reserved. | Style: Black, Gold, and White.</p>
    </footer>

    <script>
        // --- 1. DOM Element Selectors ---
        const header = document.querySelector('.header');
        const navMenu = document.querySelector('.nav-menu');
        let toggleButton = null; 

        // --- 2. Mobile Nav Toggle Functionality ---

        /**
         * Toggles the visibility of the navigation menu on small screens.
         */
        function toggleMobileMenu() {
            // Check if the menu is currently visible
            const isOpen = navMenu.classList.contains('nav-open');

            if (isOpen) {
                // If open, close it
                navMenu.classList.remove('nav-open');
                navMenu.classList.add('nav-closed'); 
                // Set the button to the hamburger icon (Unicode for ☰)
                toggleButton.innerHTML = '&#9776;'; 
                toggleButton.setAttribute('aria-expanded', 'false');

            } else {
                // If closed, open it
                navMenu.classList.add('nav-open');
                navMenu.classList.remove('nav-closed'); 
                // Set the button to the 'X' icon (Unicode for ×)
                toggleButton.innerHTML = '&times;'; 
                toggleButton.setAttribute('aria-expanded', 'true');
            }
        }

        /**
         * Creates and inserts the mobile navigation toggle button into the header.
         */
        function setupMobileToggle() {
            // 1. Create the button element
            toggleButton = document.createElement('button');
            toggleButton.classList.add('nav-toggle');
            toggleButton.innerHTML = '&#9776;'; // Initial Hamburger icon
            toggleButton.setAttribute('aria-label', 'Toggle navigation menu');
            toggleButton.setAttribute('aria-expanded', 'false');

            // 2. Insert the button into the header, before the apply button
            const applyButton = document.querySelector('.apply-button');
            if (applyButton) {
                header.insertBefore(toggleButton, applyButton);
            } else {
                header.appendChild(toggleButton); 
            }

            // 3. Attach the event listener
            toggleButton.addEventListener('click', toggleMobileMenu);

            // 4. Close menu when a link is clicked (UX improvement for mobile)
            navMenu.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => {
                    // Only run the toggle if the menu is currently open
                    if (navMenu.classList.contains('nav-open')) {
                         toggleMobileMenu();
                    }
                });
            });
        }


        // --- 3. Initialization ---
        document.addEventListener('DOMContentLoaded', () => {
            // Set up the mobile toggle button when the document is ready
            setupMobileToggle();
        });
    </script>
</body>
</html>