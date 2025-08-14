// Auto download document when page loads
window.onload = function () {
  const link = document.createElement("a");
  link.href = "assets/mydoc.pdf"; // Your file name here
  link.download = "assets/mydoc.pdf"; // The name it will save as
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  console.log("Document download started.");
};

// Popup functionality
const infoButton = document.querySelector(".info-button");
const popup = document.getElementById("popup");
const closePopup = document.getElementById("closePopup");

infoButton.addEventListener("click", () => {
  popup.classList.add("show");
});

closePopup.addEventListener("click", () => {
  popup.classList.remove("show");
});
