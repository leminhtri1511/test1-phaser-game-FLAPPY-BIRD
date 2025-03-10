import Phaser from "phaser";

export default class GameScene extends Phaser.Scene {
    constructor() {
        super("GameScene"); // Đặt tên Scene
    }

    // Tải tài nguyên trước khi game bắt đầu
    preload() {
        // Load hình nền
        this.load.image("sky", "https://labs.phaser.io/assets/skies/sky4.png");

        // Load spritesheet nhân vật
        this.load.spritesheet("dude",
            "https://labs.phaser.io/assets/sprites/dude.png",
            { frameWidth: 32, frameHeight: 48 }
        );
    }

    // Tạo game sau khi tài nguyên đã tải xong
    create() {
        // Thêm hình nền
        this.add.image(200, 350, "sky");

        // Thêm nhân vật vào game
        this.player = this.physics.add.sprite(200, 350, "dude");
        this.player.setFrame(4); // Frame đứng yên
        this.player.setCollideWorldBounds(true); // Không ra khỏi màn hình

        // Sự kiện chạm màn hình để nhảy
        this.input.on("pointerdown", this.jump, this);
    }

    jump() {
        this.player.setVelocityY(-400); // Nhảy lên
    }

    update() {
        // Nhân vật rơi tự nhiên do trọng lực
    }
}
