// you can modify this, but keep the signature
var TennisGame = function(player1Name, player2Name) {
    this.point = [0,0];

    this.playerName = [player1Name,player2Name];
};

TennisGame.prototype.getNameOfBetter = function() {
	return (this.point[0] > this.point[1]) ? this.playerName[0] : this.playerName[1];
}

TennisGame.prototype.getPlayerScore = function(points) {
	var score = "";
	if(points < 4) {
		switch(points) {
			case 0:
			score = "Love";
			break;
			case 1:
			score = "Fifteen";
			break;
			case 2:
			score = "Thirty";
			break;
			case 3:
			score = "Forty";
			break;
		}
	}
	return score;
};

// you can modify but not rename this function
TennisGame.prototype.getScore = function() {
    var score = ["",""];
	for(var i=0;i<2;i++) {
		score[i] = this.getPlayerScore(this.point[i]);
	}

	if(this.point[0] == this.point[1]) {
		if(this.point[0] < 3) {
			return score[0] + "-All";
		}
		return "Deuce";
	}
	if(this.point[0] < 4 && this.point[1] < 4) {
		return score[0] + "-" + score[1];
	}
	if(Math.abs(this.point[0]-this.point[1])==1) {
		return "Advantage " + this.getNameOfBetter();
	}
	return "Win for " + this.getNameOfBetter();

};

TennisGame.prototype.SetP1Score = function(number) {
    var i;
    for (i = 0; i < number; i++) {
        this.Score(0);
    }
};

TennisGame.prototype.SetP2Score = function(number) {
    var i;
    for (i = 0; i < number; i++) {
        this.Score(1);
    }
};

TennisGame.prototype.Score = function(i) {
    this.point[i]++;
};

TennisGame.prototype.wonPoint = function(player) {
	for(var i=0;i<2;i++) {
		if (player == this.playerName[i]) {
			this.Score(i);
		}
	}
};

// do not modify this function
if (typeof window === "undefined") {
    module.exports = TennisGame;
}
