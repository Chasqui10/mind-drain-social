const connection = require('../config/connection');
const { Thought, User } = require('../models');
const { getRandomUserName, getRandomReaction } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
  console.log('connected');
    // Delete the collections if they exist
    let thoughtCheck = await connection.db.listCollections({ name: 'thoughts' }).toArray();
    if (thoughtCheck.length) {
      await connection.dropCollection('thought');
    }

    let usersCheck = await connection.db.listCollections({ name: 'users' }).toArray();
    if (usersCheck.length) {
      await connection.dropCollection('users');
    }


  // Create empty array to hold the users
  const users = [];

  // Loop 20 times -- add Users to the users array
  for (let i = 0; i < 20; i++) {
    // Get some random reaction
    const reaction = getRandomReaction(20);

    const name = getRandomUserName();


    users.push({
      name,
      reaction,
    });
  }

  // Add username to the collection and await the results
  await User.collection.insertMany(users);

  // Add thoughts to the collection and await the results
  await Thought.collection.insertOne({
    users: [...users],
  });

  // Log out the seed data to indicate what should appear in the database
  console.table(users);
  console.info('Seeding complete! 🌱');
  process.exit(0);
});

module.exports = { getRandomReaction, getRandomUserName };