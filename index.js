// Code your solution in this file!
function distanceFromHqInBlocks(hq) {
  if (hq > 42) {
    return hq - 42;
  } else {
    return 42 - hq;
  }
}

function distanceFromHqInFeet(feet) {
  return distanceFromHqInBlocks(feet) * 264;
}

function distanceTravelledInFeet(start, destination) {
   if (start < destination) {
     return (destination - start) * 264
  } else {
      return (start - destination) * 264
  }
}

function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination)
  if (distance <= 400) {
    return 0
  } else if (distance > 400 && distance < 2000) {
      return .02 * (distance - 400)
  } else if (distance > 2000 && distance < 2500) {
    return 25
  } else if (distance > 2500) {
    return "cannot travel that far"
  }
}

// * `calculatesFarePrice`: Given the same starting and ending block as the
// previous test (_hint hint_), return the fare for the customer. The first four
// hundred feet are free. For a distance between 400 and 2000 feet, the price is 2
// cents per foot (not including 400, which are free!). Then Scuber charges a
// flat fare for a distance over 2000 feet and under 2500 feet. Finally, Scuber
// does not allow any rides over 2500 feet - the function returns `'cannot travel
// that far'` if a ride over 2500 feet is requested.
