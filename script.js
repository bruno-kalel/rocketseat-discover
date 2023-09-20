function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  // if (html.classList.contains("light"))
  // {
  //   img.setAttribute("src", "https://www.github.com/bruno-kalel")
  // } else
  // {
  //   img.setAttribute("src", "https://www.github.com/bruno-kalel")
  // }
}
