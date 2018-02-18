const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client)=>{
    if(err){
        return console.log('unable to connect to mongodb server');
    }
    console.log('connected to mongodb server');
    
    const db = client.db('TodoApp');
//    deletemany
    // db.collection('Todos').deleteMany({text:"something to do"}).then((result)=>{
    //     console.log(result);
    // });
    //  deleteone
    // db.collection('Todos').deleteOne({text:'walk to the end'}).then((result)=>{
    //     console.log(result);
    // });

    // findoneanddelete
    // db.collection('Todos').findOneAndDelete({completed:false}).then((result)=>{
    // //     console.log(result);
    // db.collection('User').deleteMany({name:'vg'}).then((res)=>{
    //     console.log(res);
    // });
    db.collection('User').findOneAndDelete({
    _id:new ObjectID("5a8723fe2fa6d6d13cee5fb9")}).then((res)=>{
console.log(JSON.stringify(res,undefined,2));
    });
    client.close();
});