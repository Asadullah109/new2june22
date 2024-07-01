class ImmutablePoint {
    x;
    y;
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
const point = new ImmutablePoint(10, 20);
// point.x = 30; // Error: Cannot assign to 'x' because it is a read-only property.
console.log('x'[0]);
export {};
