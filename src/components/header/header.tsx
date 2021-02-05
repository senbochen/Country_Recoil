/*
 * @Author: your name
 * @Date: 2021-02-03 17:14:34
 * @LastEditTime: 2021-02-05 14:27:32
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-app\src\components\header.tsx
 */
import React,{useEffect,useState} from 'react';
import { Link } from 'react-router-dom';
import {setColor} from '../../store/index'
import { useRecoilValue } from 'recoil';
import  styled  from 'styled-components';

const Wrap = styled.div`
.iconfont {
    font-size: 17px;
}
.header_wrap {
    box-shadow: 0 0 6px #a9a9a9;
    width: 100%;
    z-index: 10000000;
    transition: all .4s linear;
    .container {
        max-width: 1120px;
        padding: 0 .1rem;
        margin: auto;
        height: 40px;
        display: flex;
        justify-content: space-between;
        a {
            align-self: center;
            font-size: 17px;
        }
        .dark-mode {
            align-self: center;
            cursor: pointer;
            user-select: none;
        }
    }
}

@media screen and (max-width:1024px) {
    .header_wrap {
        padding: 0 20px;
        a {
            font-size: 12px !important;
        }
    }
}
`

const Header = (props: any) => {
    let { setDarkModeFuc, dark } = props;
    const [fixed, setFixed] = useState(true);
    const bgColor = useRecoilValue(setColor);
    const mainClass = bgColor ? 'dark-theme-bg header_wrap' : 'light-theme-bg header_wrap';
    useEffect(() => {
        const scroll = (e:any) => {
            if (e.deltaY > 0) {
                setFixed(false);  
            } else {
                 setFixed(true);
             }
        }
        document.body.addEventListener('wheel',scroll);
        return () => {
            document.body.removeEventListener('wheel', scroll);
        };
    }, []);
    const changeTheme = () => {
        setDarkModeFuc(!dark);
    };
    return (
        <Wrap>
            <div className={mainClass} style={{position:fixed?'fixed':'fixed',transform:fixed?'translateY(0%)':'translateY(-100%)',top:0}}>
                 <div className='container'>
                <Link to='/'>世界在哪里？</Link>
                <Link to='/style'>生活 style</Link>
                <div className='dark-mode' onClick={changeTheme}>
                     {
                        dark?(<span className="iconfont iconmoon"></span>):(<span className="iconfont iconmoon1"></span>)
                        } 
                        <span style={{paddingLeft:'.65em',fontSize:'16px'}}>dark-mode</span>
                    </div>
                </div>
            </div>
        </Wrap>
        );
};

export default Header;
