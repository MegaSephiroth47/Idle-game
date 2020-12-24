export {loadImage};

const canvas = document.getElementById('BigCoin');
const context = canvas.getContext("2d");

function loadImage(url){
  return new Promise(resolve => {
    const image = new Image();
    image.addEventListener("load", () => {
      resolve(image);
    });
    image.src = url;
  });
}

loadImage("/images/MS47.png")
.then(image => {
  context.drawImage(image, 0, 0, 300, 300);
});
