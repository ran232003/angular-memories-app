export const checkField = (fieldName: string, value: string): string => {
  let error = '';
  console.log(fieldName, value);
  switch (fieldName) {
    case 'passwordForm':
      // code block
      if (value.trim().length !== 0 && value.trim().length >= 6) {
      } else {
        error = 'Password must be at least 6 charecters';
      }
      break;
    case 'emailForm':
      // code block
      if (value.trim().length !== 0) {
        const regexExp =
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gi;

        if (regexExp.test(value)) {
        } else {
          error = 'Email Is Not Valid';
        }
      } else {
        error = 'Email Is Mandatory Field';
      }
      break;
    default:
      // code blockr
      return error;
  }
  return error;
};
