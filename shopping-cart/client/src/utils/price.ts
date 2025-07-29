
import dayjs from 'dayjs';

export const formatPrice = (price: number) => {
  return price.toFixed(2);
};

export const formatDate = (date: Date) => {
  return dayjs(date).format('YYYY-MM-DD');
};
