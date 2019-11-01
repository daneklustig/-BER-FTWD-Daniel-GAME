let coinCounter = -3;
let batStarter = 0;
let music;
let font;
let treasureBox;
let potionScore;

class Game {
    constructor() {
        // console.log("game constructor");
        // background
        // this.background = new Background();
        this.background = new Background();
        this.moon = new Moon();
        this.witch = new Witch();
        // this.ground = new Ground();
        // this.bat = new Bat(50);

        this.arrHouses = ['house1', 'house2', 'house3', 'house4', 'house5']
        this.houses = [];

        this.potions = [];

        this.bats = [];

        this.coins = [];

        this.ghosts = [];

    }

    preload() {
        this.background.preload();
        this.moon.preload();
        this.witch.preload();
        music = loadSound('assets/sounds/Spooky _ Halloween Background Music.mp3')
        treasureBox = loadImage('assets/treasurebox.png')
        potionScore = loadImage('assets/potion.png')
        //this.bat.preload();
        font = loadFont('assets/fonts/DragonbonesBB_reg.ttf')
        collectCoinSound = loadSound('assets/sounds/166184__drminky__retro-coin-collect.wav')
    }

    setup() {
        this.witch.setup();
        this.moon.setup();
        music.play();
        music.setVolume(0.2);
        music.loop();
        textFont(font);
        textSize(50);
        textAlign(RIGHT, RIGHT)

    }

    draw() {
        this.background.draw();
        this.moon.draw();
        this.witch.draw();
        // this.ground.draw();

        // console.log(timer);


        image(treasureBox, WIDTH - 85, 10, 45, 45)
        image(potionScore, WIDTH - 83, 67, 38, 38)

        fill(255);
        text(this.witch.coins, WIDTH - 100, 50)
        text(this.witch.fuel, WIDTH - 100, 100)

        // if (timer === 5) {
        //     sleep(5000);
        //     mode = 2;
        //     timer = 0;
        // }

        if (this.witch.fuel <= 7) {
            fill(255, 0, 0)
            text(this.witch.fuel, WIDTH - 100, 100)
        }

        if (this.witch.y + this.witch.height > HEIGHT) {
            // console.log('GAME OVER')
            noLoop();
            sleep(5000);
            timer = 0;
            mode = 2;
        }

        if (frameCount % 800 === 0) {
            coinCounter = -3

        }

        if (frameCount % 2000 === 0) {
            batStarter = 0
        }

        if (timer > 3 && frameCount % 60 === 0) {
            let randomN = Math.floor(Math.random() * (250 - 50) + 50)
            while (coinCounter < 4) {
                let coin = new Coin(randomN + 4 * coinCounter ** 2, (40 * coinCounter));
                coin.preload();
                this.coins.push(coin);
                coinCounter++
            }

        }

        this.coins.forEach(
            (coin, index) => {
                coin.draw();

                if (coin.x + coin.width < 0) {
                    //   remove obstacle
                    this.coins.splice(index, 1);
                }
                if (this.itemCollection(coin, this.witch)) {
                    coin.collectCoin();
                    this.coins.splice(index, 1);
                }
            }
        )



        if (timer > 10 && frameCount % 30 === 0) {
            let randomN = Math.floor(Math.random() * (150 - 50) + 50)
            while (batStarter < 4) {
                const bat = new Bat(randomN + Math.floor(Math.random() * (75 - 25) + 25), (40 * batStarter));
                bat.preload();
                this.bats.push(bat);
                batSound.play();
                batStarter++;
            }
        }


        this.bats.forEach(
            (bat, index) => {
                bat.draw();

                if (bat.x >= WIDTH + bat.width) {
                    //   remove obstacle
                    this.bats.splice(index, 1);
                }

                // if (this.bats.length > 0) {
                //     bat.seeBat();
                // }

                if (this.batCollision(bat, this.witch)) {
                    // console.log("GAME OVER bat collision");
                    noLoop();
                    sleep(5000);
                    timer = 0;
                    mode = 2;

                }
            }
        )



        if (timer > 5 && frameCount % 260 === 0) {

            this.houses.push(new House(this.arrHouses[Math.floor(Math.random() *

                this.arrHouses.length)], Math.floor(Math.random() * (400 - 200)) + 200));
        }

        this.houses.forEach(
            (house, index) => {
                house.draw();

                if (house.x + house.width <= 0) {
                    //   remove obstacle
                    this.houses.splice(index, 1);
                }

                if (this.houseCollision(house, this.witch)) {
                    // console.log("GAME OVER");
                    noLoop();
                    sleep(5000);
                    timer = 0;
                    mode = 2;
                }

            })

        if (timer > 7 && frameCount % 600 === 0) {
            const potion = new Potion(Math.floor(Math.random() * (400 - 200 + 1)) + 100)
            potion.preload();

            this.potions.push(potion);
        }

        this.potions.forEach(
            (potion, index) => {

                potion.draw();

                if (potion.x + potion.width <= 0) {
                    //   remove obstacle
                    this.potions.splice(index, 1);
                }

                if (this.itemCollection(potion, this.witch)) {
                    // this.witch.fuel += 10;
                    potion.drinkPotion();
                    this.potions.splice(index, 1);
                }
            }
        )

        if (timer > 15 && frameCount % 600 === 0) {
            const ghost = new Ghost(Math.floor(Math.random() * (450 - 150 + 1)) + 150)
            ghost.preload();
            ghostSound.play();

            this.ghosts.push(ghost);
        }

        if (this.witch.fuel <= 7 && !warningSound.isPlaying()) {
            warningSound.play()
        }

        this.ghosts.forEach(
            (ghost, index) => {

                ghost.draw();

                if (ghost.x + ghost.width <= 0) {
                    //   remove obstacle
                    this.ghosts.splice(index, 1);
                }

                if (this.ghostCollision(ghost, this.witch)) {
                    // console.log("GAME OVER ghost collision");
                    noLoop();
                    ghostSound.stop();
                    sleep(5000);
                    timer = 0;
                    mode = 2;
                }

                // if (this.itemCollection(ghost, this.witch)) {
                //     // this.witch.fuel += 10;

                //     this.ghosts.splice(index, 1);
                // }

            }
        )
    }

