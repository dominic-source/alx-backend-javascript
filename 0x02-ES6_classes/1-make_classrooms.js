import ClassRoom from './0-classroom';

export default function initializeRooms() {
  const num1 = new ClassRoom(19);
  const num2 = new ClassRoom(20);
  const num3 = new ClassRoom(34);
  return [num1, num2, num3];
}
