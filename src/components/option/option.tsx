/*
 * @Author: your name
 * @Date: 2021-02-04 14:37:01
 * @LastEditTime: 2021-02-05 15:00:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-app\src\components\option\option.tsx
 */
import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import { motion } from "framer-motion"
import { useSetRecoilState } from 'recoil';
import {areaValue} from '../../store/index'
const Wrap = styled.div`
        display: flex;
        .wrap {
            position: relative;
            align-self: center;
            .dropmenu {
                position: absolute;
                top: 3.1em;
                left: 0;
                width: 100%;
                text-align: center;
                background: #fff;
                border-radius: 5px;
                color: #000000;
                font-weight: 900;
                box-shadow: 0 0 10px #a9a9a9;
                padding: 20px 0;
                z-index:99999;
                &::before {
                    display: inline-block;
                    content: '';
                    top: -20px;
                    position: absolute;
                    top: -20px;
                    border: 10px solid;
                    border-color: #fff0 #ffffff00 white #ffffff00;
                    left: 50%;
                    transform: translateX(-50%);
                } 
                li {
                    padding: 10px 20px;
                    cursor: pointer;
                    transition: all .3s linear;
                    font-size: 14px;
                    &:hover {
                        color: #2dc06a;
                    }
                }
            }
            p {
                padding: 10px 20px;
                background: #ffffff;
                border-radius: 5px;
                box-shadow: 0 0 4px #f0f0f0;
                user-select: none;
                font-size: 14px;
                font-weight: 900;
                cursor: pointer;
                color: #000;
        }
    }
    @media  screen and  (max-width:1024px) {
             .wrap {
                max-width: 50%;
            }
        }
`;


const Options = (props: any) => {
    const [showDrop, setShowDrop] = useState<boolean>(false);
    const setAreaValue = useSetRecoilState(areaValue);
    const onRegionChange = (selectEvent:string):void => {
        setAreaValue(selectEvent);
    }
    return (
        <Wrap  onMouseEnter={() => setShowDrop(true)}
        onMouseLeave={() => setShowDrop(false)}>
            <div className='wrap'>
                <p
                        onMouseEnter={() => setShowDrop(true)}
                     >
                        <span>按照地区选择</span> <span className="iconfont iconicon_arrowdown"></span>
                </p>
                {
                    showDrop && (
                        <motion.ul
                            className="dropmenu"
                            onMouseEnter={() => setShowDrop(true)}
                            onMouseLeave={() => setShowDrop(false)}
                            initial={{y:30}}
                            animate={{ y: 0 }}
                           >
                                    <li onClick={()=>onRegionChange('Africa')}>Africa</li>
                                    <li onClick={()=>onRegionChange('Americas')}>Americas</li>
                                    <li onClick={()=>onRegionChange('Asia')}>Asia</li>
                                    <li onClick={()=>onRegionChange('Europe')}>Europe</li>
                                    <li onClick={()=>onRegionChange('Oceania')}>Oceania</li>
                                </motion.ul>
                    )
                   }
                </div>
        </Wrap>
    )
};

export default Options;

