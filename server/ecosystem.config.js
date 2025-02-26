module.exports = {
    apps: [
      {
        name: "projectManagement",
        script: "npm",
        args: "run dev",
        env: {
          NODE_ENV: "development",
        },
      },
    ],
  };