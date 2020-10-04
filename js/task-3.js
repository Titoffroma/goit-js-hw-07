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

let imgToInsert = images.reduce((acc, { url, alt }) => {
  return (acc += `<li><img src=${url} alt='${alt}'></li>`);
}, "");

galRef.insertAdjacentHTML("beforeend", imgToInsert);

Object.assign(galRef.style, {
  width: "1200px",
  margin: "10px auto 10px",
  display: "flex",
  justifyContent: "center",
  listStyleType: "none",
});

Array.from(galRef.querySelectorAll("img")).map(({ style }) => {
  Object.assign(style, {
    width: "300px",
    height: "200px",
    objectFit: "cover",
    marginRight: "10px",
  });
});
