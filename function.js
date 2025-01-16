"use strict";
//:void: hàm không return
//:type: kiểu dữ liệu mà hàm trả về
//khai báo hàm
//Tham số tùy chọn: param?:type: truyền vào cũng được, không truyền vào cũng được
//Nếu tham số đầu tiên là tham số tùy chọn 
//=> khi gọi hàm phải truyền tham số undefined lên cho tham số đó
function tinhTong(a, b) {
    if (b) {
        return a + b;
    }
    return a;
}
console.log(tinhTong(1));
//Tham số mặc định: param:type=value; 
//khai báo giá trị mặc định của tham số
//nếu không có giá trị truyền vào => lấy giá trị mặc định
//nếu có giá trị truyền vào => lấy giá trị truyền vào
const tinhTich = (x, y = 5) => {
    console.log(x * y);
};
//gọi hàm/thực thi hàm
tinhTich(1);
