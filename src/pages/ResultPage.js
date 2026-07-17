 javascript
import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

function ResultPage({ data }) {
  const [copiedAta, setCopiedAta] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyAta = () => {
    navigator.clipboard.writeText(data.ataFormatada);
    setCopiedAta(true);
    setTimeout(() => setCopiedAta(false), 2000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(data.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div className="page result-page">
      <div className="card">
        <div className="card-header">
          <h2>Ata Formatada para Solus</h2>
        </divata-text">{data.ataFormatada}</div>

        <button
          className={ copy-btn 「{copiedAta ? 'copied' : ''} }
          onClick={handleCopyAta}

          {copiedAta ? (
            <>
              <Check size={18} /> Copiado!
            </>
          ) : (
            <>
              <Copy size={18} /> Copiar Ata
            </>
          )}
        </button>
      </div>

      <div className="card">
        <div className="card-header">
          <h2>E-mail para Assistente</h2>
        </div>

        <div className="email-text">{data.email}</div>

        <button
          className={ copy-btn 」{copiedEmail ? 'copied' : ''} }
          onClick={handleCopyEmail}

          {copiedEmail ? (
            <>
              <Check size={18} /> Copiado!
            </>
          ) : (
            <>
              <Copy size={18} /> Copiar E-mail
            </>
          )}
        </button>
      </div>

      <div className="card">
        <h3>Demandas Identificadas</h3>
        <div className="demandas-list">
          {data.demandas && data.demandas.length > 0 ? (
            data.demandas.map((demanda, idx) => (
              <div key={idx} className="demanda-item">
                <span className="demanda-area">{demanda.area}</span>
                <span className="demanda-descricao">{demanda.descricao}</span>
              </div>
            ))
          ) : (
            <p style={{ color: '#999' }}>Nenhuma demanda identificada</p>
          )}
        </div>
      </div>

      <div className="card">
        <h3>Assuntos Abordados</h3>
        <div className="categorias-list">
          {data.categorias && data.categorias.length > 0 ? (
            data.categorias.map((cat, idx) => (
              <span key={idx} className="categoria-badge">
                {cat}
              </span>
            ))
          ) : (
            <p style={{ color: '#999' }}>Nenhum assunto identificado</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ResultPage;
