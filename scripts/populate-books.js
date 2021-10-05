// This script can be used to populate fake book data into database/books.json file
// It's only useful for this test. It will clear any existing content in the books.json file
// and populate it with the new fake data
const faker = require('faker');
const fs = require('fs');

const count = process.argv[2] || 100;

console.log(`Populating ${count} books.`);

let books = [];

for (let i = 0; i < count; i++) {
  books.push({
    id: i + 1,
    title: faker.lorem.words(),
    year: faker.datatype.number({ min: 2000, max: 2021 }),
    description: faker.lorem.paragraphs(3, '<br><br>'),
  });
}

fs.writeFileSync('./../database/books.json', JSON.stringify(books));

console.log(`${count} books have been populated to database/books.json file.`);
