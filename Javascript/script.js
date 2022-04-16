// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}


$(window).scroll(function(){
    
    let position = $(this).scrollTop();
    
    if(position>=30){
        $('#back-to-top').addClass('scrollTop');
    }else{
        $('#back-to-top').removeClass('scrollTop');
    }
})

$(window).scroll(function(){
    
    let position = $(this).scrollTop();
    
    if(position>=600){
        $('#back-to-top1').addClass('scrollTop');
    }else{
        $('#back-to-top1').removeClass('scrollTop');
    }
})
