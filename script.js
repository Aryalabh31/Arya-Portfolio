// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const mobileLinks = document.querySelectorAll('.mobile-link');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
    });
});


// Skills filter function
function filterExpertise(category) {
    const cards = document.querySelectorAll('.skill-card');
    const btnAll = document.getElementById('btn-all');
    const btnTech = document.getElementById('btn-tech');
    const btnRecruitment = document.getElementById('btn-recruitment');

    // Reset buttons
    [btnAll, btnTech, btnRecruitment].forEach(btn => {
        btn.className =
            'px-5 py-2.5 rounded-xl text-sm font-semibold transition-all bg-purple-50 text-slate-700 hover:bg-purple-100';
    });

    if (category === 'all') {
        btnAll.className =
            'px-5 py-2.5 rounded-xl text-sm font-semibold transition-all bg-purple-600 text-white shadow-md shadow-purple-600/20';

        cards.forEach(card => {
            card.style.display = 'block';
        });

    } else if (category === 'tech') {
        btnTech.className =
            'px-5 py-2.5 rounded-xl text-sm font-semibold transition-all bg-purple-600 text-white shadow-md shadow-purple-600/20';

        cards.forEach(card => {
            if (card.classList.contains('tech')) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });

    } else if (category === 'recruitment') {
        btnRecruitment.className =
            'px-5 py-2.5 rounded-xl text-sm font-semibold transition-all bg-purple-600 text-white shadow-md shadow-purple-600/20';

        cards.forEach(card => {
            if (card.classList.contains('recruitment')) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }
}


// Contact form submission
function handleFormSubmit(event) {
    event.preventDefault();

    const form = document.getElementById('contactForm');
    const successDiv = document.getElementById('formSuccess');

    form.reset();
    successDiv.classList.remove('hidden');

    setTimeout(() => {
        successDiv.classList.add('hidden');
    }, 5000);
}
