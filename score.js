function highestScore() {
    let score = game.witch.coins;
    if (!localStorage.getItem("score")) {
        localStorage.setItem("score", score)
    } else {
        if (localStorage.getItem("score") < score) {
            localStorage.setItem("score", score)
        }
    }
    return localStorage.getItem("score")
}