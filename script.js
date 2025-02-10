// Competition data
const competitions = [
    { name: 'Futsal', type: 'Sport', details: 'Indoor football competition' },
    { name: 'War Game', type: 'E-Sport', details: 'Strategic gaming tournament' },
    { name: 'Estafet Air', type: 'Team Sport', details: 'Water relay race' },
    { name: 'Basket', type: 'Sport', details: 'Basketball tournament' },
    { name: 'Masak', type: 'Art', details: 'Cooking competition' },
    { name: 'Mobile Legend', type: 'E-Sport', details: 'Mobile gaming tournament' }
];

// Committee data
const committee = [
    { name: 'Sam', role: 'Ketua' },
    { name: 'Uly', role: 'Wakil Ketua' },
    { name: 'Don', role: 'Staff' },
    { name: 'Emanuel', role: 'Staff' },
    { name: 'Hans', role: 'Staff' },
    { name: 'Peter', role: 'Staff' },
    { name: 'Donna', role: 'Staff' },
    { name: 'Bob', role: 'Staff' }
];

// Function to create competition cards
function renderCompetitions() {
    const container = document.getElementById('competitionContainer');
    competitions.forEach(comp => {
        const card = document.createElement('div');
        card.className = 'competition-card';
        card.innerHTML = `
            <h3>${comp.name}</h3>
            <p>${comp.details}</p>
            <span class="competition-type">${comp.type}</span>
        `;
        container.appendChild(card);
    });
}

// Function to create committee cards
function renderCommittee() {
    const container = document.getElementById('committeeContainer');
    committee.forEach(member => {
        const card = document.createElement('div');
        card.className = 'committee-card';
        card.innerHTML = `
            <div class="committee-avatar">
                <i class="fas fa-user"></i>
            </div>
            <h3>${member.name}</h3>
            <p>${member.role}</p>
        `;
        container.appendChild(card);
    });
}

// Form handling
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };
    
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData);
    alert('Pesan telah terkirim!');
    this.reset();
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    renderCompetitions();
    renderCommittee();
});