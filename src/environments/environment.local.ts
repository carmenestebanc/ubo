/* Logger level

Level.OFF
Level.ERROR
Level.WARN
Level.INFO
Level.DEBUG
Level.LOG
*/
import { Level } from "angular2-logger/core";

export const environment = {
  production: false,
  apiUrl: 'http://localhost:8000/api/v1/',
  client_id: 'YAADnYGOBi6GciAQ',
  client_secret: "6r0JynhdNqKhfQHFytTqLPpfPyphbi1519938523",
  logger: Level.OFF
};
