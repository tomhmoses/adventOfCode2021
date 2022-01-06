

/**
 * Day 5 Part 1
 *
 * @param {Array<Array<number>>} array of [start x, start y, end x, end y]
 * @return Number of line (vent) intersections
 * @customfunction
 */
function DAYFIVE(vents = [[3,0,0,3]], diagonal = false, answer = false) {
  // get max x and y to build grid
  var maxX = 0;
  var maxY = 0;
  for (var i = 0; i < vents.length; i++) {
    if (vents[i][0] > maxX) {
      maxX = vents[i][0];
    }
    if (vents[i][2] > maxX) {
      maxX = vents[i][2];
    }
    if (vents[i][1] > maxY) {
      maxY = vents[i][1];
    }
    if (vents[i][3] > maxY) {
      maxY = vents[i][3];
    }
  }
  // build empty map
  var map = [...Array(maxY+1)].map(e => Array(maxX+1).fill(0));
  
  for (var i = 0; i < vents.length; i++) {
    var startX = vents[i][0];
    var startY = vents[i][1];
    var endX = vents[i][2];
    var endY = vents[i][3];
    // if start and end x are same
    if (startX == endX) {
      // set line down y's
      if (startY > endY) {
        for (var y = startY; y >= endY; y--) {
          map[y][startX] += 1;
        }
      } else {
        for (var y = startY; y <= endY; y++) {
          map[y][startX] += 1;
        }
      }  
    } else if (startY == endY) { // if start and end y are same
      // set line down y's
      if (startX > endX) {
        for (var x = startX; x >= endX; x--) {
          map[startY][x] += 1;
        }
      } else {
        for (var x = startX; x <= endX; x++) {
          map[startY][x] += 1;
        }
      }
    } else if (diagonal && Math.abs(startX - endX) == Math.abs(startY-endY)) { // if diagonal
      var xDirection = 1;
      if (startX > endX) {
        xDirection = -1;
      }
      var yDirection = 1;
      if (startY > endY) {
        yDirection = -1;
      }
      for (var xyChange = 0; xyChange <= Math.abs(startX - endX); xyChange++) {
        map[startY + xyChange * yDirection][startX + xyChange * xDirection] += 1;
      }
    }
  }
  if (!answer) {
    return map;
  }
  var overlaps = 0;
  for (var x = 0; x <= maxX; x++) {
    for (var y = 0; y <= maxY; y++) {
      if (map[y][x] > 1) {
        overlaps++;
      }
    }
  }
  return overlaps;
}
