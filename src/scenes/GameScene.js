
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
        this.load.image("pipe", "./assets/images/flying_object.png"); // Load hình ống nước
        this.load.image("restart", "./assets/images/restart.png"); // Nút restart
    }

    create() {
        console.log("⚡ Game start!");
    
        this.add.image(200, 350, "sky");
    
        // **Khởi tạo điểm số**
        this.score = 0;
        this.scoreText = this.add.text(20, 20, "Score: 0", {
            fontSize: "24px",
            fill: "#ffffff",
        });

        // **Tạo nhóm ống nước**
        this.pipes = this.physics.add.group({
            allowGravity: false,
            immovable: true
        });
    
        // **Tạo nhóm "cảm biến" để tính điểm**
        this.scoreZones = this.physics.add.group({
            allowGravity: false,
            immovable: true
        });
    
        // **Tạo nhân vật**
        this.player = this.physics.add.sprite(100, 350, "dude");
        this.player.setFrame(4);
        this.player.setCollideWorldBounds(true);
    
        // **Thêm va chạm giữa nhân vật và ống nước**
        this.physics.add.collider(this.player, this.pipes, this.gameOver, null, this);
    
        // **Thêm va chạm giữa nhân vật và vùng tính điểm**
        this.physics.add.overlap(this.player, this.scoreZones, this.updateScore, null, this);
    
        // **Sự kiện chạm màn hình để nhảy**
        this.input.on("pointerdown", this.jump, this);
    
        // **Tạo ống nước mỗi 2 giây**
        this.pipeEvent = this.time.addEvent({
            delay: 2000,
            callback: this.spawnPipes,
            callbackScope: this,
            loop: true
        });
    }
    
    jump = () => {
        this.player.setVelocityY(-400); // Nhảy lên
    };

    spawnPipes = () => {
        const pipeGap = 200; // Khoảng cách giữa ống trên và dưới
        const minY = 90; // Vị trí cao nhất của ống trên
        const maxY = 550; // Vị trí thấp nhất của ống trên
    
        // **Tính số lượng cặp ống dựa trên điểm số**
        const difficultyLevel = Math.floor(this.score / 10); // Mỗi 10 điểm, tăng độ khó
        const minPipes = Math.min(1 + difficultyLevel, 7); // Giới hạn tối thiểu
        const maxPipes = Math.min(2 + difficultyLevel, 8); // Giới hạn tối đa
    
        // **Số lượng cặp ống nước xuất hiện**
        const pipeCount = Phaser.Math.Between(minPipes, maxPipes);
    
        for (let i = 0; i < pipeCount; i++) {
            const pipeY = Phaser.Math.Between(minY, maxY);
            const offsetX = i * 150;
    
            // **Ống nước trên**
            const topPipe = this.pipes.create(400 + offsetX, pipeY - pipeGap, "pipe");
            topPipe.setVelocityX(-200);
            topPipe.body.allowGravity = false;
    
            // **Ống nước dưới**
            const bottomPipe = this.pipes.create(400 + offsetX, pipeY + pipeGap, "pipe");
            bottomPipe.setVelocityX(-200);
            bottomPipe.body.allowGravity = false;
    
            // **Tạo vùng tính điểm giữa 2 ống**
            const scoreZone = this.scoreZones.create(400 + offsetX, pipeY, null, null, true);
            scoreZone.setSize(30, pipeGap);
            scoreZone.setVelocityX(-200);
            scoreZone.setVisible(false);
        }
    
        console.log(`🎯 Difficulty: ${difficultyLevel} | Pipe Count: ${pipeCount}`);
    };

    gameOver = () => {
        this.physics.pause(); // Dừng toàn bộ vật lý
        this.player.setTint(0xff0000); // Đổi màu nhân vật thành đỏ
        this.player.anims.stop(); // Dừng animation (nếu có)
    
        // **Hiển thị chữ "Game Over"**
        this.add.text(110, 300, "Game Over", {
            fontSize: "40px",
            fill: "#ff0000",
        });
    
        this.pipeEvent.remove(); // Dừng tạo ống nước
    
        console.log("❌ Game Over!");
    
        // **Tạo nút Restart**
        const restartButton = this.add.image(200, 400, "restart")
        .setInteractive()
        .on("pointerdown", () => {
            this.scene.restart(); // Restart game khi bấm vào nút
        });

        console.log("🏆 Total score:", this.score);
    
        // Hiệu ứng hover khi rê chuột vào nút Restart
        // restartButton.on("pointerover", () => {
        //     restartButton.setStyle({ fill: "#ff0000" });
        // });
        // restartButton.on("pointerout", () => {
        //     restartButton.setStyle({ fill: "#ffffff" });
        // });
    };

    updateScore = (player, scoreZone) => {
        this.score += 1; // Tăng điểm số
        this.scoreText.setText(`Score: ${this.score}`); // Cập nhật text
        scoreZone.destroy(); // Xóa cảm biến để không tính điểm lại
    };
    
    update() {
        // Giới hạn không cho nhân vật bay quá cao
        if (this.player.y < 0) {
            this.player.setVelocityY(0);
        }
    }
}

// Gán GameScene vào global để game.js có thể sử dụng
window.GameScene = GameScene;
