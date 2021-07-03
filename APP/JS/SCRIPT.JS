//?navigation variable
const humburgerBtn = document.querySelector("#humburgerBtn");
const header = document.querySelector(".header");
const nav = document.querySelector('.nav') ;
const overlay = document.querySelector('.overlay');
const faded = document.querySelectorAll('.faded'); 
let sticky = nav.offsetTop ;  

//?mouseover the img
const img2 = document.querySelector('#img2');

//?gallery icons
var f1 = document.querySelector('.f1');
var f2 = document.querySelector('.f2');  


//?reviews data
const reviews = [
    {
        id : 1,
        img : '../../imgs/artist2.jpg',
        name : 'Sosan Johnes',
        job : 'Photographer' ,
        quote :`It's been a while we were looking for a good website to get
        inspiration for my new art work .It's really amazing how you can 
        find whatever you want in Artemis Galery and to follow your favourite artist `
    },
    {
        id : 2,
        img : '../../imgs/artist3.jpg',
        name : 'Sarah Smith',
        job : 'Digital Artist' ,
        quote :`It's been a while we were looking for a good website to get
        inspiration for my new art work .It's really amazing how you can 
        find whatever you want in Artemis Galery and to follow your favourite artist `
    },
    {
        id : 3,
        img : '../../imgs/artist4.jpg',
        name : 'Steven Miler',
        job : '3D Motion Design' ,
        quote :  `It's been a while we were looking for a good website to get
        inspiration for my new art work .It's really amazing how you can 
        find whatever you want in Artemis Galery and to follow your favourite artist `
    },
    {
        id : 4,
        img : '../../imgs/artist1.jpg',
        name : 'Christoph Cimpbell',
        job : 'Mangaka' ,
        quote :`It's been a while we were looking for a good website to get
         inspiration for my new art work .It's really amazing how you can 
         find whatever you want in Artemis Galery and to follow your favourite artist `
    },
] 

//items of reviews
const img = document.querySelector('#img');
const title = document.querySelector('#name');
const job = document.querySelector('#job');
const quote = document.querySelector('#quote');

const prev = document.querySelector('#prev');
const next = document.querySelector('#next');




//**humberger menu animation
header.addEventListener('click', function(){
    if(header.classList.contains('open')){
        header.classList.remove('open') ;

        //faded block menu
        faded.forEach(element => {
            element.classList.add('fadeout') ; 

            element.classList.remove('fadein') ; 
        });
      
    }else{
        header.classList.add('open') ;
        
        //faded block menu
        faded.forEach(element => {
            element.classList.add('fadein') ; 
            element.classList.remove('fadeout') ;
        });
        
    }
})

//sticky menu
const navbarScroll = () =>{
    if(window.pageYOffset > sticky){
        nav.classList.add('sticky');
    }else{
        nav.classList.remove('sticky');
    }
}

window.onscroll = navbarScroll ;

//*image2 mouseover
let change = () =>{
    img2.src = '../../imgs/pic9.jpg';
    console.log('hiii');
}
let back = () =>{
    img2.src = '../../imgs/pic2.jpg'
}


//*like btn of the gallery overlay

f1.addEventListener('click',function(){
    f1.style.display=('none');
    f2.style.display=('inline');
    f2.style.color=('red');
});
f2.addEventListener('click',function(){
    f2.style.display=('none');
    f1.style.display=('inline');
    
})   
        
//*reviews part 
var currentItem = 0 ;

window.addEventListener('DOMContentLoaded',function(){
    showReviews(currentItem);
})
//showReview

function showReviews(person){
    const item = reviews[person];

    img.src = item.img ;
    title.textContent = item.name;
    job.textContent = item.job ; 
    quote.textContent = item.quote;
}

//next showReviews
next.addEventListener('click',function(){
    currentItem++ ;
    if(currentItem > reviews.length-1){
        currentItem = 0 ;
    }
    showReviews(currentItem);
})

prev.addEventListener('click',function(){
    currentItem-- ;
    if(currentItem < 0){
        currentItem = reviews.length-1 ;
    }
    showReviews(currentItem);
})



            