import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Button } from 'reactstrap';

import './App.css';
import { useLazyGetGreetingQuery } from './services/apiService';

function App() {
    return (
        <div className="app-container">
            <header className="app-header">
                <div className="logo">My Logo</div>
                <div className="auth-actions">Login/Logout</div>
            </header>

            <nav className="side-panel">...</nav>

            <main className="main-content">
                <Router>
                    <Routes>
                        <Route path="/" element={<Home />} />
                    </Routes>
                </Router>
            </main>
        </div>

    );
}

export default App;

export const Home: React.FC = () => {
    const [getGreeting, { data, error, isLoading, isFetching }] = useLazyGetGreetingQuery();

    return (
        <div>
            <h1>Home Page</h1>
            <Button color="primary" onClick={() => getGreeting(null, false)}>Click Me</Button>
            <pre>
                {(isLoading || isFetching) && <div>Loading...</div>}
                {error && <div>{JSON.stringify(error)}</div>}
                {data && <div>{data.message}</div>}
            </pre>
        </div>
    );
}