// let  batSound;

class Bat {
    constructor(y, x) {
        this.x = -20 - x;
        this.y = y;
        this.width = 30
        this.height = 50
    }

    preload() {
        this.bat = loadAnimation('assets/bat1.png', 'assets/bat8.png')
    }

    draw() {
        for (let i = 0; i < 8; i++) {
            this.bat.images[i].width = 30
            this.bat.images[i].height = 50
        }

        this.x += 3;

        animation(this.bat, this.x + this.width / 2, this.y + this.height / 2)
        // console.log(this.bat.ypos, this.y);

    }

    // hearBat() {
    //     if (!batSound.isPlaying()) {

    //         batSound.play();
    //     }
    // }

}