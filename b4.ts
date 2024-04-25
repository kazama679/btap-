// Tạo ra interface Geometry chứa 2 phương thức calculateArea và calculatePerimeter. 
// Định nghĩa lớp Circle có thuộc tính private radius, lớp Rectangle có 2 thuộc tính private width, height. 
// 2 lớp đều implements interface Geometry. Xây dựng 2 phương thức có trong interface cho 2 hàm đó.

interface Geometry{
    calculateArea(): void;
    calculatePerimeter():void;
}
class Circle333 implements Geometry{
    private radius:number;
    constructor(radius:number){
            this.radius=radius
    }
    calculateArea(): void {
        console.log(`diện tích hình tròn: ${Math.PI* this.radius*this.radius}`);
    }
    calculatePerimeter(): void {
        console.log(`chu vi hình tròn: ${Math.PI*2 *this.radius}`);
    }
}
class Rectangle3 implements Geometry{
    private width:number
    private height:number
    constructor(width:number
        ,height:number){
            this.width=width
            this.height=height
    }
    calculateArea(): void {
        console.log(`diện tích hình chữ nhật: ${this.width*this.height}`);
    }
    calculatePerimeter(): void {
        console.log(`chu vi hình chữ nhật: ${(this.width+this.height)*2}`);
    }
}
let HCN = new Rectangle3(2,3);
HCN.calculateArea();
HCN.calculatePerimeter();


let Tron = new Circle333(3);
Tron.calculateArea();
Tron.calculatePerimeter();