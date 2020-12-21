// Building cost and the points they give you

/*

1 --> 100
2-5 --> *2
6-10 --> *3
11-15 --> *4
16-20 --> *5
21-25 --> *6

01- 100       11- 1 555 200           21- 7 464 960 000 000
02- 200       12- 6 220 800           22- 44 789 760 000 000
03- 400       13- 24 883 200          23- 268 738 560 000 000
04- 800       14- 99 532 800          24- 1 612 431 360 000 000
05- 1.600     15- 398 131 200         25- 9 674 588 160 000 000

06- 4.800     16- 1 990 656 000
07- 14.400    17- 9 953 280 000
08- 43.200    18- 49 766 400 000
09- 129.600   19- 248 832 000 000
10- 388.800   20- 1 244 160 000 000

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

BuildingPoints = StartedBuildingCost 




*/

function prettify(input){
    var output = Math.round(input * 1000000)/1000000;
	return output;
}

document.getElementById('clicked').innerHTML = prettify(clicked);



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
    var cloneCost = Math.floor(400 * Math.pow(1.1,clones));
    if(iclick >= cloneCost){
        clones = clones + 1;
    	iclick = iclick - cloneCost;
        document.getElementById('clones').innerHTML = clones;
        document.getElementById('clicked').innerHTML = iclick;
    };
    var nextCost = Math.floor(400 * Math.pow(1.1,clones));
    document.getElementById('cloneCost').innerHTML = nextCost;
};

window.setInterval(function(){
  IC(clones * 5);
}, 1000);
