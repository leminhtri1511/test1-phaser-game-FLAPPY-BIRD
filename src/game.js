const config = {
    type: Phaser.AUTO, // Chọn WebGL hoặc Canvas tùy theo trình duyệt
    width: 400,        // Chiều rộng màn hình game (dọc)
    height: 700,       // Chiều cao màn hình game
    scene: {
        preload: preload, // Tải tài nguyên trước khi game bắt đầu
        create: create    // Tạo game sau khi tài nguyên đã tải xong
    }
};

const game = new Phaser.Game(config); // Khởi tạo game với cấu hình trên

let player; // Khai báo biến nhân vật

function preload() {
    // Load hình nền trời (sky)
    this.load.image('sky', 'https://labs.phaser.io/assets/skies/sky1.png');

    // Load spritesheet nhân vật (dude)
    this.load.spritesheet('dude',
        'https://labs.phaser.io/assets/sprites/dude.png',
        { frameWidth: 32, frameHeight: 48 } // Kích thước mỗi frame của sprite
    );
}

function create() {
    // Hiển thị hình nền trời, căn giữa màn hình
    this.add.image(200, 350, 'sky');

    // Hiển thị nhân vật ở giữa màn hình
    player = this.add.sprite(200, 350, 'dude');

    // Chọn frame đứng yên (frame số 4 trong spritesheet)
    player.setFrame(4);
}


function update() {

}
