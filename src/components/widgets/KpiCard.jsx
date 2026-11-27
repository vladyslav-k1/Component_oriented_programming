function getTrendClass(change) {
  if (change.startsWith('+')) return 'kpi-card__change--up';
  if (change.startsWith('-')) return 'kpi-card__change--down';
  return '';
}

function KpiCard({ title, value, unit, change, changeLabel }) {
  return (
    <article className="kpi-card">
      <h3 className="kpi-card__title">{title}</h3>
      <p className="kpi-card__value">
        {value}
        {unit && <span className="kpi-card__unit"> {unit}</span>}
      </p>
      <p className={`kpi-card__change ${getTrendClass(change)}`}>
        {change} {changeLabel}
      </p>
    </article>
  );
}

export default KpiCard;
