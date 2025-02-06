export const getColorByIndex = (index: number) => {
    switch (index) {
      case 0:
        return { background: '#E5F9F6', border: '2px solid #00C2A6', color: '#00C2A6' }; // Green
      case 1:
        return { background: '#F6E5F9', border: '2px solid #6707FD', color: '#6707FD' }; // Violet
      case 2:
        return { background: '#E5E9F9', border: '2px solid #0066C2', color: '#0066C2' }; // Blue
      default:
        return { background: '#E5F9F6', border: '2px solid #00C2A6', color: '#00C2A6' }; // Default (Green)
    }
};

export const formatDateRange = (fromDate: string, toDate: string): string => {
  const parseDate = (dateStr: string) => {
    const [day, month, year] = dateStr.split("-").map(Number);
    return new Date(year, month - 1, day);
  };

  const from = parseDate(fromDate);
  const to = parseDate(toDate);

  const optionsFrom: Intl.DateTimeFormatOptions = { month: "short", day: "numeric" };
  const optionsTo: Intl.DateTimeFormatOptions = { month: "short", day: "numeric", year: "numeric" };

  return `${from.toLocaleDateString("en-US", optionsFrom)} - ${to.toLocaleDateString("en-US", optionsTo)}`;
};

export const parseCutoffDate = (cutoffDate: string): { day: number, month: string } => {
  const [day, month] = cutoffDate.split("-").map(Number);

  const monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];

  return { day, month: monthNames[month - 1] };
};