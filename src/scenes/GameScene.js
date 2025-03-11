
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
        console.log("Game start!");

        this.add.image(200, 350, "sky");

        // **Tạo nhóm ống nước**
        this.pipes = this.physics.add.group({
            allowGravity: false,
            immovable: true
        });

        // **Tạo nhân vật**
        this.player = this.physics.add.sprite(100, 350, "dude");
        this.player.setFrame(4);
        this.player.setCollideWorldBounds(true);

        // **Thêm va chạm giữa nhân vật và ống nước**
        this.physics.add.collider(this.player, this.pipes, this.gameOver, null, this);

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
        const pipeGap = 150; // Khoảng cách giữa ống trên và dưới
        const minY = 90; // Vị trí cao nhất của ống trên
        const maxY = 530; // Vị trí thấp nhất của ống trên

        // Số lượng cặp ống nước xuất hiện cùng lúc
        const pipeCount = Phaser.Math.Between(2, 4); // Số lượng cặp ống (x đến y cặp)

        for (let i = 0; i < pipeCount; i++) {
            const pipeY = Phaser.Math.Between(minY, maxY); // Chọn vị trí ngẫu nhiên
            const offsetX = i * 150; // Mỗi cặp ống sẽ cách nhau ###px

            // **Ống nước trên (luôn ở trên)**
            const topPipe = this.pipes.create(400 + offsetX, pipeY - pipeGap, "pipe");
            topPipe.setVelocityX(-200); // Di chuyển sang trái
            // topPipe.flipY = true; // Lật ngược ống trên
            topPipe.body.allowGravity = false; // Không bị ảnh hưởng bởi gravity

            // **Ống nước dưới (luôn ở dưới)**
            const bottomPipe = this.pipes.create(400 + offsetX, pipeY + pipeGap, "pipe");
            bottomPipe.setVelocityX(-200); // Di chuyển sang trái
            bottomPipe.body.allowGravity = false; // Không bị ảnh hưởng bởi gravity
        }
        // Xóa ống nước khi ra khỏi màn hình
        this.pipes.children.iterate(pipe => {
            if (pipe && pipe.x < -50) {
                pipe.destroy();
            }
        });

        console.log("pipeCount:" + pipeCount)
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
    
        console.log("Game Over!");
    
        // **Tạo nút Restart**
        const restartButton = this.add.image(200, 400, "restart")
        .setInteractive()
        .on("pointerdown", () => {
            this.scene.restart(); // Restart game khi bấm vào nút
        });
    
        // Hiệu ứng hover khi rê chuột vào nút Restart
        // restartButton.on("pointerover", () => {
        //     restartButton.setStyle({ fill: "#ff0000" });
        // });
        // restartButton.on("pointerout", () => {
        //     restartButton.setStyle({ fill: "#ffffff" });
        // });
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
