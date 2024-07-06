// check if there is local storage color option 
let mainColors = localStorage.getItem("color_option")

if (mainColors!== null) {
    document.documentElement.style.setProperty('--main-color',mainColors);
    
    // Remove Active Class From All Colors List Item
    document.querySelectorAll(".colors-list li").forEach(element => {
        element.classList.remove("active");
        
        // Add Active Class On Element With Data-Color === Local Storage Item
        if (element.dataset.color === mainColors){
        element.classList.add("active");
        }
    });
    
}

//  random background option
let backgroundOption = true;

// variable to control background interval
let BackgroundInterval;

//check if there is local storage random background item
let backgroundLocalItem = localStorage.getItem("background_option");

//check if random background  local storage  is nor empty 
if(backgroundLocalItem !== null){
    if (backgroundLocalItem==='true') {
        document.querySelector(".random-backgrounds .yes").classList.add("active");
    } else {
        document.querySelector(".random-backgrounds .no").classList.add("active");
    }
}

// toggle spin class on icon 
document.querySelector(".toggle-settings .fa-gear").onclick = function (){
    // toggle class fa-spin for rotation
    this.classList.toggle("fa-spin");
    
    // toggle class fa-spin for rotation
    document.querySelector(".setting-box").classList.toggle("open");
    
}

//switch colors 

const colorsLi = document.querySelectorAll(".colors-list li");
colorsLi.forEach(li => {
    li.addEventListener("click" , (e)=>{
        //set color on root
        document.documentElement.style.setProperty('--main-color',e.target.dataset.color);
        
        //set color in local storage 
        localStorage.setItem("color_option",e.target.dataset.color);
        //add and romve active class 
        handleActive(e);
    })
})



// random background option 

const randomBackgroundEl = document.querySelectorAll(".random-backgrounds span");
randomBackgroundEl.forEach(span => {
    span.addEventListener("click" , (e)=>{
        //add and romve active class 
        handleActive(e) ;
        
        if(e.target.dataset.background === 'yes'){
            backgroundOption===true;
            randmizeImgs()
            
            localStorage.setItem("background_option" , true)
        }else {
            backgroundOption===false;
            clearInterval(BackgroundInterval)
            localStorage.setItem("background_option" , false)
            
        }
    })
})

//select landing page element
let landingPage = document.querySelector(".landing-page");

//get array of images 
let imgsArray = ["2.jpg","4.jpg","5.jpg"];



// function to randomize imgs 
function randmizeImgs() {
    if (backgroundOption ===true){
        BackgroundInterval =setInterval(()=>{
            // get random number 
            //ثابته في اي حته 
            let randomNumber = Math.floor(Math.random()*imgsArray.length);
            
            // change background image url 
            landingPage.style.backgroundImage = 'url("imgs/'+imgsArray[randomNumber] + '")' ;
            landingPage.style.transition=  '0.3s';
        },10000)
    }
}
randmizeImgs()




//create pop with image
let ourImage= document.querySelectorAll(".gallery img");


ourImage.forEach(img =>{
    img.addEventListener('click',(e)=>{
        //craete overlay 
        let overlay =document.createElement("div")
        //add class to overlay 
        overlay.className = "popup-overlay";
        // add overlay to body
        document.body.appendChild(overlay);
        
        // create the popup
        let popupBox = document.createElement("div");
        
        //add class to popupBox 
        popupBox.className = "popup-box"
        
        // add image alt
        if(img.alt !== null) {
            //create Heading 
            let headingText = document.querySelector("h3");
            //add class to headingText 
            headingText.className = 'heading-text';
            //append headingText
            popupBox.appendChild(headingText)
            
        }
        
        // create the image
        let popupImage = document.createElement("img")
        // set image source
        popupImage.src = img.src;
        
        //append popupImage
        popupBox.appendChild(popupImage);
        //append popupBox
        document.body.appendChild(popupBox);
        
        //create close span
        let closeButton = document.createElement("span");
        //create close button text 
        let closeButtonText = document.createTextNode("X");
        //append text to close Button
        closeButton.appendChild(closeButtonText);
        //add class to close button
        closeButton.className = 'close-button';
        // add close Button to popup box
        popupBox.appendChild(closeButton)
        
    });
});

