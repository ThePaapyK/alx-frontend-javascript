export default function createInt8TypedArray(length, position, value) {
  const arr = new ArrayBuffer(length);
  const val = new DataView(arr);

  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  val.setInt8(position, value);

  return val;
}
