type Something = string | number;
const named = (amazing: Something) => {
  if (typeof amazing === "string") {
    return amazing.length;
  } else if (typeof amazing === "number") {
    return amazing * amazing;
  }
};
named("Abdullah");

interface Person {
  address?: {
    city?: string;
    street?: string;
  };
  phone?: string;
}

const Rifat: Person = {
  address: {
    city: "Chandpur",
    street: "Zoor Pukur Paar",
  },
  phone: "01000669542",
};

function getAddressCity(person: Person): string | undefined {
  return person.address?.city;
}
getAddressCity(Rifat);

const mixedData: (number | string)[] = [
  "seeds",
  "30",
  "nuts",
  "3",
  2,
  "salads",
];

function sumNums(mixedData: (number | string)[]): number {
  let total = 0;
  mixedData.forEach((data) => {
    if (typeof data === "number") {
      total = total + data;
    } else if (!isNaN(Number(data))) {
      total = total + Number(data);
    }
  });
  return total;
}
sumNums(mixedData);

interface Car {
  make: string;
  model: string;
  year: number;
}
interface Driver {
  name: string;
  licenseNumber: string;
}
const carInfo: Car = { make: "Toyota", model: "Murry", year: 2021 };
const driverInfo: Driver = { name: "Rifat ", licenseNumber: "123rft" };

function combineBothCarDriver(
  car: Car,
  driver: Driver
): { car: Car; driver: Driver } {
  return { car, driver };
}
combineBothCarDriver(carInfo, driverInfo);

interface Product {
  name: string;
  price: number;
  quantity: number;
}
const product1: Product[] = [
  { name: "seeds", price: 390, quantity: 2 },
  { name: "nuts", price: 620, quantity: 3 },
];

function totalPrice(product: Product[]): number {
  return product.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0
  );
}
totalPrice(product1);
const numArray: Array<number> = [23, 45, 12, 20];
const strArray: Array<string> = ["A", "B", "C", "D"];
function findFirstOccurrence<T>(array: T[], value: T): number {
  const index = array.indexOf(value);
  return index !== -1 ? index : -1;
}
const indexInNumber = findFirstOccurrence(numArray, 48);
const indexInString = findFirstOccurrence(strArray, "A");
const arr1 = [40, 5, 6, 7, 8];
const arr2 = [12, "a", "b", 6, "c", 9];
function calcSum(value: unknown): any {
  if (
    Array.isArray(value) &&
    value.every((isNumber) => typeof isNumber === "number")
  ) {
    const sum = value.reduce((acc, isNumber) => acc + isNumber, 0);
    console.log("Sum of Numbers are : ", sum);
  } else {
    console.log("Parameter is not an array of numbers");
  }
}
calcSum(arr1);
calcSum(arr2);

//
