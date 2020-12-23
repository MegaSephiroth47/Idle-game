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
var s4 = 0;
function buys4(){
    var s4Cost = Math.floor(800 * Math.pow(1.1,s4));
    if(iclick >= s4Cost){
        s4 = s4 + 1;
    	iclick = iclick - s4Cost;
        document.getElementById('4').innerHTML = s4;
        document.getElementById('clicked').innerHTML = iclick;
    };
    var nextCost = Math.floor(800 * Math.pow(1.1,s4));
    document.getElementById('s4Cost').innerHTML = nextCost;
};

window.setInterval(function(){
  IC(s4 * 4);
}, 1000);

//5
var s5 = 0;
function buys5(){
    var s5Cost = Math.floor(1600 * Math.pow(1.1,s5));
    if(iclick >= s5Cost){
        s5 = s5 + 1;
    	iclick = iclick - s5Cost;
        document.getElementById('5').innerHTML = s5;
        document.getElementById('clicked').innerHTML = iclick;
    };
    var nextCost = Math.floor(1600 * Math.pow(1.1,s5));
    document.getElementById('s5Cost').innerHTML = nextCost;
};

window.setInterval(function(){
  IC(s5 * 8);
}, 1000);

//6
var s6 = 0;
function buys6(){
    var s6Cost = Math.floor(4800 * Math.pow(1.1,s6));
    if(iclick >= s6Cost){
        s6 = s6 + 1;
    	iclick = iclick - s6Cost;
        document.getElementById('6').innerHTML = s6;
        document.getElementById('clicked').innerHTML = iclick;
    };
    var nextCost = Math.floor(4800 * Math.pow(1.1,s6));
    document.getElementById('s6Cost').innerHTML = nextCost;
};

window.setInterval(function(){
  IC(s6 * 16);
}, 1000);

//7
var s7 = 0;
function buys7(){
    var s7Cost = Math.floor(14400 * Math.pow(1.1,s7));
    if(iclick >= s7Cost){
        s7 = s7 + 1;
    	iclick = iclick - s7Cost;
        document.getElementById('7').innerHTML = s7;
        document.getElementById('clicked').innerHTML = iclick;
    };
    var nextCost = Math.floor(14400 * Math.pow(1.1,s7));
    document.getElementById('s7Cost').innerHTML = nextCost;
};

window.setInterval(function(){
  IC(s7 * 48);
}, 1000);

//8
var s8 = 0;
function buys8(){
    var s8Cost = Math.floor(43200 * Math.pow(1.1,s8));
    if(iclick >= s8Cost){
        s8 = s8 + 1;
    	iclick = iclick - s8Cost;
        document.getElementById('8').innerHTML = s8;
        document.getElementById('clicked').innerHTML = iclick;
    };
    var nextCost = Math.floor(43200 * Math.pow(1.1,s8));
    document.getElementById('s8Cost').innerHTML = nextCost;
};

window.setInterval(function(){
  IC(s8 * 144);
}, 1000);

//9
var s9 = 0;
function buys9(){
    var s9Cost = Math.floor(129600 * Math.pow(1.1,s9));
    if(iclick >= s9Cost){
        s9 = s9 + 1;
    	iclick = iclick - s9Cost;
        document.getElementById('9').innerHTML = s9;
        document.getElementById('clicked').innerHTML = iclick;
    };
    var nextCost = Math.floor(129600 * Math.pow(1.1,s9));
    document.getElementById('s9Cost').innerHTML = nextCost;
};

window.setInterval(function(){
  IC(s9 * 432);
}, 1000);

//10
var s10 = 0;
function buys10(){
    var s10Cost = Math.floor(388800 * Math.pow(1.1,s10));
    if(iclick >= s10Cost){
        s10 = s10 + 1;
    	iclick = iclick - s10Cost;
        document.getElementById('10').innerHTML = s10;
        document.getElementById('clicked').innerHTML = iclick;
    };
    var nextCost = Math.floor(388800 * Math.pow(1.1,s10));
    document.getElementById('s10Cost').innerHTML = nextCost;
};

window.setInterval(function(){
  IC(s10 * 1296);
}, 1000);

