let moneyBank= parseFloat( prompt("Nhập số tiền gủi"));
let interestRate=parseFloat( prompt("Nhập lãi suất  ngân hàng"));
let years= parseFloat( prompt("Nhập số năm gửi tiết kiệm"));
let totalInterestRate= moneyBank*(interestRate/100)*years;
let totalMoney=moneyBank+totalInterestRate;
document.write("Tiền lãi sau "+years+":"+totalInterestRate);
document.write(`<br/>Tổng số tiền cả gốc và lãi sau ${years} năm ${totalMoney}`);

