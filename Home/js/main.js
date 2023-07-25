

//Get the button
var mybutton = document.getElementById("back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    // mybutton.classList.add("show")
    mybutton.style.display="block";
  } else {
    // mybutton.classList.remove("show")
    mybutton.style.display="none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

AOS.init({
  easing: 'ease-in-out-sine',
  duration:'1000'
  // easing:'linear'
});
/////////
  // Get all the navigation links
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks[0].classList.remove('active');
  // Add click event listener to each link
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      // Remove the 'active' class from all links
      navLinks.forEach(link => link.classList.remove('active'));

      // Add the 'active' class to the clicked link
      link.classList.add('active');

      // Get the href attribute of the clicked link
      const href = link.getAttribute('href');

      // Store the active link information in local storage
      localStorage.setItem('activeLink', href);
    });
  });

  // Retrieve active link information from local storage on page load
  document.addEventListener('DOMContentLoaded', () => {
    const activeLink = localStorage.getItem('activeLink');

    // Set the 'active' class to the link corresponding to the stored active link
    if (activeLink) {
      const linkToActivate = document.querySelector(`.nav-link[href="${activeLink}"]`);
      if (linkToActivate) {
        linkToActivate.classList.add('active');
      }
    }
  });