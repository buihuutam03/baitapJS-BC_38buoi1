// Bài 1
// Input:lương 1 ngày
// Process:
//     1:lương 1 ngày=100000; số ngày làm=28 ngày
//     2:công thức: lương 1 ngày* số ngày làm
//     3:in kết quả
// Output:Tiền lương
var WorkingDay = 28;
var SalaryPerDay = 100000;
var TotalSalary = SalaryPerDay * WorkingDay
console.log("Lương:" + TotalSalary)


// Bài 2
// Input: cho 5 số thực 
// Process:
//     1:cho 5 số thực a b c d e 
//     2 công thức: (a+b+c+d+e)/5
//     3:in kết quả:
// Output:giá trị trung bình 5 số thực
var a = 1;
var b = 2;
var c = 3;
var d = 4;
var e = 5;
var Average = ( a + b + c + d + e)/5;
console.log("Giá trị trung bình: "+ Average);

// Bài 3:
// Input:giá 1 usd =23.500vnd
// Process:
//     1: 1 USD=23500 vnd, số USD cần qui đổi = 5 USD
//     2: công thức: Quality * 23500
//     3:in kết quả
// output: USD sau qui đổi
var Usd = 23500;
var QualityUsd = 5;
var VndMoney = Usd * QualityUsd;
console.log("Giá USD sau qui đổi thành tiền Việt:" + VndMoney);

// Bài 4:
// Input:Cho chiều dài;  chiều rộng; 
// Process: 
//     1:cho chiều dài = 10cm; chiều rông = 15cm;
//     2:công thuc tinh dien tich = cdai * crong ; cong thuc tinh chu vi HCN = (cdai+crong)*2
//     3:in kết quả diện tích , chu vi
// Output: Diện tích, chu vi
var width = 10;
var height = 15;
var AreOfARectangle = width * height;
var PreimeterOfARectangle = (width + height)*2
console.log( "Diện tích:"+ AreOfARectangle)
console.log( "Chu vi:" + PreimeterOfARectangle)

// Bài 5
// Input: cho 1 số có 2 chữ số;
// Process: 
//     1: cho số n = 29
//     2: num1 = n %10;
//         num2 = Math.floor(n/10);
//     Công thức: num1 + num 2;
//     3 in kết quả
// Output: tổng 2 chữ số của 1 số;
var n = 29;
var num1 = n % 10;
var num2 = Math.floor(n/10);
var sum2number = num1 + num2;
console.log(sum2number);