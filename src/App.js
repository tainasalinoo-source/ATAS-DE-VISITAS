return (
  <div className="app">
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">📋 Atas Visitas</div>

        <div className="nav-buttons">
          <button
            className={`nav-btn ${currentPage === 'input' ? 'active' : ''}`}
            onClick={() => setCurrentPage('input')}
          >
            Nova Ata
          </button>

          <button
            className={`nav-btn ${currentPage === 'history' ? 'active' : ''}`}
            onClick={() => setCurrentPage('history')}
          >
            Histórico
          </button>

          <button
            className={`nav-btn ${currentPage === 'report' ? 'active' : ''}`}
            onClick={() => setCurrentPage('report')}
          >
            Relatório
          </button>
        </div>
      </div>
    </nav>

    <main className="main-content">
      {currentPage === 'input' && <InputPage onSave={handleSave} />}
      {currentPage === 'result' && selectedAta && (
        <ResultPage data={selectedAta} />
      )}
      {currentPage === 'history' && (
        <HistoryPage
          atas={atas}
          onDelete={handleDelete}
          onSelect={handleSelectAta}
        />
      )}
      {currentPage === 'report' && <ReportPage atas={atas} />}
    </main>
  </div>
);
}

export default App;
