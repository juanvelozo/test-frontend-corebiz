import axios from "axios";

const baseUrl = `https://corebiz-test.herokuapp.com/api/v1/newsletter`;
const mail = async (credentials) => {
  const { data } = await axios.post(baseUrl, credentials);
  return data;
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { mail };
