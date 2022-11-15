exports.handler = async (event) => {
  const response = {
    statusCode: 200,
    headers: {
      "content-type": "text/html",
    },
    body: `
%s
        `,
  };
  return response;
};
