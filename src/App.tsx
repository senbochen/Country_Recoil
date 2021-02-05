/*
 * @Author: your name
 * @Date: 2021-02-03 11:24:11
 * @LastEditTime: 2021-02-05 15:47:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-app\src\App.tsx
 */
import React, { useEffect,useState}from 'react';
import './App.css';
import './css/global.css';
import Header from './components/header/header';
import Search from './components/search/search';
import CountryList from './components/courty/CoutryList';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Country from './pages/country/country';
import Style from './pages/style/style';
import { useRecoilState } from 'recoil';
import { setColor } from './store/index';
const App=()=> {
  const [bgColor, setBgColor] = useRecoilState(setColor);
  const mainClass = bgColor ? 'dark-theme-bg' : 'light-theme-bg';
  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    setBgColor(mq.matches);
  }, []);
  return (
          <Router>
              <div className="App">
              <div className={mainClass}>
                <Header setDarkModeFuc={setBgColor} dark={bgColor} />
                  <div style={{paddingTop:'40px',paddingBottom:'40px'}}>
                            <Switch>
                              <Route path='/country/:id' component={Country}></Route>
                              <Route path='/style' component={Style}></Route>
                              <Route path='/'>
                                      <Search />
                                      <CountryList/>
                                </Route>
                            </Switch>    

                  </div>
                </div>
              </div>
        </Router>
  );
}

export default App;
