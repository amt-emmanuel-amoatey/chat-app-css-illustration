const messages = document.getElementsByClassName("msg");
for (let i = 0; messages.length > i; i++) {
  setTimeout(() => messages[i].classList.add("show"), i * 1000);
}
