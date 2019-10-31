const game = new Game();
let mode;
let batSound;
let ghostSound;
let warningSound;
let bgVideo;
let bgEndVideo;
let timer = 0;
// let topScore = getItem("score")


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
    bgEndVideo = createVideo('assets/endvideo.mp4')
    bgEndVideo.hide();
    bgEndVideo.volume(0);
    bgEndVideo.loop();
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
        image(bgVideo, 0, 0)

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

    if (mode == 2) {
        loop()
        batSound.stop()
        drinkPotionSound.stop()
        warningSound.stop()

        image(bgEndVideo, 0, 0)
        if (timer > 0) {
            fill(255)
            textSize(70);
            text('game over', width - 100, 80)
        }
        if (timer > 1) {
            fill(255);
            textSize(50);
            text(`your highest score: ${highestScore()}`, WIDTH - 100, 150)
        }

        if (timer > 2) {
            textSize(50);
            textAlign(CENTER, BOTTOM)
            fill(255)
            text("press spacebar to play again", WIDTH / 2, HEIGHT);
        }
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
    if (keyCode === SPACE && mode === 2) {
        mode = 1
        timer = 0
        game.houses = [];
        game.potions = [];
        game.bats = [];
        game.coins = [];
        game.ghosts = [];
        game.witch.coins = 0;
        game.witch.fuel = 30;
        game.witch.x = 250;
        game.witch.y = 120;
        game.witch.velocityY = 0;
        game.witch.velocityX = 0;
        game.witch.gravity = 0.075;
    }
    if (keyCode === LEFT_ARROW) {
        game.witch.moveLeft();
    }
    if (keyCode === RIGHT_ARROW) {
        game.witch.moveRight();
    }
}


function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds) {
            break;
        }
    }
}