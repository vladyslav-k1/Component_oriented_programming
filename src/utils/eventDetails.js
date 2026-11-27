import { formatDateTime } from './earthquakeUtils';

const STATUS_LABELS = {
  automatic: 'Автоматична оцінка',
  reviewed: 'Перевірено сейсмологом',
  deleted: 'Видалено',
};

const PAGER_ALERT_LABELS = {
  green: 'Зелений — мінімальні наслідки',
  yellow: 'Жовтий — локальні наслідки',
  orange: 'Помаранчевий — значні наслідки',
  red: 'Червоний — масштабні наслідки',
};

function formatNumber(value, digits, suffix = '') {
  return typeof value === 'number' ? `${value.toFixed(digits)}${suffix}` : '—';
}

function formatText(value) {
  return value ? String(value) : '—';
}

function formatSources(sources) {
  if (!sources) return '—';
  return sources.split(',').filter(Boolean).join(', ').toUpperCase();
}

export function buildEventDetailSections(event) {
  const p = event.properties;
  const [longitude, latitude, depth] = event.geometry.coordinates;

  return [
    {
      id: 'main',
      title: 'Основне',
      items: [
        { label: 'Магнітуда', value: `${formatNumber(p.mag, 1)} (${formatText(p.magType)})` },
        { label: 'Регіон', value: formatText(p.place) },
        { label: 'Час події', value: formatDateTime(p.time) },
        { label: 'Оновлено', value: p.updated ? formatDateTime(p.updated) : '—' },
        { label: 'Статус', value: STATUS_LABELS[p.status] ?? formatText(p.status) },
        { label: 'Значущість (sig)', value: formatNumber(p.sig, 0) },
      ],
    },
    {
      id: 'location',
      title: 'Розташування',
      items: [
        { label: 'Широта', value: formatNumber(latitude, 3, '°') },
        { label: 'Довгота', value: formatNumber(longitude, 3, '°') },
        { label: 'Глибина', value: formatNumber(depth, 1, ' км') },
      ],
    },
    {
      id: 'impact',
      title: 'Вплив',
      items: [
        { label: 'Повідомлень «відчули»', value: formatNumber(p.felt, 0) },
        { label: 'Інтенсивність за відгуками (CDI)', value: formatNumber(p.cdi, 1) },
        { label: 'Інструментальна інтенсивність (MMI)', value: formatNumber(p.mmi, 1) },
        { label: 'Рівень PAGER', value: PAGER_ALERT_LABELS[p.alert] ?? 'Немає' },
        { label: 'Загроза цунамі', value: p.tsunami === 1 ? 'Так' : 'Ні' },
      ],
    },
    {
      id: 'quality',
      title: 'Якість вимірювання',
      items: [
        { label: 'Сейсмічна мережа', value: formatText(p.net).toUpperCase() },
        { label: 'Кількість станцій', value: formatNumber(p.nst, 0) },
        { label: 'Відстань до найближчої станції', value: formatNumber(p.dmin, 3, '°') },
        { label: 'Похибка (RMS)', value: formatNumber(p.rms, 2, ' с') },
        { label: 'Азимутальний розрив', value: formatNumber(p.gap, 0, '°') },
        { label: 'Джерела даних', value: formatSources(p.sources) },
      ],
    },
  ];
}
