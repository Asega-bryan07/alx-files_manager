// import { MongoClient } from 'mongodb';

// const url = 'mongodb://localhost:27017';
// const client = new MongoClient(url);

// // Database name
// const dbName = 'mongoTestDb';

// async function main() {
//     // use connect method to connect to server
//     await client.connect();
//     console.log('Connected successfully to the server');

//     const db = client.db(dbName);
//     const collection = db.collection('documents');

//     // code continuation for crud is put here
//     return 'done.';
// }

// main()
// .then(console.log)
// .catch(console.error)
// .finally(() => client.close());

// Async/await(ES7) from uri
// import imageThumbnail from 'imageThumbnail';

// try {
//     const thumbnail = await imageThumbnail({ uri: 'https://images/dogs.jpg' });
//     console.log(thumbnail);
// } catch  (err) {
//     console.log(err);
// }