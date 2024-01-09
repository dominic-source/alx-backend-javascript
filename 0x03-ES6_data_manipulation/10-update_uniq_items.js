export default function updateUniqueItems(myMap) {
  for (const [key, value] of myMap) {
    if (value === 1) {
      try {
        myMap.set(key, 100);
      } catch (error) {
        throw new Error('Cannot process');
      }
    }
  }

  return myMap;
}
