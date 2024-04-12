"Use strict";

let emailButton = document.querySelector(".email-button");
let email = document.querySelector("input[type=text]");
let errP = document.querySelector(".error-message");

emailButton.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      email.value
    )
  ) {
    errP.classList.add("form-correct");
    return true;
  } else {
    email.classList.add("error-border");
    errP.classList.add("error");
    errP.classList.remove("form-correct");
    setTimeout(() => {
      email.classList.remove("error-border");
      errP.classList.remove("error");
    }, 2000);
    return false;
  }
});

// BACK TO TOP BUTTON FUNCTIONALITY
const button = document.querySelector("#backToTop");
const scrollFunction = () => {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
  }
};
window.addEventListener("scroll", scrollFunction);
button.addEventListener("click", (e) => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
