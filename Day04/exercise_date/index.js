let day = prompt("Nhập ngày(Từ 01-31) ");
let month = prompt("Nhập tháng(Từ 01-12)");
let year = prompt("Nhập năm");
if ((day <= 31 && day >= 1) && (month >= 1 && month <= 12)) {
    document.write("Ngày tháng:" + day + "-" + month + "-" + year);
}
else {
    document.write("Ngày tháng không hợp lệ");
}