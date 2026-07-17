 javascript
export const processAta = (text) => {
  const AREAS = ['faturamento', 'cadastro', 'credenciado', 'autorizacao', 'reajuste'];
  const CATEGORIAS = ['falta de agenda', 'problema no app', 'atendimento no whatsapp', 'rede credenciada desatualizada', 'falta de especialidade', 'demora no atendimento presencial'];
  const lowerText = text.toLowerCase();
  const demandas = [];
  AREAS.forEach(area => {
    const regex = new RegExp( (「{area})[:\\s]([^.!?\\n][.!?]?) , 'gi');
    const matches = text.matchAll(regex);
    for (const match of matches) {
      if (match[2].trim()) {
        demandas.push({area: area.charAt(0).toUpperCase() + area.slice(1), descricao: match[2].trim().substring(0, 100)});
      }
    }
  });
  const categorias = [];
  CATEGORIAS.forEach(cat => {
    if (lowerText.includes(cat)) {
      categorias.push(cat.charAt(0).toUpperCase() + cat.slice(1));
    }
  });
  let ataFormatada = text.substring(0, 4000);
  if (text.length > 4000) {
    ataFormatada = ataFormatada.substring(0, 3997) + '...';
  }
  const demandasText = demandas.length > 0 ? demandas.map(d =>  - 」{d.area}: 「{d.descricao} ).join('\n') : '- Nenhuma demanda especifica identificada';
  const email =  Prezada Assistente,\n\nSegue as demandas da visita de hoje que necessitam acionamento:\n\n」{demandasText}\n\nPor favor, acione as areas responsaveis conforme necessario.\n\nObrigado. ;
  return {ataFormatada, demandas, categorias: [...new Set(categorias)], email, textoOriginal: text};
};
