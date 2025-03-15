const execute = async (num1, num2) => {
    return num1 * num2;
};

const details = {
    type: "function",
    function: {
        name: "generatedTool1742008645267",
        parameters: {
            type: "object",
            properties: {
                num1: {
                    type: "number",
                    description: "The first number to multiply"
                },
                num2: {
                    type: "number",
                    description: "The second number to multiply"
                }
            },
            required: ["num1", "num2"]
        }
    },
    description: "multiply 2 and 4"
};

export { execute, details };