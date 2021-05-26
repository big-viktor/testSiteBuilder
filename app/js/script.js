const burger = document.getElementById("burger"); 
const menuContent = document.querySelector('.menu_content')
// const headerCatalog = document.querySelector('.content_header_catalog')
// const contentSvg = document.querySelector('.basket')
// const menuBody1 = document.querySelector('.header_a1');
// const menuBody2 = document.querySelector('.header_a2');


let burgers = false;

  const  addSelect = () =>{
    if(burgers){
        burgers = false;
        menuContent.classList.remove("_active");
    }else {
        burgers = true;
        menuContent.classList.add("_active");
    };
};
burger.addEventListener("click",addSelect);

let sliderBox = document.querySelector('.big_slide');
let sliderImg1 = document.getElementById('img1');
let sliderImg2 = document.getElementById('img2');
let sliderImg3 = document.getElementById('img3');
let backBtn = document.querySelector('.back_btn'); 
let nextBtn = document.querySelector('.next_btn');
let text = document.querySelector('.text');
let backText = document.querySelector('.back_text'); 
let nextText = document.querySelector('.next_text');

const sliderBoxs = [];

 for (let i = 0; i < text.children.length; i++) {
      let sliders = text.children[i];
        sliderBoxs.push(sliders);
    }
    
    let activeText = 0;
    sliderBoxs[activeText]

const nextTexts = () =>{
    if(activeText === (sliderBoxs.length -1)){
        nextText.setAttribute("disabled", "disabled");
        console.log(activeText);
    }else{
        backText.removeAttribute("disabled");
        console.log(activeText);
        sliderBoxs[activeText++].classList.add('delet');
    }
   
}

const backTexts = () =>{
    if(activeText === 0){
        sliderBoxs[activeText--].classList.remove('delet');
        activeText++;
        backText.setAttribute("disabled", "disabled");
    }else{
        nextText.removeAttribute("disabled");
        sliderBoxs[activeText--].classList.remove('delet');
    }
}

const minSlid = [];

minSlid.push('img/5f677e05697ba4962c17a662b78fc672.png');
minSlid.push('img/59482670e922a0af7783e18fdf9725d9.png');
minSlid.push('img/c106c0ad09c5970fcc94a45794a3a5d8.png');
minSlid.push('img/e81cce3321df5efe9ab27e4dc9236478.png');
minSlid.push('img/a7e45569c87c4a5f6facd18be484f192.png');

let index = 0;

sliderBox.src = minSlid[index];
sliderImg1.src = minSlid[0];
sliderImg2.src = minSlid[1];
sliderImg3.src = minSlid[2];


    
const nextSlide = () =>{
    if(index === minSlid.length -1 ){
        sliderBox.src = minSlid[index++];
        index--;
        nextBtn.setAttribute("disabled", "disabled");
    }else{
        sliderBox.src = minSlid[index++];
        backBtn.removeAttribute("disabled");
    }
    

};

const backSlide = () =>{
    if(index === 0 ){
        index;
        sliderBox.src = minSlid[index--];
        index++;
        backBtn.setAttribute("disabled", "disabled");
    }else{
        nextBtn.removeAttribute("disabled");
        sliderBox.src = minSlid[index--];
    }

};


nextText.addEventListener('click', nextTexts);
backText.addEventListener(('click'), backTexts);
nextBtn.addEventListener('click', nextSlide);
backBtn.addEventListener(('click'), backSlide);
