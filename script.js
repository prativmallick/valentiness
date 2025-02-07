function flipBox() {
    // Get the box and the question
    const box = document.getElementById("box");
   
    // Toggle the flip class to start the animation
    box.classList.toggle("flip");

    // Set a timeout for flipping to complete, then change the content
    setTimeout(() => {
        box.innerHTML = `<h1 id="question">Wanna go out with me?</h1>
            <div class="btbox">
                <span class="button" onclick="newpage()">Yes</span>
                <span class="button" onclick="alert2()">No</span>
            </div>`;
    }, 400); 
    
}
function alert1(){
    alert('TF BITCH??? THERES ONLY ONE CORRECT ANSWER');
}
function newpage(){
    window.location.href = "secondh.html";
}

function alert2(){
    alert('WTF!! YOU THINK YOU CAN PRESS NO ? TRY AGAIN');
}


