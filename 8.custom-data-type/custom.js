"use strict";
let userInfo;
userInfo = [];
let user3;
user3 = { nameName: "Anisul", userId: 101 };
userInfo.push(user3);
let user4;
user4 = { nameName: "Anisul", userId: 101 };
userInfo.push(user4);
let getRequest;
getRequest = "GET";
function RequestHandler(requestTypes) {
    console.log(requestTypes);
}
RequestHandler("GET");
