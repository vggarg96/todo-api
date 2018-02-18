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
    // db.collection('Todos').find().count().then((count)=>{
    //     console.log(`Todos count:${count}`);
    //     },(err)=>{
    //     console.log('unable to fetch the documents',err);
    // });
    db.collection('User').find({Name: 'vg'}).toArray().then((docs)=>{
        console.log(JSON.stringify(docs,undefined,2));
        });
    client.close();
});