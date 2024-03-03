// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = "♡";
const FULL_HEART = "♥";

// Your JavaScript code goes here!
const like = document.querySelector(".like");
like.addEventListener("click", () => {
  const heart = document.querySelector(".like-glyph");
  mimicServerCall()
    .then(() => {
      if (heart.textContent === "♡") {
        heart.textContent = FULL_HEART;
        like.classList.add("activated-heart");
      } else {
        heart.textContent = EMPTY_HEART;
        like.classList.remove("activated-heart");
      }
    })
    .catch(() => {
      const modal = document.querySelector("#modal");
      modal.classList.remove("hidden");
      setTimeout(() => {
        modal.classList.add("hidden");
      }, 3000);
    });
});

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
