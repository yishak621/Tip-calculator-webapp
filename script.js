//declaration input
const customInput = document.getElementById('custom');
const billInput = document.getElementById('bill-number');
const userInput = document.getElementById('user');

const tipBtn = document.querySelectorAll('.tip__btn');
const tipBtnContainer = document.querySelector('.tip--buttons');
const inputContainer = document.querySelector('.card--input');
//declaration outputs
const priceTag = document.querySelector('.price__tag');
const totalTag = document.querySelector('.total__tag');
const resetBtn = document.querySelector('.btn__reset');
const hide = document.querySelector('.hide');
const errorMessage = document.querySelector('.error');
//final event

const arr = [0];
userInput.addEventListener('keyup', () => {
  //calculating the amount of tip
  const newHide = parseInt(hide.textContent);
  const tipDivision = newHide / userInput.value;

  if (tipDivision >= 0 && tipDivision <= 1000) {
    priceTag.textContent = `${tipDivision.toFixed(2)}`; //only two decimal places
    errorMessage.classList.add('error-close');

    //return tipDivision;
  } else if (userInput.value === '0') {
    errorMessage.classList.add('error-open');
    errorMessage.classList.remove('error-close');

    userInput.classList.add('error-input');
  }
});

//callBack();

tipBtnContainer.addEventListener('click', (e) => {
  const value = billInput.value;
  const btnValue = e.target.dataset.value;

  if (btnValue) {
    tipBtn.forEach((btn) => {
      btn.classList.remove('selected');
      e.target.classList.add('selected');
      const tipAmount = value * btnValue;
      hide.textContent = tipAmount;
      console.log(tipAmount);
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
  tipBtn.forEach((btn) => {
    btn.classList.remove('selected');
  });
}
