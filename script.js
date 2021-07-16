const team = {
    _players: [
      {
        firstName: 'Francis',
        lastName: 'Adjei',
        age: 23
      },
      {
        firstName: 'Jochebed',
        lastName: 'Adjei',
        age: 19
      },
      {
        firstName: 'Grace',
        lastName: 'Adjei',
        age: 29
      }
    ],
    _games: [
      {
        opponent: 'Francis FC',
        teamPoints: 24,
        opponentPoints: 50
      },
      {
        opponent: 'Grace FC',
        teamPoints: 24,
        opponentPoints: 53
      },
      {
        opponent: 'Jochebed FC',
        teamPoints: 44,
        opponentPoints: 40
      }
    ],
  
    get players() {
      return this._players;
    },
    get games() {
      return this._games;
    },
  
    addPlayer(firstName, lastName, age) {
      const player = {
        firstName,
        lastName,
        age
      }
      this.players.push(player);
    },
  
    addGame(opponent, teamPoints, opponentPoints) {
      const game = {
        opponent,
        teamPoints,
        opponentPoints
      }
      this._games.push(game);
    },
  };
  
  team.addPlayer('Lina', 'Adjei', 25);
  team.addPlayer('Olivier', 'Giroud', 34);
  team.addPlayer('Callum', 'Hudson-Odoi', 20);
  
  console.log(team.players);
  
  team.addGame('Lina FC', 24, 49);
  team.addGame('Joseph FC', 24, 33);
  team.addGame('Nii FC', 24, 30);
  
  console.log();
  console.log(team.games);
  