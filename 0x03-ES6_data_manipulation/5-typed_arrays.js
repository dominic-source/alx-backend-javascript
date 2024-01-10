export default function createInt8TypedArray(length, position, value) {
  const buffer = new ArrayBuffer(length);
  let unit;
  try {
    unit = new DataView(buffer);
    unit.setUint8(position, value);
  } catch (error) { throw new Error('Position outside range'); }

  return unit;
}
