const execute = async (a, b) => {
    return a * b;
};

const details = {
    type: "function",
    function: {
        name: "generatedTool1742009272516",
        parameters: {
            type: "object",
            properties: {
                a: { type: "number", description: "The first number to multiply" },
                b: { type: "number", description: "The second number to multiply" }
            },
            required: ["a", "b"]
        }
    },
    description: "multiply 2 and 2"
};

export { execute, details };