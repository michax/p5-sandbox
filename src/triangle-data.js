function getFlatUpTriangle(x, y, size = 100) {
    return [
        p5.Vector(x, y),
        p5.Vector(x + size, y),
        p5.Vector(x + size, y + size)
    ]
}

function getFlatDownTriangle(x, y, size = 100) {
    return [
        p5.Vector(x + size / 2, y),
        p5.Vector(x + size, y + size),
        p5.Vector(x, y + size)
    ]
}

function getComplexTriangle(x, y, size = 100) {
    return [
        p5.Vector(x + size, y),
        p5.Vector(x + size, y + size),
        p5.Vector(x + size / 2, y + size / 2)
    ]
}

function getTriangles(x, y, size = 100) {
    return [
        getFlatDownTriangle(x, y, size),
        getFlatDownTriangle(x, y, size),
        getComplexTriangle(x, y, size)
    ]
}
