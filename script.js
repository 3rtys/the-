function changeColor(clickedLink) {
    var links = document.querySelectorAll('.nav-links a');
    
    links.forEach(function(link) {
        link.classList.remove('active');
    });

    clickedLink.classList.add('active');
}



const books = [
    {
        image: "images/book1.jpg",
        title: "Naoyuki Katoh SF Illustrations",
        tags: ["Japan,", "science fiction,", "illustration"],
        link: "#link1"
    },
    {
        image: "images/book2.jpg",
        title: "Kozo Yokoi",
        tags: ["Japan,", "illustration,", "childrens book"],
        link: "#link2"
    },

   
   
  
    // Add books 
];


function loadBooks() {
    const gallery = document.getElementById('gallery');
    books.forEach(book => {
        const bookItem = document.createElement('div');
        bookItem.classList.add('image-item');

        bookItem.innerHTML = `
            <a href="${book.link}">
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


window.onload = loadBooks;

