const execute = async ({ number1, number2 }) => {
    return number1 * number2;
};

const details = {
    type: "function",
    function: {
        name: "generatedTool1741894304790",
        parameters: {
            type: "object",
            properties: {
                number1: { type: "number", description: "The first number to multiply" },
                number2: { type: "number", description: "The second number to multiply" }
            },
            required: ["number1", "number2"]
        }
    },
    description: "multiply 3 and 2"
};

export { execute, details };