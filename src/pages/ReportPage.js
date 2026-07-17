 javascript
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

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

  const COLORS = ['#667eea', '#764ba2', '#f093fb', '#4facfe', '#00f2fe', '#43e97b'];

  return (
    <div className="page report-page">
      <div className="card">
        <h2-stats">
          <div className="stat-box">
            <h4>Total de Atas</h4>
            <p className="stat-number">{atas.length}</p>
          </div>
          <div className="stat-box">
            <h4>Assuntos Únicos</h4>
            <p className="stat-number">{categoriesData.length}</p>
          </div>
          <div className="stat-box">
            <h4>Áreas Acionadas</h4>
            <p className="stat-number">{areasData.length}</p>
          </div>
          <div className="stat-box">
            <h4>Total de Demandas</h4>
            <p className="stat-number">
              {atas.reduce((sum, ata) => sum + (ata.demandas ? ata.demandas.length : 0), 0)}
            </p>
          </div>
        </div>
      </div>

      {categoriesData.length > 0 && (
        <div className="card">
          <h3>Assuntos Mais Frequentes</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={categoriesData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" angle={-45} textAnchor="end" height={80} />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#667eea" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}

      {areasData.length > 0 && (
        <div className="card">
          <h3>Demandas por Área</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={areasData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) =>  「{name}: 」{value} }
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"

                {areasData.map((entry, index) => (
                  <Cell key={ cell-${index} } fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      )}

      {atas.length === 0 && (
        <div className="card">
          <div className="no-data">
            <p>Nenhuma ata registrada ainda</p>
            <p style={{ fontSize: '0.9rem', marginTop: '0.5rem' }}>
              Os gráficos aparecerão conforme você cria novas atas
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default ReportPage;
