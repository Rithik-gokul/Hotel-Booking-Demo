import React from 'react'
import {createRoot} from 'react-dom/client';
import './index.css';
import App from "./header.js"


function Page(){
  return(
      <div>
        <App />
      </div>
      )
}

const root = createRoot(document.getElementById('root'));
root.render(<Page />);

