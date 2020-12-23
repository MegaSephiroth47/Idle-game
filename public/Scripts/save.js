function  save(){
  var save = {
    iclick: iclick,
    cursors: cursors,
    minions: minions,
    clones: clones,
    s4: s4,
    s5: s5,
    s6: s6,
    s7: s7,
    s8: s8,
    s9: s9,
    s10: s10,
    s11: s11,
    s12: s12,
    s13: s13,
    s14: s14,
    s15: s15,
    s16: s16,
    s17: s17,
    s18: s18,
    s19: s19,
    s20: s20,
    s21: s21,
    s22: s22,
    s23: s23,
    s24: s24,
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
  if (typeof savegame.s4 !== "undefined") s4 = savegame.s4;
  if (typeof savegame.s5 !== "undefined") s5 = savegame.s5;
  if (typeof savegame.s6 !== "undefined") s6 = savegame.s6;
  if (typeof savegame.s7 !== "undefined") s7 = savegame.s7;
  if (typeof savegame.s8 !== "undefined") s8 = savegame.s8;
  if (typeof savegame.s9 !== "undefined") s9 = savegame.s9;
  if (typeof savegame.s10 !== "undefined") s10 = savegame.s10;
  if (typeof savegame.s11 !== "undefined") s11 = savegame.s11;
  if (typeof savegame.s12 !== "undefined") s12 = savegame.s12;
  if (typeof savegame.s13 !== "undefined") s13 = savegame.s13;
  if (typeof savegame.s14 !== "undefined") s14 = savegame.s14;
  if (typeof savegame.s15 !== "undefined") s15 = savegame.s15;
  if (typeof savegame.s16 !== "undefined") s16 = savegame.s16;
  if (typeof savegame.s17 !== "undefined") s17 = savegame.s17;
  if (typeof savegame.s18 !== "undefined") s18 = savegame.s18;
  if (typeof savegame.s19 !== "undefined") s19 = savegame.s19;
  if (typeof savegame.s20 !== "undefined") s20 = savegame.s20;
  if (typeof savegame.s21 !== "undefined") s21 = savegame.s21;
  if (typeof savegame.s22 !== "undefined") s22 = savegame.s22;
  if (typeof savegame.s23 !== "undefined") s23 = savegame.s23;
  if (typeof savegame.s24 !== "undefined") s24 = savegame.s24;
  if (typeof savegame.s25 !== "undefined") s25 = savegame.s25;
}






function remove(){
  var remove = JSON.parse(localStorage.clear("save"));

  if (typeof remove.iclick !== "undefined") iclick = remove.iclick;
  if (typeof remove.cursors !== "undefined") cursors = remove.cursors;
  if (typeof remove.minions !== "undefined") minions = remove.minions;
  if (typeof remove.clones !== "undefined") clones = remove.clones;
  if (typeof remove.s4 !== "undefined") s4 = remove.s4;
  if (typeof remove.s5 !== "undefined") s5 = remove.s5;
  if (typeof remove.s6 !== "undefined") s6 = remove.s6;
  if (typeof remove.s7 !== "undefined") s7 = remove.s7;
  if (typeof remove.s8 !== "undefined") s8 = remove.s8;
  if (typeof remove.s9 !== "undefined") s9 = remove.s9;
  if (typeof remove.s10 !== "undefined") s10 = remove.s10;
  if (typeof remove.s11 !== "undefined") s11 = remove.s11;
  if (typeof remove.s12 !== "undefined") s12 = remove.s12;
  if (typeof remove.s13 !== "undefined") s13 = remove.s13;
  if (typeof remove.s14 !== "undefined") s14 = remove.s14;
  if (typeof remove.s15 !== "undefined") s15 = remove.s15;
  if (typeof remove.s16 !== "undefined") s16 = remove.s16;
  if (typeof remove.s17 !== "undefined") s17 = remove.s17;
  if (typeof remove.s18 !== "undefined") s18 = remove.s18;
  if (typeof remove.s19 !== "undefined") s19 = remove.s19;
  if (typeof remove.s20 !== "undefined") s20 = remove.s20;
  if (typeof remove.s21 !== "undefined") s21 = remove.s21;
  if (typeof remove.s22 !== "undefined") s22 = remove.s22;
  if (typeof remove.s23 !== "undefined") s23 = remove.s23;
  if (typeof remove.s24 !== "undefined") s24 = remove.s24;
  if (typeof remove.s25 !== "undefined") s25 = remove.s25;}
