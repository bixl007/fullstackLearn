interface Game {
  id: string;
  whitePlayerName: string;
  blackPlayerName: string;
  moves: string[];
}

export class GameManager {
  games: Game[] = [];
  constructor() {
    this.games = [];
  }

  addMove(gameId: string, move: string) {
    console.log(`Adding move ${move} to game ${gameId}`);
    const game = this.games.find((game) => game.id === gameId);
    game?.moves.push(move); // Changes may affect the code
  }

  addGame(gameId: string) {
    const game = {
      id: gameId,
      whitePlayerName: "Alice",
      blackPlayerName: "Bob",
      moves: [],
    };
    this.games.push(game);
  }

  log() {
    console.log(this.games);
  }
}

export const gameManager = new GameManager();
