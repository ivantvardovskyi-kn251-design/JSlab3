const initialCars = [
  { id: "A-001", plate: "AT 1234 BK", brand: "MAN TGS",        capacity: 18, fuelPer100: 32.5 },
  { id: "A-002", plate: "AT 5678 CM", brand: "Volvo FH16",     capacity: 25, fuelPer100: 35.0 },
  { id: "A-003", plate: "AT 9012 HP", brand: "Mercedes Atego", capacity: 8,  fuelPer100: 21.4 },
];

function createCar(cars, newCar) {
  return [...cars, newCar];
}

function readCarById(cars, id) {
  return cars.find(car => car.id === id);
}

function readCarsByMinCapacity(cars, minCapacity) {
  return cars.filter(car => car.capacity >= minCapacity);
}

function readCarsByBrand(cars, brand) {
  return cars.filter(car => car.brand.toLowerCase().includes(brand.toLowerCase()));
}

function updateCar(cars, id, changes) {
  return cars.map(car => (car.id === id ? { ...car, ...changes } : car));
}

function deleteCar(cars, id) {
  return cars.filter(car => car.id !== id);
}

function printCars(cars) {
  for (const car of cars) {
    console.log(
      `[${car.id}] ${car.brand}, ${car.plate}, ${car.capacity} т, ${car.fuelPer100} л/100 км`
    );
  }
}

function updateById(items, id, changes) {
  return items.map(item => (item.id === id ? { ...item, ...changes } : item));
}

function deleteById(items, id) {
  return items.filter(item => item.id !== id);
}

console.log("Початковий масив:");
printCars(initialCars);

const afterCreate = createCar(initialCars, {
  id: "A-004", plate: "AT 3456 EI", brand: "DAF XF", capacity: 20, fuelPer100: 30.8,
});
console.log("\nПісля Create (додано A-004):");
printCars(afterCreate);

const found = readCarById(afterCreate, "A-002");
console.log("\nRead за id A-002:", found);

const heavy = readCarsByMinCapacity(afterCreate, 18);
console.log("\nRead (filter) — вантажність ≥ 18 т:");
printCars(heavy);

const volvo = readCarsByBrand(afterCreate, "volvo");
console.log("\nRead (filter) — марка містить «volvo»:");
printCars(volvo);

const afterUpdate = updateCar(afterCreate, "A-002", { fuelPer100: 33.2, plate: "AT 0001 AA" });
console.log("\nПісля Update (A-002: нова витрата палива і номер):");
printCars(afterUpdate);

const afterDelete = deleteCar(afterUpdate, "A-001");
console.log("\nПісля Delete (видалено A-001):");
printCars(afterDelete);

console.log("\nДодатково — узагальнені updateById / deleteById:");
printCars(deleteById(updateById(afterDelete, "A-003", { capacity: 10 }), "A-004"));

console.log("\nПеревірка незмінності:");
console.log("Довжина initialCars залишилась 3:", initialCars.length === 3);
console.log("A-002 в initialCars не змінився:", initialCars[1].fuelPer100 === 35.0);
console.log("initialCars !== afterCreate:", initialCars !== afterCreate);
console.log("Вихідний масив:");
printCars(initialCars);
