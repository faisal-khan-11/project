const slides = document.querySelector('.slides');
const slideCount = document.querySelectorAll('.slide').length;
let currentIndex = 0;

document.getElementById('next').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slideCount;
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
});

document.getElementById('prev').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slideCount) % slideCount;
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
});


//costum slider
//
const customSlider = document.querySelector('.custom-slider');
const customCards = document.querySelectorAll('.custom-card');
const customPrevBtn = document.querySelector('.custom-prev');
const customNextBtn = document.querySelector('.custom-next');

const cardWidth = 200; // Each card's width (in pixels)
const cardMargin = 20; // Margin between cards (in pixels)
const totalCards = customCards.length;
const totalCardWidth = cardWidth + cardMargin * 2;

// Clone the first and last few cards for seamless looping
for (let i = 0; i < totalCards; i++) {
    const firstClone = customCards[i].cloneNode(true);
    const lastClone = customCards[totalCards - 1 - i].cloneNode(true);
    customSlider.appendChild(firstClone); // Add to the end
    customSlider.prepend(lastClone); // Add to the start
}

const clonedCards = document.querySelectorAll('.custom-card'); // Update card list after cloning
const totalVisibleCards = Math.floor(window.innerWidth / totalCardWidth); // Number of visible cards
let customCurrentIndex = totalCards; // Start at the first real card

// Initial slider position
customSlider.style.transform = `translateX(${-customCurrentIndex * totalCardWidth}px)`;

// Update the slider position
function updateCustomSliderPosition() {
    customSlider.style.transition = 'transform 0.5s ease-in-out';
    const offset = -(customCurrentIndex * totalCardWidth);
    customSlider.style.transform = `translateX(${offset}px)`;

    // Highlight the focused card
    clonedCards.forEach((card, index) => {
        card.classList.toggle(
            'focused',
            index === customCurrentIndex + Math.floor(totalVisibleCards / 2) - 1
        );
    });
}

// Reset position after transitioning to a clone
function resetSliderPosition() {
    if (customCurrentIndex >= totalCards * 2) {
        customSlider.style.transition = 'none';
        customCurrentIndex = totalCards; // Reset to the first real card
        customSlider.style.transform = `translateX(${-customCurrentIndex * totalCardWidth}px)`;
    } else if (customCurrentIndex < totalCards) {
        customSlider.style.transition = 'none';
        customCurrentIndex = totalCards * 2 - 1; // Reset to the last real card
        customSlider.style.transform = `translateX(${-customCurrentIndex * totalCardWidth}px)`;
    }
}

// Loop functionality
function loopSlider() {
    customCurrentIndex++;
    updateCustomSliderPosition();
    setTimeout(resetSliderPosition, 500); // Reset after transition ends
}

// Auto-slide every 2 seconds
let sliderInterval = setInterval(loopSlider, 2000);

// Add event listeners for buttons
customNextBtn.addEventListener('click', () => {
    clearInterval(sliderInterval); // Stop auto-slide when manually navigating
    customCurrentIndex++;
    updateCustomSliderPosition();
    setTimeout(resetSliderPosition, 500); // Reset after transition ends
    sliderInterval = setInterval(loopSlider, 2000); // Restart auto-slide
});

customPrevBtn.addEventListener('click', () => {
    clearInterval(sliderInterval); // Stop auto-slide when manually navigating
    customCurrentIndex--;
    updateCustomSliderPosition();
    setTimeout(resetSliderPosition, 500); // Reset after transition ends
    sliderInterval = setInterval(loopSlider, 2000); // Restart auto-slide
});

// Initial setup
updateCustomSliderPosition();




