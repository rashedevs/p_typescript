//enumeration (enum)- duplicate value is not allowed
// types - numeric, string, hetterogeneous(mixed)

// 1. numeric type
enum RequestType {
    GET=1,
    POST=3,
    PUT,
    DELETE
}
// console.log(RequestType);
// console.log(RequestType.GET);
// console.log(RequestType["GET"]);


// 2. string type
enum RequestTypeString{
    GET="GET-Data",
    POST="POST-Data",
    PUT="PUT-Data",
    DELETE="DELETE-Data"
}
// console.log(RequestTypeString.GET);
// console.log(RequestTypeString["GET"]);

// 3. hetterogeneous type

enum RequestTypeMixed {
    GET="GET-Data",
    POST="POST-Data",
    API_KEY=123
}
console.log(RequestTypeMixed.GET);
console.log(RequestTypeMixed["API_KEY"]);