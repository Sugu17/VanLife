export async function getUserData() {
  const user = await new Promise((resolve) => {
    setTimeout(() => resolve("User from API"), 100);
  });
  return user;
}
