// import { env } from "process";

const env = process.env;
console.log("env", env.BASE_URL)
const AppConsts = {
  userManagement: {
    defaultAdminUserName: 'admin',
  },
  localization: {
    defaultLocalizationSourceName: 'CarTes',
  },
  authorization: {
    encrptedAuthTokenName: 'enc_auth_token',
  },
  //appBaseUrl: env.BASE_URL
  appBaseUrl: "https://9979-213-196-213-232.ngrok.io/"

};
export default AppConsts;
