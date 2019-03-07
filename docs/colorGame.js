var numsquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#resetBtn");
var modeBtn = document.querySelectorAll(".mode");

init();

function init() {

    setupModeBtn();
    setupSquares();



    reset_mode();
}

function setupModeBtn() {
    for (var i = 0; i < modeBtn.length; i++) {
        modeBtn[i].addEventListener("click", function() {
            modeBtn[0].classList.remove("selected");
            modeBtn[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numsquares = 3 : numsquares = 6;
            reset_mode();
        });
    }
}

function setupSquares() {
    for (var i = 0; i < squares.length; i++) {
        squares[i].addEventListener('click', function() {
            var clickedColor = this.style.backgroundColor;
            if (clickedColor === pickedColor) {
                for (var i = 0; i < squares.length; i++) {
                    messageDisplay.textContent = "Correct!";
                    changeColors(clickedColor);
                    h1.style.backgroundColor = clickedColor;
                    resetButton.textContent = "Play Again?";
                }
            } else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again!";
            }
        })
    }
}

function reset_mode() {
    colors = generateRandomColor(numsquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";

    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }

    }
    h1.style.backgroundColor = "steelblue";
}

// easyBtn.addEventListener("click", function() {
//     this.classList.add("selected");
//     hardBtn.classList.remove("selected");
//     numsquares = 3;
//     colors = generateRandomColor(numsquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for (var i = 0; i < squares.length; i++) {
//         if (colors[i]) {
//             squares[i].style.backgroundColor = colors[i];
//         } else {
//             squares[i].style.display = "none";
//         }
//     }
// });
// hardBtn.addEventListener("click", function() {
//     this.classList.add("selected");
//     easyBtn.classList.remove("selected");
//     numsquares = 6;
//     colors = generateRandomColor(numsquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for (var i = 0; i < squares.length; i++) {
//         squares[i].style.backgroundColor = colors[i];
//         squares[i].style.display = "block";
//     }
// });

resetButton.addEventListener("click", function() {
    reset_mode();
});



function changeColors(color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    console.log(random);
    return colors[random];
}

function generateRandomColor(n) {
    var arr = [];
    for (var i = 0; i < n; i++) {
        arr.push(randomColor());
    }
    return arr;
}

function randomColor() {
    var r = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
