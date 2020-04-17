import React from 'react';

import Navibar from "./navibar/Navibar";
import Firstpage from "./first-page/firstpage";
import Secondpage from "./second-page/secondpage";
import Thirdpage from "./third-page/thirdpage";
import Fourthpage from "./forth-page/fourthpage";
import Fifthpage from "./fifth-page/fifthpage";
import Sixthpage from "./sixth-page/sixth";
import Footer from "./footer/footer";
/*import Secondpage from "./second-page";*/

class Starting extends React.Component {

    render(){
        return(<div className = "App">
                <Navibar/> 
                <Firstpage/> 
                <Secondpage/>
                <Thirdpage/>
                <Fourthpage/>
                <Fifthpage/>
                <Sixthpage/>
                <Footer/>
                </div>);
    }
}
export default Starting;