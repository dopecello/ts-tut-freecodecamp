function provideId(id: string | null) {
  if (!id) {
    console.log('Please provide ID');
    return;
  }
  id.toLocaleLowerCase();
}

// DONT DO THIS!

function printAll(strs: string | string[] | null) {
  if (strs) {
    if (typeof strs === 'object') {
      for (const s of strs) {
        console.log(s);
      }
    } else if (typeof strs === 'string') {
      console.log(strs);
    }
  }
} //we havent accounted for empty string. edge case but bad for business

// ALTERNATIVE

function printThem(strs: string | string[] | null) {
  if (strs !== null) {
    //null is checked
    if (typeof strs == 'object') {
      for (const s of strs) {
        console.log(s); //this is a string array
      }
    } else if (typeof strs === 'string') {
      console.log(strs); //strs is a string
    }
  }
}
// this works with looser equality checks like != and ==

interface User {
  name: string;
  email: string;
}

interface Admin {
  name: string;
  email: string;
  isAdmin: boolean;
}

function isAdmin(account: User | Admin) {
  if ('isAdmin' in account) {
    // this verifies if this property exist in our parameter.
    return account.isAdmin;
  }
}

function logValue(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toUTCString());
  } else {
    console.log(x.toUpperCase());
  }
} //this is useful if x was an instance of createing a new Date()

type Fish = { swim: () => void };
type Bird = { fly: () => void };

// function isFish(pet: Fish | Bird) {
//   return (pet as Fish).swim !== undefined;
// } .... just like this, the type is a union type acting like a boolean, which is not what we want

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

function getFood(pet: Fish | Bird) {
  if (isFish(pet)) {
    pet; // <==== now we are GUARANTEED to get a Fish in this part of the conditional.
    return 'fish food';
  } else {
    pet;
    return 'bird food';
  }
}

// DISCRIMINATED UNIONS
interface Circle {
  kind: 'circle';
  radius: number;
}
/// this is kind of a hack-y way of doing this
interface Square {
  kind: 'square';
  side: number;
}

interface Rectangle {
  kind: 'rectangle';
  length: number;
  width: number;
}

type Shape = Circle | Square;

function getTrueShape(shape: Shape) {
  if (shape.kind === 'circle') {
    return Math.PI * shape.radius ** 2;
  }
  return shape.side ** 2;
}

function getArea(shape: Shape) {
  switch (shape.kind) {
    case 'circle':
      return Math.PI * shape.radius ** 2;
    case 'square':
      return shape.side ** 2;
    default:
      const _exhaustiveCheck: never = shape;
      return _exhaustiveCheck; // if I threw in Rectangle to the Shape type, _exhaustiveCheck would throw an error along the lines of: "type 'never' cant be assigned to type 'Trinagle'"
  }
}
