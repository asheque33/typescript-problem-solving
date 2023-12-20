{
  // problem-01
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
      city: string;
      street: string;
    };
    phone?: string;
  }

  const person: Person = {
    address: {
      city: "Chandpur",
      street: "Zoor Pukur Paar",
    },
    phone: "01000669542",
  };

  function getAddressCity(obj: Person) {
    const requiredCity = person?.address?.city;
  }
  // getAddressCity();
  //   console.log(person?.address?.city);

  //
}
