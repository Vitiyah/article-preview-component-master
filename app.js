const arrowBtn = document.querySelector(".profile-arrow");
const shareInfo = document.querySelector(".share-link");

arrowBtn.addEventListener("click", () => {
  if (shareInfo.classList.contains("hidden")) {
    shareInfo.classList.remove("hidden");
  } else {
    shareInfo.classList.add("hidden");
  }
});
