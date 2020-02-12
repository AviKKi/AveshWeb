import React from 'react';
// import '../../static/css/Kugal/style.css';

class Kugal extends React.Component{
  render() {
    return (
      <div className="schnatz">
        <div className="kugel"></div>
        <div className="wing wing--left"></div>
        <div className="wing wing--right"></div>
        <style jsx>{`
          body {
            margin: 0;
            padding: 0;
          }
          
          .schnatz {
            position: absolute;
          
            top: 18%;
            left: 50%;
            -webkit-transition-timing-function: ease-in-out;
                    transition-timing-function: ease-in-out;
          }
          
          .schnatz .kugel {
            width: 12px;
            height: 12px;
            background-color: gold;
            border-radius: 50%;
            position: absolute;
          }
          
          .schnatz .wing {
            position: absolute;
            width: 24px;
            height: 6px;
            border-radius: 20px;
            background-color: #C0C0C0;
            top: -8px;
          }
          
          .schnatz .wing:after {
            position: absolute;
            display: block;
            content: "";
            position: absolute;
            width: 16px;
            height: 6px;
            top: 4px;
            background-color: #C0C0C0;
            border-radius: 20px;
          }
          
          .schnatz .wing.wing--left {
            left: -24px;
            -webkit-transform-origin: right bottom;
                    transform-origin: right bottom;
            -webkit-animation: wing--left 1s infinite alternate;
                    animation: wing--left 1s infinite alternate;
          }
          
          @-webkit-keyframes wing--left {
            from {
              -webkit-transform: rotate(30deg);
                      transform: rotate(30deg);
            }
            to {
              -webkit-transform: rotate(0deg);
                      transform: rotate(0deg);
            }
          }
          
          @keyframes wing--left {
            from {
              -webkit-transform: rotate(30deg);
                      transform: rotate(30deg);
            }
            to {
              -webkit-transform: rotate(0deg);
                      transform: rotate(0deg);
            }
          }
          
          .schnatz .wing.wing--left:after {
            left: 8px;
          }
          
          .schnatz .wing.wing--right {
            left: 12px;
            -webkit-transform-origin: left bottom;
                    transform-origin: left bottom;
            -webkit-animation: wing--right 1s infinite alternate;
                    animation: wing--right 1s infinite alternate;
          }
          
          @-webkit-keyframes wing--right {
            from {
              -webkit-transform: rotate(-30deg);
                      transform: rotate(-30deg);
            }
            to {
              -webkit-transform: rotate(0deg);
                      transform: rotate(0deg);
            }
          }
          
          @keyframes wing--right {
            from {
              -webkit-transform: rotate(-30deg);
                      transform: rotate(-30deg);
            }
            to {
              -webkit-transform: rotate(0deg);
                      transform: rotate(0deg);
            }
          }
          /*# sourceMappingURL=style.css.map */
        `}</style>
        </div>
     );
  }
}


export default Kugal;