import DescriptionList from './DescriptionList';

export default {
  title: 'Molecules/DescriptionList',
  component: DescriptionList,
  args: {
    items: [
      { label: 'Назва', value: 'Продукт A' },
      { label: 'Ціна', value: '1 250 грн' },
      { label: 'Наявність', value: 'Є на складі' },
      { label: 'Оновлено', value: '01.01.2026' },
    ],
  },
};

export const Default = {};

export const LongValues = {
  args: {
    items: [
      { label: 'Опис', value: 'Дуже довгий опис продукту, який не вміщується в один рядок і переноситься на кілька рядків без порушення сітки.' },
      { label: 'Ідентифікатор', value: 'product-0123456789-abcdefghijklmnopqrstuvwxyz-very-long-identifier' },
      { label: 'Теги', value: 'новинка, знижка, популярне, рекомендоване, обмежена серія' },
    ],
  },
};
