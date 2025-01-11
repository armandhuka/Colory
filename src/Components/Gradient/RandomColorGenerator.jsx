const RandomColorGenerator = (type) => {
    const getRandom = (max) => Math.floor(Math.random() * max);
    const toHex = (value) => value.toString(16).padStart(2, '0');
  
    switch (type) {
      case 'dark':
        return `#${toHex(getRandom(128))}${toHex(getRandom(128))}${toHex(getRandom(128))}`;
      case 'warm':
        return `#${toHex(getRandom(128) + 128)}${toHex(getRandom(128))}${toHex(getRandom(64))}`;
      case 'cool':
        return `#${toHex(getRandom(64))}${toHex(getRandom(128))}${toHex(getRandom(128) + 128)}`;
      case 'pastel':
        return `#${toHex(getRandom(128) + 128)}${toHex(getRandom(128) + 128)}${toHex(getRandom(128) + 128)}`;
      case 'neon':
        return `#${toHex(getRandom(256))}${toHex(getRandom(256))}${toHex(getRandom(256))}`;
      case 'metallic':
        return `#${toHex(getRandom(192) + 64)}${toHex(getRandom(192) + 64)}${toHex(getRandom(192) + 64)}`;
      default:
        return `#${toHex(getRandom(256))}${toHex(getRandom(256))}${toHex(getRandom(256))}`;
    }
  };
  
  export default RandomColorGenerator;
  