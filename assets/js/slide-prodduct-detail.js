document.addEventListener("DOMContentLoaded", function() {
    var imgMinis = document.querySelectorAll(".prod-preview__thumb-img");
    var mainImgs = document.querySelectorAll(".prod-preview__img");
        function changeImage(event) {
        var index = Array.from(imgMinis).indexOf(event.target);
        mainImgs.forEach(function(img, i) {
            img.parentElement.style.display = i === index ? 'block' : 'none';
        });
        }
        imgMinis.forEach(function(imgMini) {
        imgMini.addEventListener("click", changeImage);
        });
        mainImgs.forEach(function(img, i) {
        img.parentElement.style.display = i === 0 ? 'block' : 'none';
        });
  });
  