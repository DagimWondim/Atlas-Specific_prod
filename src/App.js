import './App.css';

import Header from './Component/Header';
import Footer from './Component/Footer';
import Main from './Component/Main';

import aaa from './s-class.webp'
import bbb from './hh.webp'
import ddd from './ss.webp'
import fff from './ee.jpeg'
import ggg from './sc.webp'
import hhh from './dd.webp'
import iii from './rr.webp'
import jjj from './gg.webp'

import kkk from './ff.webp'
import lll from './sss.webp'
function App() {
  return (
    <div>
<Header />
    <Main 
    pri='$200'
    bra='Mercedes'
    mod='S Class Limousine'
    loc='Addis Ababa'
    aa={aaa}
    bb={bbb}
    dd={ddd}
    ff={fff}
    gg={ggg}
    hh={hhh}
    ii={iii}
    jj={jjj}
    kk={kkk}
    ll={lll}
     />
    <Footer />
    </div>
  );
}


export default App;




 