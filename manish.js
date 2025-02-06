function showMore() {
  let extraContent = document.getElementById("extra-content");
  if (extraContent.classList.contains("hidden")) {
      extraContent.classList.remove("hidden");
  } else {
      extraContent.classList.add("hidden");
    }
}