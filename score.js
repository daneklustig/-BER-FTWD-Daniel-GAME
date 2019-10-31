function highestScore() {
    if (!localStorage.getItem("score")) {
        localStorage.setItem("score", game.witch.coins)
    } else {
        if (localStorage.getItem("score")*1 < game.witch.coins) {
            localStorage.setItem("score", game.witch.coins)
        }
    }
    return localStorage.getItem("score")
}