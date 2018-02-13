function fillBottomTriangle(v1, v2, v3) {
    const dt1 = (v2.x - v1.x) / (v2.y - v1.y);
    const dt2 = (v3.x - v1.x) / (v3.y - v1.y);

    let x1 = v1.x;
    let x2 = v1.x;

    stroke(0, 255, 0, 125);

    for (let y = v1.y; y <= v2.y; y++)
    {
        line(x1, y, x2, y);
        x1 += dt1;
        x2 += dt2;
    }
}

function fillTopTriangle(v1, v2, v3) {
    const dt1 = (v3.x - v1.x) / (v3.y - v1.y);
    const dt2 = (v3.x - v2.x) / (v3.y - v2.y);

    console.log('top: dt1: ', dt1, ' dt2: ', dt2);

    let x1 = v3.x;
    let x2 = v3.x;

    stroke(255, 0, 255, 125);
    for (let y = v3.y; y > v1.y; y--)
    {
        line(x1, y, x2, y);
        x1 -= dt1;
        x2 -= dt2;
    }
}

function sweep(tri) {
    tri = _.sortBy(tri, 'y');
    fill(0);
    strokeWeight(1);
    stroke(0);

    if (tri[1].y === tri[2].y) {
        fillBottomTriangle(tri[0], tri[1], tri[2]);
    }
    else if (tri[0].y === tri[1].y) {
        fillTopTriangle(tri[0], tri[1], tri[2]);
    } else {
         // (int)(vt1.x + ((float)(vt2.y - vt1.y) / (float)(vt3.y - vt1.y)) * (vt3.x - vt1.x)), vt2.y);
        // Source: http://www.sunshine2k.de/coding/java/TriangleRasterization/TriangleRasterization.html
        const v4 = new p5.Vector(
            Math.round((tri[0].x + ((tri[1].y - tri[0].y) / (tri[2].y - tri[0].y)) * (tri[2].x - tri[0].x))),
            tri[1].y
        );
        fillBottomTriangle(tri[0], v4, tri[1] );
        ellipse(tri[1].x, tri[1].y, 5, 5);
        ellipse(v4.x, v4.y, 5, 5);
        text('v4', v4.x, v4.y);
        ellipse(tri[2].x, tri[2].y, 5, 5);
        fillTopTriangle(tri[1], v4, tri[2]);
    }

    let i = 0;
    fill(0);
    strokeWeight(0);
    tri.forEach((vert) => {
        text('v'+i, vert.x, vert.y);
        i++;
    });
}