// the array contains the object's unique values data == [{a:1},{b:2},{a:1}]
const uniqueArrObjValue = Array.from(new Set(data.map(JSON.stringify))).map(JSON.parse);