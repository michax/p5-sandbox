let vert = [];
let vertSorted = [];
const edges = [];
let gui;
const logs = document.querySelector("#logs");

window.guiRenderOverlay = true;
window.triangles = getTriangles(10, 10);

function scan(e) {
    const startY = e.origin.y;
    const startX = e.origin.x;

    const minY = Math.min(e.base.y, e.op.y, e.sup.y);
    const maxY = Math.max(e.base.y, e.op.y, e.sup.y);

    let x1 = startX;
    let x2 = startX;

    let y = startY;

    // Filling first part
    let i = 0;
    for (; y < startY + minY; y++) {
        line(x1, y, x2, y);
        let dt1 = e.base.x / e.base.y;
        let dt2 = e.op.x / e.op.y;

        x1 += dt1;
        x2 += dt2;
        i++;
    }

    // console.log('i: ', i, ' y: ', y);

    let j = 0;
    for (; y < startY + maxY; y++) {
        line(x1, y, x2, y);
        let dt1 = e.base.x / e.base.y;
        let dt2 = e.sup.x / e.sup.y;

        x1 += dt1;
        x2 += dt2;
        j++;
    }

    // console.log('j: ', j, ' y: ', y);

    return y;
}

function scan2(e) {
    const startY = e.origin.y;
    const startX = e.origin.x;

    //logs.textContent = "";

    const minY = Math.min(e.base.y, e.op.y, e.sup.y);
    const maxY = Math.max(e.base.y, e.op.y, e.sup.y);

    let x1 = startX;
    let x2 = startX;

    let y = startY;

    // console.log('i: ', i, ' y: ', y);

    fill(0, 255, 0);
    ellipse(x1, y, 10, 10);

    for (; y > startY - maxY; y--) {
        line(x1, y, x2, y);
        let dt1 = e.base.x / e.base.y;
        let dt2 = e.op.x / e.op.y;

        x1 -= dt1;
        x2 -= dt2;
    }

    fill(0, 0, 0);
    ellipse(x1, y, 10, 10);
    line(200, 300, e.op.x + 200, e.op.y + 300);
    line(200, 300, e.base.x + 200, e.base.y + 300);

    // console.log('j: ', j, ' y: ', y);

    return y;
}

function setup() {
    createCanvas(640, 360);

    gui = createGui("Options", width - 200);
    gui.addGlobals("guiRenderOverlay");

    noLoop();
}

function draw() {
    background(210);
    fill(255, 0, 0);
    triangle(vert[0].x, vert[0].y, vert[1].x, vert[1].y, vert[2].x, vert[2].y);

    if (guiRenderOverlay) {
        scan2(edges[0]);
    }
}
