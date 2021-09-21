var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

const prices = {
    small : 800,
    Medium : 1000,
    large : 1200
  }
  let totalcost = 0 

  $('form.pizza').submit(function(event){

    event.preventDefault();
    const fd = new FormData(this);
    const order = {
        flavour : fd.get('flavour'),
        size : fd.get('size'),
        qty : fd.get('qty'),
        toppings : fd.getAll('toppings'),
        cost : parseInt(prices[fd.get('size')]) * parseInt([fd.get('qty')])
    }
})
