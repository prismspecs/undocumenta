document.addEventListener("DOMContentLoaded", function () {
    console.log("main.js loaded");

    const baseImgPath = "images/popovers/";

    const imageoverlay = document.getElementsByClassName("image-overlay")[0];
    const hovers = document.getElementsByClassName("call-hover");

    // add event listener to each hover, creating a popover image using the data-image attribute
    for (let i = 0; i < hovers.length; i++) {
        hovers[i].addEventListener("mouseover", function (e) {

            // if target doesnt have image data attribute
            if (!e.target.dataset.image) {
                return;
            }

            const image = document.createElement("img");
            image.src = baseImgPath + e.target.dataset.image;
            image.classList.add("popover");
            imageoverlay.appendChild(image);

        });
        
        hovers[i].addEventListener("mouseout", function (e) {

            // if imageoverlay has no children, return
            if (!imageoverlay.hasChildNodes()) {
                return;
            }

            imageoverlay.removeChild(imageoverlay.lastChild);
        });
    }
});
