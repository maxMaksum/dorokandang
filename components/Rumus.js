const asyncTest = async(item)=>{
    const docRef = await addDoc(collection(db, "customer"), {
        rm: item.rm,
        nama: item.nama,
        namakk : item.namakk,
        alamat:item.alamat,
        rt:item.rt,
        rw:item.rw
      });
      console.log("Document written with ID: ", docRef.id);
}

const insertData = async  (x) => {
    x?.forEach(function(item, i) {
       asyncTest(item)
    }); 
}