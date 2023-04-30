/* navbar */
const navbarLinks = document.querySelector(".navbar-links");
const burger = document.querySelector(".navbar-burger");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  navbarLinks.classList.toggle("active");
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    navbarLinks.classList.remove("active");
    burger.classList.remove("active");
  }
});

// carousel

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slides");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}
// cards

const objects = [
  {
    image: "assets/img/card_images/Clip1.png",
    title: "FLIGHT BOOKING",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.",
  },
  {
    image: "assets/img/card_images/Clip2.png",
    title: "HOTEL & RESORT BOOKING",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.",
  },
  {
    image: "assets/img/card_images/Clip3.png",
    title: "FAMILY TRIP PLANNER",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.",
  },
  {
    image: "assets/img/card_images/Clip4.png",
    title: "CRUISE TOUR",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.",
  },
  {
    image: "assets/img/card_images/Clip5.png",
    title: "FIRE CAMP",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.",
  },
  {
    image: "assets/img/card_images/Clip6.png",
    title: "CORPORATE HOLIDAYS",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem.",
  },
];

const cardWrapper = document.querySelector(".cardWrapper");

objects.forEach((object) => {
  const card = `
    <div class="card">
      <img src="${object.image}" alt="${object.title}">
      <div class="card-text">
      <h4>${object.title}</h4>
      <p>${object.description}</p>
      <div>
    </div>
  `;
  cardWrapper.innerHTML += card;
});

// modal
const cards = document.querySelectorAll(".card");
const modal = document.querySelector(".modal");
const modalImage = document.querySelector(".modal-image");
const modalTitle = document.querySelector(".modal-title");
const modalDescription = document.querySelector(".modal-description");

cards.forEach((card) => {
  card.addEventListener("click", () => {
    modalImage.src = card.querySelector("img").src;
    modalTitle.textContent = card.querySelector("h4").textContent;
    modalDescription.textContent = card.querySelector("p").textContent;
    modal.style.display = "block";
  });
});

const closeModal = () => {
  modal.style.display = "none";
};

const closeBtn = document.querySelector(".close");
closeBtn.addEventListener("click", closeModal);

window.addEventListener("click", (event) => {
  if (event.target == modal) {
    closeModal();
  }
});

// video
const myVideo = document.getElementById("video");
function playpause(){
  if(myVideo.paused){
    myVideo.play();
    document.getElementById("playpause_img").style.backgroundImage = "none";
  }else{
    myVideo.pause();
    document.getElementById("playpause_img").style.backgroundImage = "url('assets/img/playbtn.png')";
  }
}

/*counters*/

// Create a new IntersectionObserver instance
const observer = new IntersectionObserver((entries) => {
  // Loop through each intersection entry
  entries.forEach((entry) => {
    // If the entry is intersecting (i.e., the counters div is in view)
    if (entry.isIntersecting) {
      // Select all the number elements
      const counters = document.querySelectorAll('.box h3');

      // Loop through each number element
      counters.forEach((counter) => {
        // Set the starting count to 0
        let count = 0;

        // Set the target count to the number in the element
        const targetCount = parseInt(counter.innerText);

        // Set the duration of the count animation to 2 seconds
        const duration = 2000;

        // Calculate the increment value for each animation frame
        const increment = targetCount / (duration / 16);

        // Create a function that updates the number element with the new count
        const updateCount = () => {
          count += increment;
          if (count >= targetCount) {
            count = targetCount;
            clearInterval(counterInterval);
          }
          counter.innerText = Math.floor(count);
        };

        // Start a setInterval loop that updates the number element every 16ms
        const counterInterval = setInterval(updateCount, 16);
      });

      // Stop observing the counters div
      observer.unobserve(entry.target);
    }
  });
});

// Observe the counters div
const countersDiv = document.querySelector('.counters');
observer.observe(countersDiv);

// tour cards
const cardsData = [
  {
    type: 'Honeymoon',
    image: 'assets/img/tour_images/Clip.png',
    price: '$299/person',
    title: 'Blue beauty of Greece',
    duration: '5 Dayes / 6 Night'
  },
  {
    type: 'Holiday',
    image: 'assets/img/tour_images/Clip1.png',
    price: '$178/person',
    title: 'Nature of Phuket',
    duration: '3 Dayes / 4 Night'
  },
  {
    type: 'Holiday',
    image: 'assets/img/tour_images/Clip2.png',
    price: '$1111/person',
    title: 'World Tour of Paris',
    duration: '7 Dayes / 8 Night'
  }
];

const tourContainer = document.querySelector('.tour');

cardsData.forEach(cardData => {
  let cardHtml = `
    <div class="tour-card">
      <div class="corner">${cardData.type}</div>
      <img src="${cardData.image}" alt="">
      <div class="card-info">
        <p>${cardData.price}</p>
        <h3>${cardData.title}</h3>
        <p>${cardData.duration}</p>
      </div>
    </div>
  `;
  tourContainer.insertAdjacentHTML('beforeend', cardHtml);
});


// form
const emailInput = document.getElementById("email");
const subscribeBtn = document.getElementById("subscribeBtn");
const errorMsg = document.getElementById("errorMsg");
const successMsg = document.getElementById("successMsg");

subscribeBtn.addEventListener("click", function(event) {
  event.preventDefault();
  if (!isValidEmail(emailInput.value)) {
    errorMsg.style.display = "block";
    successMsg.style.display = "none";
    return;
  }
  errorMsg.style.display = "none";
  successMsg.style.display = "block";
});

function isValidEmail(email) {
  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegex.test(String(email).toLowerCase());
}







