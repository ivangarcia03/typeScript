// Type alias

type Product = {
    title: string;
    price: string;
    quantity: number;
};

const cake = {
    title: 'Chocolate cake',
    price: '25$',
    quantity: 10
};

const ps5 = {
    title: 'ps5',
    price: '399$',
    quantity: 5
}

// Example with interface
interface User {
    id: number;
    name: UserName;
    hobbies: 
}

type UserName = string;
type hobbies = {type: string, name: string}

const user = {
    id: 1,
    name: 'John',
    hobbies: [{type: 'sport', name: 'skiing'}, {type: 'education', name: 'reading'}]
}

// Extending Type alias

type Animal = {
    breed: string, 
}
type Dog = {
    name: string
} & Animal;

const dog: Dog = {
    name: 'Bali',
    breed: 'chihuahua'
}