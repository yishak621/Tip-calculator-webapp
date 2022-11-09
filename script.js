//declaration input
const customInput = document.getElementById('custom');
const billInput = document.getElementById('bill-number');
const userInput = document.getElementById('user');
//declaration btn
const tipBtn = document.querySelectorAll('.tip__btn');
const tipBtnContainer = document.querySelector('.tip--buttons');
const inputContainer = document.querySelector('.card--input');
//declaration outputs
const priceTag = document.querySelector('.price__tag');
const totalTag = document.querySelector('.total__tag');
const resetBtn = document.querySelector('.btn__reset');
//others
const hide = document.querySelector('.hide'); //cheatcode to transfer a value to the DOM and recive it for our function
const errorMessage = document.querySelector('.error');
const sign = document.querySelector('.sign');

//Main event Functionallity-keyup events
userInput.addEventListener('keyup', () => {
  //calculating the amount of tip
  const newHide = parseInt(hide.textContent); //the DOM transfered value (billinput*percent)
  const tipDivision = newHide / userInput.value;

  if (tipDivision >= 0 && tipDivision <= 10000000) {
    priceTag.textContent = `${tipDivision.toFixed(2)}$`; //only two decimal places
    errorMessage.classList.add('error-close'); //if before the user make error the err message will be cleared
    const totalBill =
      parseFloat(tipDivision.toFixed(2)) +
      parseFloat(billInput.value) / parseFloat(user.value); //to convert it to a number we use parse int

    totalTag.textContent = `${totalBill.toFixed(2)}$`;
    userInput.classList.remove('error-input');
  } else if (userInput.value === '0' || userInput.value <= 0) {
    //user must be >0
    errorMessage.classList.add('error-open');
    errorMessage.classList.remove('error-close');
    userInput.classList.add('error-input');
    checker();
  }

  checker();
});
//event listner for custum input
customInput.addEventListener('click', closeActive);
function closeActive() {
  tipBtn.forEach((btn) => {
    btn.classList.remove('selected'); //if there was active btn when we click on the custom input it will be closed
  });
  return tipBtn;
}
//event listner

tipBtnContainer.addEventListener('click', (e) => {
  const value = billInput.value;
  const btnValue = e.target.dataset.value;

  if (btnValue) {
    tipBtn.forEach((btn) => {
      btn.classList.remove('selected');
      e.target.classList.add('selected');
      customInput.value = ''; //to remove if there were value in the custom input
      const tipAmount = value * btnValue;
      hide.textContent = tipAmount;

      return tipAmount;
    });
  } else {
    customInput.addEventListener('keyup', () => {
      const customValue = (customInput.value * value) / 100;
      hide.textContent = customValue;
      console.log(customValue);

      return customValue;
    });
  }
});

//reset btn functionality

resetBtn.addEventListener('click', () => {
  setBackToDefault();
});
function setBackToDefault() {
  billInput.value = '';
  userInput.value = '';
  customInput.value = '';
  priceTag.textContent = '$0.00';
  totalTag.textContent = '$0.00';
  errorMessage.classList.add('error-close');
  userInput.classList.remove('error-input');
  tipBtn.forEach((btn) => {
    btn.classList.remove('selected');
  });
}

//main function for decoration counter

const updateCount = (el) => {
  const value = parseInt(el.dataset.value); //to convert the value from string to number
  const increment = Math.ceil(value / 1000); //<!--TODO: const increment = 1;we can use this but the increment is constant for every value..but we want to make it dynamic for every value so we use math.ceil(value/1000)

  let initialValue = 0;
  //count function
  const increaseCount = setInterval(() => {
    initialValue += increment;
    //to stop counting when it > value
    if (initialValue > value) {
      el.textContent = `$0.00`;
      clearInterval(increaseCount);
      return; //<!--TODO: important
    }
    el.textContent = `${initialValue}+`;
  }, 1); //1 mili second
  //console.log(increaseCount); the id that each span get
};

updateCount(priceTag);
updateCount(totalTag);

//checking if the user didnt put values in the bill input and btn
function checker() {
  if (billInput.value === '0' || billInput.value === '') {
    sign.classList.remove('sign-close');
    setTimeout(() => {
      sign.classList.add('sign-close');
    }, 3000);
    return;
  }
}
billInput.addEventListener('keyup', checker);
