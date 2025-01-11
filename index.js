//cú pháp khai báo:var/let/const tenBien:kiểuDữLiệu = value;
//1. Kiểu dữ liệu cơ bản: Number/String/Boolean
//1.1. Number:
var a = 10;
//1.2. String:
//' ': single quote
//" ": double quote
//` `: back tick
var chuoi = "A đã nói \"xyz\"";
var gia = "Gi\u00E1 tr\u1ECB c\u1EE7a a l\u00E0 ".concat(a);
console.log(chuoi, gia);
//1.3. Boolean
var isValid = true;
//2.1. Object
var testObject = {
    name: 'thaivm2',
    age: 100,
    status: false
};
//2.2. Array: 
//C1: sử dụng []: tenMang:kieuDuLieuCuaCacPhanTu[] = [item1, item2, ...]
var testArray1 = [1, 2, 3, 4, 5, 6];
//C2: tenMang:Array<kieuDuLieuCuaCacPhanTu> = [] => angle-bracket
var testArray2 = ['1', '2'];
//2.3. Tuple (mới trong typescript) => xác định số lượng phần tử trong mảng
// tenMang:[kieuDuLieuPhanTu1,kieuDuLieuPhanTu2, ...] = []
var testTuple = [1, true, 'string'];
//2.4. Union: có thể có nhiều kiểu dữ liệu hợp lệ
//var/let/const tenBien:kieuDuLieu1|kieuDuLieu2|...|kieuDuLieuN = value;
var testUnion = true;
//kết hợp union vs array để tạo ra 1 mảng mà các phần tử có kiểu dữ liệu khác nhau
//và không cần xác định rõ số lượng, thứ tự của phần tử
//C1: []
var testUnionArray1 = [];
//C2: <>
var testUnionArray2 = [];
//2.5. Any: thiết lập kiểu dữ liệu bất kỳ đều được (số/chuỗi/boolean/object/array)
var testAny = [];
//2.6. Enum: tập hợp các giá trị có sẵn
//enum tenBien {Value1, Value2, Value3} 
//truy suất giá trị enum: tenBien.tenValue;
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["Staff"] = 1] = "Staff";
    Role[Role["User"] = 2] = "User";
})(Role || (Role = {}));
;
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(Gender || (Gender = {}));
;
//Ép kiểu:
var input = '123456789';
console.log(input.length);
