// את הקוד שלכם תכתבו כאן

//  1. Rectangle - מלבן
// class Rectangle {
//   height: number;
//   width: number;

//   constructor(height: number, width: number) {
//     this.height = height;
//     this.width = width;
//   }

//   area() {
//     return this.height * this.width;
//   }
// }
// const rectangle = new Rectangle(5, 10);
// console.log(rectangle.area());

//  2. Square - ריבוע
// class Square extends Rectangle {
//   sideSquare: number;

//   constructor(sideSquare: number) {
//     super(sideSquare, sideSquare);
//     this.sideSquare = sideSquare;
//   }

//   area() {
//     return this.sideSquare * this.sideSquare;
//   }
// }
// const square = new Square(5);
// console.log(square.area());

// 3. Shape - צורה
// class Shape {
//   info() {
//     return "This is a shape.";
//   }
// }

// class Rectangle extends Shape {
//   height: number;
//   width: number;

//   constructor(height: number, width: number) {
//     super();
//     this.height = height;
//     this.width = width;
//   }

//   area() {
//     return this.height * this.width;
//   }

//   info() {
//     return "This is a rectangle.";
//   }
// }

// class ColoredRectangle extends Rectangle {
//   color: string;

//   constructor(height: number, width: number, color: string) {
//     super(height, width);
//     this.color = color;
//   }

//   info() {
//     return `This is a rectangle colored ${this.color}`;
//   }
// }

// const shape = new Shape();
// console.log(shape.info());

// const rectangle = new Rectangle(5, 10);
// console.log(rectangle.info());

// const coloredRectangle = new ColoredRectangle(4, 8, "yellow");
// console.log(coloredRectangle.info());

// 4. Method Chaining

// 5. Shape with draw method
