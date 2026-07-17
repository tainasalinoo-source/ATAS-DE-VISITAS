 javascript
import React from 'react';

function ReportPage({ atas }) {
  const countCategories = () => {
    const counts = {};
    atas.forEach(ata => {
      if (ata.categorias) {
        ata.categorias.forEach(cat => {
          counts[cat] = (counts[cat] || 0) + 1;
        });
      }
    });
    return Object.entries(counts).map(([name, value]) => ({ name, value }));
  };

  const countAreas = () => {
    const counts = {};
    atas.forEach(ata => {
      if (ata.demandas) {
        ata.demandas.forEach(demanda => {
          counts[demanda.area] = (counts[demanda.area] || 0) + 1;
        });
      }
    });
    return Object.entries(counts).map(([name, value]) => ({ name, value }));
  };

  const categoriesData = countCategories();
  const areasData = countAreas();

  return (
    <div className="page report-page">
      <div className="card">
        <h2>Relatorio de Atas</h2 ReportPage;
