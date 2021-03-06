const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/exampleApp');

const Cat = mongoose.model('Cat', {
  name: String
});

const Dog = mongoose.model('Dog', {
  name: String
});

const puppy = new Dog({
  name: 'Puppers'
});

puppy.save((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('woof');
  }
});

// const kitty = new Cat({
//   name: 'Ironhacker'
// });
// kitty.save((err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('meow');
//   }
// });
console.log('All the CATS!');

Cat.find({}, (err, cats) => {
  // cats is an array of Cat instances
  cats.forEach((cat) => {
    console.log(' --> cat: ', cat.name);
  });
});