//enumeration (enum)- duplicate value is not allowed
// types - numeric, string, hetterogeneous(mixed)
// 1. numeric type
var RequestType;
(function (RequestType) {
    RequestType[RequestType["GET"] = 1] = "GET";
    RequestType[RequestType["POST"] = 3] = "POST";
    RequestType[RequestType["PUT"] = 4] = "PUT";
    RequestType[RequestType["DELETE"] = 5] = "DELETE";
})(RequestType || (RequestType = {}));
// console.log(RequestType);
// console.log(RequestType.GET);
// console.log(RequestType["GET"]);
// 2. string type
var RequestTypeString;
(function (RequestTypeString) {
    RequestTypeString["GET"] = "GET-Data";
    RequestTypeString["POST"] = "POST-Data";
    RequestTypeString["PUT"] = "PUT-Data";
    RequestTypeString["DELETE"] = "DELETE-Data";
})(RequestTypeString || (RequestTypeString = {}));
// console.log(RequestTypeString.GET);
// console.log(RequestTypeString["GET"]);
// 3. hetterogeneous type
var RequestTypeMixed;
(function (RequestTypeMixed) {
    RequestTypeMixed["GET"] = "GET-Data";
    RequestTypeMixed["POST"] = "POST-Data";
    RequestTypeMixed[RequestTypeMixed["API_KEY"] = 123] = "API_KEY";
})(RequestTypeMixed || (RequestTypeMixed = {}));
console.log(RequestTypeMixed.GET);
console.log(RequestTypeMixed["API_KEY"]);
