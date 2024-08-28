import { gameManager } from "./store";
import { startLogger } from "./logger";

startLogger();

setInterval(() => {
  gameManager.addGame(Math.random().toString());
}, 2000);
