// download document when When button is pressed
document.getElementById("downloadBtn").addEventListener("click", function () {
  const link = document.createElement("a");
  link.href = "assets/mydoc.pdf"; // Your file path
  link.download = "mydoc.pdf"; // File name to save as
  document.body.appendChild(link);

  // Some mobile browsers require this:
  link.target = "_blank";

  link.click();
  document.body.removeChild(link);
  console.log("Document download started.");
});

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
