!function(){var e=document.querySelector("[data-start]"),t=document.querySelector("[data-stop]"),d=document.querySelector("body"),n=null;t.disabled=!0,e.addEventListener("click",(function(){n=setInterval((function(){d.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3),e.disabled=!0,t.disabled=!1})),t.addEventListener("click",(function(){clearInterval(n),e.disabled=!1,t.disabled=!0}))}();
//# sourceMappingURL=01-color-switcher.ba2e2067.js.map
