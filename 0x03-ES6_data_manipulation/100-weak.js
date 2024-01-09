const weakMap = new WeakMap();

let queries = 0;

function queryAPI(endpoint) {
  queries += 1;
  weakMap.set(endpoint, queries);
  if (weakMap.get(endpoint) >= 5) throw new Error('Endpoint load is high');
}

export { weakMap, queryAPI };
