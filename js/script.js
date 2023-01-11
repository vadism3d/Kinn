$('.sajid-1').owlCarousel({
    center:true,
    loop : true,
    margin: 30,
    startPosition: 1,
    items:3,
    responsive:{
        1024:{
            items: 3,
            center:true
        },
        768:{
            items:3,
            center:true
        },
        320:{
            items:1,
            center:true
        }
    }
});

    $('.sajid-2').owlCarousel({
        loop : true,
        margin: 10,
        startPosition: 1,
        items:4,
        
});

$('.customNextBtn').click(function() {
    owl.trigger('next.owl.carousel');
})
// Go to the previous item
$('.customPrevBtn ').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel', [300]);
})




// //  dropdown
// function myFunction() {
//     document.getElementById("myDropdown").classList.toggle("show");
// }

// // Close the dropdown menu if the user clicks outside of it
// window.onclick = function(event) {
//   if (!event.target.matches('.dropbtn')) {

//     var dropdowns = document.getElementsByClassName("dropdown-content");
//     var i;
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains('show')) {
//         openDropdown.classList.remove('show');
//       }
//     }
//   }
// } 

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
} 