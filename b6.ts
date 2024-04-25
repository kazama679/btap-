// Interface chỉ định cấu trúc (structure) mà một đối tượng cần tuân thủ. Nó chỉ định các phương thức và thuộc tính mà một đối tượng phải cung cấp.
// Interface không thể chứa mã cụ thể, nó chỉ định các phương thức và thuộc tính mà lớp implement (triển khai).
// Một lớp có thể implement nhiều interface.
// Interface không thể chứa trạng thái (state) của đối tượng.

interface Shape11 {
    calculateArea3(): number;
}

class Circle5a3 implements Shape11 {
    radius: number;
    constructor(radius: number) {
        this.radius = radius;
    }
    calculateArea3(): number {
        return Math.PI * this.radius * this.radius;
    }
}

// Abstract class là một lớp mà không thể tạo ra các đối tượng cụ thể từ nó. Nó thường chứa các phương thức trừu tượng (abstract methods) mà các lớp con phải triển khai.
// Abstract class có thể chứa các phương thức không trừu tượng và thuộc tính.
// Một lớp con chỉ có thể kế thừa từ một abstract class (không thể kế thừa từ nhiều abstract class).
// Abstract class có thể chứa trạng thái (state) của đối tượng.
abstract class ConVat {
    abstract tieng(): void;
    move(): void {
        console.log('di chuyển');
    }
}
class Cho extends ConVat {
    tieng(): void {
        console.log('gaugau');
    }
}
class Meo extends ConVat {
    tieng(): void {
        console.log('Meow');
    }
}