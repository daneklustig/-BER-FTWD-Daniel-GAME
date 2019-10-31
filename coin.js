let collectCoinSound;

class Coin {
    constructor(y, x) {
        this.x = WIDTH * 1.2 + x;
        this.y = y;
        this.width = 30
        this.height = 30
    }

    preload() {
        this.coin = loadAnimation('assets/coin1.png', 'assets/coin6.png')
        collectCoinSound = loadSound('assets/sounds/166184__drminky__retro-coin-collect.wav')
    }

    draw() {
        for (let i = 0; i < 6; i++) {
            this.coin.images[i].width = 30
            this.coin.images[i].height = 30
        }

        this.x -= 3;

        animation(this.coin, this.x + this.width / 2, this.y + this.height / 2)

    }

    collectCoin() {
        game.witch.coins++
        collectCoinSound.play();
        // document.body.querySelector("#coins").innerText = game.witch.coins;

    }
}