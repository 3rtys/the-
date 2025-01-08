



const books = [
    {
        image: "images\\book1.png",
        title: "The Peanut Butter Falcon",
        tags: ["family,", "comedy,", "drama"],
        link: "#link1",
        id: "book1-section"
    },
    {
        image: "images\\book2.png",
        title: "Columbus",
        tags: ["korean,", "mystery,", "drama"],
        link: "#link2"
    },
    {
        image: "images\\book3.jpg",
        title: "The Lobster",
        tags: ["dark comedy,", "drama,", "romance"],
        link: "#link3"
    },
    {
        image: "images\\book4.jpg",
        title: "Coherence",
        tags: ["horror,", "mystery,", "sci-fi"],
        link: "#link4"
    },
    {
        image: "images\\book5.jpg",
        title: "Possession",
        tags: ["drama,", "horror,", "supernatural"],
        link: "#link5"
    },
    {
        image: "images\\book6.jpg",
        title: "Dune: Part Two",
        tags: ["epic,", "action,", "drama"],
        link: "#link6"
    },
    {
        image: "images\\book7.jpg",
        title: "Love Lies Bleeding",
        tags: ["romance,", "crime,", "mystery"],
        link: "#link7"
    },
    {
        image: "images\\book8.jpg",
        title: "Parasite",
        tags: ["tragedy,", "drama,", "thriller"],
        link: "#link8"
    },
    {
        image: "images\\book9.jpg",
        title: "Movie title",
        tags: ["Japan,", "illustration,", "childrens book"],
        link: "#link2"
    },
    {
        image: "images\\book9.jpg",
        title: "Movie title",
        tags: ["Japan,", "illustration,", "childrens book"],
        link: "#link2"
    },
    {
        image: "images\\book9.jpg",
        title: "Movie title",
        tags: ["Japan,", "illustration,", "childrens book"],
        link: "#link2"
    },
    {
        image: "images\\book9.jpg",
        title: "Movie title",
        tags: ["Japan,", "illustration,", "childrens book"],
        link: "#link2"
    },
    {
        image: "images\\book9.jpg",
        title: "Movie title",
        tags: ["Japan,", "illustration,", "childrens book"],
        link: "#link2"
    },
    {
        image: "images\\book9.jpg",
        title: "Kozo Yokoi",
        tags: ["Japan,", "illustration,", "childrens book"],
        link: "#link2"
    },
    {
        image: "images\\book9.jpg",
        title: "Movie title",
        tags: ["Japan,", "illustration,", "childrens book"],
        link: "#link2"
    },
    {
        image: "images\\book9.jpg",
        title: "Movie title",
        tags: ["Japan,", "illustration,", "childrens book"],
        link: "#link2"
    },
    {
        image: "images\\book9.jpg",
        title: "Movie title",
        tags: ["Japan,", "illustration,", "childrens book"],
        link: "#link2"
    },
    // Add the rest of your books as needed, following the correct structure
];

// 
const titleElement = document.getElementById('book-title');
if (titleElement) {
    
    titleElement.textContent = books[0].title; 
}



function loadBooks() {
    const gallery = document.getElementById('gallery');
    books.forEach(book => {
        const bookItem = document.createElement('div');
        bookItem.classList.add('image-item');

        bookItem.innerHTML = `
            <a href="${book.link}" onclick="showBookSection('${book.id}')">
                <img src="${book.image}" alt="${book.title}" class="gallery-image">
                <h3 class="image-title">${book.title}</h3>
            </a>
            <div class="thumb-tags">
                ${book.tags.map(tag => `<span class="thumb-tag">${tag}</span>`).join(' ')}
            </div>
        `;

        gallery.appendChild(bookItem);
    });
}

function showBookSection(bookId) {
    // Hide all book sections
    const sections = document.querySelectorAll('.book-section');
    sections.forEach(section => section.style.display = 'none');

    // Show the selected book section
    const selectedSection = document.getElementById(bookId);
    if (selectedSection) {
        selectedSection.style.display = 'block';
    }
}


window.onload = loadBooks;


/*navigate about etc ******************************/

function changeColor(link) {
    if (!link) return;

    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => link.classList.remove('active'));

    link.classList.add('active');

    const sections = {
        '#about': 'about-section',
        '#navigate': 'navigate-section',
        '#thebox': 'thebox-section',
        '#links': 'links-section'
    };

    Object.keys(sections).forEach(key => {
        const section = document.getElementById(sections[key]);
        if (section) {
            section.style.display = (link.getAttribute('href') === key) ? 'block' : 'none';
        }
    });
}










// PSEUDO
const links = document.querySelectorAll('.link-item a');

links.forEach(link => {
    link.addEventListener('click', function(event) {
        // Remove background color from all links
        links.forEach(l => l.style.backgroundColor = '');

        // Add yellow background color to the clicked link
        event.target.style.backgroundColor = '#ffff99';
    });
});








/* gia book titles ***************/

