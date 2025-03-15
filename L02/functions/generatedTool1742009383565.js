const execute = async (num1, num2) => {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        throw new Error('Both arguments must be numbers.');
    }
    if (num2 === 0) {
        throw new Error('Division by zero is not allowed.');
    }
    return num1 / num2;
};

const details = {
    type: "function",
    function: {
        name: "generatedTool1742009383565",
        parameters: {
            type: "object",
            properties: {
                num1: {
                    type: "number",
                    description: "The numerator in the division."
                },
                num2: {
                    type: "number",
                    description: "The denominator in the division."
                }
            },
            required: ["num1", "num2"]
        }
    },
    description: "divide 10 and 2"
};

export { execute, details };