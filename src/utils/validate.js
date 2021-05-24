import joi from "joi-browser";

const schema = {
  email: joi.string().required().label("Email"),
  password: joi.string().required().min(6).label("Password"),
};

const modalSchema = {
  employee_name: joi.string().required().label("Employee Name"),
  employee_salary: joi.number().required().min(1000).label("Employee Salary"),
  employee_age: joi.number().required().min(5).label("Employee Age"),
};

export const validate = (data, type) => {
  const options = { abortEarly: false };
  const validationSchema = type === "login" ? schema : modalSchema;
  const { error } = joi.validate(data, validationSchema, options);
  if (!error) return null;
  const errors = {};
  for (let item of error.details) {
    errors[item.path[0]] = item.message;
  }
  return errors;
};
