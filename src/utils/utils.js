export const formatLocation = location => {
    const parts = location.split(', ').reverse();
    return parts.join(', ');
  };

  export const formatString = str => {
    return str
      .replace(/([A-Z])/g, ' $1')
      .trim()
      .replace(/^./, char => char.toUpperCase());
  };

  export const equipmentIcons = {
    automatic: 'icon-automatic',
    kitchen: 'icon-cup-hot',
    AC: 'icon-wind',
    TV: 'icon-tv',
    bathroom: 'icon-shower',
  };
  
  export const typeIcons = {
    van: 'icon-van',
    fullyIntegrated: 'icon-fully-integrated',
    alcove: 'icon-alcove',
  };