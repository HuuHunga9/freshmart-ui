import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { publicRouter } from './routes';
function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRouter.map((route, index) => {
                        const Page = route.component;
                        return <Route key={index} path={route.path} element={<Page />} />;
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
