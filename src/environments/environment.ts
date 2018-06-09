// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

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
  logger: Level.DEBUG
};



