const rating = document.querySelectorAll(".ratings ul li");
const button = document.getElementById("button");
const ratingMessage = document.getElementById("rating-message");
const thanksMessage = document.getElementById("thanks-message");

for (let i = 0; i < rating.length; i++) {
  rating[i].addEventListener("click", () => {
    if (!rating[i].classList.contains("selected")) {
      rating.forEach((review) => {
        review.classList.remove("selected");
      });
      rating[i].classList.add("selected");
    } else {
      rating[i].classList.toggle("selected");
    }
  });

  button.addEventListener("click", () => {
    if (rating[i].classList.contains("selected")) {
      thanksMessage.style.zIndex = "1";
      ratingMessage.innerText = `You selected ${rating[i].innerHTML} out of 5`
    }
  });
}