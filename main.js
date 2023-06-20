// when page has loaded
document.addEventListener('DOMContentLoaded', function () {

    // Get all img elements on the page
    const imgElements = document.querySelectorAll('img');

    // Iterate over each img element
    imgElements.forEach(img => {
        // Create an anchor element
        const link = document.createElement('a');

        // Set the href attribute of the anchor element to the image source
        link.href = img.src;

        // Set the target attribute to '_blank' to open in a new tab
        link.target = '_blank';

        // Append the anchor element as a parent to the img element
        img.parentNode.insertBefore(link, img);

        // Move the img element inside the anchor element
        link.appendChild(img);
    });


});