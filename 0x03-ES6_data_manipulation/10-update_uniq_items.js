export default function updateUniqueItems(myMap) {
  if (myMap instanceof Map) {
    for (const [key, value] of myMap.entries()) {
      if (value === 1) {
        myMap.set(key, 100);
      }
    }
  } else {
    throw new Error('Cannot process');
  }
  return myMap;
}
