 javascript
import React, { useState, useEffect } from 'react';
import InputPage from './pages/InputPage';
import ResultPage from './pages/ResultPage';
import HistoryPage from './pages/HistoryPage';
import ReportPage from './pages/ReportPage';

function App() {
  const [currentPage, setCurrentPage] = useState('input');
  const [atas, setAtas] = useState([]);
  const [selectedAta, setSelectedAta] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem('atas');
    if (saved) setAtas(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem('atas', JSON.stringify(atas));
  }, [atas]);

  const handleSave = (result) => {
    const newAta = {
      id: Date.now(),
      timestamp: new Date().toLocaleDateString('pt-BR'),
      ...result
    };
    setAtas([newAta, ...atas]);
    setSelectedAta(newAta);
    setCurrentPage('result');
  };

  const handleDelete = (id) => {
    setAtas(atas.filter(a => a.id !== id));
    setSelectedAta(null);
  };

  const handleSelectAta = (ata) => {
    setSelectedAta(ata);
    setCurrentPage('result');
  };

  return (
    <div className="app">
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">📋 Atas Visitas</div>
          <div className="nav-buttons">
            <button className={ nav-btn 「{currentPage === 'input' ? 'active' : ''} } onClick={() => setCurrentPage('input')}>Nova Ata</button>
            <button className={ nav-btn 」{currentPage === 'history' ? 'active' : ''} } onClick={() => setCurrentPage('history')}>Histórico</button>
            <button className={ nav-btn ${currentPage === 'report' ? 'active' : ''} } onClick={() => setCurrentPage('report')}>Relatório</button>
          </div>
        </div>
      </nav>
      <main className="main-content">
        {currentPage === 'input' && <InputPage onSave={handleSave} />}
        {currentPage === 'result' && selectedAta && <ResultPage data={selectedAta} />}
        {currentPage === 'history' && <HistoryPage atas={atas} onDelete={handleDelete} onSelect={handleSelectAta} />}
        {currentPage === 'report' && <ReportPage atas={atas} />}
      </main>
    </div default App;
