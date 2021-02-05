/*
 * @Author: your name
 * @Date: 2021-02-04 17:01:09
 * @LastEditTime: 2021-02-05 15:08:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-app\src\pages\country\country.tsx
 */
import React, { useEffect,useState } from 'react';
import {useParams ,useHistory} from "react-router-dom";
import styled from 'styled-components';
import List from '../../components/List/countryList'



const Wrap = styled.div`
        max-width: 1120px;
        margin: auto;
        padding: 1rem;
        .wrap {
            .back_wrap {
                cursor: pointer;
            }
                .back {
                    border:none;
                    outline: none;
                    border-radius: 5px;
                    padding: 10px 30px;
                    box-shadow: 0 0 4px #9e9e9e;
                    cursor: pointer;
                    background: #fff;
                    display: flex;
                    span {
                            align-self:center;
                    }
                }
        }

`;


const Country = (props: any) => {
    const [country, setCountry] = useState('');
    let { id } = useParams() as any;
    let history = useHistory();
    useEffect(() => {
        fetch(`https://restcountries.eu/rest/v2/alpha/${id.toLowerCase()}`)
        .then((response) => response.json())
        .then((data) => {
          setCountry(data)
        })
     
    }, []);
    return (
        <Wrap>
            <div className='wrap'>
                <div className="back_wrap">
                    <button className='back' onClick={() => (history.push('/'))}>
                        <span className="iconfont icondiqiu" style={{ marginRight: '10px' }}></span>
                        <span>Back</span>
                    </button>
                </div>
                <List {...country}/>
            </div>
        </Wrap>
    )
};
export default Country;