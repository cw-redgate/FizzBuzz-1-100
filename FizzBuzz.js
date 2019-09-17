for (var n = 1; n <= 100; n++) {
  var FizzBuzz = "";

    if (n % 3 == 0) FizzBuzz += "Fizz";
    if (n % 5 == 0) FizzBuzz += "Buzz";
    if (FizzBuzz == "") FizzBuzz = n;

  console.log(FizzBuzz);
}
