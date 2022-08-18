import React from 'react';
import { Route, Routes } from 'react-router';
import WeatherProvider from '../contexts/WeatherProvider';
import Week from '../page/week/Week';
import Main from '../page/main/Main';

function App() {
  return (
    <WeatherProvider>
      <Routes>
        <Route index element={
          <Main />
        } />
        <Route path='/week' element={
          <Week />
        } />
      </Routes>
    </WeatherProvider>
  );
}

export default App;
