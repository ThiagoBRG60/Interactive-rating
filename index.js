const rating = document.querySelectorAll(".ratings ul li");
const button = document.getElementById("button");
const ratingMessage = document.getElementById("rating-message");
const thanksMessage = document.getElementById("thanks-message");

rating.forEach((item, index) => {
  item.addEventListener("click", () => {
    rating.forEach((otheritem,otherindex) => {
      otheritem.classList.toggle("selected", index === otherindex);

      if (item.classList.contains('selected')) {
        ratingMessage.innerText = "You selected " + item.innerText + " out of 5"
      }
      button.addEventListener('click', () => {
        if(item.classList.contains('selected')) {
          thanksMessage.style.zIndex = "1"
        }else {
          thanksMessage.style.zIndex = "-1"
        }
      })
    });
  });
});
