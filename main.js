const game = new Game();
let mode;
let batSound;
let ghostSound;
let warningSound;
let bgVideo;
let timer = 0;

function preload() {
    //   console.log("preload");
    game.preload();
    batSound = loadSound('assets/sounds/batwingssounds.wav')
    ghostSound = loadSound('assets/sounds/ghostsounds.wav')
    warningSound = loadSound('assets/sounds/warningsound.wav')
    bgVideo = createVideo('assets/bgvideo.mp4')
    bgVideo.hide();
    bgVideo.size(WIDTH, HEIGHT)
    bgVideo.volume(0);
    bgVideo.loop();
    // bgVideo = loadVideo('assets/bgvideo.mp4')

}

function setup() {
    mode = 0;
    //   console.log("setup");

    let gameCanvas = createCanvas(WIDTH, HEIGHT);
    gameCanvas.parent("gameCanvas");

    game.setup();
}

function draw() {
    // console.log("draw")
    clear();
    if (frameCount % 60 === 0) {
        timer++
        console.log(timer)
    }

    if (mode == 0) {
        image(bgVideo, 10, 10)

        if (frameCount > 200 && frameCount < 440) {
            textSize(50);
            textAlign(CENTER, BOTTOM)
            fill(255)
            text("avoid haunted houses, bats and ghosts", WIDTH / 2, HEIGHT);
        }

        if (frameCount > 460 && frameCount < 700) {
            textSize(50);
            textAlign(CENTER, BOTTOM)
            fill(255)
            text("collect coins to increase your score", WIDTH / 2, HEIGHT);
        }

        if (frameCount > 720 && frameCount < 960) {
            textSize(50);
            textAlign(CENTER, BOTTOM)
            fill(255)
            text("drink potions to fly", WIDTH / 2, HEIGHT);
        }

        if (frameCount > 980 && frameCount < 1220) {
            textSize(50);
            textAlign(CENTER, BOTTOM)
            fill(255)
            text("fly left and right with arrows", WIDTH / 2, HEIGHT);
        }

        if (frameCount > 1240 && frameCount < 1480) {
            textSize(50);
            textAlign(CENTER, BOTTOM)
            fill(255)
            text("fly up with the spacebar", WIDTH / 2, HEIGHT);
        }

        if (frameCount > 1500) {
            textSize(50);
            textAlign(CENTER, BOTTOM)
            fill(255)
            text("Press SPACEBAR to start", WIDTH / 2, HEIGHT);
        }

    }
    if (mode == 1) {
        game.draw();
    }


}


function keyPressed() {
    if (keyCode === SPACE && mode === 0) {
        mode = 1
        timer = 0
    }
    if (keyCode === SPACE && mode === 1) {
        if (game.witch.fuel > 0) {
            game.witch.moveUp();
        }
    }
    if (keyCode === LEFT_ARROW) {
        game.witch.moveLeft();
    }
    if (keyCode === RIGHT_ARROW) {
        game.witch.moveRight();
    }
}


// function keyPressed() {
//     if (keyCode === LEFT_ARROW && witch.x > 0) {
//       witch.moveLeft();
//     } else if (keyCode === RIGHT_ARROW && witch.col < WIDTH - SIDE) {
//       witch.moveRight();
//     } else if (keyCode === UP_ARROW && witch.y > 0) {
//       witch.moveUp();
//     } else if (keyCode === DOWN_ARROW && witch.y < HEIGHT - SIDE) {
//       witch.moveDown();
//     }
//   }