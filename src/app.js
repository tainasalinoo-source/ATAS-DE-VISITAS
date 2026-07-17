 javascript
import React, { useState, useEffect } from 'react';
import './App.css';
import InputPage from './pages/InputPage';
import ResultPage from './pages/ResultPage';
import HistoryPage from './pages/HistoryPage';
import ReportPage from './pages/ReportPage';

function App() {
  const [currentPage, setCurrentPage] = useState('input');
  const [atas, setAtas] = useState([]);
  const [currentResult, setCurrentResult] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem('atas_historico');
    if (saved) {
      setAtas(JSON.parse(saved));
    }
  }, []);

  const saveAta = (ata) => {
    const newAta = {
      id: Date.now(),
      timestamp: new Date().toLocaleString('pt-BR'),
      ...ata
    };
    const updated = [newAta, ...atas];
    setAtas(updated);
    localStorage.setItem('atas_historico', JSON.stringify(updated));
    setCurrentResult(ata);
    setCurrentPage('result');
  };

  const deleteAta = (id) => {
    const updated = atas.filter(a => a.id !== id);
    setAtas(updated);
    localStorage.setItem('atas_historico', JSON.stringify(updated));
  };

  return (
    <div className="app">
      <nav className="navbar">
        <div className="nav-container">
          <h1 className="logo">📋 Atas Visitas</h1>
          <div className="nav-buttons">
            <button
              className={ nav-btn 「{currentPage === 'input' ? 'active' : ''} }
              onClick={() => setCurrentPage('input')}

              Nova Ata
            </button>
            <button
              className={ nav-btn 」{currentPage === 'history' ? 'active' : ''} }
              onClick={() => setCurrentPage('history')}
            <main className="main-content">
        {currentPage === 'input' && (
          <InputPage onSave={saveAta} />
        )}
        {currentPage === 'result' && currentResult && (
          <ResultPage data={currentResult} />
        )}
        {currentPage === 'history' && (
          <HistoryPage atas={atas} onDelete={deleteAta} onSelect={(ata) => {
            setCurrentResult(ata);
            setCurrentPage('result');
          }} />
        )}
        {currentPage === 'report' && (
          <ReportPage atas={atas} />
        )}
      </main>
    </div>
  );
}

export default App;
