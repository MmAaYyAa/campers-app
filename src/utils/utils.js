export const formatLocation = location => {
    const parts = location.split(', ').reverse();
    return parts.join(', ');
  };