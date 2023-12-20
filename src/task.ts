{
  //
  type Something = string | number;
  const named = (amazing: Something) => {
    if (typeof amazing === "string") {
      return amazing.length;
    } else if (typeof amazing === "number") {
      return amazing * amazing;
    }
  };
  named("Abdullah");
  // console.log(named("Abdullah"));

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
  // console.log(getAddressCity(Rifat));

  const mixedData: (number | string)[] = [
    "seeds",
    84,
    "nuts",
    23,
    "salads",
    67,
  ];

  function sumNums(mixedData: (number | string)[]): number {
    let total = 0;
    mixedData.forEach((data) => {
      if (typeof data === "number") {
        total = total + data;
      }
    });
    return total;
  }
  sumNums(mixedData);
  // console.log(sumNums(mixedData));

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
  // console.log(combineBothCarDriver(carInfo, driverInfo));

  //
}
