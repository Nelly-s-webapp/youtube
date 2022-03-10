import React from 'react'
import pay from './Pay'

const App = () => {
  return (
    <Router>
        <switch>
            <Route path="/pay">
                <pay />
            </Route>
            <Route path="/success">
                <Success />
            </Route>
        </switch>
    </Router>
  );
};

export default App;