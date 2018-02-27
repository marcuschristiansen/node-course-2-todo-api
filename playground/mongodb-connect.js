// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to database server.');
    }

    console.log('Connected to Database server.');
    const db = client.db('TodoApp');

    db.collection('Todos').insertOne({
        text: 'This is a to do task',
        completed: false
    }, (err, result) => {
        if (err) {
            return console.log('Unable to insert todo', err);
        }

        console.log(JSON.stringify(result.ops[0]._id, undefined, 2));
    });

    client.close();
});