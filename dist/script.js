"use strict";
//Scrolling to Main Block
document
  .querySelector("#scroll_to_main")
  .addEventListener("click", function () {
    document.querySelector(".main_block").scrollIntoView();
  });

//Scrolling to Carousel Block
document
  .querySelector("#scroll_to_carousel")
  .addEventListener("click", () =>
    document.querySelector(".carousel_block").scrollIntoView()
  );

//Scrolling to Contacts Block
document
  .querySelector("#scroll_to_info")
  .addEventListener("click", () =>
    document.querySelector(".contacts_block").scrollIntoView()
  );

// Scrolling to Pomoc Block
document
  .querySelector("#scroll_to_pomoc")
  .addEventListener("click", () =>
    document.querySelector(".pomoc_block").scrollIntoView()
  );

//Scroll to License
document
  .querySelector("#scroll_to_license")
  .addEventListener("click", () =>{
    let gdprbtn = document.querySelector("#gdpr-button")
    console.log("abc",gdprbtn)
    let isOpen = gdprbtn.getAttribute("aria-expanded");
    console.log(isOpen)
    if(isOpen=="false"){
      let clps = document.querySelector("#collapseExample");
      clps.setAttribute("class","collapse show")
      gdprbtn.scrollIntoView()
    }
    gdprbtn.scrollIntoView()
  }
  );


  // window.addEventListener("load",e=>{
  //   document.querySelector(".main_block").scrollIntoView();
  // })