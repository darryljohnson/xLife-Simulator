/*!
	var self = this;
	this.x = x;
	this.y = y;

	this.addVector = function (x, y) {
		self.x += x;
		self.y += y;
	}
}

function Size(width, height) {
	this.width = width;
	this.height = height;
}

function Rect (x, y, width, height) {
	this.size = new Size(width, height);
	this.origin = new Point(x,y);
}
