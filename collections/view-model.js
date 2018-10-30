function ReservationsViewModel() {
  var self = this;

  self.availableMeals = [
    {
      mealName: "Standard (sandwich)",
      price: 0
    },
    {
      mealName: "Premium (lobster)",
      price: 34.95
    },
    {
      mealName: "Ultimate (whole zebra)",
      price: 290
    }
  ];

  self.seats = ko.observableArray(
    [
      new SeatReservation("Steve", self.availableMeals[0]),
      new SeatReservation("Bert", self.availableMeals[0])
    ]
  );

  self.addSeat = function () {
    self.seats.push( new SeatReservation("", self.availableMeals[0]) );
  }
}