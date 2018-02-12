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

function getFlatEdge(edges) {
    return _.find(edges, (edge) => edge.y === 0);
}

function getNonFlatEdges(edges) {
    return _.find(edges, (edge) => edge.y !== 0);
}