class House {
    constructor(img, height) {

        this.x = WIDTH; // canvas width
        this.img = img;

        this.height = height;


        this.width = 150;
        this.house = loadImage(`assets/${this.img}.png`) // why cannot I put this into preload()? 

    }

    // preload() {
    //     // this.house = loadImage(`assets/${this.img}.png`)
    // }

    draw() {
        // console.log(this.house1)
        this.x -= 4;
        this.y = HEIGHT - this.height + 20;
        image(this.house, this.x, this.y, this.width, this.height)
    }
}