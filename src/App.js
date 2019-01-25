import React, { Component } from 'react';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div class="container">
        <div class="content">
            <div class="left-part">
                <div class="logo"><img src="./Img/Logo.JPG" alt=""/></div>
                <div class="menu">
                    <a href="" class="button">HOME</a>
                    <a href="" class="button">ABOUT</a>
                    <a href="" class="button">CONTACT</a>
                    <a href="" class="button">CHEFS</a>
                    <a href="" class="button">LOCATE</a>
                    <a href="" class="button">MEDIA</a>
                    
                </div>
            </div>
            <div class="middle-part">
                <div class="middle-menu">
                        <a href="" class="button">BREAKFAST</a>
                        <a href="" class="button">APPETIZER</a>
                        <a href="" class="button">MAIN-COURSE</a>
                        <a href="" class="button">DESSERT</a>
                </div>
                
                <div class="dishes-wrap">
                    <div class="dishes" id="br1">
                        <img src="./Img/Breakfast/b1.jpg" alt="" class="dish-tile"/>
                        <img src="./Img/Breakfast/b2.jpg" alt="" class="dish-tile"/>
                        <img src="./Img/Breakfast/b3.jpg" alt="" class="dish-tile"/>
                        <img src="./Img/Breakfast/b4.jpg" alt="" class="dish-tile"/>
                    </div>
                    <div class="dishes entrance-from-left" id="br2">
                        <img src="./Img/Breakfast/b5.jpg" alt="" class="dish-tile"/>
                        <img src="./Img/Breakfast/b6.jpg" alt="" class="dish-tile"/>
                        <img src="./Img/Breakfast/b7.jpg" alt="" class="dish-tile"/>
                        <img src="./Img/Breakfast/b8.jpg" alt="" class="dish-tile"/>
                    </div>
                    <div class="hidden" id="br3">
                        <img src="./Img/Breakfast/b5.jpg" alt="" class="dish-tile"/>
                        <img src="./Img/Breakfast/b6.jpg" alt="" class="dish-tile"/>
                        <img src="./Img/Breakfast/b7.jpg" alt="" class="dish-tile"/>
                        <img src="./Img/Breakfast/b8.jpg" alt="" class="dish-tile"/>
                    </div>
                    <div class="hidden" id="br4">
                        <img src="./Img/Breakfast/b5.jpg" alt="" class="dish-tile"/>
                        <img src="./Img/Breakfast/b6.jpg" alt="" class="dish-tile"/>
                        <img src="./Img/Breakfast/b7.jpg" alt="" class="dish-tile"/>
                        <img src="./Img/Breakfast/b8.jpg" alt="" class="dish-tile"/>
                    </div>
                </div>

                <div class="scroller">
                   
                    <div class="btnNext">
                        <label for=""></label>
                    </div>
                    <div class="dots">
                        <div class="btn" id="btn1"></div>
                        <div class="btn" id="btn2"></div>
                        <div class="btn" id="btn3"></div>
                        <div class="btn" id="btn4"></div>
                    </div>
                    <div class="btnPrev">
                        <label for="" class="btnPrev"></label>
                    </div>
                </div>
            </div>
            <div class="right-part">
                <div class="dish-pic"></div>
                <div class="dish-info"></div>
            </div>
        </div>
    </div>
    );
  }
}

export default App;
