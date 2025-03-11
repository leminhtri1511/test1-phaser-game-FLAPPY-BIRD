class GameScene extends Phaser.Scene {
    constructor() {
        super("GameScene");
    }

    preload() {
        this.load.image("sky", "https://labs.phaser.io/assets/skies/sky1.png");
        this.load.spritesheet("dude",
            "https://labs.phaser.io/assets/sprites/dude.png",
            { frameWidth: 32, frameHeight: 48 }
        );
    }

    create() {
        this.add.image(200, 350, "sky");

        // Tạo nhân vật & bật physics
        this.player = this.physics.add.sprite(100, 350, "dude");
        this.player.setFrame(4);
        this.player.setCollideWorldBounds(true);

        // **Thêm sự kiện chạm màn hình để nhảy**
        this.input.on("pointerdown", this.jump, this);
    }

    jump = () => {
        this.player.setVelocityY(-300); // Nhảy lên với tốc độ 300
    };

    update() {
        // **Giới hạn không cho nhân vật bay quá cao**
        if (this.player.y < 0) {
            this.player.setVelocityY(0); // Dừng lại nếu lên quá cao
        }
    }
}

// Gán GameScene vào global để game.js có thể sử dụng
window.GameScene = GameScene;
