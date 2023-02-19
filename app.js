document.addEventListener('DOMContentLoaded', function() {

  const imgFile = document.querySelector('#imgFile');
  const topText = document.querySelector('#topText')
  const bottomText = document.querySelector('#bottomText');
  const memeDisplay = document.querySelector('#memeDisplay')
  const addMemeBtn = document.querySelector('#addMemeBtn');
  const formObject = document.querySelector('#formObject');

  let image;

  addMemeBtn.addEventListener("click", (e) => {
    if (document.getElementById('imgFile').value === ''){
      e.preventDefault();
      alert('Please select an Image.');
    }

    else {
    const imgDataUrl = URL.createObjectURL(imgFile.files[0]);

    e.preventDefault();

    image = new Image();  //converting imgUrl to htmlImg for later
    image.src = imgDataUrl; 

    image.addEventListener('load', () => { //once image is loaded, run addMeme funct
      addMeme(image, topText.value,bottomText.value);

    }, { once: true });
  };
  });
  
  function addMeme() {
    const canvas = document.createElement('canvas');
    canvas.id = 'canvasId';

    document.getElementById('memeDisplay').appendChild(canvas);
    //give canvas background image of imgDataUrl
    const canvasId = document.getElementById('canvasId');
    const ctx = canvasId.getContext("2d");
    const width = image.width;
    const height = image.height;
    const fontSize = Math.floor(width / 10);
    const yOffset = height / 25;

    canvasId.width = width;
    canvasId.height = height;
    ctx.drawImage(image, 0, 0);
    //set text properties
    ctx.strokeStyle = "black";
    ctx.lineWidth = Math.floor(fontSize / 3);
    ctx.fillStyle = 'white';
    ctx.textAlign = 'center';
    ctx.lineJoin = 'round';
    ctx.font = `${fontSize}px sans-serif`;
    //add top text
    ctx.textBaseline = 'top';
    ctx.strokeText(topText.value, width / 2, yOffset);
    ctx.fillText(topText.value, width / 2, yOffset);
    //add bottom text
    ctx.textBaseline = 'bottom';
    ctx.strokeText(bottomText.value, width / 2, height - yOffset);
    ctx.fillText(bottomText.value, width / 2, height - yOffset);
    formObject.reset();
  };

})