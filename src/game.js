const config = {
    type: Phaser.AUTO, // Chọn chế độ hiển thị tự động (WebGL hoặc Canvas)
    width: 400,        // Chiều rộng của màn hình game (px)
    height: 700,       // Chiều cao của màn hình game (px)
    scene: {           // Định nghĩa Scene (màn hình game)
        preload: preload, // Chạy hàm preload để tải tài nguyên
        create: create,   // Chạy hàm create để khởi tạo game
        update: update    // Chạy hàm update mỗi frame để cập nhật logic game
    }
};

const game = new Phaser.Game(config); // Khởi tạo game với cấu hình trên

function preload() {
    // Load hình ảnh với key là 'sky' từ URL
    this.load.image('sky', 'https://labs.phaser.io/assets/skies/sky1.png');
}

function create() {
    // Thêm hình ảnh 'sky' vào game tại vị trí (200, 350)
    // (Lưu ý: 200 là vị trí ngang (x), 350 là vị trí dọc (y))
    this.add.image(200, 350, 'sky');
}

function update() {
    // Hàm này chạy liên tục 60 lần/giây (nếu FPS là 60)
    // Hiện tại chưa có logic gì để cập nhật mỗi frame
}
