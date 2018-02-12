function getEdges(triangle) {
    const edges = [];
    for (let i = 0; i < triangle.length - 1; i++) {
        const a = triangle[i];
        const b = triangle[i + 1];
        const ab = p5.Vector.sub(b, a);
        edges.push(ab);
    }

    return edges;
}

function sortVerticalEdges(edges) {
    return _.sortBy(edges, 'y');
}

function getFlatEdge(edges) {
    return _.find(edges, (edge) => edge.y === 0);
}

function getNonFlatEdges(edges) {
    return _.filter(edges, (edge) => edge.y !== 0);
}

/**
 * Get general direction of edge pair.
 * Usefull for deriving direction of line sweep (up or down).
 * @param edgePair
 * @returns {number}
 */
function getEdgePairDirection(edgePair) {
    if (edgePair[0].y < 0 && edgePair[1].y < 0) {
        return -1;
    }

    return 1;
}

function sweep(triangle) {
    const edges = getEdges(triangle);
    const nonFlatEdges = getNonFlatEdges(edges);

    for(let i = 0; i < nonFlatEdges.length - 1; i++) {
        const a = nonFlatEdges[i];
        const b = nonFlatEdges[i + 1];


    }
}