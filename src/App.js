import React from 'react';
import './App.css';
import SimpleAppBar from './components/header'
import SimpleCard from './components/paper'

function App() {
  return (
    <div className="App">
      <SimpleAppBar></SimpleAppBar>
      <div style={{marginTop:'75px',marginLeft:'75px',marginRight:'75px',marginBottom:'75px'}}>
      <SimpleCard square="false" elevation="10"></SimpleCard>
      </div>
      <div style={{marginBottom:'75px', backgroundColor:'#ff487e', width:'100%', height:'200px'}}>
      <footer style={{textAlign:'center'}}><em><b>Designed With <span role="img" aria-label="yellow love">💛</span> By Subhodip </b></em></footer>
      </div>
    </div>
  );
}

export default App;
