// — для створення одного спільного екземпляра axios, з налаштуванням withCredentials: true для підтримки cookies;

import axios from "axios";

export const nextServer = axios.create({
  baseURL: "https://notehub-api.goit.study",
  withCredentials: true,
});
