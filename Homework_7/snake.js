const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

const ground = new Image();
ground.src = "img/background.png";

const foodImg = new Image();
foodImg.src = "img/apple.png";

let box = 30;

let score = 0;

let food = {
    x: Math.floor((Math.random() * 14 + 1)) * box,
    y: Math.floor((Math.random() * 14 + 3)) * box,
};

let snake = [];
snake[0] = {
    x: 7 * box,
    y: 10 * box,
};

document.addEventListener("keydown", direction);

let dir;

function direction(event) {
    if (event.keyCode == 37 && dir != "right")
        dir = "left";
    else if (event.keyCode == 38 && dir != "down")
        dir = "up";
    else if (event.keyCode == 39 && dir != "left")
        dir = "right";
    else if (event.keyCode == 40 && dir != "up")
        dir = "down";
}

function eatTail(head, arr) {
    for(let i = 0; i < arr.length; i++) {
        if(head.x == arr[i].x && head.y == arr[i].y)
            clearInterval(game);
    }
}

function drawGame() {
    ctx.drawImage(ground, 0, 0);
    
    ctx.drawImage(foodImg, food.x, food.y);
    
    for (let i = 0; i < snake.length; i++){
        ctx.fillStyle = i == 0 ? "brown" : "burlywood";
        ctx.fillRect(snake[i].x, snake[i].y, box, box);
    }
    ctx.fillStyle = "white";
    ctx.font = "50px Arial";
    ctx.fillText(score, box * 4.5, box * 1.8);
    
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;
    
    if(snakeX == food.x && snakeY == food.y){
        score++;
        food = {
          x: Math.floor((Math.random() * 14 + 1)) * box,
          y: Math.floor((Math.random() * 14 + 3)) * box,
        }; 
    } else {
      snake.pop();
    }
    
    if(snakeX < box || snakeX > box * 14 || snakeY < box * 3 || snakeY > box * 16)
        clearInterval(game);
    
    
    
    if(dir == "left") snakeX -= box;
    if(dir == "right") snakeX += box;
    if(dir == "up") snakeY -= box;
    if(dir == "down") snakeY += box;
    
    let newHead = {
        x: snakeX,
        y: snakeY,
    };
    snake.unshift(newHead);
}

let game = setInterval(drawGame, 200);



















