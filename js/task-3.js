const images = [
  {
    url:
      "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url:
      "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url:
      "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
const galRef = document.querySelector("#gallery");
images.map(({ url, alt }) => {
  galRef.insertAdjacentHTML(
    "beforeend",
    `<li><img src=${url} alt='${alt}'></li>`
  );
});
galRef.style.width = "1200px";
galRef.style.margin = "10px auto 10px";
galRef.style.display = "flex";
galRef.style.justifyContent = "center";
galRef.style.listStyleType = "none";
const galKidRef = Array.from(galRef.querySelectorAll("img"));
galKidRef.map(({ style }) => {
  Object.assign(style, {
    width: "300px",
    height: "200px",
    objectFit: "cover",
    marginRight: "10px",
  });
});
