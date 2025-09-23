// Implémenter ici les fonctions paint à ajouter dans chacune des classes du modèle.

Rectangle.prototype.paint = function (ctx) {
    //TODO Manager color
    ctx.strokeStyle = this.color;
    ctx.lineWidth = this.lineWidth;

    ctx.beginPath();
    ctx.rect(this.getInitX(), this.getInitY(), this.getFinalX(), this.getFinalY());
    ctx.stroke();
};

Line.prototype.paint = function (ctx) {
    //TODO Manager color
    ctx.strokeStyle = this.color;
    ctx.lineWidth = this.lineWidth;

    ctx.beginPath();
    ctx.moveTo(this.getInitX(), this.getInitY());
    ctx.lineTo(this.getFinalX(), this.getFinalY());
    ctx.stroke();
};

Ellipse.prototype.paint = function (ctx) {
    //TODO Manager color
    ctx.strokeStyle = this.color;
    ctx.lineWidth = this.lineWidth;

    ctx.beginPath();
    ctx.ellipse(this.getXCenter(), this.getYCenter(), this.getRadiusX(), this.getRadiusY(), this.getRotation(), this.getStartAngle(), this.getEndAngle());
    ctx.stroke();
}

Drawing.prototype.paint = function (ctx) {
    // console.log(this.getForms());
    ctx.fillStyle = '#F0F0F0'; // set canvas' background color
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    this.getForms().forEach(function (eltDuTableau) {
        // now fill the canvas
        eltDuTableau.paint(ctx);
    });
};

updateShapeList = function (drawing) {
    const shapeList = document.getElementById('shapeList');
    shapeList.innerHTML = '';

    drawing.getForms().forEach((shape, index) => {
        const listItem = document.createElement('li');

        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'btn btn-default';
        btn.style.display = 'flex';
        btn.style.alignItems = 'center';

        const text = document.createTextNode(`${index + 1}: ${shape.getShapeType()} (Color: ${shape.color}, Line Width: ${shape.lineWidth})`);
        btn.appendChild(text);

        const icon = document.createElement('span');
        icon.className = 'glyphicon glyphicon-remove-sign';
        icon.style.marginLeft = '8px';
        btn.appendChild(icon);

        btn.addEventListener('click', function () {
            const forms = drawing.getForms();
            const idx = forms.indexOf(shape);
            if (idx !== -1) {
                forms.splice(idx, 1);
                const canvas = document.querySelector('canvas');
                if (canvas) {
                    const ctx = canvas.getContext('2d');
                    drawing.paint(ctx);
                }
                updateShapeList(drawing);
            }
        });

        listItem.appendChild(btn);
        shapeList.appendChild(listItem);
    });
}
