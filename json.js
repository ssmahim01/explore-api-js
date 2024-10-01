/* Usage of stringify() and parse() method */

const user = {id: 1, name: 'Mahim', job: 'Tutor'};
console.log(user);

const shop = {
    owner: 'Mahim',
    address: {
        street: 'Shaplabag, Tilagor',
        city: 'Sylhet',
        Country: 'Bangladesh',
    },
    products: ['Laptop', 'Mouse', 'Keyboard', 'Monitor'],
    revenue: 50000,
    isOpen: true,
    isNew: false,
};

console.log(shop);

const convertJSON = JSON.stringify(shop);

console.log(convertJSON);

const convertObj = JSON.parse(convertJSON);
console.log(convertObj);