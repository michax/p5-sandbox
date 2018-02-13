function sortTrianglePoints(points) {
    const first = _.head(_.sortBy(points, 'y'));
    const size = 3;
    const index= _.indexOf(points, first);

    let firstIndex = index - 1;
    firstIndex = firstIndex < 0 ? size + firstIndex : firstIndex;

    return [
        points[(firstIndex) % size],
        points[(firstIndex + 1) % size],
        points[(firstIndex + 2) % size]
    ];
}

function getEdges(triangle) {
    triangle = sortTrianglePoints(triangle);

    const a = {
        vector: p5.Vector.sub(triangle[0], triangle[1]),
        a: triangle[0],
        b: triangle[1]
    };

    const b = {
        vector: p5.Vector.sub(triangle[2], triangle[1]),
        a: triangle[2],
        b: triangle[1]
    };

    const c = {
        vector: p5.Vector.sub(triangle[0], triangle[2]),
        a: triangle[0],
        b: triangle[2]
    };

    return [a, b, c];
}

function getNonFlatEdges(edges) {
    return _.filter(edges, (edge) => edge.vector.y !== 0);
}

function getEdgePairRoot(edgePair) {
    if (edgePair[0].a.x === edgePair[1].a.x && edgePair[0].a.y === edgePair[1].a.y) {
        return { x: edgePair[0].a.x, y: edgePair[0].a.y }
    }

    return { x: edgePair[0].b.x, y: edgePair[0].b.y  };
}

function sweepComplex(edgeA, edgeB, edgeC) {
    const startY = edgeA.b.y;
    const startX = edgeA.b.x;

    ellipse(startX, startY, 10, 10);

    const minY = Math.min(edgeA.a.y, edgeB.a.y) - startY;
    const maxY = Math.max(edgeA.a.y, edgeB.a.y) - startY;

    let x1 = startX;
    let x2 = startX;

    let y = startY;

    // Filling first part
    for (; y < startY + minY; y++) {
        line(x1, y, x2, y);
        let dt1 = edgeA.vector.x / edgeA.vector.y;
        let dt2 = edgeB.vector.x / edgeB.vector.y;

        x1 += dt1;
        x2 += dt2;
    }


    // Filling second part
    for (; y < startY + maxY; y++) {
        line(x1, y, x2, y);
        // let dt1 = edgeA.vector.x / edgeA.vector.y;
        // let dt2 = edgeC.vector.x / edgeC.vector.y;
        let dt1 = edgeC.vector.x / edgeC.vector.y;
        let dt2 = edgeB.vector.x / edgeB.vector.y;

        x1 += dt1;
        x2 += dt2;
    }

    
    ellipse(startX, startY, 10, 10)
}

function sweepFlat(edgeA, edgeB) {
    const origin = getEdgePairRoot([edgeA, edgeB]);
    const startY = origin.y;
    const startX = origin.x;

    ellipse(startX, startY, 10, 10);

    const minY = Math.min(edgeA.a.y, edgeB.a.y, edgeA.b.y, edgeB.b.y) - startY;
    const maxY = Math.max(edgeA.a.y, edgeB.a.y, edgeA.b.y, edgeB.b.y) - startY;

    let x1 = startX;
    let x2 = startX;

    if (maxY > 0) {
        let y = startY;
        for (; y < startY + maxY; y++) {
            line(x1, y, x2, y);
            let dt1 = edgeA.vector.x / edgeA.vector.y;
            let dt2 = edgeB.vector.x / edgeB.vector.y;

            x1 += dt1;
            x2 += dt2;
        }
    } else {
        let y = startY;
        for (; y > startY + minY; y--) {
            line(x1, y, x2, y);
            let dt1 = edgeA.vector.x / edgeA.vector.y;
            let dt2 = edgeB.vector.x / edgeB.vector.y;

            x1 -= dt1;
            x2 -= dt2;
        }
    }
}

function sweep(triangle) {
    const edges = getEdges(triangle);
    const nonFlatEdges = getNonFlatEdges(edges);

    if (nonFlatEdges.length === 2) {
        // Flat triangle
        sweepFlat(nonFlatEdges[0], nonFlatEdges[1]);
    } else {
        // Complex triangle
        sweepComplex(nonFlatEdges[0], nonFlatEdges[1], nonFlatEdges[2])
    }
}