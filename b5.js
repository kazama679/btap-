"use strict";
// Tạo ra interface changeSpeed chứa các phương thức: speedUp, slowDown và stop. 
// Định nghĩa lớp Vehicle implement interface changeSpeed có thuộc tính private speed.
class Vehicle87 {
    constructor(speed) {
        this.speed = speed;
    }
    speedUp() {
        this.speed++;
    }
    slowDown() {
        this.speed--;
    }
    stop() {
        this.speed = 0;
    }
    show() {
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
