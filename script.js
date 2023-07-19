class Person {
  constructor(name, age) {
    this._name = name;
    this._age = age;
  }

  // Getter for name
  get name() {
    return this._name;
  }

  // Setter for age
  set age(newAge) {
    if (typeof newAge === "number" && newAge >= 0) {
      this._age = newAge;
    } else {
      throw new Error("Age must be a non-negative number.");
    }
  }

  // Getter for age
  get age() {
    return this._age;
  }
}

class Student extends Person {
  study() {
    console.log(`${this._name} is studying.`);
  }
}

class Teacher extends Person {
  teach() {
    console.log(`${this._name} is teaching.`);
  }
}

// Example usage:
/*const person1 = new Person("John", 30);
console.log(person1.name); // Output: John
console.log(person1.age); // Output: 30

person1.age = 31;
console.log(person1.age); // Output: 31

const student1 = new Student("Alice", 25);
console.log(student1.name); // Output: Alice
console.log(student1.age); // Output: 25
student1.study(); // Output: Alice is studying.

const teacher1 = new Teacher("Mr. Smith", 40);
console.log(teacher1.name); // Output: Mr. Smith
console.log(teacher1.age); // Output: 40
teacher1.teach(); // Output: Mr. Smith is teaching.
*/