/*
 * @Author: your name
 * @Date: 2021-02-04 18:19:20
 * @LastEditTime: 2021-02-05 12:20:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-app\src\components\List\countryList.tsx
 */
import React from 'react';
import  styled  from 'styled-components';
const CountrySelectedStyled = styled.div`
  margin-top: 1em;
  padding-bottom: 3em;
  h2 {
      font-size: 24px;
      font-weight: 800;
      line-height: 50px;
  }
  img {
    width: 100%;
    margin-bottom: 2em;
  }
  .grid {
    display: grid;
    grid-row-gap: 1em;
    .type {
            p {
                 padding:10px 0;
             }
            strong {
                font-size:15px;
                font-weight:900;
                
            }
    }
  }
  .border {
                 font-size:15px;
                font-weight:900;
                margin-bottom: 20px;
                margin-top: 10px;
  }
  .border-item {
    padding: .5em 2em;
    border-radius: 5px;
    margin-right: 15px;
    box-shadow: 0 0 5px rgba(0,0,0,.3);
    display: inline-flex;
    margin-bottom: 15px;
    background: var(--white);
    cursor: pointer;
  }
  .languages {
    span {
      margin-right: 5px;
      &:after {
        content: ',';
      }
      &:last-child {
        &:after {
          display: none;
        }
      }
    }
  }
  @media screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 120px;
    margin-top: 5em;
    .grid {
      grid-template-columns: 1fr 1fr;
    }
    .borders {
      display: inline-flex;
      margin-right: 1em;
      margin-top: 3.5em;
    }
  };
  `;



const List = (props: any) => {
    let { flag,
        name,
        nativeName,
        population,
        region,
        subregion,
        capital,
        topLevelDomain,
        currencies = [],
        languages = [],
        borders = [],
        alpha2Code } = props;
    return (
        <CountrySelectedStyled>
   
            <img src={flag} alt="loading" />
                <div>
                    <h2>{name}</h2>
                    <div className="grid">
                            <div className='type'>
                                <p><strong>Native Name:</strong> {nativeName}</p>
                                <p><strong>Population:</strong> {population}</p>
                                <p><strong>Region:</strong> {region}</p>
                                <p><strong>Sub Region:</strong> {subregion}</p>
                                <p><strong>Capital:</strong> {capital}</p>
                            </div>
                            <div className='type'>
                                <p><strong>Top Level Domain:</strong> {topLevelDomain}</p>
                                <p><strong>Currencies:</strong> {currencies.map((item:any):object => (<span key={item.name}>{item.name}</span>))}</p>
                                <p className="languages"><strong>Languages:</strong> {languages.map((item:any) => (<span key={item.name}>{item.name}</span>))}</p>
                            </div>
                            </div>
                            <p className="border"><strong>Border Countries:</strong></p>
                            {borders.map((item:any) => (<span className="border-item" key={item}>{item}</span>))}
                </div>
        </CountrySelectedStyled>
    )
};

export default List;