//progress code
document.addEventListener("DOMContentLoaded", () => {
    const circles = document.querySelectorAll(".circle");
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const circle = entry.target;
          const targetNumber = parseInt(circle.getAttribute("data-number"));
          let progress = 0;
  
          const interval = setInterval(() => {
            progress += 90;
  
            // Update the circle's background
            circle.style.background = `conic-gradient(
              ${circle.classList.contains("yellow") ? "#ffea00" : 
              circle.classList.contains("orange") ? "#ff5722" : "#800000"} 
              ${progress * (360 / targetNumber)}deg,
              transparent ${progress * (360 / targetNumber)}deg
            )`;
  
            // Update the displayed number
            circle.querySelector(".number").textContent = progress;
  
            // Stop when the target is reached
            if (progress >= targetNumber) clearInterval(interval);
          }, 10); // Adjust speed of progress here
        }
      });
    });
  
    circles.forEach((circle) => observer.observe(circle));
  });
  
  



  const carouselContainer = document.querySelector('.carousel-container');
  const carouselItems = document.querySelectorAll('.carousel-item');
  const carouselPrevBtn = document.querySelector('.carousel-prev');
  const carouselNextBtn = document.querySelector('.carousel-next');
  
  const itemWidth = 200; // Each card's width (in pixels)
  const itemMargin = 20; // Margin between cards (in pixels)
  const totalItems = carouselItems.length;
  const totalItemWidth = itemWidth + itemMargin * 2;
  
  // Clone the first and last few cards for seamless looping
  for (let i = 0; i < totalItems; i++) {
      const firstClone = carouselItems[i].cloneNode(true);
      const lastClone = carouselItems[totalItems - 1 - i].cloneNode(true);
      carouselContainer.appendChild(firstClone); // Add to the end
      carouselContainer.prepend(lastClone); // Add to the start
  }
  
  const clonedItems = document.querySelectorAll('.carousel-item'); // Update card list after cloning
  const visibleItems = Math.floor(window.innerWidth / totalItemWidth); // Number of visible cards
  let currentCarouselIndex = totalItems; // Start at the first real card
  
  // Initial slider position
  carouselContainer.style.transform = `translateX(${-currentCarouselIndex * totalItemWidth}px)`;
  
  // Update the slider position
  function updateCarouselPosition() {
      carouselContainer.style.transition = 'transform 0.5s ease-in-out';
      const offset = -(currentCarouselIndex * totalItemWidth);
      carouselContainer.style.transform = `translateX(${offset}px)`;
  
      // Highlight the focused card
      clonedItems.forEach((item, index) => {
          item.classList.toggle(
              'highlighted',
              index === currentCarouselIndex + Math.floor(visibleItems / 2) - 1
          );
      });
  }
  
  // Reset position after transitioning to a clone
  function resetCarouselPosition() {
      if (currentCarouselIndex >= totalItems * 2) {
          carouselContainer.style.transition = 'none';
          currentCarouselIndex = totalItems; // Reset to the first real card
          carouselContainer.style.transform = `translateX(${-currentCarouselIndex * totalItemWidth}px)`;
      } else if (currentCarouselIndex < totalItems) {
          carouselContainer.style.transition = 'none';
          currentCarouselIndex = totalItems * 2 - 1; // Reset to the last real card
          carouselContainer.style.transform = `translateX(${-currentCarouselIndex * totalItemWidth}px)`;
      }
  }
  
  // Loop functionality
  function loopCarousel() {
      currentCarouselIndex++;
      updateCarouselPosition();
      setTimeout(resetCarouselPosition, 500); // Reset after transition ends
  }
  
  // Auto-slide every 2 seconds
  let carouselInterval = setInterval(loopCarousel, 2000);
  
  // Add event listeners for buttons
  carouselNextBtn.addEventListener('click', () => {
      clearInterval(carouselInterval); // Stop auto-slide when manually navigating
      currentCarouselIndex++;
      updateCarouselPosition();
      setTimeout(resetCarouselPosition, 500); // Reset after transition ends
      carouselInterval = setInterval(loopCarousel, 2000); // Restart auto-slide
  });
  
  carouselPrevBtn.addEventListener('click', () => {
      clearInterval(carouselInterval); // Stop auto-slide when manually navigating
      currentCarouselIndex--;
      updateCarouselPosition();
      setTimeout(resetCarouselPosition, 500); // Reset after transition ends
      carouselInterval = setInterval(loopCarousel, 2000); // Restart auto-slide
  });
  
  // Initial setup
  updateCarouselPosition();
  

  