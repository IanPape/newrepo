
it  ('should calculate the monthly rate correctly', function () {
       const values = { amount : 60000, years: 5, rate : 12 };
  
    expect (calculateMonthlyPayment(values)).toEqual ('1334.67');
  // ...
});


it("should return a result with 2 decimal places", function() {
  const values = { amount : 10000, years : 10, rate : 4.5};
  expect (calculateMonthlyPayment(values)).toEqual ('103.64');
  // ..
});

/// etc