//11
var s11 = 0;
function buys11(){
    var s11Cost = Math.floor(1555200 * Math.pow(1.1,s11));
    if(iclick >= s11Cost){
        s11 = s11 + 1;
    	iclick = iclick - s11Cost;
        document.getElementById('11').innerHTML = s11;
        document.getElementById('clicked').innerHTML = iclick;
    };
    var nextCost = Math.floor(1555200 * Math.pow(1.1,s11));
    document.getElementById('s11Cost').innerHTML = nextCost;
};

window.setInterval(function(){
  IC(s11 * 5184);
}, 1000);

//12
var s12 = 0;
function buys12(){
    var s12Cost = Math.floor(6220800 * Math.pow(1.1,s12));
    if(iclick >= s12Cost){
        s12 = s12 + 1;
    	iclick = iclick - s12Cost;
        document.getElementById('12').innerHTML = s12;
        document.getElementById('clicked').innerHTML = iclick;
    };
    var nextCost = Math.floor(6220800 * Math.pow(1.1,s12));
    document.getElementById('s12Cost').innerHTML = nextCost;
};

window.setInterval(function(){
  IC(s12 * 20736);
}, 1000);

//13
var s13 = 0;
function buys13(){
    var s13Cost = Math.floor(24883200 * Math.pow(1.1,s13));
    if(iclick >= s13Cost){
        s13 = s13 + 1;
    	iclick = iclick - s13Cost;
        document.getElementById('13').innerHTML = s13;
        document.getElementById('clicked').innerHTML = iclick;
    };
    var nextCost = Math.floor(24883200 * Math.pow(1.1,s13));
    document.getElementById('s13Cost').innerHTML = nextCost;
};

window.setInterval(function(){
  IC(s13 * 82944);
}, 1000);

//14
var s14 = 0;
function bus14(){
    var s14Cost = Math.floor(99532800 * Math.pow(1.1,s14));
    if(iclick >= s14Cost){
        s14 = s14 + 1;
    	iclick = iclick - s14Cost;
        document.getElementById('14').innerHTML = s14;
        document.getElementById('clicked').innerHTML = iclick;
    };
    var nextCost = Math.floor(99532800 * Math.pow(1.1,s14));
    document.getElementById('s14Cost').innerHTML = nextCost;
};

window.setInterval(function(){
  IC(s14 * 331776);
}, 1000);

//15
var s15 = 0;
function buys15(){
    var s15Cost = Math.floor(398131200 * Math.pow(1.1,s15));
    if(iclick >= s15Cost){
        s15 = s15 + 1;
    	iclick = iclick - s15Cost;
        document.getElementById('15').innerHTML = s15;
        document.getElementById('clicked').innerHTML = iclick;
    };
    var nextCost = Math.floor(398131200 * Math.pow(1.1,s15));
    document.getElementById('s15Cost').innerHTML = nextCost;
};

window.setInterval(function(){
  IC(s15 * 1327104);
}, 1000);

//16
var s16 = 0;
function buys16(){
    vars16Cost = Math.floor(1990656000 * Math.pow(1.1,s16));
    if(iclick >= s16Cost){
        s16 = s16 + 1;
    	iclick = iclick - s16Cost;
        document.getElementById('16').innerHTML = s16;
        document.getElementById('clicked').innerHTML = iclick;
    };
    var nextCost = Math.floor(1990656000 * Math.pow(1.1,s16));
    document.getElementById('s16Cost').innerHTML = nextCost;
};

window.setInterval(function(){
  IC(s16 * 6635520);
}, 1000);

//17
var s17 = 0;
function buys17(){
    var s17Cost = Math.floor(9953280000 * Math.pow(1.1,s17));
    if(iclick >= s17Cost){
        s17 = s17 + 1;
    	iclick = iclick - s17Cost;
        document.getElementById('17').innerHTML = s17;
        document.getElementById('clicked').innerHTML = iclick;
    };
    var nextCost = Math.floor(9953280000 * Math.pow(1.1,s17));
    document.getElementById('s17Cost').innerHTML = nextCost;
};

window.setInterval(function(){
  IC(s17 * 33177600);
}, 1000);

