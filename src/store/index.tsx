/*
 * @Author: your name
 * @Date: 2021-02-04 10:50:22
 * @LastEditTime: 2021-02-05 10:09:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-app\src\store\index.tsx
 */

import { atom,selector } from 'recoil';

const countryList = atom({
    key: 'countryList', // unique ID (with respect to other atoms/selectors)
    default: [], // default value (aka initial value)
});
  
const inputValue = atom({
    key: 'inputValue',
    default:''
})
const areaValue = atom({
    key: 'areaValue',
    default:''
})
const setColor = atom({
    key: 'setColor',
    default:false
})



const filterCountry = selector({
    key: 'filterCountry',
    get: ({ get }) => {
        const data = get(countryList);
        const value = get(inputValue);
        const regionValue = get(areaValue);

        if (!!value) {
           return data.filter((res:any) => {
                return res.name.toLowerCase().includes(value.toLowerCase());
            });
         
        } else if (!!regionValue) {
            return data.filter((res:any) => {
                return res.region.toLowerCase().includes(regionValue.toLowerCase());
            });
        }
        else {
            return data;
        }
    }
});













export { countryList,filterCountry,inputValue,areaValue,setColor };
