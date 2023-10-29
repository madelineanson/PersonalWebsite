alert("hey welcome!");

let varName = 30;

document.onmousemove = animateCircles; // circle follow mouse

        var colors = ['#f6adc6', '#98f5ff', '#f6adc6', '#e6e6fa']
        
        function animateCircles(event) {
          var circle = document.createElement("div");
          circle.setAttribute("class", "circle");
          document.body.appendChild(circle); // adds function to body
        
          // adds motion
          circle.style.left = event.clientX + 'px';
          circle.style.top = event.clientY + 'px';
        
          // randomize color
          var color = colors[Math.floor(Math.random() * colors.length)];
          circle.style.borderColor = color;
        
          // adds animation
          circle.style.transition = "all 0.5s linear 0s";
        
          circle.style.left = circle.offsetLeft - 20 + 'px';
          circle.style.top = circle.offsetTop - 20 + 'px';
        
          circle.style.width = "50px";
          circle.style.height = "50px";
          circle.style.borderWidth = "5px";
          circle.style.opacity = 0;
        }

let titleElement = document.getElementById("intro");

let clickMeBtn = document.getElementById("clickMeBtn");
clickMeBtn.addEventListener("click", changeTitle);

function changeTitle(){
    titleElement.innerText = "hello there!";
}