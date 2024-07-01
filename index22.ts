class ImmutablePoint {
    constructor(public readonly x: number, public readonly y: number) {}
  }
  
  const point = new ImmutablePoint(10, 20);
  // point.x = 30; // Error: Cannot assign to 'x' because it is a read-only property.
  
  console.log('x'[0]);