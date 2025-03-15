const execute = async ({ operation, numbers }) => {
    switch (operation) {
        case 'add':
            return numbers.reduce((acc, num) => acc + num, 0);
        case 'multiply':
            return numbers.reduce((acc, num) => acc * num, 1);
        default:
            throw new Error('Unsupported operation');
    }
};

const details = {
    type: "function",
    function: {
        name: "generatedTool1742009088898",
        parameters: {
            type: "object",
            properties: {
                operation: {
                    type: "string",
                    description: "The operation to perform, e.g., 'add' or 'multiply'."
                },
                numbers: {
                    type: "array",
                    items: {
                        type: "number"
                    },
                    description: "An array of numbers to be processed with the specified operation."
                }
            },
            required: ["operation", "numbers"]
        }
    },
    description: "add 2 and 3 and 4"
};

export { execute, details };