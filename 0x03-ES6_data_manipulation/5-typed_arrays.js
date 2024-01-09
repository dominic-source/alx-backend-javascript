export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  let unit;
  try {
    unit = new Int8Array(buffer);
    unit[position] = value;
  } catch (error) { throw new Error('Position outside range'); }

  return buffer;
}
