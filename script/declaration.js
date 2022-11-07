//import
import getElement from './getElement.js';

import { getElementAll } from './getElement.js';

//declaration
//inputs
export const billInput = getElement('#bill-number');
export const customInput = getElement('#custom');
export const userInput = getElement('#user');

export const tipBtn = getElementAll('.tip__btn');
export const tipBtnContainer = getElement('.tip--buttons');
export const inputContainer = getElement('.card--input');
//outputs
export const priceTag = getElement('.price__tag');
export const totalTag = getElement('.total__tag');
export const resetBtn = getElement('.btn__reset');
