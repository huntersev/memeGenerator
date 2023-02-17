document.addEventListener('DOMContentLoaded', function() {

  const imgUrl = document.querySelector('#imgUrl');
  const topText = document.querySelector('#topText')
  const bottomText = document.querySelector('#bottomText');

  const addMemeBtn = document.querySelector('#addMemeBtn');
  addMemeBtn.addEventListener('click', addMeme);

  const memeDisplay = document.querySelector('#memeDisplay')

  function addMeme(){
    //if(){ ALL PARAMETERS ARE GOOD
    const meme = document.createElement('canvas');
    //meme.setAttribute('',); CANVAS BACKGROUND
    //meme.setAttribute('',); CANVAS TOP TEXT
    //meme.setAttribute('',); CANVAS BOTTOM TEXT
    //store in object array?
    memeDisplay.appendChild(meme);
    //reset inputs to default value
    //}

    //else(){ ALL PARAMETERS ARE NOT GOOD
    //alert('There was a problem with your input');
    //}
  }

})