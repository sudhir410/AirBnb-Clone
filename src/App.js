import React from 'react'
import './App.css';
import Header from './components/Header/Header'
import NewThisWeek from './components/newThisWeek/NewThisWeek';
import PlanATripMain from './components/PlanATrip/PlanATripMain';
import Topsellers from './components/TopSellers/Topsellers';
function App() {


  return (
    <div className="App">
      <Header />
      <NewThisWeek />
      <PlanATripMain />
      <Topsellers />
    </div>

  );
}

export default App;
