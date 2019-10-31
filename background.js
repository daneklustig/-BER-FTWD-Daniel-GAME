class Background {
    constructor() {
        // console.log("background constructor")
        this.xSky = 0;

    }

    preload() {
        // console.log("background preload");
        this.bgSky = loadImage("assets/background.png");
    }

    draw() {
        // console.log("this is background")
        // console.log(this.bgSky, this.xSky, WIDTH, HEIGHT)
        // clear();
        this.xSky -= 1;
        image(this.bgSky, this.xSky, 0, WIDTH, HEIGHT);
        image(this.bgSky, this.xSky + WIDTH, 0, WIDTH, HEIGHT);

        if (this.xSky <= -WIDTH) {
            this.xSky = 0;
        }

    }
}