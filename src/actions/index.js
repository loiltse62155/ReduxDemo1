import {INCREASE, DECREASE, MULTIPLE2, DIVIDE2} from './type';

export const counterIncrease = () => ({type:INCREASE});
export const counterDecrease = () => ({type:DECREASE});
export const counterMultiple2 = () =>({type: MULTIPLE2});
export const counterDivide2 = () => ({type:DIVIDE2});