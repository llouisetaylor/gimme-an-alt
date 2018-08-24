const styles = `
  img:not([alt]) {
    filter: grayscale(100%) !important;
  }

  .speech-bubble__text {
    margin: 20px 10px !important;
    font-size: 20px !important;
    color: black !important;
    font-weight: normal !important;
    line-height: 1 !important;
    white-space: normal !important;
  }

  .speech-bubble {
    margin-left: 43px;
    margin-top: -21px;
    text-align: center;
    position: absolute;
    z-index: 9999999999999999999;
    width: 155px;
    padding: 0px;
    background: #FFFFFF;
    -webkit-border-radius: 34px;
    -moz-border-radius: 34px;
    border-radius: 34px;
    border: #000000 solid 5px;
  }

  .speech-bubble:after {
    content: '';
    position: absolute;
    border-style: solid;
    border-width: 15px 35px 15px 0;
    border-color: transparent #FFFFFF;
    display: block;
    width: 0;
    z-index: 1;
    left: -34px;
    top: 25px;
  }

  .speech-bubble:before {
    content: '';
    position: absolute;
    border-style: solid;
    border-width: 19px 39px 19px 0;
    border-color: transparent #000000;
    display: block;
    width: 0;
    z-index: 0;
    left: -43px;
    top: 21px;
  }
`;

// Create style tag
const css = document.createElement('style');
css.type = "text/css";
css.innerHTML = styles;
document.body.appendChild(css)

const imagesWithoutAlt = document.querySelectorAll('img:not([alt])');
console.log(imagesWithoutAlt);

imagesWithoutAlt.forEach((image) => {
  const speechBubble = document.createElement('div');
  speechBubble.classList.add('speech-bubble');
  speechBubble.innerHTML = '<p class="speech-bubble__text">Give me an alt, please!</p>';

  const wrapper = document.createElement('div');
  wrapper.classList.add('wrapper');

  const parent = image.parentNode
  parent.insertBefore(speechBubble, image);
  console.log(parent)
})
