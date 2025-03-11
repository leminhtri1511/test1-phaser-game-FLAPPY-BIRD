const config = {
    type: Phaser.AUTO,
    width: 400,
    height: 700,
    physics: {
        default: "arcade",
        arcade: { gravity: { y: 1000 }, debug: true }
    },
    scene: [GameScene] // Load Scene
};

let game;

// Load GameScene sau khi trình duyệt tải xong
window.onload = function () {
    game = new Phaser.Game(config);
};
