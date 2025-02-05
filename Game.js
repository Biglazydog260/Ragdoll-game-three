const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

canvas.width = 800;
canvas.height = 600;

const GRAVITY = 0.5;

class Ragdoll {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.velX = 0;
        this.velY = 0;
        this.width = 50;
        this.height = 100;
        this.color = '#000';
    }

    update() {
        this.velY += GRAVITY;
        this.x += this.velX;
        this.y += this.velY;

        if (this.y + this.height > canvas.height) {
            this.y = canvas.height - this.height;
            this.velY = 0;
        }
    }

    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

const ragdoll = new Ragdoll(canvas.width / 2, canvas.height / 2);

function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ragdoll.update();
    ragdoll.draw(ctx);

    requestAnimationFrame(gameLoop);
}

gameLoop();
