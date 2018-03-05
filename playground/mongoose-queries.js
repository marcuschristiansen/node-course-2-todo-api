const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

var id = '5a9d5efb1ca1b23602424e7b'; 

Todo.find({
    _id: id
}).then((todos) => {
    console.log('Todos ', todos);
});

Todo.findOne({
    _id: id
}).then((todo) => {
    console.log('Todo ', todo);
});

Todo.findById(id).then((todo) => {
    console.log('Todo ', todo);
});