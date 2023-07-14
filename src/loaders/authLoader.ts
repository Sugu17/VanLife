import { defer } from "react-router-dom";
import { getUserData } from "~/utils/getUserData";

export default function authLoader() {
  return defer({ userPromise: getUserData() });
}
