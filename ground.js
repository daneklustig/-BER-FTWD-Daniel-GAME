class Ground {
    constructor() {

    }

    draw() {
        fill(0, 0, 0)
        rect(0, height - 15, width, 15);
    }

}

// posible to make following 

// class Ground {
//     constructor() {
//         this.x = width;
//         this.y = 15;
//     }

//     draw() {
//         fill(0, 0, 0)
//         rect(0, height - this.y, this.x, this.y);
//     }

// }