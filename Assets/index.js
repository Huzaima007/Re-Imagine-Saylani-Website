document.addEventListener("DOMContentLoaded", function () {
    let counters = document.querySelectorAll(".num");
    
    counters.forEach((counter) => {
      let target = +counter.getAttribute("data-val");
      let count = 0;
      let speed = target / 50; // Adjust speed
    
      function updateCount() {
        if (count < target) {
          count += speed;
          counter.textContent = Math.floor(count);
          requestAnimationFrame(updateCount);
        } else {
          counter.textContent = target;
        }
      }
    
      updateCount();
    });
  });
  
// let valueDisplays = document.querySelectorAll(".num");
// let interval = 4000;

// valueDisplays.forEach((valueDisplay) => {
//   let startValue = 0;
//   let endValue = parseInt(valueDisplay.getAttribute("data-val"));
//   let duration = Math.floor(interval / endValue);
//   let counter = setInterval(function () {
//     startValue += 1;
//     valueDisplay.textContent = startValue;
//     if (startValue == endValue) {
//       clearInterval(counter);
//     }
//   }, duration);
// });