//18
var s18 = 0;
function buys18(){
    var s18Cost = Math.floor(49766400000 * Math.pow(1.1,s18));
    if(iclick >= s18Cost){
        s18 = s18 + 1;
    	iclick = iclick - s18Cost;
        document.getElementById('18').innerHTML = s18;
        document.getElementById('clicked').innerHTML = iclick;
    };
    var nextCost = Math.floor(49766400000 * Math.pow(1.1,s18));
    document.getElementById('s18Cost').innerHTML = nextCost;
};

window.setInterval(function(){
  IC(s18 * 165888000);
}, 1000);

//19
var s19 = 0;
function buys19(){
    var s19Cost = Math.floor(248832000000 * Math.pow(1.1,s19));
    if(iclick >= s19Cost){
        s19 = s19 + 1;
    	iclick = iclick - s19Cost;
        document.getElementById('19').innerHTML = s19;
        document.getElementById('clicked').innerHTML = iclick;
    };
    var nextCost = Math.floor(248832000000 * Math.pow(1.1,s19));
    document.getElementById('s19Cost').innerHTML = nextCost;
};

window.setInterval(function(){
  IC(s19 * 829440000);
}, 1000);

//20
var s20 = 0;
function buys20(){
    var s20Cost = Math.floor(1244160000000 * Math.pow(1.1,s20));
    if(iclick >= s20Cost){
        s20 = s20 + 1;
    	iclick = iclick - s20Cost;
        document.getElementById('20').innerHTML = s20;
        document.getElementById('clicked').innerHTML = iclick;
    };
    var nextCost = Math.floor(1244160000000 * Math.pow(1.1,s20));
    document.getElementById('s20Cost').innerHTML = nextCost;
};

window.setInterval(function(){
  IC(s20 * 4147200000);
}, 1000);

//21
var s21 = 0;
function buys21(){
    var s21Cost = Math.floor(7464960000000 * Math.pow(1.1,s21));
    if(iclick >= s21Cost){
        s21 = s21 + 1;
    	iclick = iclick - s21Cost;
        document.getElementById('21').innerHTML = s21;
        document.getElementById('clicked').innerHTML = iclick;
    };
    var nextCost = Math.floor(7464960000000 * Math.pow(1.1,s21));
    document.getElementById('s21Cost').innerHTML = nextCost;
};

window.setInterval(function(){
  IC(s21 * 24883200000);
}, 1000);

//22
var s22 = 0;
function buys22(){
    var s22Cost = Math.floor(44789760000000 * Math.pow(1.1,s22));
    if(iclick >= s22Cost){
        s22 = s22 + 1;
    	iclick = iclick - s22Cost;
        document.getElementById('22').innerHTML = s22;
        document.getElementById('clicked').innerHTML = iclick;
    };
    var nextCost = Math.floor(44789760000000 * Math.pow(1.1,s22));
    document.getElementById('s22Cost').innerHTML = nextCost;
};

window.setInterval(function(){
  IC(s22 * 149299200000);
}, 1000);

//23
var s23 = 0;
function buys23(){
    var s23Cost = Math.floor(268738560000000 * Math.pow(1.1,s23));
    if(iclick >= s23Cost){
        s23 = s23 + 1;
    	iclick = iclick - s23Cost;
        document.getElementById('23').innerHTML = s23;
        document.getElementById('clicked').innerHTML = s23;
    };
    var nextCost = Math.floor(268738560000000 * Math.pow(1.1,s23));
    document.getElementById('s23Cost').innerHTML = nextCost;
};

window.setInterval(function(){
  IC(s23 * 895795200000);
}, 1000);

//24
var s24 = 0;
function buys24(){
    var s24Cost = Math.floor(1612431360000000 * Math.pow(1.1,s24));
    if(iclick >= s24Cost){
        s24 = s24 + 1;
    	iclick = iclick - s24Cost;
        document.getElementById('24').innerHTML = s24;
        document.getElementById('clicked').innerHTML = iclick;
    };
    var nextCost = Math.floor(1612431360000000 * Math.pow(1.1,s24));
    document.getElementById('s24Cost').innerHTML = nextCost;
};

window.setInterval(function(){
  IC(s24 * 5374771200000);
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
