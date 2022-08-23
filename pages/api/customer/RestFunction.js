


// const postHandler = async (req, res) => {
//   await  connectDB()
//   const {rm, nama, namakk, alamat} = req.body
//   let namare = new RegExp("^"+ nama );
//   let namakkre = new RegExp(namakk);
//   let rmre = new RegExp("^"+ rm);
//   let alamatre = new RegExp("^"+ alamat);

//     const LIMIT = 5
//     if(nama){
//       const products = await Cusomer.find(
//         {nama : { $regex: namare, $options: 'i' }
//       })
//       .limit(LIMIT)
//       .sort({rm: 1}) // -1 for descending sort
//       console.log(products)
//       // await db.disconnect()
//       res.status(200).json({ products})}
//       if(rmre){
//           console.log(rmre)
//           const products = await Cusomer.find({rm : { $regex: rmre, $options: 'i' }})
//           // .limit(LIMIT)
//           // .sort({rm: 1}) // -1 for descending sort
//           console.log(products)
//           // await db.disconnect()
//           res.status(200).json({ products})
//       }
      
//       if(namakk){
//         const products = await Cusomer.find({namakk : { $regex: namakkre, $options: 'i' }})
//           .limit(LIMIT)
//           .sort({rm: 1}) // -1 for descending sort
//           console.log(products)
//           res.status(200).json({ products})}
//   };
  
//   const putHandler = async (req, res)=>{
//    await  connectDB()
//     const {rm, nama, namakk, alamat, rt, rw} = req.body
//     const newProduct = await new Cusomer(
//       {
//         _id: new Types.ObjectId(), 
//         rm: rm, 
//         nama: nama,
//         namakk: namakk ,    
//         alamat: alamat,
//         rt:rt ,    
//         rw: rw,    }
      
//       )
//     const product = await newProduct.save()
//     console.log(product)
   
  
//     res.status(200).json({product : product})
//   }
  