function  save(){
  var save = {
    iclick: iclick,
    cursors: cursors,
    minions: minions,
    clones: clones,
    //prestige: prestige
  }
localStorage.setItem("save",JSON.stringify(save));

}

function load(){
  var savegame = JSON.parse(localStorage.getItem("save"));
  if (typeof savegame.iclick !== "undefined") iclick = savegame.iclick;
  if (typeof savegame.cursors !== "undefined") cursors = savegame.cursors;
  if (typeof savegame.minions !== "undefined") minions = savegame.minions;
  if (typeof savegame.clones !== "undefined") clones = savegame.clones;

}
