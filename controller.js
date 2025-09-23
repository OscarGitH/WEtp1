var editingMode = {rect: 0, line: 1, elli: 2};

function Pencil(ctx, drawing, canvas) {
	this.currEditingMode = editingMode.line;
	this.currLineWidth = 5;
	this.currColour = '#000000';
	this.currentShape = 0;

	// Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.
	document.getElementById('butLine').addEventListener('click', () => {
		this.currEditingMode = editingMode.line;
	});

	document.getElementById('butRect').addEventListener('click', () => {
		this.currEditingMode = editingMode.rect;
	});

	document.getElementById('butElli').addEventListener('click', () => {
		this.currEditingMode = editingMode.elli;
	});

	document.getElementById('spinnerWidth').addEventListener('input', (event) => {
		this.currLineWidth = event.target.value;
	});

	document.getElementById('colour').addEventListener('input', (event) => {
		this.currColour = event.target.value;
	});

	document.getElementById('btn-clear').addEventListener('click', () => {
		updateShapeList(new Drawing());
		build();
	});

	new DnD(canvas, this);

	// Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd
	this.onInteractionStart = (dnd) => {
		const lineWidth = this.currLineWidth;
		const colour = this.currColour;

		if (this.currEditingMode === editingMode.line) {
			this.currentShape = new Line(dnd.startX, dnd.startY, dnd.startX, dnd.startY, lineWidth, colour);
			drawing.getForms().push(this.currentShape);
		} else if (this.currEditingMode === editingMode.rect) {
			this.currentShape = new Rectangle(dnd.startX, dnd.startY, 0, 0, lineWidth, colour);
			drawing.getForms().push(this.currentShape);
		} else if (this.currEditingMode === editingMode.elli) {
			this.currentShape = new Ellipse(dnd.startX, dnd.startY, 0, 0, lineWidth, colour);
			drawing.getForms().push(this.currentShape);
		}
	};

	this.onInteractionUpdate = (dnd) => {
		if (!this.currentShape) return;

		if (this.currEditingMode === editingMode.line) {
			this.currentShape.xEnd = dnd.endX;
			this.currentShape.yEnd = dnd.endY;
		} else if (this.currEditingMode === editingMode.rect) {
			const x = Math.min(dnd.startX, dnd.endX);
			const y = Math.min(dnd.startY, dnd.endY);
			const w = Math.abs(dnd.endX - dnd.startX);
			const h = Math.abs(dnd.endY - dnd.startY);
			this.currentShape.x = x;
			this.currentShape.y = y;
			this.currentShape.width = w;
			this.currentShape.height = h;
		} else if (this.currEditingMode === editingMode.elli) {
			const rx = Math.abs(dnd.endX - dnd.startX) / 2;
			const ry = Math.abs(dnd.endY - dnd.startY) / 2;
			this.currentShape.x = dnd.startX + (dnd.endX - dnd.startX) / 2;
			this.currentShape.y = dnd.startY + (dnd.endY - dnd.startY) / 2;
			this.currentShape.radiusX = rx;
			this.currentShape.radiusY = ry;
		}

		drawing.paint(ctx, canvas);
	};

	this.onInteractionEnd = (dnd) => {
		this.currentShape = null;
		updateShapeList(drawing);
	};
};


