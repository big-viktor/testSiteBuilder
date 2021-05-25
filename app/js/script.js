// const burger = document.getElementById("burger"); 
// const menuContent = document.querySelector('.menu_content')
// // const headerCatalog = document.querySelector('.content_header_catalog')
// const contentSvg = document.querySelector('.basket')
// // const menuBody1 = document.querySelector('.header_a1');
// // const menuBody2 = document.querySelector('.header_a2');


// let burgers = false;

//   const  addSelect = () =>{
//     if(burgers){
//         burgers = false;
//         menuContent.classList.remove("_active");
//     }else {
//         burgers = true;
//         menuContent.classList.add("_active");
//     };
// };
// burger.addEventListener("click",addSelect);
   



// const widthBack = document.getElementById("width_back"); 
// const widthVideo = document.querySelector(".video__media"); 
// console.log(widthVideo)



// const widthWindow = () => {
//     console.log('resize');
//     console.log(screen.width);
//     if(screen.width <= (754)){
//         widthBack.classList.remove("delet");
//         widthVideo.classList.add("delet");
//     }
//     if(screen.width >+(754)){
//         widthBack.classList.add("delet");
//         widthVideo.classList.remove("delet");
//     }
// }
// window.addEventListener('resize', widthWindow);
// widthWindow();



// if(menuContent){
//     const menuBody = document.querySelector('menu_body');
//     burger.addEventListener("click", function (e) {
//     menuContent.classList.add("_active");
//     menuBody.classList.add("_active");

// });
// }



// let next = document.getElementById('btn-next');
// let previous = document.getElementById('btn-previous');
// let slider = document.querySelector('.slider_display');



// const sliderBox = [];

//  for (let i = 0; i < slider.children.length; i++) {
//       let sliders = slider.children[i];
//         sliderBox.push(sliders);
//     }
//     console.log(sliderBox)

  
//     let index = 0;
//     console.log(index)


//    sliderBox[index];


// nextSlide = () => {
    
//     if(index === 0){
//         next.classList.remove('active');
//         previous.classList.remove('delet_div');
//         index -1;
//         sliderBox[index++].classList.add('delet_div');
//         // alert('meseg:-1');
//         console.log(sliderBox);
//         console.log(index);
//     }else{
//         // alert('sad')
//         sliderBox[index++].classList.add('delet_div');
//         console.log(sliderBox);
//         console.log(index);
//         if(index === (sliderBox.length -1)){
//             next.classList.add('delet_div');
//             sliderBox[index--];
//             // alert("Last Slide");
//             console.log(sliderBox);
//             console.log(index);
//         }

//     }
   
// };

// backSlide = () => {
    
//     if(index === 0){
//         // alert('dobavim');
//         sliderBox[index--].classList.remove('delet_div');
//         console.log(index);
//         console.log(sliderBox);
//         if(index === -1){
//             // alert("delet-btn-back")
//             previous.classList.add('delet_div');
//             next.classList.add('active');
//             index++;
//         }
//     }else{
//         sliderBox[index--].classList.remove('delet_div');
//         // alert("dobavim +1")
//         next.classList.remove('delet_div');
//         console.log(sliderBox);
//         console.log(index);
//         if(index === -1){
//             // alert("delet-btn-back")
//             previous.classList.add('delet_div');
//             index++;
//         }
//     }
// };

// next.addEventListener('click', nextSlide);
// previous.addEventListener(('click'), backSlide);

