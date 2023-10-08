function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/CutPaste_2023-10-04_10-21-56-694.png")
  } else {
    img.setAttribute("src", "./assets/fotoleo.png")
  }
}
