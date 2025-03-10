import Phaser from "phaser";
import GameScene from "./scenes/GameScene.js"; 

const config = {
    type: Phaser.AUTO, // Chọn WebGL hoặc Canvas tùy theo trình duyệt
    width: 400,        // Chiều rộng màn hình game (dọc)
    height: 700,       // Chiều cao màn hình game
    physics: {
        default: "arcade", // Sử dụng hệ vật lý Arcade
        arcade: {
            gravity: { y: 1000 }, // Trọng lực kéo nhân vật xuống
            debug: false // Ẩn viền va chạm
        }
    },
    scene: [GameScene], // Load Scene vào game

};

const game = new Phaser.Game(config); // Khởi tạo game với cấu hình trên
