import { getMagnitudeCategory } from './earthquakeUtils';

const MAGNITUDE_TONES = {
  minor: 'success',
  moderate: 'warning',
  strong: 'danger',
};

export function getMagnitudeTone(mag) {
  return MAGNITUDE_TONES[getMagnitudeCategory(mag)];
}

export function getDeltaTone(change) {
  if (change.startsWith('+')) return 'danger';
  if (change.startsWith('-')) return 'success';
  return 'neutral';
}
