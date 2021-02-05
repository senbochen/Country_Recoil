/*
 * @Author: your name
 * @Date: 2021-02-04 09:52:33
 * @LastEditTime: 2021-02-05 15:07:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-app\src\components\search\Input.tsx
 */
import React from 'react';
import styled from 'styled-components';

const InputWrap = styled.div`
        .Wrap {
                background-color: #ffff;
                display: flex;
                box-shadow: 0 0 4px #a5a5a5;
                padding: 0 10px;    
                max-width: 100vw;
                position: relative;
                border-radius: 5px;
                .iconfont {
                    font-size: 30px;
                    align-self:center;
                    color: #000;
                }
                input {
                    border: none;
                    flex: 1;
                    padding: 10px 20px;
                    border-radius: 5px;
                    outline: none;
                    align-self: center;
                    color: #C4C4C4;
                    font-size: 20px;
                    &::-webkit-input-placeholder {
                        color: #C4C4C4;
                        font-size: 20px;
                    }
                }
                .icondelete {
                    position: absolute;
                    top: 50%;
                    right: 17px;
                    transform: translateY(-50%);
                    cursor: pointer;
                    user-select:none;
                    color: #000;
                }
        }
        @media  screen and (max-width:1024px){
            .Wrap {
                margin-bottom: 1rem;
            }
        }
`

const Input = (props: any) => {
    const clearInputHandler = () => {
        props.clearinputhanlder();
    };
    return (
        <InputWrap>
            <div className='Wrap'>
                    <span className="iconfont iconsearch2"></span>
                    <input type="text" {...props} />
                    {
                        props.value&&(<span className="iconfont icondelete" onClick={clearInputHandler}></span>)
                    }
                </div>
        </InputWrap>
    )
};


export default Input;
