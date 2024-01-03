export default function guardrail(mathFunction) {

    let queue = [];
    try {
        let data = mathFunction();
        queue.push(data, 'Guardrail was processed');
    }
    catch(error) {
        queue.push(`Error: ${error.message}`, 'Guardrail was processed');
    }
    return queue;
}