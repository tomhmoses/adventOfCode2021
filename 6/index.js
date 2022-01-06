console.log("Hello world!");
const input = "1,2,1,1,1,1,1,1,2,1,3,1,1,1,1,3,1,1,1,5,1,1,1,4,5,1,1,1,3,4,1,1,1,1,1,1,1,5,1,4,1,1,1,1,1,1,1,5,1,3,1,3,1,1,1,5,1,1,1,1,1,5,4,1,2,4,4,1,1,1,1,1,5,1,1,1,1,1,5,4,3,1,1,1,1,1,1,1,5,1,3,1,4,1,1,3,1,1,1,1,1,1,2,1,4,1,3,1,1,1,1,1,5,1,1,1,2,1,1,1,1,2,1,1,1,1,4,1,3,1,1,1,1,1,1,1,1,5,1,1,4,1,1,1,1,1,3,1,3,3,1,1,1,2,1,1,1,1,1,1,1,1,1,5,1,1,1,1,5,1,1,1,1,2,1,1,1,4,1,1,1,2,3,1,1,1,1,1,1,1,1,2,1,1,1,2,3,1,2,1,1,5,4,1,1,2,1,1,1,3,1,4,1,1,1,1,3,1,2,5,1,1,1,5,1,1,1,1,1,4,1,1,4,1,1,1,2,2,2,2,4,3,1,1,3,1,1,1,1,1,1,2,2,1,1,4,2,1,4,1,1,1,1,1,5,1,1,4,2,1,1,2,5,4,2,1,1,1,1,4,2,3,5,2,1,5,1,3,1,1,5,1,1,4,5,1,1,1,1,4";


function arrOfNumsFromString(fishStr) {
  var splitFish = fishStr.split(",").map(Number);
  return splitFish;
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
    console.log(day + ': ' + fish.length)
  }
  return fish.length;
}

console.log(LANTERSAFTERDAYS(input, 256));