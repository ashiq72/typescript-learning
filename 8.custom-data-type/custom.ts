let userInfo: User[]; 
userInfo= [] ;

type User = {nameName: string, userId: number}

let user3: User;
user3 = {nameName: "Anisul", userId: 101};
userInfo.push(user3)

let user4: User;
user4 = {nameName: "Anisul", userId: 101};
userInfo.push(user4)

// console.log(userInfo);


type RequestTypes = "GET" | "POST";
let getRequest: RequestTypes;
getRequest = "GET";

function RequestHandler(requestTypes: RequestTypes ){
    console.log(requestTypes)
}

RequestHandler("GET");