class Point {	x: number;	y: number;	constructor(x: number, y: number) {		this.x = x;		this.y = y;	}	addVector(x: number, y: number): void {		this.x += x;		this.y += y;	}}class Size {	constructor(width: number, height: number) {		this.width = width;		this.height = height;	}}class Rect {	size: Size;	origin: Point;	constructor(x: number, y: number, width: number, height: number) {		this.size = new Size(width, height);		this.origin = new Point(x,y);	}}