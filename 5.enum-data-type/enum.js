"use strict";
// enum er bhitor just ek ta value add kora possible: store constants, duplicate value is not allowed here
// 3 types enum data: numeric, string, Heterogeneous
// numeric
var RequestType;
(function (RequestType) {
    RequestType[RequestType["readData"] = 0] = "readData";
    RequestType[RequestType["saveData"] = 1] = "saveData";
    RequestType[RequestType["deleteData"] = 2] = "deleteData";
})(RequestType || (RequestType = {}));
// console.log(RequestType)
// string
var RequestType2;
(function (RequestType2) {
    RequestType2["readData"] = "readData";
    RequestType2["saveData"] = "saveData";
    RequestType2["deleteData"] = "deleteData";
})(RequestType2 || (RequestType2 = {}));
// console.log(RequestType2.readData)
// Heterogeneous
var RequestType3;
(function (RequestType3) {
    RequestType3["readData"] = "readData";
    RequestType3["deleteData"] = "deleteData";
    RequestType3[RequestType3["idvalue"] = 102] = "idvalue";
})(RequestType3 || (RequestType3 = {}));
console.log(RequestType3);
