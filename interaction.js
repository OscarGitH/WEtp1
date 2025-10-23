// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {
    // Définir ici les attributs de la 'classe'
    this.canvas = canvas;
    this.startX = 0;
    this.startY = 0;
    this.endX = 0;
    this.endY = 0;
    this.isDragging = false;
    this.interactor = interactor || null;

    // Developper les 3 fonctions gérant les événements
    this.onMouseDown = (evt) => {
        const pos = getMousePosition(this.canvas, evt);
        this.startX = pos.x;
        this.startY = pos.y;
        this.isDragging = true;
        if (this.interactor && typeof this.interactor.onInteractionStart === 'function') {
            this.interactor.onInteractionStart(this);
        }
        // console.log(`Mouse down at ${this.startX}, ${this.startY}`);
    };

    this.onMouseMove = (evt) => {
        if (this.isDragging) {
            const pos = getMousePosition(this.canvas, evt);
            this.endX = pos.x;
            this.endY = pos.y;
            if (this.interactor && typeof this.interactor.onInteractionUpdate === 'function') {
                this.interactor.onInteractionUpdate(this);
            }
            // console.log(`Mouse move at ${this.endX}, ${this.endY}`);
        }
    };

    this.onMouseUp = (evt) => {
        if (this.isDragging) {
            const pos = getMousePosition(this.canvas, evt);
            this.endX = pos.x;
            this.endY = pos.y;
            this.isDragging = false;
            if (this.interactor && typeof this.interactor.onInteractionEnd === 'function') {
                this.interactor.onInteractionEnd(this);
            }
            // console.log(`Mouse up at ${this.endX}, ${this.endY}`);
        }
    };

    // Associer les fonctions précédentes aux évènements du canvas.
    canvas.addEventListener('mousedown', this.onMouseDown, false);
    canvas.addEventListener('mousemove', this.onMouseMove, false);
    canvas.addEventListener('mouseup', this.onMouseUp, false);
};


// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
};



