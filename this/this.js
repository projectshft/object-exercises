var coffeeShop = {
  beans: 40,
  drinkRequirements: {
    latte: 10,
    americano: 5,
    doubleShot: 15,
    frenchPress: 12
  },
  makeDrink: function (drinkType) {
    if (this.drinkRequirements[drinkType] && this.beans >= this.drinkRequirements[drinkType]) {
      this.beans -= this.drinkRequirements[drinkType];
      console.log(drinkType + " is ready!");
    } else if (!this.drinkRequirements[drinkType]) {
      console.log("Sorry, we don't make " + drinkType);
    } else if (this.beans < this.drinkRequirements[drinkType]) {
      console.log("Sorry, we're all out of beans!");
    }
  }
};

coffeeShop.makeDrink('latte');
coffeeShop.makeDrink('americano');
coffeeShop.makeDrink('pourOver');
coffeeShop.makeDrink('doubleShot');
coffeeShop.makeDrink('frenchPress');
