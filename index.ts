// את הקוד שלכם תכתבו כאן

//  1. Rectangle - מלבן
// class Rectangle {
//   height: number;
//   width: number;

//   constructor(height: number, width: number) {
//     this.height = height;
//     this.width = width;
//   }

//   area(): number {
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

//   area(): number {
//     return this.sideSquare * this.sideSquare;
//   }
// }
// const square = new Square(5);
// console.log(square.area());

// 3. Shape - צורה
// class Shape {
//   info(): string {
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

//   area(): number {
//     return this.height * this.width;
//   }

//   info(): string {
//     return "This is a rectangle.";
//   }
// }

// class ColoredRectangle extends Rectangle {
//   color: string;

//   constructor(height: number, width: number, color: string) {
//     super(height, width);
//     this.color = color;
//   }

//   info(): string {
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
//class Rectangle {
//   height: number;
//   width: number;

//   constructor(height: number, width: number) {
//     this.height = height;
//     this.width = width;
//   }

//   area(): number {
//     return this.height * this.width;
//   }

//   scale(coefficient: number): Rectangle {
//     this.height *= coefficient;
//     this.width *= coefficient;
//     return this;
//   }

//   static combineRectangles(
//     rectangle1: Rectangle,
//     rectangle2: Rectangle
//   ): Rectangle {
//     const combineHeight = rectangle1.height + rectangle2.height;
//     const combineWidth = rectangle1.width + rectangle2.width;
//     return new Rectangle(combineHeight, combineWidth);
//   }
// }

// const myRectangle = new Rectangle(5, 10);
// //Get the original area
// console.log(myRectangle.area());
// //Get the scaled area
// console.log(myRectangle.scale(2).area());
// //Combine two areas of rectangles
// const rectangle1 = new Rectangle(3, 5);
// const rectangle2 = new Rectangle(3, 3);
// const combinedRectangles = Rectangle.combineRectangles(rectangle1, rectangle2);
// console.log(combinedRectangles.area());

// 5. Shape with draw method
// class Shape {
//   draw(): string {
//     return "Drawing a shape";
//   }
// }

// class Triangle extends Shape {
//   draw(): string {
//     return "Drawing a triangle";
//   }
// }

// class Circle extends Shape {
//   draw(): string {
//     return "Drawing a circle";
//   }
// }

// class Square extends Shape {
//   draw(): string {
//     return "Drawing a square";
//   }
// }

// function renderShapes(shapes: Shape[]): void {
//   shapes.forEach((shape) => console.log(shape.draw()));
// }

// const circle = new Circle();
// const triangle = new Triangle();
// const square = new Square();

// const shapes: Shape[] = [circle, triangle, square];
// renderShapes(shapes);
