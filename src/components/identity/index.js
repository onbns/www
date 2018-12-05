import Identity from "netlify-identity-widget";

export default {
 loginUser: () => {
  if (Identity && Identity.currentUser()) {
    const {
      app_metadata, created_at, confirmed_at, email, id, user_metadata
    } = Identity.currentUser();

    localStorage.setItem(
      "currentOpenBNS_User",
      JSON.stringify({...app_metadata, created_at, confirmed_at, email, id, ...user_metadata})
    );
  }
 },
 logoutUser: () => {
  localStorage.removeItem("currentOpenBNS_User");
 }
}
