// ======= GET HTML ELEMENT ===================
var imgs = Array.from(document.getElementsByClassName("portfolioImg"));
var lightBoxContainer = document.getElementById("lightBoxContainer");
var boxContent = document.getElementById("boxContent");
var closeBtn = document.getElementById("close");
var next = document.getElementById("next");
var prev = document.getElementById("prev");
var currentIndex = 0;
//--------------------- EVENT LISTENERS----------------------
for (let i = 0; i < imgs.length; i++) {
  imgs[i].addEventListener("click", function (e) {
    showLightBox(i);
    currentIndex = imgs.indexOf(e.target);
    console.log(currentIndex);
  });
}
closeBtn.addEventListener("click", hideLightBox);
next.addEventListener("click", showNext);
prev.addEventListener("click", showPrev);
document.addEventListener("keydown", function (e) {
  console.log(e.keyCode);
  if (e.keyCode == 27) {
    hideLightBox();
  } else if (e.keyCode == 39) {
    showNext();
  } else if (e.keyCode == 37) {
    showPrev();
  }
});
document.addEventListener("click", function (e) {
  if (e.target == lightBoxContainer) {
    hideLightBox();
  }
});
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
function showNext() {
  currentIndex++;
  if (currentIndex == imgs.length) {
    currentIndex = 0;
  }
  var picSrc = imgs[currentIndex].getAttribute("src");
  boxContent.style.cssText = `background-image:url(${picSrc})`;
}
function showPrev() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = imgs.length - 1;
  }
  var picSrc = imgs[currentIndex].getAttribute("src");
  boxContent.style.cssText = `background-image:url(${picSrc})`;
}
