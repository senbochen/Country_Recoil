/*
 * @Author: your name
 * @Date: 2021-02-04 10:55:01
 * @LastEditTime: 2021-02-05 15:47:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-app\src\components\courty\CoutryList.tsx
 */
import React, { useEffect } from 'react';
import styled from 'styled-components';
import {  useRecoilValue,useRecoilState } from 'recoil';
import {countryList,filterCountry} from '../../store/index'
import  CountryItem  from './CountryItem';



const Wrap = styled.div`
    .countryList {
        display: grid;
        grid-template-columns: repeat(4, 24%);
        grid-column-gap: 20px;
        grid-row-gap: 20px;
        max-width: 1120px;
        margin: auto;
    }
    @media screen and (max-width:1024px) {
        .countryList {
            padding: 0 20px;
            grid-template-columns: repeat(2, 48%);
        }
    }
`;



const CountryList = () => {
    const [countrylist, setCountrylist] = useRecoilState(countryList);
    const filterCountryData = useRecoilValue(filterCountry);
  
    useEffect(() => {
        setCountrylist([]);
        fetch('https://restcountries.eu/rest/v2/all')
            .then((response) => {
                return response.json()
            })
            .then((list) => {
                setCountrylist((old): any => [
                    ...old,
                    ...list
                ])
            })
            .catch(() => {
                console.log('hubo un error, que dolor que dolo que pena')
            });
    },[]);
    return (
        <Wrap>
                <div className='countryList'>
                    {        
                        filterCountryData.map(({ name, flag, population, capital, region, nativeName, cioc, alpha2Code }) => (
                            <CountryItem

                                key={name}
                                name={name}
                                flag={flag}
                                population={population}
                                capital={capital}
                                nativeName={nativeName}
                                region={region}
                                cioc={cioc}
                                alpha2Code={alpha2Code}
                            />
                        ))
                    }
                </div>
        </Wrap>
    )
};
export default CountryList;