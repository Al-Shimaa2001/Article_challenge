const autherSection = document.querySelector("#auther");
const autherShare = document.querySelector(".share-btn");
const sharingSection = document.querySelector(".icons-section");


autherShare.addEventListener("click", () => {
  autherSection.style.display= 'none';
  console.log("hi");
  sharingSection.classList.remove("hidden");
  hideShareBox()
});
function hideShareBox(){
    setTimeout(() => {
      sharingSection.classList.add("hidden");
      autherSection.style.display= 'flex';
    }, 4000);

}
 