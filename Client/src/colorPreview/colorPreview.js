import React,{Component} from 'react';
import './colorPreview.scss'
class ColorPreview extends React.Component {
    constructor(props) {
        super(props);
      }
    render(){
        return (
            <div className="colorPreview">
                <div className="pal">
                <div className="color1">1</div>
                <div className="color2">2</div>
                <div className="color3">3</div>
                <div className="color4">4</div>
                <div className="color5">5</div>

                </div>
                <div className="color1">welcome to the showoff</div>
                <div className="color2">welcome to the showoff</div>
                <div className="color3"></div>
                <div className="color4"></div>

            </div>
        )
        }
}

export default ColorPreview;