let vert = [];
let vertSorted = [];
const edges = [];
let gui;
const logs = document.querySelector("#logs");

window.guiRenderOverlay = true;
window.triangles = {
    'topFlat': getFlatUpTriangle,
    'bottomFlat': getFlatDownTriangle,
    'complex': getComplexTriangle,
    'complex2': getComplexTriangle2,
    'complex3': getComplexTriangle3,
};
window.triangleType = Object.keys(window.triangles);


function setup() {
    createCanvas(640, 360);

    gui = createGui("Options", width - 200);
    gui.addGlobals(
        "guiRenderOverlay",
        "triangleType"
    );

    noLoop();
}

function draw() {
    background(210);
    fill(255, 0, 0);

    const triData = window.triangles[window.triangleType](10, 10);

    if (triData) {
        triangle(
            triData[0].x, triData[0].y,
            triData[1].x, triData[1].y,
            triData[2].x, triData[2].y
        );

        if (guiRenderOverlay) {
            sweep(triData);
        }
    }
}