    houseCollision(house, witch) {
        if (
            witch.x + witch.width - 40 < house.x ||
            house.x + house.width - 20 < witch.x
        ) {
            return false;
        }
        if (
            witch.y > house.y + house.height - 50 ||
            house.y > witch.y + witch.height - 30
        ) {
            return false;
        }
        return true;
    }


    itemCollection(item, witch) {
        if (
            witch.x + witch.width - 10 < item.x ||
            item.x + item.width - 10 < witch.x
        ) {
            return false;
        }
        if (
            witch.y > item.y + item.height - 10 ||
            item.y > witch.y + witch.height - 10
        ) {
            return false;
        }
        return true;
    }

    batCollision(bat, witch) {
        if (
            // witch.x + witch.width - 80 < bat.x ||
            // bat.x + witch.width - 80 < witch.x
            witch.x + witch.width - 20 < bat.x ||
            bat.x + bat.width - 20 < witch.x
        ) {
            return false;
        }
        if (
            witch.y > bat.y + bat.height - 40 ||
            bat.y > witch.y + witch.height - 10
        ) {
            return false;
        }
        // console.log(witch, bat)
        return true;
    }

    ghostCollision(ghost, witch) {
        if (
            witch.x + witch.width - 20 < ghost.x ||
            ghost.x + ghost.width - 20 < witch.x
        ) {
            return false;
        }
        if (
            witch.y > ghost.y + ghost.height - 20 ||
            ghost.y > witch.y + witch.height - 10
        ) {
            return false;
        }
        // console.log(witch, ghost)
        return true;
    }

}