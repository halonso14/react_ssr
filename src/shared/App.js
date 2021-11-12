import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import Menu from '../components/Menu';
import { About, Home } from '../pages';

class App extends Component {
    render() {
        return (
            <div>
              < Menu />
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/about" element={<About />}>
                  <Route path=":id" element={<About />} />
                </Route>
              </Routes>
            </div>
        );
    }
}

export default App;