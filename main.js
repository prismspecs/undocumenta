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

    var siteTitle = document.querySelector('#site-title');
    // set navigation div padding-left to container
    var navigation = document.querySelector('.nav');
    navigation.style.paddingLeft = siteTitle.offsetLeft + 'px';
    

    // add event listener for when .nav is clicked, scroll to #navigation
    navigation.addEventListener('click', function () {
        var toc = document.querySelector('#navigation');

        // get top position of toc
        var offsetPosition = toc.offsetTop - 20;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
    );


});

// when scroll past div with navigation class, add class "sticky" to nav
window.addEventListener('scroll', function () {
    
    var nav = document.querySelector('.nav');
        var navigation = document.querySelector('#navigation');
        var navigationOffsetTop = navigation.offsetTop;

        if (window.scrollY > navigationOffsetTop) {
          nav.classList.add('show');
        } else {
          nav.classList.remove('show');
        }
});