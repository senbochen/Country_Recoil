/*
 * @Author: your name
 * @Date: 2021-02-03 17:43:45
 * @LastEditTime: 2021-02-05 11:11:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-app\src\components\search\search.tsx
 */

import React, { useState ,useEffect} from 'react';
import Input from './Input';
import styled from 'styled-components';
import { inputValue } from '../../store/index';
import { useSetRecoilState } from 'recoil';
import Options from '../option/option';

const SearchWrap = styled.div`
        max-width: 1120px;
        margin: 30px auto;
        .search {
            position: relative;
           display: flex;
           justify-content: space-between;
        }
        @media  screen and  (max-width:1024px) {
            .search {
                flex-direction:column;
                padding: 0 20px;
            }
        }

`;


const Search = (props: any) => {
    const [value, setValue] = useState('');
    useEffect(() => {
        setValue('');
        setInputValue('');
    },[])
    const setInputValue = useSetRecoilState(inputValue);
    const changeHandler = (e:any) => {
        setValue(e.target.value);
        setInputValue(e.target.value);
    };
    const clearinput = () => {
        setValue('');
        setInputValue('');
    }
    return (
        <SearchWrap>
            <div className='search'>
                
                <Input placeholder='搜索你想要的国家或地区~~' onChange={changeHandler} value={value} clearinputhanlder={ clearinput}/>
                <Options/>
            </div>
        </SearchWrap>
    )
};


export default Search;