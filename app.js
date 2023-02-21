document.addEventListener('DOMContentLoaded', function() {

  //const imgFile = document.querySelector('#imgFile');
  const imgUrl = document.querySelector('#imgUrl');
  const topText = document.querySelector('#topText');
  const bottomText = document.querySelector('#bottomText');
  const memeDisplay = document.querySelector('#memeDisplay');
  const addMemeBtn = document.querySelector('#addMemeBtn');
  const formObject = document.querySelector('#formObject');

  //let image;

  addMemeBtn.addEventListener("click", (e) => {
    if (document.getElementById('imgUrl').value === ''){
      e.preventDefault();
      alert('Please select an Image URL.');
    } else {
    //const imgDataUrl = URL.createObjectURL(imgUrl.value);

    e.preventDefault();
    addMeme(imgUrl, topText.value,bottomText.value);

    //image = new Image();  //converting imgUrl to htmlImg for later
    //image.src = imgDataUrl; 

    //image.addEventListener('load', () => { 
    //addMeme(imgDataUrl, topText.value,bottomText.value);
    //}, { once: true });
  };
  });

  function addMeme() {
    console.log(imgUrl.value);
    console.log(topText.value);
    console.log(bottomText.value);
    // step 1
    const meme = document.createElement("div");
    meme.className = 'meme';
    document.getElementById('memeDisplay').appendChild(meme);

    // set background image prop to image url
    meme.style.backgroundImage = 'url('+imgUrl.value+')';
    
    
    // step2 a
    // create h4 tag
    const h4 = document.createElement('h4');
    // class top-text top-meme-text
    h4.className = 'top-meme-text';
    // insert top text
    h4.innerText = topText.value;
    // append top text h4 -> meme
    meme.appendChild(h4);

    
    
    // step 2 b
    // create h4 tag
    const h3 = document.createElement('h3');
    // class bottom-text bottom-meme-text
    h3.className = 'bottom-meme-text';
    // insert bottom text
    h3.innerText = bottomText.value;
    // append bottom text h4 -> meme
    meme.appendChild(h3);
  
    formObject.reset();

    // step 3
    // addEventListener for removal
    meme.addEventListener('click', () => {
      meme.remove();
    });

    };
  
    //  OLD FUNCTION //
  //function addMeme() {
    //const canvas = document.createElement('canvas');
    //canvas.id = 'canvasId';

    //document.getElementById('memeDisplay').appendChild(canvas);
    //give canvas background image of imgDataUrl
    //const canvasId = document.getElementById('canvasId');
    //const ctx = canvasId.getContext("2d");
    //const width = image.width;
    //const height = image.height;
    //const fontSize = Math.floor(width / 10);
    //const yOffset = height / 25;

    //canvasId.width = width;
    //canvasId.height = height;
    //ctx.drawImage(image, 0, 0);
    //set text properties
    //ctx.strokeStyle = "black";
    //ctx.lineWidth = Math.floor(fontSize / 3);
    //ctx.fillStyle = 'white';
    //ctx.textAlign = 'center';
    //ctx.lineJoin = 'round';
    //ctx.font = `${fontSize}px sans-serif`;
    //add top text
    //ctx.textBaseline = 'top';
    //ctx.strokeText(topText.value, width / 2, yOffset);
    //ctx.fillText(topText.value, width / 2, yOffset);
    //add bottom text
    //ctx.textBaseline = 'bottom';
    //ctx.strokeText(bottomText.value, width / 2, height - yOffset);
    //ctx.fillText(bottomText.value, width / 2, height - yOffset);
    //formObject.reset();

    //canvas.addEventListener('click', () => {
    //  canvas.remove();
    //});
  //};

});