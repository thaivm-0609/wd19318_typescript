//cú pháp khai báo:var/let/const tenBien:kiểuDữLiệu = value;
//1. Kiểu dữ liệu cơ bản: Number/String/Boolean
//1.1. Number:
var a:number = 10;

//1.2. String:
//' ': single quote
//" ": double quote
//` `: back tick
var chuoi:string = "A đã nói \"xyz\"";
var gia:string = `Giá trị của a là ${a}`;
console.log(chuoi,gia);

//1.3. Boolean
var isValid:boolean = true;

//2.1. Object
var testObject:{ //khai báo kiểu dữ liệu object + các thuộc tính bên trong object
    //tenThuocTinh: kieuDuLieu (KHÔNG ĐƯỢC BỎ TRỐNG)
    //tenThuocTinh?: kieuDuLieu (KHÔNG CÓ CŨNG ĐƯỢC/OPTIONAL)
    name:string,
    age:number,
    status?:boolean,
} = {
    name: 'thaivm2',
    age: 100,
    status: false
}

//2.2. Array: 
//C1: sử dụng []: tenMang:kieuDuLieuCuaCacPhanTu[] = [item1, item2, ...]
var testArray1:number[] = [1,2,3,4,5,6];
//C2: tenMang:Array<kieuDuLieuCuaCacPhanTu> = [] => angle-bracket
var testArray2:Array<string> = ['1','2'];

//2.3. Tuple (mới trong typescript) => xác định số lượng phần tử trong mảng
// tenMang:[kieuDuLieuPhanTu1,kieuDuLieuPhanTu2, ...] = []
var testTuple:[number,boolean,string] = [1,true,'string'];

//2.4. Union: có thể có nhiều kiểu dữ liệu hợp lệ
//var/let/const tenBien:kieuDuLieu1|kieuDuLieu2|...|kieuDuLieuN = value;
var testUnion:boolean|string = true;
//kết hợp union vs array để tạo ra 1 mảng mà các phần tử có kiểu dữ liệu khác nhau
//và không cần xác định rõ số lượng, thứ tự của phần tử
//C1: []
var testUnionArray1:(number|boolean)[] = [];
//C2: <>
var testUnionArray2:Array<number|string> = [];

//2.5. Any: thiết lập kiểu dữ liệu bất kỳ đều được (số/chuỗi/boolean/object/array)
var testAny:any = [];

//2.6. Enum: tập hợp các giá trị có sẵn
//enum tenBien {Value1, Value2, Value3} 
//truy suất giá trị enum: tenBien.tenValue;
enum Role {Admin, Staff, User};
enum Gender {Male, Female};

//Ép kiểu:
var input:any = '123456789';//B1: ép kiểu về string => B2: dùng .length để đếm số ký tự ở trong chuỗi
//C1: <kieuDuLieuMuonEp>tenBien (angle-bracket): 
var count1:number = (<string>input).length;
//C2: sử khóa as: (tenBien as kieuDuLieu)
var count2:number = (input as string).length;