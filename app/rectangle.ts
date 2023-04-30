class Point {
    constructor(public x: number, public y: number) {}

    move(dx: number, dy: number) {
        this.x += dx;
        this.y += dy;
    }
}

export class Rectangle {
    constructor(
        public topLeft: Point,
        public topRight: Point,
        public bottomLeft: Point,
        public bottomRight: Point,
    ) {}

    move(dx: number, dy: number) {
        this.topLeft.move(dx, dy);
        this.topRight.move(dx, dy);
        this.bottomLeft.move(dx, dy);
        this.bottomRight.move(dx, dy);
    }

    getArea(): number {
        const width = this.topRight.x - this.topLeft.x;
        const height = this.bottomLeft.y - this.topLeft.y;
        return width * height;
    }
}