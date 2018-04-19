// Object Destructuring 

const person = {
	  name: "Ryan",
    age: 29,
    location: {
  	  city: "Madison",
      temp: 22
    }
}

const { name = 'Tim', age } = person; // can set defaults if name property doesn't exist on person object

const { city, temp: temperature } = person.location // also an object, can rename 

const book = {
	  title: 'Some title',
    author: 'Who cares',
    publisher: {
  	    name: 'Penguin'
    }
}

const { name: publisherName = 'Unknown' } = book.publisher;

console.log(publisherName);


// Destructuring 

const address = ['141 N. Franklin', 'Madison', 'WI', '53703'];

const [street, city, state, zip] = address;

console.log(street);

const menu = ['Coffee', '$2', '$2.50', '$3.00'];

const [ hotCoffee, ,price] = menu; 

console.log(`A medium ${hotCoffee} costs ${price}`);