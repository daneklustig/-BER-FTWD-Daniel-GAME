let drinkPotionSound;

class Potion {
    constructor(y) {
        this.x = WIDTH;
        this.y = y;
        this.height = 50;
        this.width = 40;
    }

    preload() {
        this.img = loadImage("assets/potion.png")
        drinkPotionSound = loadSound('/assets/sounds/166188__drminky__potion-drink-regen.wav')
    }

    draw() {
        this.x -= 4;
        image(this.img, this.x, this.y, this.width, this.height)
    }

    drinkPotion() {
        game.witch.fuel += 13;
        // document.body.querySelector("#fuel").innerText = game.witch.fuel;
        drinkPotionSound.play();
        warningSound.stop();
        fill(255);
        text(game.witch.fuel, WIDTH - 100, 100)
    }
}