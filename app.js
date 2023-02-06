const arrowBtn = document.querySelector(".profile-arrow");
const shareInfo = document.querySelector(".share-link");

arrowBtn.addEventListener("click", () => {
  if (shareInfo.classList.contains("hidden")) {
    shareInfo.classList.remove("hidden");
  } else {
    shareInfo.classList.add("hidden");
  }
  if (arrowBtn.classList.contains("arrow-act")) {
    arrowBtn.classList.remove("arrow-act");
  } else {
    arrowBtn.classList.add("arrow-act");
  }
});
