import { DEBUG } from "./constants";

export function debug(message?: any, ...optionalParams: any[]): void {
  if (DEBUG) {
    console.log(message, ...optionalParams);
  }
}
