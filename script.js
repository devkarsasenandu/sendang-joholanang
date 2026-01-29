function toggleMenu() {
            const nav = document.querySelector('.nav-links');
            nav.classList.toggle('active');
        }

        window.addEventListener('scroll', function() {
            const nav = document.querySelector('nav');
            if (window.scrollY > 50) {
                nav.style.background = "#ffffff";
                nav.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
            } else {
                nav.style.background = "rgba(255, 255, 255, 0.7)";
                nav.style.boxShadow = "none";
            }
        });