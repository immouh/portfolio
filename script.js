


//SLIDE FUNCTIONALITY
document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.slider');//SELECT THE OBJECT WITH THE CLASS "slide"
    const slides = document.querySelectorAll('.slide');//SELECT ALL THE  ELEMENTS WITH CLASS"slide"
    let currentIndex = 0;//index of the slide

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;//incremente the index until the end 
        updateSlider();//call the function
    }

    function updateSlider() {//display until the good slide
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    //calling the function all 2 seconds
    setInterval(nextSlide, 2000);
});
//Anchor links
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    //
    const observer = new IntersectionObserver((entries) => {//API SURVEILLE LES ELEMENT 
        entries.forEach(entry => {
            if (entry.isIntersecting) {//IF VISIBLE
                entry.target.classList.add('fade-in');
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });
    const sidebarToggle = document.querySelector('.sidebar-toggle');
    const sidebar = document.querySelector('.sidebar');
    const body = document.body;

    sidebarToggle.addEventListener('click', function () {
        sidebar.classList.toggle('open');
        body.classList.toggle('sidebar-open');
    });

    document.addEventListener('click', function (event) {
        if (!sidebar.contains(event.target) && !sidebarToggle.contains(event.target)) {
            sidebar.classList.remove('open');
            body.classList.remove('sidebar-open');
        }
    });
});
document.addEventListener('DOMContentLoaded', function () {
    // ... (code JavaScript existant) ...

    // Dark mode toggle functionality
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const body = document.body;

    darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');

        if (body.classList.contains('dark-mode')) {
            darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
            localStorage.setItem('darkMode', 'enabled');
        } else {
            darkModeToggle.innerHTML = '<i class="fas fa-moon"></i>';
            localStorage.setItem('darkMode', 'disabled');
        }
    });

    // Check for saved dark mode preference
    if (localStorage.getItem('darkMode') === 'enabled') {
        body.classList.add('dark-mode');
        darkModeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }

    // ... (autre code JavaScript existant) ...
});