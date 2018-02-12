function getFlatUpTriangle(x, y, size = 100) {
    return [
        new p5.Vector(x, y),
        new p5.Vector(x + size, y),
        new p5.Vector(x + size, y + size)
    ]
}

function getFlatDownTriangle(x, y, size = 100) {
    return [
        new p5.Vector(x + size / 2, y),
        new p5.Vector(x + size, y + size),
        new p5.Vector(x, y + size)
    ]
}

function getComplexTriangle(x, y, size = 100) {
    return [
        new p5.Vector(x + size, y),
        new p5.Vector(x + size, y + size),
        new p5.Vector(x + size / 2, y + size / 2)
    ]
}

function getComplexTriangle2(x, y, size = 100) {
    return [
        new p5.Vector(x + size, y),
        new p5.Vector(x + size / 2, y + size),
        new p5.Vector(x + 30, y + 10)
    ]
}

function getTriangles(x, y, size = 100) {
    return [
        getFlatDownTriangle(x, y, size),
        getFlatDownTriangle(x, y, size),
        getComplexTriangle(x, y, size)
    ]
}
