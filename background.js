class Background {
    constructor() {
        // console.log("background constructor")
        this.xSky = 0;
        this.xGraveyard = 0;

    }

    preload() {
        // console.log("background preload");
        this.bgSky = loadImage("assets/background.png");
        this.bgGraveyard = loadImage("assets/graveyard.png")

    }

    draw() {
        // console.log("this is background")
        // console.log(this.bgSky, this.xSky, WIDTH, HEIGHT)
        // clear();
        this.xSky -= 1;
        image(this.bgSky, this.xSky, 0, WIDTH, HEIGHT);
        image(this.bgSky, this.xSky + WIDTH, 0, WIDTH, HEIGHT);

        this.xGraveyard -= 4;
        image(this.bgGraveyard, this.xGraveyard, 440, WIDTH, 220)
        image(this.bgGraveyard, this.xGraveyard + WIDTH, 440, WIDTH, 225)

        if (this.xSky <= -WIDTH) {
            this.xSky = 0;
        }

        if (this.xGraveyard <= -WIDTH) {
            this.xGraveyard = 0;
        }
    }
}