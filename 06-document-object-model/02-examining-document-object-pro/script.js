let output;

// document.all is deprecated
output = document.all;
output = document.all[11];
output = document.all.length;

// Tất cả trong thẻ html
output = document.documentElement;

// Thẻ head và body
output = document.head;
output = document.body;

// HTMLCollection của tất cả trong head/body
output = document.head.children;
output = document.body.children;

// Các thuộc tính ngẫu nhiên
output = document.doctype;
output = document.domain;
output = document.URL;
output = document.characterSet;
output = document.contentType;

// Lấy tất cả các form
output = document.forms;
output = document.forms[0];
output = document.forms[0].id;
output = document.forms[0].method;
output = document.forms[0].action;

// Thay đổi id của một form
document.forms[0].id = "new-id";

// Lấy tất cả các liên kết
// output = document.links;
// output = document.links[0];
// output = document.links[0].href;
// output = document.links[0].href = 'https://facebook.com';
// output = document.links[0].id = 'google-link';
// output = document.links[0].className = 'google-class';
// output = document.links[0].classList;

// Lấy tất cả hình ảnh
output = document.images;
output = document.images[0];
output = document.images[0].src;

// Chuyển HTMLCollection thành một mảng
const forms = Array.from(document.forms);
forms.forEach((form) => console.log(form));

console.log(output);
