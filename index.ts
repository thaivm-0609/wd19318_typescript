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
    //tenThuocTinh: kieuDuLieu
    name:string,
    age:number,
    hocLai:boolean,
} = {
    name: 'thaivm2',
    age: 100,
    hocLai:false
}

//2.2. Array
