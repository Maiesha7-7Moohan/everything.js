function sum(n) {
  if (typeof n !== "number" || n % 1 !== 0) {
    return "The value passed is not a number";
  }

  let total = 0;
  for (let i = 0; i <= n; i++) {
    total += i;
  }
  return total;
}
console.log(sum(5));
console.log(sum("Hey User!"));

function factorial(n) {
  if (n < 0) return undefined;

  let result = 1;
  let calculationString = "";

  for (let i = n; i >= 1; i--) {
    result *= i;
    calculationString += i + (i > 1 ? "*" : "");
  }

  console.log(`${n}! -> ${calculationString}`);
  console.log(`Output: ${result}`);
  return result;
}

factorial(5);

function funkyMath() {
  const args = Array.from(arguments);

  if (args.length === 2) {
    return args[1] - args[0];
  } else if (args.length === 3) {
    return args.reduce((a, b) => a + b, 0);
  } else if (args.length === 4) {
    const sum1 = args[0] + args[1];
    const sum2 = args[2] + args[3];
    return sum1 / sum2;
  }

  return "Unsupported amount of arguments";
}

console.log(funkyMath(5, 10));
console.log(funkyMath(1, 2, 3));
console.log(funkyMath(7, 9, 1, 2));

const currentArray = [1, 2, 42, 65, 21, 44];
const oddArray = [];

for (let i = 0; i < currentArray.length; i++) {
  if (currentArray[i] % 2 !== 0) {
    oddArray.push(currentArray[i]);
  }
}

oddArray.sort((a, b) => a - b);

console.log(oddArray);

const me = {
  firstName: "Maiesha",
  lastName: "Moohan",
  age: 18,
  favouriteColour: "Purple",
  dreamCar: "’59 Cadillac Deville Pickup Truck",
};

me["favourite food"] = "Stir fry";

delete me.age;

console.log(me);
