// Tạo ra interface changeSpeed chứa các phương thức: speedUp, slowDown và stop. 
// Định nghĩa lớp Vehicle implement interface changeSpeed có thuộc tính private speed.

// Xây dựng các phương thức để thay đổi thuộc tính speed. 
// Tạo ra 1 thực thể từ lớp Vehicle và gọi các phương thức, sau mỗi phương thức thì in thông tin để kiểm tra kết quả.\

interface ChangeSpeed {
    speedUp(): void;
    slowDown(): void;
    stop(): void;
}

class Vehicle87 implements ChangeSpeed {
    private speed: number;
    constructor(speed: number) {
        this.speed = speed;
    }
    speedUp(): void {
        this.speed++;
    }
    slowDown(): void {
        this.speed--;
    }
    stop(): void {
        this.speed = 0;
    }
    show(): void {
        console.log(`Tốc độ hiện tại là: ${this.speed}`);
    }
}

let aNew5 = new Vehicle87(100);
aNew5.slowDown();
aNew5.show();
aNew5.speedUp();
aNew5.show();
aNew5.stop();
aNew5.show();