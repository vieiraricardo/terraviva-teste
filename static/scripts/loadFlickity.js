window.onload = function loadFlickity() {
  console.log("load function")
  if (window.Flickity && document.querySelector(".main-gallery")) {
    const Flickity = window.Flickity
    console.log("load flickity")

    new Flickity(".main-gallery", {
      cellAlign: "left",
      contain: true,
      pageDots: false,
      autoPlay: 3000,
      lazyLoad: true,
    })
  }
}
