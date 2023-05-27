

class App {
  constructor() {
    // variables
    // rating state
    this.rating = 0; 

    // dom elements
    this.$form = document.querySelector(".rating-card");
    this.$thankYouCard = document.querySelector(".thank-you-card");
    this.$buttons = document.querySelectorAll(".js-rating-card__button");
    this.$submitButton = document.querySelector(".rating-card__button--submit");
    this.$result = document.querySelector(".thank-you-card__chip");
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
      } else {
        console.log("not submit!");
      }
    })
  }
}

new App();