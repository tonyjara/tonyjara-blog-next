import { format } from 'date-fns';

export function formatDate(date: Date, pattern = 'PPP') {
  return format(new Date(date), pattern);
}
