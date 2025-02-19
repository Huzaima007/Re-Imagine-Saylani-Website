document.addEventListener("DOMContentLoaded", function () {
    let counters = document.querySelectorAll(".num");
    
    counters.forEach((counter) => {
      let target = +counter.getAttribute("data-val");
      let count = 0;
      let speed = target / 50; 
    
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
  
