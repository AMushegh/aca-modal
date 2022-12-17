import axios from "axios";

axios
  .get("https://jsonplaceholder.typicode.com/todos/")
  .then((res) => console.log(res.data));
