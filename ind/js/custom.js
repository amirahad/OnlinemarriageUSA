// let valueDisplays = document.querySelectorAll(".num");

// let interval = 5000;
// valueDisplays.forEach((valueDisplay) => {
//   let startValue = 0;
//   let endValue = parseInt(valueDisplay.getAttribute("data-"));
//   // console.log(endValue);
//   let duration = Math.floor(interval/endValue);
  
//   let counter = setInterval(() =>{
//     startValue += 2;
//     valueDisplay.textContent =startValue;
//     if(startValue == endValue){
//       clearInterval(counter);
//     }
//   });
// })

let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
scrollFunction();
};

function scrollFunction() {
if (
document.body.scrollTop > 60 ||
document.documentElement.scrollTop > 60
) {
mybutton.style.display = "block";
} else {
mybutton.style.display = "none";
}
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
}




const workSection = document.querySelector('.count');
const WorkObserver = new IntersectionObserver((entries, observer) =>{
  const[entry] = entries;

  if(!entry.isIntersecting)return;

  const counterNum = document.querySelectorAll(".num");
const speed = 200;

counterNum.forEach((currentElem) => {
  const updateNumber = () => {
    const targetNumber = parseInt(currentElem.dataset.number);
    // console.log(targetNumber);
    const initialNumber = parseInt(currentElem.textContent);
    // console.log(initialNumber);
    const incrementNumber = Math.round(targetNumber/speed);
    // console.log(incrementNumber);
    if(initialNumber < targetNumber){
      currentElem.textContent = `${initialNumber + incrementNumber}+`;
      setTimeout(updateNumber, 10);
    } 

  }
  updateNumber();

});
WorkObserver.unobserve(workSection);

}, {
  root: null,
  threshold: 0,
})
WorkObserver.observe(workSection);



