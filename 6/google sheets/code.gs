/**
 * get number of fish
 *
 * @param {string} fish list
 * @return number of fish in the list
 * @customfunction
 */
function NUMBEROFFISH(fish) {
  return fish.split(",").length
}

/**
 * Lanternfish end of day calc
 *
 * @param {string} fish list
 * @return number of fish in the list
 * @customfunction
 */
function LANTERNFISH(fishStr = "3,4,3,1,2") { // Lanternfish
  var fish = arrOfNumsFromString(fishStr);
  var newFish = 0
  for (var i = 0; i < fish.length; i++) {
    if (fish[i] == 0) {
      fish[i] = 6;
      newFish++;
    } else {
      fish[i]--;
    }
  }
  fish = fish.concat(Array(newFish).fill(8));
  return fish.toString();
}


/**
 * Lanternfish recursive
 *
 * @param {string|Array<number>} fish list
 * @param {number} number of days to calc for
 * @return number of fish in the list at the end of that many days
 * @customfunction
 */
function LANTERNLOGIC(fish = [1,2,3,4,2], days = 80) {
  if (typeof fish === 'string' || fish instanceof String) {
    fish = arrOfNumsFromString(fish)
  }
  if (days == 0) {
    return fish.length;
  } else {
    var newFish = 0
    for (var i = 0; i < fish.length; i++) {
      if (fish[i] == 0) {
        fish[i] = 6;
        newFish++;
      } else {
        fish[i]--;
      }
    }
    fish = fish.concat(Array(newFish).fill(8));
    return LANTERNLOGIC(fish, days - 1)
  }
}

/**
 * Lanternfish itteratively
 *
 * @param {string|Array<number>} fish list
 * @param {number} number of days to calc for
 * @return number of fish in the list at the end of that many days
 * @customfunction
 */
function LANTERSAFTERDAYS(fish = [1,2,3,4,2], days = 256) {
  if (typeof fish === 'string' || fish instanceof String) {
    fish = arrOfNumsFromString(fish)
  }
  for (var day = 0; day < days; day++) {
    var newFish = 0
    for (var i = 0; i < fish.length; i++) {
      if (fish[i] == 0) {
        fish[i] = 6;
        newFish++;
      } else {
        fish[i]--;
      }
    }
    fish = fish.concat(Array(newFish).fill(8));
  }
  return fish.length;
}

function arrOfNumsFromString(fishStr) {
  var splitFish = fishStr.split(",").map(Number);
  return splitFish;
}