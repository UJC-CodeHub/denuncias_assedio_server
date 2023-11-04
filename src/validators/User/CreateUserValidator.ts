export const CreateUserValidator = {
  code: {
    optional: false,
    errorMessage: "Please enter a code",
    isString: {
      errorMessage: "Enter a valid code name",
    },
  },
  password: {
    isLength: {
      options: { min: 4 },
      errorMessage: "Password should be at least 4 chars",
    },
  },
};
