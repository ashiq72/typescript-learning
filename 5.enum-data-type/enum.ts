// enum er bhitor just ek ta value add kora possible: store constants, duplicate value is not allowed here

// 3 types enum data: numeric, string, Heterogeneous

// numeric
enum RequestType {
  readData,
  saveData,
  deleteData,
}

// console.log(RequestType)

// string
enum RequestType2 {
  readData="readData",
  saveData="saveData",
  deleteData="deleteData",
}

// console.log(RequestType2.readData)

// Heterogeneous
enum RequestType3 {
  readData="readData",
  deleteData="deleteData",
  idvalue=102,
}
 console.log(RequestType3)