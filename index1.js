// const h1 = document.createElement("h1");
const body = document.getElementsByTagName("body")[0];
// h1.innerText = "hello world";
// h1.classList.add("title");
// h1.classList.add("red");
// h1.className = "title"; =====
// body.appendChild(h1);
console.log(body, "body");
// console.log(h1, "h1");

const img = document.createElement("img");
img.src =
  "https://cdn1.unegui.mn/media/cache1/e8/3c/e83cbd5ffcd0b46a0e03c3d39f624b7a.webp";
img.classList.add("picture");
body.appendChild(img);
const h6 = document.createElement("h6");
h6.innerText = "3 сая ₮";
h6.classList.add("price");
body.appendChild(h6);
const p = document.createElement("p");
p.innerText = "Nissan Presage, 2000/2018";
p.classList.add("title");
body.appendChild(p);
const div1 = document.createElement("div");
div1.innerText =
  "190000 km . Auto . 2.4 L . Petrol . 5 min ago | UB - Soginokhairkhan, 21st khoroolol";
div1.classList.add("desc1");
body.appendChild(div1);

// console.log(h6, "h6");

const img1 = document.createElement("img");
img1.src =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo79lz_r-q-et_8lf4BPAIrh338wdZNZ3sXw&s";
img1.classList.add("picture1");
body.appendChild(img1);
