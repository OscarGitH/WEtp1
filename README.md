# TP Web : Javascript et HTML5

## Overview
This project is a **university assignment** whose goal is to build a **web application from scratch** (without any framework) using the **MVC design pattern**.  
A project base was provided here: [https://github.com/barais/tpWeb](https://github.com/barais/tpWeb).

---

## Features
Among the required features are:
- Drawing **rectangles** and **lines**
- Selecting **color** and **line thickness**
- Displaying a **list of drawn shapes**
- **Deleting shapes individually**
- **Mouse interactions** for drawing (click, drag, release)

Additionally, I implemented:
- A new shape: **ellipse**
- A **“Clear All” button** to remove all shapes at once

---

## Architecture
- **Model:** Manages shapes (`Drawing`, `Rectangle`, `Line`, `Ellipse`)
- **View:** Renders shapes on the canvas and updates the shape list
- **Controller:** Handles user input through `DnD` and `Pencil`

---

## Run the App
1. Clone the repository:
   ```bash
   git clone https://github.com/OscarGitH/WEtp1.git
   ```
2. Open canvas.html in your browser.  
3. Draw shapes, change color or line width, and manage them directly in the UI.  

---

## Technologies

The choice of technologies was predefined for the assignment:  
- HTML5
- CSS3
- JavaScript.

---

## Bonus: Deployment

The application was deployed using GitHub Pages.

Live version available here:
https://oscargith.github.io/WEtp1/canvas.html

---

## Author
PAVOINE Oscar  
Master 1 – Informatique (IL, Apprenticeship)