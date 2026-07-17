 javascript
import React from 'react';
import { Trash2 } from 'lucide-react';

function HistoryPage({ atas, onDelete, onSelect }) {
  return (
    <div className="page history-page">
      <div className="card">
        <h2>Histórico de Atas</h2>

        {atas && atas.length > 0 ? (
          <div className="atas-list">
            {atas.map((ata) => (
              <div
                key={ata.id}
                className="ata-item"
                onClick={() => onSelect(ata)}

                <div className="ata-info">
                  <div className="ata-date">📅 {ata.timestamp}</div>
                  <div className="ata-preview">
                    {ata.textoOriginal.substring(0, 100)}...
                  </div>
                  <div className="ata-categories">
                    {ata.categorias && ata.categorias.slice(0, 3).map((cat, idx) => (
                      <span key={idx} className="mini-badge" HistoryPage;
