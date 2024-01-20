const prevbtn = document.querySelector(".prevBtn");
const nextbtn = document.querySelector(".nextBtn");
const slides =document.querySelectorAll(".slide");

//accessing slides
prevbtn.style.display = "none";
slides.forEach(function(slide,index){
       slide.style.left = `${index*100}%`;
});

var counter = 0;

prevbtn.addEventListener("click",function(){
  counter--;
  carosel()
});
nextbtn.addEventListener("click",function(){
    counter++;
    carosel()
});

function carosel(){
    if(counter == slides.length -1){
        nextbtn.style.display = "none";
    }
    else{
        nextbtn.style.display = "block";
    }
    if(counter == 0 ){
        prevbtn.style.display = "none";
    }
    else{
        prevbtn.style.display = "block";
    }


    slides.forEach(function(slide){
        slide.style.transform =`translateX(-${counter * 100}%)`;
    });
}