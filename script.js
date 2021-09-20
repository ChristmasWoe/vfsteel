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
    document.querySelector(".info_block").scrollIntoView()
  );

//Scrolling to Pomoc Block
document
  .querySelector("#scroll_to_pomoc")
  .addEventListener("click", () =>
    document.querySelector(".pomoc_block").scrollIntoView()
  );

//Scroll to License
