function  save(){
  var save = {
    iclick: iclick,
    cursors: cursors,
    minions: minions,
    clones: clones,
    s25: s25,
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
  if (typeof savegame.s25 !== "undefined") s25 = savegame.s25;
}

function remove(){
  var remove = JSON.parse(localStorage.clear("save"));

  if (typeof remove.iclick !== "undefined") iclick = remove.iclick;
  if (typeof remove.cursors !== "undefined") cursors = remove.cursors;
  if (typeof remove.minions !== "undefined") minions = remove.minions;
  if (typeof remove.clones !== "undefined") clones = remove.clones;
  if (typeof remove.s25 !== "undefined") s25 = remove.s25;
}
