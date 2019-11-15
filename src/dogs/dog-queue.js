const Queue = require('../queue/Queue');
const qHelp = require('../queue/queueHelpers');

const dogQ = {
  dArr: [
    {
      imageURL: 'http://cdn.akc.org/content/article-body-image/newfoundland_dog_pictures.jpg',
      imageDesc: 'big black slobber pup',
      name: 'Archibald Maximus',
      sex: 'M',
      age: 7,
      breed: 'Mixed',
      story: 'Was too darn charming for previous owner. Archibald is looking for a family that can handle all the love he has to offer',
    },
    {
      imageURL: 'http://cdn.akc.org/content/article-body-image/golden_puppy_dog_pictures.jpg',
      imageDesc: 'golden boy doin a pose',
      name: 'Rufio',
      sex: 'M',
      age: 1,
      breed: 'Golden retriever',
      story: 'Rufio was born in the shelter.',
    },
    {
      imageURL: 'http://cdn.akc.org/content/article-body-image/am_staff_dog_pictures.jpg',
      imageDesc: 'American Staffordshire running',
      name: 'Maggie',
      sex: 'F',
      age: 2,
      breed: 'American Staffordshire Terrier',
      story: 'Ex-jewel thief looking to start a new life',
    },
    {
      imageURL: 'http://cdn.akc.org/content/article-body-image/toypoodle_dog_pictures.jpg',
      imageDesc: 'toy poodle chillin',
      name: "Lieutenant Oliver 'Beef' Wellington",
      sex: 'M',
      age: 77,
      breed: 'Toy Poodle',
      story: 'Lieutenant Wellington served admirably in WWII in the 42nd Infantry. He is now looking to explore what else the world has to offer and wants to find a home in America',
    },
    {
      imageURL: 'http://cdn.akc.org/content/article-body-image/keeshond_dog_pictures_2.jpg',
      imageDesc: 'Keeshond in snow',
      name: 'Scarface',
      sex: 'M',
      age: 12,
      breed: 'Keeshond',
      story: 'Say hello to my little friend, Scarface. He has a cocaine problem.',
    },
    {
      imageURL: 'http://cdn.akc.org/content/article-body-image/pwc_dog_pictures_.jpg',
      imageDesc: 'Corgi in the grass',
      name: 'Isabelle',
      sex: 'F',
      age: 3,
      breed: 'Corgi',
      story: 'Isabelle is a quantum puppy. She is both here and there until her position is observed. As such, you will share here with her other family. Expect her half the time.',
    },
  ],

  dQ: new Queue(),

  populateQueue() {
    this.dArr.forEach((dog) => this.dQ.enqueue(dog));
    return this.dQ;
  },

  viewTopDog() {
    return qHelp.peek(this.dQ);
  },

  dogAdopted() {
    const dog = this.dQ.dequeue();
    this.dQ.enqueue(dog);
    return dog;
  },

  // adoptedDogs: new Queue(),

  // addDogtoAdopted(dog) {
  //   this.adoptedDogs.enqueue(dog);
  // },
  // returnRecentDogs() {
  //   let i = 0;
  //   const recentDogs = [];
  //   while (!qHelp.isEmpty(this.adoptedDogs) && i < 3) {
  //     const dog = this.adoptedDogs.dequeue();
  //     recentDogs.push(dog);
  //     this.dQ.enqueue(dog);
  //     i += 1;
  //   }
  //   return recentDogs;
  // },
};

module.exports = dogQ;
