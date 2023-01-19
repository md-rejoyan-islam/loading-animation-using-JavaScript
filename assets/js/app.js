const loaderPercent = document.querySelector(".loaderPercent");
const loader = document.getElementById("loader");
let percent = 0;
const clear = setInterval(() => {
 
  loader.style.width=`${percent}%`
  if (percent == 100) {
    loader.innerHTML='Completed!'
    clearInterval(clear);
  }
  loaderPercent.innerHTML = `${percent}%`;
   percent++;
}, 40);
