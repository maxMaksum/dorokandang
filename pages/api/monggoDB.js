// const { MongoClient } = require('mongodb');
// // or as an es module:
// // import { MongoClient } from 'mongodb'

// // Connection URL
// const url = 'mongodb://localhost:27017';
// const client = new MongoClient(url);

// // Database Name
// const dbName = 'lasem';

// async function main() {
//   // Use connect method to connect to the server
//   await client.connect();
//   console.log('Connected successfully to server');
//   const db = client.db(dbName);
//   const collection = db.collection('documents');

//   // the following code examples can be pasted here...

//   return 'done.';
// }

// main()
//   .then(console.log)
//   .catch(console.error)
//   .finally(() => client.close());

// Fire Store
   // citiesRef.where('state', '==', 'CA').where('population', '<', 1000000);
    // let myX = []
    // let myY ={}

    // const customerRef = collection(db, "customer")
     // const q = query(collection(db, "customer"), where ("rm", "==", data.rm));

        // const querySnapshot = await getDocs(q);
        // await querySnapshot.forEach((doc)=>{
        //     myY={
        //         id: doc.id,
        //         rm :doc.data().rm,
        //         nama:doc.data().nama,
        //         namakk:doc.data().namakk,
        //         alamat:doc.data().alamat,
        //         rt:doc.data().rt,
        //         rw:doc.data().rw
        //     }

            // myX= [...myX, myY]
            // addUsers([...users,myY])

        // })
        // setUsers(myX)