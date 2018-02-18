// \programfiles\mongodb\server\3.4\bin\mongod.exe
// mongod.exe --dbpath \Users\larauser\mongo-data
// \programfiles\mongodb\server\3.4\bin\mongo.exe


// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');
// var obj=new ObjectID();
// console.log(obj);

// {destructing
    // var user = {name:'vg',age:21};
// var {name} = user;
// console.log(name);}

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
    if(err){
        return console.log('unable to connect to mongodb server');
    }
    console.log('connected to mongodb server');
    
    const db = client.db('TodoApp');
    // db.collection('Todos').insertOne({
    //     text:'something to do',
    //     completed: false
    // },(err,result)=>{
    //     if(err){
    //         return('unable to insert todo', err);
    //     }
    //     console.log(JSON.stringify(result.ops,undefined,2));
    // });

    // db.collection('User').insertOne({
    //     Name:'vg',
    //     age: 21,
    //     location:'gwalior'
    // },(err,result)=>{
    //     if(err){
    //         return('unable to insert todo', err);
    //     }
    //     console.log(JSON.stringify(result.ops[0]._id.getTimestamp(),undefined,2));
    // });
    client.close();
});