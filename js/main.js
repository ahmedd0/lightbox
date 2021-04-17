// ======= GET HTML ELEMENT ===================
var imgs = document.getElementsByClassName("portfolioImg");
var lightBoxContainer = document.getElementById("lightBoxContainer");
var boxContent = document.getElementById("boxContent");
var closeBtn = document.getElementById("close");
//--------------------- EVENT LISTENERS----------------------
for (let i = 0; i < imgs.length; i++) {
  imgs[i].addEventListener("click", function (e) {
    showLightBox(i);
  });
}
closeBtn.addEventListener("click", hideLightBox);

//--------------------- Functions --------------------
function showLightBox(index) {
  var picSrc = imgs[index].getAttribute("src");
  boxContent.style.cssText = `background-image:url(${picSrc})`;
  lightBoxContainer.classList.remove("d-none");
  document.querySelector("body").classList.add("overflow-hidden");
}
function hideLightBox() {
  lightBoxContainer.classList.add("d-none");
  document.querySelector("body").classList.remove("overflow-hidden");
}
