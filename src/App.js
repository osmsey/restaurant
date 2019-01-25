import React, { Component } from 'react';
import {LeftPart} from './components/leftPart'
import './App.scss';

class App extends Component {
  render() {
    return (
      <div class="container">
        <div class="content">
            <LeftPart />
            
            
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
