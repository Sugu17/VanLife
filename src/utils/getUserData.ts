export async function getUserData() {
  const user = localStorage.getItem("user");
  return user;
}
