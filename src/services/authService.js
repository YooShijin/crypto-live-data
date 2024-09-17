// // import { Alchemy, Network } from "alchemy-sdk";

// const settings = {
//   apiKey: process.env.REACT_APP_ALCHEMY_API_KEY,
//   network: Network.ETH_MAINNET,
// };

// const alchemy = new Alchemy(settings);

// export async function registerWithPasskey() {
//   try {
//     const authClient = await alchemy.auth.getAuthClient();
//     const { address, isNewUser } = await authClient.registerNewPasskey();

//     if (isNewUser) {
//       console.log("New user registered with address:", address);
//     } else {
//       console.log("Existing user logged in with address:", address);
//     }

//     return { success: true, address };
//   } catch (error) {
//     console.error("Registration error:", error);
//     return { success: false, error: error.message };
//   }
// }

export async function loginWithPasskey() {
  // try {
  //   const authClient = await alchemy.auth.getAuthClient();
  //   const { address } = await authClient.authenticateWithPasskey();
  //   console.log("User logged in with address:", address);
  //   return { success: true, address };
  // } catch (error) {
  //   console.error("Login error:", error);
  //   return { success: false, error: error.message };
  // }
}

export async function logout() {
  // try {
  //   const authClient = await alchemy.auth.getAuthClient();
  //   await authClient.logout();
  //   console.log("User logged out successfully");
  //   return { success: true };
  // } catch (error) {
  //   console.error("Logout error:", error);
  //   return { success: false, error: error.message };
  // }
}

export async function isAuthenticated() {
  // try {
  //   const authClient = await alchemy.auth.getAuthClient();
  //   const isAuth = await authClient.isAuthenticated();
  //   return isAuth;
  // } catch (error) {
  //   console.error("Authentication check error:", error);
  //   return false;
  // }
}

// import { Alchemy } from "alchemy-sdk";

// const alchemy = new Alchemy(/* Alchemy configuration */);

export async function registerWithPasskey() {
  // Implement registration logic using Alchemy's SDK
}
