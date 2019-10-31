class Moon {
    constructor() {
    }

    preload() {
        this.bgMoon = loadImage("assets/moon.png");
        this.bgRedMoon = loadImage("assets/redmoon.png")
    }

    setup() {
        this.x = 600;
        this.y = 150;

        this.widthBgMoon = this.bgMoon.width / 2;
        this.heightBgMoon = this.bgMoon.height / 2;

        this.widthBgRedMoon = this.bgMoon.width / 1.5;
        this.heightBgRedMoon = this.bgMoon.height / 1.5;
    }

    draw() {

        this.x -= 0.1;
        image(this.bgMoon, this.x, this.y, this.widthBgMoon, this.heightBgMoon);
        image(this.bgRedMoon, this.x + WIDTH * 1.5, 100, this.widthBgRedMoon, this.heightBgRedMoon);

    }
}