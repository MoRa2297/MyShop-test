import { pb } from "../../pocketbase";

export function login(username: string, password: string) {
  console.log("DIO CANE: ", pb.collection);
  return pb.admins.authWithPassword(username, password);
}

export function logout() {
  pb.authStore.clear();
}

export function getToken() {
  return pb.authStore.token;
}

export function isLogged() {
  return pb.authStore.isValid;
}
