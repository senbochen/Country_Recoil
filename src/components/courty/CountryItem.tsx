/*
 * @Author: your name
 * @Date: 2021-02-04 11:05:26
 * @LastEditTime: 2021-02-05 15:44:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-app\src\components\courty\CountryItem.tsx
 */
import React from 'react';
import styled from 'styled-components';
import { useHistory } from "react-router-dom";
import slugify from 'slugify'

const Wrap = styled.div`
            border-radius: 5px;
            user-select:none;
            cursor: pointer;
         
            &:hover .wrap{
                    transform-style:preserve-3d;
                   transform:rotateY(-360deg);
                   transform-origin: 50% 50%;
            }
        .wrap{
            transition: all 1.6s linear;
            .detail {
                padding: 20px;
                box-shadow:0 0 3px #a0a0a0;
                transition: all .2s linear;
            }
            img {
                width: 100%;
                height: 160px;
                object-fit: cover;
                vertical-align: top;
                border-radius: 5px 5px 0 0;
            }
            p {
                strong {
                    font-size: 16px;
                    font-weight:900;
                }
                line-height: 30px;
            }
            h1 {
                font-size: 15px;
                font-weight: 900;
                line-height: 40px;
            }
        }
        
`;

const CountryItem = (props: any) => {
    let { name, flag, population, region, capital,alpha2Code } = props;
    let history = useHistory();
    const goDetail = () => {
        history.push(`/country/${slugify(alpha2Code)}`);
    }
    return (
        <Wrap onClick={goDetail}>
            <div className='wrap'>
                <img loading='lazy' src={flag} alt={name} />
                <div className='detail'>
                    <h1>名字:{name}</h1>
                    <p><strong>人口数量:</strong> {population}</p>
                    <p><strong>地区:</strong> {region}</p>
                    {capital&&( <p><strong>首府:</strong> {capital}</p>)}  
                </div>
            </div>
        </Wrap>
        )
};

export default CountryItem;