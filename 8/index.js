console.log('hello');
const fs = require('fs');

var input = fs.readFileSync('input.txt').toString().split("\n");
//console.log(input);

var countsOfUniqueOuts = 0;
var uniqueOutLengths = [2, 3, 4, 7];
console.log("going into loop")

// get unique count
for (i in input) {
    //console.log(input[i]);
    var parts = input[i].split(" | ");
    //console.log(parts);
    var allTen = parts[0];
    var fourOut = parts[1];
    var outs = fourOut.split(" ");
    for (out in outs) {
        if (uniqueOutLengths.includes(outs[out].length)) {
            countsOfUniqueOuts++;
            // console.log(outs[out]);
            // console.log(outs[out].length);
        } else {
            //console.log("not: " + outs[out] + ": " + outs[out].length);
        }
    }
}

console.log(countsOfUniqueOuts)

function checkAllAreIn(inner, outer) {
    const containsAll = inner.every(element => {
        return outer.includes(element);
    });
    return containsAll;
}

var total = 0;
// PART 2: Solve
for (i in input) {
    var parts = input[i].split(" | ");
    var allTen = parts[0].split(" ");
    var fourOut = parts[1].split(" ");

    //console.log("allTen: " + allTen);

    var one = allTen.filter(segments => segments.length == 2)[0];
    var seven = allTen.filter(segments => segments.length == 3)[0];
    var four = allTen.filter(segments => segments.length == 4)[0];
    var eight = allTen.filter(segments => segments.length == 7)[0];
    //console.log("1: " + one);
    //console.log("4: " + four);

    var six = allTen.filter(segments => segments.length == 6 && !checkAllAreIn(one.split(''), segments.split('')))[0];
    //console.log("6: " + six);

    var nine = allTen.filter(segments => segments.length == 6 && checkAllAreIn(four.split(''), segments.split('')))[0];
    //console.log("9: " + nine);
    
    var zero = allTen.filter(segments => segments.length == 6 && segments != six && segments != nine)[0];
    //console.log("0: " + zero);

    var three = allTen.filter(segments => segments.length == 5 &&  checkAllAreIn(one.split(''), segments.split('')))[0];
    //console.log("3: " + three);

    var fourWithoutOne = four.split('').filter(item => !one.split('').includes(item));
    //console.log("four without one: " + fourWithoutOne);
    var five = allTen.filter(segments => segments.length == 5 && checkAllAreIn(fourWithoutOne, segments.split('')))[0];
    // console.log("5: " + five);

    var two = allTen.filter(segments => segments.length == 5 && segments != three && segments != five)[0];
    // console.log("2: " + two);

    var numbers = [zero, one, two, three, four, five, six, seven, eight, nine];
    
    var result = "";
    for (const [i, out] of fourOut.entries()) {
        for (const [number, segments] of numbers.entries()) {
            //console.log('%d: %s', number, segments);
            if (out.length == segments.length && checkAllAreIn(out.split(''), segments.split(''))) {
                result += number;
            }
        }
    }
    // console.log(result);
    total += Number(result);
}
console.log("total: " + total);