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