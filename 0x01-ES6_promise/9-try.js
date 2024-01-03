export default function guardrail(mathFunction) {
  const queue = [];
  try {
    const data = mathFunction();
    queue.push(data, 'Guardrail was processed');
  } catch (error) {
    queue.push(`Error: ${error.message}`, 'Guardrail was processed');
  }
  return queue;
}
