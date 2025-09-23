// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !
class Drawing {
    constructor() {
        this.typeOfShape = [];
    }

    getForms() {
        return this.typeOfShape;
    }

    paint(ctx, canvas) {
        ctx.fillStyle = '#F0F0F0';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
}

class Shape {
    constructor(color = '#000000', lineWidth = 1) {
        this.color = color;
        this.lineWidth = lineWidth;
    }

    paint(ctx) {
        ctx.strokeStyle = this.color;
        ctx.lineWidth = this.lineWidth;
    }

    getShapeType() {
        return this.constructor.name;
    }
}

class Line extends Shape {
    constructor(xStart = 0, yStart = 0, xEnd = 0, yEnd = 0, lineWidth = 1, color = '#000000') {
        super(color, lineWidth);
        this.xStart = xStart;
        this.yStart = yStart;
        this.xEnd = xEnd;
        this.yEnd = yEnd;
    }

    paint(ctx) {
        super.paint(ctx);
        ctx.beginPath();
        ctx.moveTo(this.xStart, this.yStart);
        ctx.lineTo(this.xEnd, this.yEnd);
        ctx.stroke();
    }

    getShapeType() {
        return super.getShapeType();
    }

    getInitX() {
        return this.xStart;
    }

    getInitY() {
        return this.yStart;
    }

    getFinalX() {
        return this.xEnd;
    }

    getFinalY() {
        return this.yEnd;
    }
}

class Rectangle extends Shape {
    constructor(x = 0, y = 0, width = 0, height = 0, lineWidth = 1, color = '#000000') {
        super(color, lineWidth);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    paint(ctx) {
        super.paint(ctx);
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.stroke();
    }

    getShapeType() {
        return super.getShapeType();
    }

    getInitX() {
        return this.x;
    }

    getInitY() {
        return this.y;
    }

    getFinalX() {
        return this.width;
    }

    getFinalY() {
        return this.height;
    }
}

class Ellipse extends Shape {
    constructor(xCenter = 0, yCenter = 0, radiusX = 0, radiusY = 0, lineWidth = 1, color = '#000000', rotation = 0, startAngle = 0, endAngle = 2 * Math.PI) {
        super(color, lineWidth);
        this.xCenter = xCenter;
        this.yCenter = yCenter;
        this.radiusX = radiusX;
        this.radiusY = radiusY;
        this.rotation = rotation;
        this.startAngle = startAngle;
        this.endAngle = endAngle;
    }

    paint(ctx) {
        super.paint(ctx);
        ctx.beginPath();
        ctx.ellipse(this.xCenter, this.yCenter, this.radiusX, this.radiusY, this.rotation, this.startAngle, this.endAngle);
        ctx.stroke();
    }

    getShapeType() {
        return super.getShapeType();
    }

    getXCenter() { return this.xCenter; }
    getYCenter() { return this.yCenter; }
    getRadiusX() { return this.radiusX; }
    getRadiusY() { return this.radiusY; }
    getRotation() { return this.rotation; }
    getStartAngle() { return this.startAngle; }
    getEndAngle() { return this.endAngle; }
}


