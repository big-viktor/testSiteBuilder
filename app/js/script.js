const burger = document.getElementById("burger"); 
const menuContent = document.querySelector('.menu_content');


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
let activeHover = document.querySelector('.active_hover');

const sliderBoxs = [];

 for (let i = 0; i < text.children.length; i++) {
      let sliders = text.children[i];
        sliderBoxs.push(sliders);
    };
    
    const dots = [];

    for (let i = 0; i < activeHover.children.length; i++) {
        let activeHovers = activeHover.children[i];
         dots.push(activeHovers);
      };
      console.log(dots)

    let activeText = 0;
    let activeDots = 0;
    sliderBoxs[activeText];
    dots[activeDots];

const nextTexts = () =>{
    if(activeText === (sliderBoxs.length -1)){
        nextText.setAttribute("disabled", "disabled");
        dots[activeDots++].classList.add('active_dot');
        console.log(activeDots);
    }else{
        backText.removeAttribute("disabled");
        console.log(activeDots);
        dots[activeDots++].classList.add('active_dot');
        sliderBoxs[activeText++].classList.add('delet');
    }
};

const backTexts = () =>{
    if(activeText === 0){
        dots[activeDots--].classList.remove('active_dot');
        sliderBoxs[activeText--].classList.remove('delet');
        activeText++;
        backText.setAttribute("disabled", "disabled");
    }else{
        nextText.removeAttribute("disabled");
        dots[activeDots--].classList.remove('active_dot');
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
