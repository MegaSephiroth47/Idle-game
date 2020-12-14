// Building cost and the points they give you

/*
01- 100                   11- +=          21- +=
02- 100+100=200           12- +=          22- +=
03- 200+200=400           13- +=          23- +=
04- +=          14- +=          24- +=
05- +=        15- +=          25- +=
06- +=        16- +=
07- +=       17- +=
08- +=     18- +=
09- +=     19- +=
10- +=    20-

01- (*50)/100=            11- (*50)/100=                    21- (*50)/100=
02- (*50)/100=            12- (*50)/100=                    22- (*50)/100=
03- (*50)/100=            13- (*50)/100=                    23- (*50)/100=
04- (*50)/100=            14- (*50)/100=                    24- (*50)/100=
05- (*50)/100=            15- (*50)/100=                    25- 838860800
06- (*50)/100=            16- (*50)/100=
07- (*50)/100=            17- (*50)/100=
08- (*50)/100=            18- (*50)/100=
09- (*50)/100=            19- (*50)/100=
10- (*50)/100=            20- (*50)/100=

BuildingPoints = BuildingCost




*/

// When Clicking
var iclick = 0;
function IC(number){
  iclick = iclick + number;

  document.getElementById("clicked").innerHTML = iclick;
};

// Cursors
var cursors = 0;
function buyCursor(){
    var cursorCost = Math.floor(100 * Math.pow(1.1,cursors));     //works out the cost of this cursor
    if(iclick >= cursorCost){                                   //checks that the player can afford the cursor
        cursors = cursors + 1;                                   //increases number of cursors
    	iclick = iclick - cursorCost;                          //removes the cookies spent
        document.getElementById('cursors').innerHTML = cursors;  //updates the number of cursors for the user
        document.getElementById('clicked').innerHTML = iclick;  //updates the number of cookies for the user
    };
    var nextCost = Math.floor(100 * Math.pow(1.1,cursors));       //works out the cost of the next cursor
    document.getElementById('cursorCost').innerHTML = nextCost;  //updates the cursor cost for the user
};

window.setInterval(function(){
  IC(cursors);
}, 1000);

// Minions
var minions = 0;
function buyMinion(){
    var minionCost = Math.floor(200 * Math.pow(1.1,minions));     //works out the cost of this cursor
    if(iclick >= minionCost){                                   //checks that the player can afford the cursor
        minions = minions + 1;                                   //increases number of cursors
    	iclick = iclick - minionCost;                          //removes the cookies spent
        document.getElementById('minions').innerHTML = minions;  //updates the number of cursors for the user
        document.getElementById('clicked').innerHTML = iclick;  //updates the number of cookies for the user
    };
    var nextCost = Math.floor(200* Math.pow(1.1,minions));       //works out the cost of the next cursor
    document.getElementById('minionCost').innerHTML = nextCost;  //updates the cursor cost for the user
};

window.setInterval(function(){
  IC(minions * 2);
}, 1000);

// Clones
var clones = 0;
function buyClone(){
    var cloneCost = Math.floor(400 * Math.pow(1.1,clones));     //works out the cost of this cursor
    if(iclick >= cloneCost){                                   //checks that the player can afford the cursor
        clones = clones + 1;                                   //increases number of cursors
    	iclick = iclick - cloneCost;                          //removes the cookies spent
        document.getElementById('clones').innerHTML = clones;  //updates the number of cursors for the user
        document.getElementById('clicked').innerHTML = iclick;  //updates the number of cookies for the user
    };
    var nextCost = Math.floor(400 * Math.pow(1.1,clones));       //works out the cost of the next cursor
    document.getElementById('cloneCost').innerHTML = nextCost;  //updates the cursor cost for the user
};

window.setInterval(function(){
  IC(clones * 5);
}, 1000);
