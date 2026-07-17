 javascript
import React, { useState } from 'react';

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
        </div;
