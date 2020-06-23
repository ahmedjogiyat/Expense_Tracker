import React from 'react';

import './App.css';
import Child from './Child'
import {TransactionProvider} from './TransContext';

function App() {
  return (
    <div>
      
      <TransactionProvider>
          <Child/>
      </TransactionProvider>

    </div>
  );
}

export default App;
