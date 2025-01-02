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
        tags: ["Japan,", "illustration,", "children's book"],
        link: "#link2"
    },
     {
        image: "images/book3.jpg",
        title: "A Modern Dance Of Death",
        tags: ["Germany,", "illustration,", "prints"],
        link: "#link3"
    },
     {
        image: "images/book4.jpg",
        title: "Hoogspanning!!!",
        tags: ["Netherlands,", "illustration,", "poster"],
        link: "#link4"
    },
     {
        image: "images/book5.jpg",
        title: "Vintage Safety",
        tags: ["netherland,", "illustration,", "empemera"],
        link: "#link5"
    },
       {
        image: "images/book6.jpg",
        title: "One Thousand Daily Book Graphics",
        tags: ["book cover,", "illustration,", "blog"],
        link: "#link6"
    },
       {
        image: "images/book7.jpg",
        title: "The Gods Of Japan",
        tags: ["japan,", "illustration,", "children's book"],
        link: "#link7"
    },
       {
        image: "images/book8.jpg",
        title: "The Litlle Song That Ran Away",
        tags: ["lithuania,", "illustration,", "children's book"],
        link: "#link8"
    },

        {
        image: "images/book9.jpg",
        title: "Brooklyn Comics And Graphics FEstival",
        tags: ["comics,", "illustration,", "united states"],
        link: "#link9"
    },
          {
        image: "images/book9.jpg",
        title: "Brooklyn Comics And Graphics FEstival",
        tags: ["comics,", "illustration,", "united states"],
        link: "#link9"
    },
          {
        image: "images/book9.jpg",
        title: "Brooklyn Comics And Graphics FEstival",
        tags: ["comics,", "illustration,", "united states"],
        link: "#link9"
    },
          {
        image: "images/book9.jpg",
        title: "Brooklyn Comics And Graphics FEstival",
        tags: ["comics,", "illustration,", "united states"],
        link: "#link9"
    },
          {
        image: "images/book9.jpg",
        title: "Brooklyn Comics And Graphics FEstival",
        tags: ["comics,", "illustration,", "united states"],
        link: "#link9"
    },
          {
        image: "images/book9.jpg",
        title: "Brooklyn Comics And Graphics FEstival",
        tags: ["comics,", "illustration,", "united states"],
        link: "#link9"
    },
          {
        image: "images/book9.jpg",
        title: "Brooklyn Comics And Graphics FEstival",
        tags: ["comics,", "illustration,", "united states"],
        link: "#link9"
    },
          {
        image: "images/book9.jpg",
        title: "Brooklyn Comics And Graphics FEstival",
        tags: ["comics,", "illustration,", "united states"],
        link: "#link9"
    },
          {
        image: "images/book9.jpg",
        title: "Brooklyn Comics And Graphics FEstival",
        tags: ["comics,", "illustration,", "united states"],
        link: "#link9"
    },
          {
        image: "images/book9.jpg",
        title: "Brooklyn Comics And Graphics FEstival",
        tags: ["comics,", "illustration,", "united states"],
        link: "#link9"
    },
          {
        image: "images/book9.jpg",
        title: "Brooklyn Comics And Graphics FEstival",
        tags: ["comics,", "illustration,", "united states"],
        link: "#link9"
    },
          {
        image: "images/book9.jpg",
        title: "Brooklyn Comics And Graphics FEstival",
        tags: ["comics,", "illustration,", "united states"],
        link: "#link9"
    },
          {
        image: "images/book9.jpg",
        title: "Brooklyn Comics And Graphics FEstival",
        tags: ["comics,", "illustration,", "united states"],
        link: "#link9"
    },
          {
        image: "images/book9.jpg",
        title: "Brooklyn Comics And Graphics FEstival",
        tags: ["comics,", "illustration,", "united states"],
        link: "#link9"
    },
          {
        image: "images/book9.jpg",
        title: "Brooklyn Comics And Graphics FEstival",
        tags: ["comics,", "illustration,", "united states"],
        link: "#link9"
    },
          {
        image: "images/book9.jpg",
        title: "Brooklyn Comics And Graphics FEstival",
        tags: ["comics,", "illustration,", "united states"],
        link: "#link9"
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

