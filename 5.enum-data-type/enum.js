"use strict";
// enum er bhitor just ek ta value add kora possible: store constants, duplicate value is not allowed here
// 3 types enum data: numeric, string, Heterogeneous
// numeric
var requestType;
(function (requestType) {
    requestType[requestType["ReadData"] = 0] = "ReadData";
    requestType[requestType["SaveData"] = 1] = "SaveData";
    requestType[requestType["DeleteData"] = 2] = "DeleteData";
})(requestType || (requestType = {}));
