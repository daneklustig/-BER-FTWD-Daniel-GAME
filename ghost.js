class Ghost {
    constructor(y) {
        this.x = WIDTH;
        this.y = y;
        this.width = 100;
        this.height = 50;

    }

    preload() {
        this.ghost = loadAnimation('assets/ghost1.png', 'assets/ghost2.png')
    }

    draw() {
        for (let i = 0; i < 2; i++) {
            this.ghost.images[i].width = 100
            this.ghost.images[i].height = 50
        }

        this.x -= 5;

        this.y += (Math.random() - 0.5) * 15


        animation(this.ghost, this.x + this.width / 2, this.y + this.height / 2)
    }

}