"use strict";document.addEventListener("DOMContentLoaded",function(){console.log("DOM loaded");var e=document.querySelector(".js-burger"),c=document.querySelector(".js-sidebar"),o=!1;console.log(e,c),e.addEventListener("click",function(){console.log("burger clicked"),o?(e.classList.remove("active"),c.classList.remove("active")):(e.classList.add("active"),c.classList.add("active")),o=!o,console.log(o)})});