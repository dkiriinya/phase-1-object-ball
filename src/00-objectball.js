let teams = {
      home: {
        teamName: "Brooklyn Nets",
        colors: ["Black", "White"],
        players: {
          "Alan Anderson": {
            number: 0,
            shoe: 16,
            points: 22,
            rebounds: 12,
            assists: 12,
            steals: 3,
            blocks: 1,
            slamDunks: 1,
          },
          "Reggie Evans": {
            number: 30,
            shoe: 14,
            points: 12,
            rebounds: 12,
            assists: 12,
            steals: 12,
            blocks: 12,
            slamDunks: 7,
          },
          "Brook Lopez": {
            number: 11,
            shoe: 17,
            points: 17,
            rebounds: 19,
            assists: 10,
            steals: 3,
            blocks: 1,
            slamDunks: 15,
          },
          "Mason Plumlee": {
            number: 1,
            shoe: 19,
            points: 26,
            rebounds: 12,
            assists: 6,
            steals: 3,
            blocks: 8,
            slamDunks: 5,
          },
          "Jason Terry": {
            number: 31,
            shoe: 15,
            points: 19,
            rebounds: 2,
            assists: 2,
            steals: 4,
            blocks: 11,
            slamDunks: 1,
          },
        },
      },
      away: {
        teamName: "Charlotte Hornets",
        colors: ["Turquoise", "Purple"],
        players: {
          "Jeff Adrien": {
            number: 4,
            shoe: 18,
            points: 10,
            rebounds: 1,
            assists: 1,
            steals: 2,
            blocks: 7,
            slamDunks: 2,
          },
          "Bismack Biyombo": {
            number: 0,
            shoe: 16,
            points: 12,
            rebounds: 4,
            assists: 7,
            steals: 22,
            blocks: 15,
            slamDunks: 10,
          },
          "DeSagna Diop": {
            number: 2,
            shoe: 14,
            points: 24,
            rebounds: 12,
            assists: 12,
            steals: 4,
            blocks: 5,
            slamDunks: 5,
          },
          "Ben Gordon": {
            number: 8,
            shoe: 15,
            points: 33,
            rebounds: 3,
            assists: 2,
            steals: 1,
            blocks: 1,
            slamDunks: 0,
          },
          "Brendan Haywood": {
            number: 33,
            shoe: 15,
            points: 6,
            rebounds: 12,
            assists: 12,
            steals: 22,
            blocks: 5,
            slamDunks: 12,
          },
        },
      },
};
    

  
  function numPointsScored(playerName) {
    // Iterate through both home and away teams' players
    for (const team in teams) {
      if (teams[team].players[playerName]) {
        return teams[team].players[playerName].points;
      }
    }
    return null; // Player not found
  }
  
  // Function to get the shoe size of a player
  function shoeSize(playerName) {
    for (const team in teams) {
      if (teams[team].players[playerName]) {
        return teams[team].players[playerName].shoe;
      }
    }
    return null; // Player not found
  }
  
  // Function to get the colors of a team
  function teamColors(teamName) {
    for (const team in teams) {
      if (teams[team].teamName === teamName) {
        return teams[team].colors;
      }
    }
    return null; // Team not found
  }
  
  // Function to get an array of team names
  function teamNames() {
    return [teams.home.teamName, teams.away.teamName];
  }
  
  // Function to get an array of player jersey numbers for a team
  function playerNumbers(teamName) {
    for (const team in teams) {
      if (teams[team].teamName === teamName) {
        return Object.values(teams[team].players).map(player => player.number);
      }
    }
    return null; // Team not found
  }
  
  // Function to get the player's stats as an object
  function playerStats(playerName) {
    for (const team in teams) {
      if (teams[team].players[playerName]) {
        return teams[team].players[playerName];
      }
    }
    return null; // Player not found
  }
  function bigShoeRebounds() {
    let playerWithLargestShoe = null;
    let largestShoeSize = 0;
  
    // Iterate through both home and away teams' players
    for (const team in teams) {
      for (const playerName in teams[team].players) {
        const player = teams[team].players[playerName];
        
        // Check if the current player has a larger shoe size
        if (player.shoe > largestShoeSize) {
          largestShoeSize = player.shoe;
          playerWithLargestShoe = player;
        }
      }
    }
  
    // Check if a player with the largest shoe size was found
    if (playerWithLargestShoe) {
      return playerWithLargestShoe.rebounds;
    } else {
      return null; // No player found (empty teams object or missing player stats)
    }
  }
  function mostPointsScored() {
    let playerWithMostPoints = null;
    let mostPoints = 0;
  
    // Iterate through both home and away teams' players
    for (const team in teams) {
      for (const playerName in teams[team].players) {
        const player = teams[team].players[playerName];
        
        // Check if the current player has more points
        if (player.points > mostPoints) {
          mostPoints = player.points;
          playerWithMostPoints = playerName;
        }
      }
    }
  
    return playerWithMostPoints;
  }
  
  // Function to find the team with the most points
  function winningTeam() {
    let teamWithMostPoints = null;
    let mostPoints = 0;
  
    // Iterate through both home and away teams
    for (const team in teams) {
      let teamPoints = 0;
  
      // Iterate through the players of the current team
      for (const playerName in teams[team].players) {
        teamPoints += teams[team].players[playerName].points;
      }
  
      // Check if the current team has more points
      if (teamPoints > mostPoints) {
        mostPoints = teamPoints;
        teamWithMostPoints = teams[team].teamName;
      }
    }
  
    return teamWithMostPoints;
  }
  
  // Function to find the player with the longest name
  function playerWithLongestName() {
    let playerWithLongestName = null;
    let longestNameLength = 0;
  
    // Iterate through both home and away teams' players
    for (const team in teams) {
      for (const playerName in teams[team].players) {
        const nameLength = playerName.length;
        
        // Check if the current player's name is longer
        if (nameLength > longestNameLength) {
          longestNameLength = nameLength;
          playerWithLongestName = playerName;
        }
      }
    }
  
    return playerWithLongestName;
  }
  
  // Example usage:
  console.log("Player with Most Points:", mostPointsScored());
  console.log("Team with Most Points:", winningTeam());
  console.log("Player with Longest Name:", playerWithLongestName());
  const rebounds = bigShoeRebounds();
  console.log("Number of Rebounds for Player with Largest Shoe Size:", rebounds);
  
  // Example usage:
  console.log("Points Scored:", numPointsScored("Alan Anderson"));
  console.log("Shoe Size:", shoeSize("Alan Anderson"));
  console.log("Team Colors:", teamColors("Brooklyn Nets"));
  console.log("Team Names:", teamNames());
  console.log("Player Numbers:", playerNumbers("Charlotte Hornets"));
  console.log("Player Stats:", playerStats("Jeff Adrien"));