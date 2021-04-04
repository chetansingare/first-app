import logo from './logo.svg';
import './App.css';
import {Top,Nav,AppTittle} from './components/front/Front'
import Appinner from './components/Appinner/Appinner'
import Chart from './components/chart/Chart'
import { useState } from 'react';
import SimpleTable from './components/simpleTable/SimpleTable'
import Chart2 from './components/chart2/Chart2'

function App() {
  const[SideBar,SetSideBar]=useState(false)
  return (<>
    <Nav/>
    <Top/>
    <AppTittle/>
    <Appinner SideBar_a={SideBar} SideBar_b={SetSideBar}/>
    <Chart sidebarStatus={SideBar}/>
    <SimpleTable/>
    <Chart2/>
    </>
  );
}

export default App;
