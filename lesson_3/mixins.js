// Mixins
function fuelGauge(kmTravelledPerLiter, fuelCapInLiter) {
  this.fuelEfficiency = kmTravelledPerLiter;
  this.fuelEfficiency = fuelCapInLiter;
  range() {
      return this.fuelCap *  this.fuelEfficiency;
  }
}

// Classes
class WheeledVehicle {
  constructor(tirePressure) {
    this.tires = tirePressure;
  }

  tirePressure(tireIdx) {
    return this.tires[tireIdx];
  }

  inflateTire(tireIdx, pressure) {
    this.tires[tireIdx] = pressure;
  }
}
Object.assign(WheeledVehicle.prototype, fuelGauge);

class Auto extends WheeledVehicle {
  constructor() {
    // the array represents tire pressure for four tires
    super([30,30,32,32]);
    this.fuelGauge(50, 25.0);
  }
}

class Motorcycle extends WheeledVehicle {
  constructor() {
    // array represents tire pressure for two tires
    super([20,20]);
    this.fuelGauge(80, 8.0);
  }
}

class Catamaran {
  constructor(propellerCount, hullCount) {
    // catamaran specific logic
    this.propellerCount = propellerCount;
    this.hullCount = hullCount;

  }
}
Object.assign(Catamaran.prototype, fuelGauge);
