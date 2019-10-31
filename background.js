class Background {
    constructor() {
        // console.log("background constructor")
        this.xSky = 0;
        this.xGraveyard

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

        // this.xGraveyard-= -4;
        // image(this.bgGraveyard, this.xGraveyard, 0, WIDTH, )

        if (this.xSky <= -WIDTH) {
            this.xSky = 0;
        }

    }
}