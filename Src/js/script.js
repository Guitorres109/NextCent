const items = document.querySelectorAll('.reveal');

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target); // só uma vez
                }
            });
        }, { threshold: 0.5 });

        items.forEach(item => observer.observe(item));