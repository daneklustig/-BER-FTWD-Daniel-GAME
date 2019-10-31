class Witch {
    constructor() {
        this.velocityY = 0;
        this.velocityX = 0;
        this.gravity = 0.075;
        this.fuel = 30;
        this.coins = 0;
    }

    preload() {
        this.img = loadImage("assets/witch.png");
    }

    setup() {
        // console.log(this.img.width, this.img.height);
        this.x = 250;
        this.y = 120;


        // this.originalY = this.y;


        this.width = this.img.width / 10;
        this.height = this.img.height / 10;
    }

    draw() {
        this.x -= this.velocityX * 1, 2;

        this.velocityY += this.gravity;
        this.y += this.velocityY;

        // clear();
        // rect(this.x, this.y, this.width, this.height)
        image(this.img, this.x, this.y, this.width, this.height);
    }

    moveLeft() {
        this.velocityX++
    }

    moveRight() {
        this.velocityX--
    }

    moveUp() {
        this.velocityY = -3;
        this.fuel--;
    }

    // decreaseFuel() {
    //     document.body.querySelector("#fuel").innerText = this.fuel;
    // }

    // increaseCoins() {
    //     document.body.querySelector("coins").innerText = this.coins
    // }
}