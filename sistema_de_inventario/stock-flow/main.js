items = [];

document.addEventListener("product-submit", (event) => {
  const item = event.detail;
  items.push(item);
  localStorage.setItem("items", JSON.stringify(items));
});

const url_base = "https://stock-flow-74480-default-rtdb.firebaseio.com/"
const user = {
  name: "steven",
  username: "stiven12",
  password: "123ab"
}
const httpcliente = fetch(`${url_base}/user.json`,{
  method: "post",
  headers:{
    "content-Type": "application/json"
  },
  body: JSON.stringify(user)
});
const res = httpcliente.then(data => data.JSON());
res.then(data => console.log).catch(err => console.error)