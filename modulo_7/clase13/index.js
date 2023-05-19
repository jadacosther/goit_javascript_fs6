const button = document.querySelector(".btn");

const handleClick = (event) => {
  console.log("event: ", event);
  console.log("event type: ", event.type);
  console.log("currentTarget: ", event.currentTarget);
};

button.addEventListener("click", handleClick);