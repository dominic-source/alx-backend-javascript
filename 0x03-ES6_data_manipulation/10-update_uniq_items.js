export default function updateUniqueItems(myMap) {
  try {
    for (const [key, value] of myMap.enteries()) {
      if (value === 1) {
        myMap.set(key, 100);
      }
    }
  } catch (error) {
    throw new Error('Cannot process');
  }
  return myMap;
}
