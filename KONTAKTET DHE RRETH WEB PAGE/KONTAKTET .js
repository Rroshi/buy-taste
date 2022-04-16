
window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");

var sticky = navbar.offsetTop;

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


function send(){
            var a = document.forms["sherbim"]["Emer Mbiemer"].value;
            var b = document.forms["sherbim"]["Email"].value;
            var c = document.forms["sherbim"]["Numer Telefoni"].value;
            var d = document.forms["sherbim"]["Mesazhi"].value;
                if(a=="" || b=="" || c=="" || d==""){
        alert("Ju lutem plotesoni te gjitha fushat e kerkuara per te derguar kerkesen tuaj qe deshironi");
            }
                else{
                    document.getElementById("formId").style.visibility='hidden';
                    document.getElementById("info3").style.visibility='hidden';
                    document.getElementById("after").style.display='block';
                    document.getElementById("formId").action="mailto:supermarket.buyandtaste@gmail.com";
                }
            }
            if ( window.history.replaceState ) {
  window.history.replaceState( null, null, window.location.href );
}
function shfaq(){
    document.getElementById("Sfoto").style.visibility="visible";
}
function fsheh(){
    document.getElementById("Sfoto").style.visibility="hidden";
}
function PintShfaq(){
    document.getElementById("PintShow").style.visibility="visible";
}
function PintFsheh(){
    document.getElementById("PintShow").style.visibility="hidden";
}
function shfaqFb(){
        document.getElementById("facebookShow").style.visibility="visible";
}
function fshehFb(){
        document.getElementById("facebookShow").style.visibility="hidden";
}
function InShfaq(){
    document.getElementById("LinkedInShow").style.visibility="visible";
}
function InFsheh(){
    document.getElementById("LinkedInShow").style.visibility="hidden";
}
function twittShfaq(){
    document.getElementById("twittShow").style.visibility="visible";
}
function twittFsheh(){
    document.getElementById("twittShow").style.visibility="hidden";
}


