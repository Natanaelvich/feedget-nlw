const swaggerAutogen = require("swagger-autogen")({ openapi: "3.0.0" });

const doc = {
  info: {
    title: "Feedget API",
    description: "Get Feedbacks user clients",
  },
  host: "localhost:3000",
  schemes: ["http"],
  components: {
    "@schemas": {
      createFeedback: {
        type: "object",
        properties: {
          type: {
            type: "string",
          },
          comment: {
            type: "string",
          },
          screenshot: {
            type: "string",
            required : false
          },
        },
      },
    },
  },
};

const outputFile = "./src/swagger/swagger_output.json";
const endpointsFiles = ["./src/server.ts"];

swaggerAutogen(outputFile, endpointsFiles, doc);
