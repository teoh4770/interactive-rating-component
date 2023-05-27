

class App {
  constructor() {
    // variables
    // rating state
    this.rating = 0; 

    // dom elements
    this.$form = document.querySelector(".rating-card");
    this.$icon = document.querySelector(".rating-card__icon-container");
    this.$buttons = document.querySelectorAll(".js-rating-card__button");
    this.$submitButton = document.querySelector(".rating-card__button--submit");
    this.$result = document.querySelector(".thank-you-card__chip");
    this.$thankYouCard = document.querySelector(".thank-you-card");
    this.$resetLink = document.querySelector(".thank-you-card__h3");
    this.$sounds = document.querySelectorAll(".audio");

    window.onload = () => {
      this.animate();
    }
    this.handleEventListeners();
  }

  handleEventListeners() {
    // prevent submitting the form
    this.$form.onsubmit = (event) => event.preventDefault();

    // getting the rating
    this.$form.addEventListener("click", (event) => {
      if (event.target.classList.contains("js-rating-card__button")
      ) {
        this.rating = +event.target.dataset.value;

        this.$buttons.forEach(button => {
          button.classList.remove("active");
        })
        event.target.classList.add("active");
      }
    })

    // submit event trigger based on the state of the rating
    this.$form.addEventListener("submit", () => {
      if (this.rating !== 0) {
        this.$form.classList.add("hidden");
        this.$result.textContent = `You selected ${this.rating} out of 5`;
        this.$thankYouCard.classList.remove("hidden");
        this.$thankYouCard.classList.remove("right");
        this.playSound("submit");
      } else {
        console.log("not submit!");
      }
    })

    // reset the form
    this.$resetLink.addEventListener("click", () => {
      this.rating = 0;
      this.$thankYouCard.classList.add("hidden");
      this.$form.classList.remove("hidden");
      this.$buttons.forEach(button => {
        button.classList.remove("active");
      })
      this.playSound("reset");
    })
  }

  reset() {
    this.$buttons.forEach((button, i) => {
      button.classList.remove("flick");
    })
  }

  animate() {
    this.$icon.classList.add("spin");

    this.$buttons.forEach((button, i) => {
      button.style.transitionDelay = `${i * 125}ms`;
      button.classList.add("flick");
    })
  }

  playSound(action, sounds = this.$sounds) {
    console.log(sounds);
    if (action) {
      sounds.forEach(sound => {
        if (sound.dataset.action === action) {
          sound.currentTime = 0;
          sound.play();
        }
      })
    }
  }
}


new App();