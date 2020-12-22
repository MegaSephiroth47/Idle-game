// Building cost and the points they give you

/*
1 --> 100
2-5 --> *2
6-10 --> *3
11-15 --> *4
16-20 --> *5
21-25 --> *6

01- 100      11- 1555200        21- 7464960000000
02- 200      12- 6220800        22- 44789760000000
03- 400      13- 24883200       23- 268738560000000
04- 800      14- 99532800       24- 1612431360000000
05- 1600     15- 398131200      25- 9674588160000000

06- 4800     16- 1990656000
07- 14400    17- 9953280000
08- 43200    18- 49766400000
09- 129600   19- 248832000000
10- 388800   20- 1244160000000
*/


//Cps per building = ((StartedBuildingCost/75%Bcost) * NumberOfBuildings)/100

/*
01- ((100/75)*25)/100=0.3(0.5)   11- ((1555200/75)*25)/100       =       5184    21- ((7464960000000/75)*25)/100    =    24883200000
02- ((200/75)*25)/100=0.6(1)     12- ((6220800/75)*25)/100       =      20736    22- ((44789760000000/75)*25)/100   =   149299200000
03- ((400/75)*25)/100=1.3(2)     13- ((24883200/75)*25)/100      =      82944    23- ((268738560000000/75)*25)/100  =   895795200000
04- ((800/75)*25)/100=2.6(4)     14- ((99532800/75)*25)/100      =     331776    24- ((1612431360000000/75)*25)/100 =  5374771200000
05- ((1600/75)*25)/100=5.3(8)    15- ((398131200/75)*25)/100     =    1327104    25- ((9674588160000000/75)*25)/100 = 32248627200000
06- ((4800/75)*25)/100=16        16- ((1990656000/75)*25)/100    =    6635520
07- ((14400/75)*25)/100=48       17- ((9953280000/75)*25)/100    =   33177600
08- ((43200/75)*25)/100=144      18- ((49766400000/75)*25)/100   =  165888000
09- ((129600/75)*25)/100=432     19- ((248832000000/75)*25)/100  =  829440000
10- ((388800/75)*25)/100=1296    20- ((1244160000000/75)*25)/100 = 4147200000
*/



// When Clicking
var iclick = 0;
function IC(number){
  iclick = iclick + number;

  document.getElementById("clicked").innerHTML = iclick;
};

//Clicks Per Second






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
  IC(cursors * 0.5);
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
  IC(minions * 1);
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
  IC(clones * 2);
}, 1000);


//4
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

//5
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

//6
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

//7
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

//8
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

//9
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

//10
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

//11
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

//12
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

//13
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

//14
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

//15
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

//16
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

//17
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

//18
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

//19
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

//20
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

//21
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

//22
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

//23
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

//24
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

//25
var s25 = 0;
function buys25(){
    var s25Cost = Math.floor(9674588160000000 * Math.pow(1.1,s25));
    if(iclick >= s25Cost){
        s25 = s25 + 1;
    	iclick = iclick - s25Cost;
        document.getElementById('25').innerHTML = s25;
        document.getElementById('clicked').innerHTML = iclick;
    };
    var nextCost = Math.floor(9674588160000000 * Math.pow(1.1,s25));
    document.getElementById('s25Cost').innerHTML = nextCost;
};

window.setInterval(function(){
  IC(s25 * 32248627200000);
}, 1000);
