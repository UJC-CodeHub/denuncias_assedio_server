export const CreateUserValidator = {
  code: {
    optional: false,
    errorMessage: "Please enter a code",
    isString: {
      errorMessage: "Enter a valid code name",
    },
  },
  password: {
    optional: false,
    errorMessage: "Please insert a password",
    isString: {
      errorMessage: "The inserted password must contain 4 caracters",
      options: {
        min: 4,
      },
    },
  },
};
