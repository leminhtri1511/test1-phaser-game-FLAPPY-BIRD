### **🕹️ Flappy Bird - Phaser.js**
🚀 **Flappy Bird** được phát triển bằng **Phaser.js**, phù hợp với màn hình dọc trên thiết bị di động. Trò chơi có các cơ chế **nhảy, vượt chướng ngại vật, tính điểm, game over, và restart**.

---

## **📌 Tính năng**
✅ Nhân vật bay lên khi chạm vào màn hình  
✅ Ống nước di chuyển từ phải sang trái  
✅ Cơ chế tính điểm khi bay qua ống nước  
✅ Mức độ khó tăng dần theo điểm số  
✅ Lưu điểm số cao nhất (highest score) vào **localStorage**  
✅ Hiển thị nút **Play** trước khi bắt đầu game  
✅ Hiệu ứng **Game Over** & **Restart**  

---

## **📥 Cài đặt & Chạy dự án**
### **1️⃣ Clone dự án**
```sh
git clone https://github.com/leminhtri1511/test1-phaser-game-FLAPPY-BIRD.git
cd test1-phaser-game-FLAPPY-BIRD
```

### **2️⃣ Chạy trên trình duyệt**
**Cách 1: Dùng VS Code với Live Server (Khuyên dùng)**
1. Cài đặt extension **Live Server**
2. Click **Go Live** trong VS Code

**Cách 2: Dùng HTTP Server**
```sh
npx http-server .
```
Hoặc:
```sh
python -m http.server 8000
```
Sau đó mở **http://localhost:8000** trên trình duyệt.

---

## **🎮 Cách chơi**
1️⃣ **Nhấn "Play"** để bắt đầu game  
2️⃣ **Chạm vào màn hình** để giúp nhân vật bay lên  
3️⃣ **Bay qua các ống nước** để ghi điểm  
4️⃣ Nếu **chạm vào ống nước**, game sẽ kết thúc  
5️⃣ Nhấn **"Restart"** để chơi lại  

---

## **📂 Cấu trúc thư mục**
```bash
📦 test1-phaser-game-FLAPPY-BIRD
 ┣ 📂 src
 ┃ ┣ 📂 objects
 ┃ ┣ 📂 scenes
 ┃ ┃ ┗ 📜 GameScene.js   # File chính của game
 ┃ ┣ 📂 utils
 ┃ ┗ 📜 game.js         # Cấu hình Phaser và load scene
 ┣ 📜 index.html        # File HTML chính
 ┣ 📜 package.json      # File cấu hình npm
 ┣ 📜 README.md         # Hướng dẫn sử dụng
```

---

## **🛠️ Công nghệ sử dụng**
- **Phaser.js** – Framework làm game 2D  
- **JavaScript (ES6)** – Ngôn ngữ lập trình  
- **HTML & CSS** – Giao diện đơn giản  
- **LocalStorage** – Lưu điểm số cao nhất  

---

## **🤝 Đóng góp**
Mọi ý tưởng, bug report, hoặc cải tiến đều được hoan nghênh!  
1. **Fork dự án** 🍴  
2. **Tạo nhánh mới**: `git checkout -b feature-name`  
3. **Commit thay đổi**: `git commit -m "Mô tả thay đổi"`  
4. **Push nhánh**: `git push origin feature-name`  
5. **Tạo Pull Request**  

---

## **📄 Giấy phép**
Dự án này được phát hành dưới giấy phép **MIT**. Bạn có thể sử dụng, chỉnh sửa và phát triển thêm.

---

## **📞 Liên hệ**
📧 **Email:** *trile20021511@gmail.com*  
🌐 **GitHub:** [leminhtri1511](https://github.com/leminhtri1511)  

🚀 **Chúc bạn chơi vui!** 🎮🔥

---

Bạn có muốn thêm hình ảnh minh họa hoặc demo vào README không? 📸🎨