//close popup 
document.addEventListener("click",(e)=>{
    if(e.target.className== 'close-button'){
        //remove current popup
        e.target.parentNode.remove();
        //remove overlay
        document.querySelector(".popup-overlay").remove();
    }
})


// dr images popup
let myimage = document.querySelectorAll(".staff-box img");

myimage.forEach(img=>{
    img.addEventListener("click",(e)=>{
        let overLays =document.createElement("div")
        overLays.className = "popup-overLays";
        document.body.appendChild(overLays);
        
        let popupBoxs = document.createElement("div");
        
        //add class to popupBox 
        popupBoxs.className = "popup-boxs";
        document.body.appendChild(popupBoxs);

        
        // create the image
        let popupImages = document.createElement("img")
        // set image source
        popupImages.src = img.src;
        
        //append popupImage
        popupBoxs.appendChild(popupImages);
        //append popupBox
        document.body.appendChild(popupBoxs);
        
        //create close span
        let closeButtons = document.createElement("span");
        //create close button text 
        let closeButtonTexts = document.createTextNode("X");
        //append text to close Button
        closeButtons.appendChild(closeButtonTexts);
        //add class to close button
        closeButtons.className = 'close-buttons';
        // add close Button to popup box
        popupBoxs.appendChild(closeButtons)
    })
})

document.addEventListener("click",(e)=>{
    if(e.target.className== 'close-buttons'){
        //remove current popup
        e.target.parentNode.remove();
        //remove overlay
        document.querySelector(".popup-overLays").remove();
    }
})
//bullets
//select all links

let allBullets = document.querySelectorAll(".nav-bullets .bullet");
let allLinks = document.querySelectorAll(".links a");

function scrollToSomewhere(elements) {
    elements.forEach(ele => {
        ele.addEventListener("click", (e) => {
            e.preventDefault();
            document.querySelector(e.target.dataset.section).scrollIntoView({
                behavior: "smooth"
            });
        });
    });
}

scrollToSomewhere(allBullets);
scrollToSomewhere(allLinks);


// handle active state 
function handleActive(event){
    //remove active class from all childeren
    event.target.parentElement.querySelectorAll(".active").forEach(element=>{
        element.classList.remove("active")
    });
    //add active class
    event.target.classList.add("active");
    
}
//show and hide tooltip
let tooltip = document.querySelectorAll(".Show-toolTip span");

let toolContainer = document.querySelector(".nav-bullets");


// add tool tip to localStorage
let toolLocalItem = localStorage.getItem("tool_options")

if(toolLocalItem !== null){
    
    tooltip.forEach(span =>{
        span.classList.remove("active");
    });
    if(toolLocalItem ==='block'){
        toolContainer.style.display = 'block';
        document.querySelector(".Show-toolTip .yes").classList.add("active")
    }else {
        toolContainer.style.display = 'none';
        document.querySelector(".Show-toolTip .no").classList.add("active")

    }
    
}
tooltip.forEach(span => {
    span.addEventListener("click",(e) => {
        if(span.dataset.display === 'Show'){
            toolContainer.style.display = 'block';
            localStorage.setItem("tool_options", "block")
        }else {
            toolContainer.style.display = 'none';
            localStorage.setItem("tool_options", "none")
        }
        handleActive(e)
    })
})
//reset button 
document.querySelector(".rest-options").onclick =function(){
    
    // localStorage.clear();دي في حالة اني عايز احذف ;ل اللو;ال ستورج
    localStorage.removeItem("background_optin")
    localStorage.removeItem("color_option")
    localStorage.removeItem("tool_options")
    window.location.reload()
}

// toggle menu 
let toggleButn = document.querySelector(".toggle-menu")
let tLinks = document.querySelector(".links")

toggleButn.onclick = function(e){
    //stop propagation
    e.stopPropagation()
    //toggle class "menu-active" on button
    this.classList.toggle("menu-active")
    //toggle class "open" On links
    tLinks.classList.toggle("open")
};

// click any where to close toggle menu 

document.addEventListener("click", (e)=>{
    if(e.target !== toggleButn && e.target !== tLinks){
        //check if menu is open
        if(tLinks.classList.contains("open")){
            toggleButn.classList.toggle("menu-active")
            tLinks.classList.toggle("open")
        }
    }
})
//stop proPagation on menu
tLinks.onclick = function(e){
    e.stopPropagation();
}