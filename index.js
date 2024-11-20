import products from "./products.js";

const Menu = document.querySelector(".menu");
const sideBar = document.querySelector(".sideBar");
const mainContainer = document.querySelector(".main-content");
const header = document.querySelector("header");
const DisplayBar = document.querySelector(".display-none");

Menu.addEventListener("click", ()=>{
    if(window.matchMedia("(min-width: 999px)").matches){
        sideBar.classList.toggle("Small-sidebar");
        mainContainer.classList.toggle("remove-padding");
        DisplayBar.classList.toggle("remove-sidebar");
    }
    else{
        sideBar.classList.toggle("transform-sidebar");
        mainContainer.classList.toggle("mainContainer-opacity"); 
        header.classList.toggle("header-opacity");
    }
})



let Allproducts = "";

products.forEach(product => {
    let html = `
     <div class="video-item">
        <div class="thumbnail">
            <a href="play-video.html"><img src="${product.thumbnail}" alt=""></a>
            <span>${product.time}</span>
        </div>
        <div class="vid-info">
            <img src="${product.profile_img}" alt="">
            <div class="txt">
                <a href="play-video.html">${product.video_name}</a>
                <p style="margin-top: 3px">${product.chanel_name}</p>
                <p>${product.views}</p>
            </div>
        </div>
     </div>
    `

    Allproducts += html;
});

document.querySelector(".video-container").innerHTML = Allproducts;