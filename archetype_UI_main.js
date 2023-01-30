autowatch =1;

inlets = 1;
outlets = 1;

/*
var velocity_old = 0; // permet de savoir si la pédale d'expression a chagé de position
var mode_reglage = 0; // 1: passe en mode réglage et affiche les contours rouge ; 0: stompbox
var selected_effect ='boost'; // Variable globale à laisser ici
var pensize = 7; // epaisseur des traits sur les boutons
var pen_offset = 0.7; // décalage début du trait par rapport au centre (ex. 0.5->milieu, 0-> depuis le centre)
var bordercolor_ON = [1,0,0,1]; // couleur des contours effet/bouton (mode RGBA, format float)
var bordercolor_OFF = [0.2,0.2,0.2,1];
var exp_active = 0; // 
var vers_archetype = 'live_set tracks 1 devices 1 parameters '; // chemin du plugin Archetype (piste #2 et device #2)
*/


/*****************************
*    FUNCTIONS               *
*****************************/
function log() {
  for(var i=0,len=arguments.length; i<len; i++) {
    var message = arguments[i];
    if(message && message.toString) {
      var s = message.toString();
      if(s.indexOf("[object ") >= 0) {
        s = JSON.stringify(message);
      }
      post(s);
    }
    else if(message === null) {
      post("<null>");
    }
    else {
      post( message);
    }
  }
  post("\n");
}
/*
function init_LiveAPI(){
    // Pédalier midi
    selected_l4l = new LiveAPI("live_set control_surfaces " + 0); 
    
    // Live_set, session en cours
    live_set = new LiveAPI(callback_metronome,"live_set");
    live_set.property = "metronome";
    
    // Archetype Tim Hensen placé sur la piste 1, paramètres dans l'ordre de la config plug-in
    boost = new LiveAPI(callback_boost,vers_archetype+"1"); boost.property = "value";
    boost_gain = new LiveAPI(callback_boost_gain,vers_archetype + "2"); boost_gain.property = "value";
    boost_level = new LiveAPI(callback_boost_level,vers_archetype+"3"); boost_level.property = "value";
    boost_treble = new LiveAPI(callback_boost_treble,vers_archetype+"4"); boost_treble.property = "value";
    boost_bass = new LiveAPI(callback_boost_bass,vers_archetype+"5"); boost_bass.property = "value";
    
    compressor = new LiveAPI(callback_compressor,vers_archetype+"6"); compressor.property = 'value';
    compressor_comp = new LiveAPI(callback_compressor_comp,vers_archetype+"7"); compressor_comp.property = 'value';
    compressor_level = new LiveAPI(callback_compressor_level,vers_archetype+"8"); compressor_level.property = 'value';
    compressor_attack = new LiveAPI(callback_compressor_attack,vers_archetype+"9"); compressor_attack.property = 'value';

    overdrive = new LiveAPI(callback_overdrive,vers_archetype+"10"); overdrive.property = "value";
    overdrive_drive = new LiveAPI(callback_overdrive_drive,vers_archetype+"11"); overdrive_drive.property = "value";
    overdrive_level = new LiveAPI(callback_overdrive_level,vers_archetype+"12"); overdrive_level.property = "value";
    overdrive_tone = new LiveAPI(callback_overdrive_tone,vers_archetype+"13"); overdrive_tone.property = "value";

    chorus = new LiveAPI(callback_chorus,vers_archetype+"14"); chorus.property = "value";
    chorus_dry = new LiveAPI(callback_chorus_dry,vers_archetype+"15"); chorus_dry.property = "value";

    delay = new LiveAPI(callback_delay,vers_archetype+"16"); delay.property = "value";
    delay_mix = new LiveAPI(callback_delay_mix,vers_archetype+"17"); delay_mix.property = "value";
    delay_feedback = new LiveAPI(callback_delay_feedback,vers_archetype+"18"); delay_feedback.property = "value";
    delay_right = new LiveAPI(callback_delay_right,vers_archetype+"19"); delay_right.property = "value";
    delay_amount = new LiveAPI(callback_delay_amount,vers_archetype+"20"); delay_amount.property = "value";
    delay_time = new LiveAPI(callback_delay_time,vers_archetype+"21"); delay_time.property = "value";
    delay_tempo = new LiveAPI(callback_delay_tempo,vers_archetype+"22"); delay_tempo.property = "value";
    delay_left = new LiveAPI(callback_delay_left,vers_archetype+"23"); delay_left.property = "value";
    delay_sync = new LiveAPI(callback_delay_sync,vers_archetype+"24"); delay_sync.property = "value";
    delay_mode = new LiveAPI(callback_delay_mode,vers_archetype+"25"); delay_mode.property = "value";
    delay_type = new LiveAPI(callback_delay_type,vers_archetype+"26"); delay_type.property = "value";

    reverb = new LiveAPI(callback_reverb,vers_archetype+"27"); reverb.property = "value";
    reverb_dry = new LiveAPI(callback_reverb_dry,vers_archetype+"28"); reverb_dry.property = "value";
    reverb_decay = new LiveAPI(callback_reverb_decay,vers_archetype+"29"); reverb_decay.property = "value";
    reverb_right = new LiveAPI(callback_reverb_right,vers_archetype+"30"); reverb_right.property = "value";
    reverb_left = new LiveAPI(callback_reverb_left,vers_archetype+"31"); reverb_left.property = "value";
    reverb_shimmer = new LiveAPI(callback_reverb_shimmer,vers_archetype+"32"); reverb_shimmer.property = "value";

    ampli = new LiveAPI(callback_ampli,vers_archetype+"33"); ampli.property = "value";
    ampli_type = new LiveAPI(callback_ampli_type,vers_archetype+"34"); ampli_type.property = "value";
    ampli_cherubGain = new LiveAPI(callback_ampli_cherubGain,vers_archetype+"35"); ampli_cherubGain.property = "value";
    ampli_cherubBass = new LiveAPI(callback_ampli_cherubBass,vers_archetype+"36"); ampli_cherubBass.property = "value";
    ampli_cherubMiddle = new LiveAPI(callback_ampli_cherubMiddle,vers_archetype+"37"); ampli_cherubMiddle.property = "value";
    ampli_cherubTreble = new LiveAPI(callback_ampli_cherubTreble,vers_archetype+"38"); ampli_cherubTreble.property = "value";
    ampli_cherubPresence = new LiveAPI(callback_ampli_cherubPresence,vers_archetype+"39"); ampli_cherubPresence.property = "value";
    ampli_cherubLevel = new LiveAPI(callback_ampli_cherubLevel,vers_archetype+"40"); ampli_cherubLevel.property = "value";

    //multivoicer = new LiveAPI(vers_archetype+"5"); log(multivoicer.info);
    
}
*/
/*
function init_mode_reglage(){ // premier paramètre réinitialisé à l'ouverture de la fenetre Archetype_wind
  mode_reglage = 0;
}

function init_images_effets(){
  this.patcher.getnamed("archetype_wind").subpatcher().getnamed("archetype_wind_b").message("bang");
}

function init_writting_parameters(){
  // EPAISSEUR ET COULEUR DES TRAITS pour dessiner position de chaque controle
  this.patcher.getnamed("archetype_wind").subpatcher().getnamed("boost_msg").message("set","pensize",pensize,0);
  this.patcher.getnamed("archetype_wind").subpatcher().getnamed("boost_msg").message("bang");
  this.patcher.getnamed("archetype_wind").subpatcher().getnamed("boost_msg").message("set","frgb",0,0,0);
  this.patcher.getnamed("archetype_wind").subpatcher().getnamed("boost_msg").message("bang");
  this.patcher.getnamed("archetype_wind").subpatcher().getnamed("compressor_msg").message("set","pensize",pensize,0);
  this.patcher.getnamed("archetype_wind").subpatcher().getnamed("compressor_msg").message("bang");
  this.patcher.getnamed("archetype_wind").subpatcher().getnamed("compressor_msg").message("set","frgb",0,0,0);
  this.patcher.getnamed("archetype_wind").subpatcher().getnamed("compressor_msg").message("bang");
  this.patcher.getnamed("archetype_wind").subpatcher().getnamed("overdrive_msg").message("set","pensize",pensize,0);
  this.patcher.getnamed("archetype_wind").subpatcher().getnamed("overdrive_msg").message("bang");
  this.patcher.getnamed("archetype_wind").subpatcher().getnamed("overdrive_msg").message("set","frgb",0,0,0);
  this.patcher.getnamed("archetype_wind").subpatcher().getnamed("overdrive_msg").message("bang");
  this.patcher.getnamed("archetype_wind").subpatcher().getnamed("chorus_msg").message("set","pensize",pensize,0);
  this.patcher.getnamed("archetype_wind").subpatcher().getnamed("chorus_msg").message("bang");
  this.patcher.getnamed("archetype_wind").subpatcher().getnamed("chorus_msg").message("set","frgb",0,0,0);
  this.patcher.getnamed("archetype_wind").subpatcher().getnamed("chorus_msg").message("bang");
  this.patcher.getnamed("archetype_wind").subpatcher().getnamed("delay_msg").message("set","pensize",pensize,0);
  this.patcher.getnamed("archetype_wind").subpatcher().getnamed("delay_msg").message("bang");
  this.patcher.getnamed("archetype_wind").subpatcher().getnamed("delay_msg").message("set","frgb",255,255,255);
  this.patcher.getnamed("archetype_wind").subpatcher().getnamed("delay_msg").message("bang");
  this.patcher.getnamed("archetype_wind").subpatcher().getnamed("reverb_msg").message("set","pensize",pensize,0);
  this.patcher.getnamed("archetype_wind").subpatcher().getnamed("reverb_msg").message("bang");
  this.patcher.getnamed("archetype_wind").subpatcher().getnamed("reverb_msg").message("set","frgb",0,0,0);
  this.patcher.getnamed("archetype_wind").subpatcher().getnamed("reverb_msg").message("bang");
  this.patcher.getnamed("archetype_wind").subpatcher().getnamed("ampli_msg").message("set","pensize",pensize,0);
  this.patcher.getnamed("archetype_wind").subpatcher().getnamed("ampli_msg").message("bang");
  this.patcher.getnamed("archetype_wind").subpatcher().getnamed("ampli_msg").message("set","frgb",255,255,255);
  this.patcher.getnamed("archetype_wind").subpatcher().getnamed("ampli_msg").message("bang");
}
*/

function init_traits(){
  // Trace tous les traits de tous les controles gérés
  /* 
  for (var i=0; i < tab_effects.length; i++){
    for (var j=1; j < tab_controls[tab_effects[i]].length; j++){ // j=1 pour éviter j=0 -> 'ext'
      dessine_trait(tab_effects[i],tab_effects[i]+"_"+tab_controls[tab_effects[i]][j]);  
    }
  }
  */
}

function update_contour(){
  // EFFACE TOUS LES CONTOURS
  for (var i=0; i < tab_effects.length; i++){
    for (var j=0; j < tab_controls[tab_effects[i]].length; j++){
      //log(tab_effects[i], tab_controls[tab_effects[i]][j]);
      var texte = (tab_effects[i] + "_" + tab_controls[tab_effects[i]][j] + "_c");
      this.patcher.getnamed("archetype_wind").subpatcher().getnamed(texte).message("hidden",1);
    }
  }
  // AFFICHE LES CONTOURS DE L'EFFET SELECTIONNE ET DU CONTROLE SELECTIONNE 
  if (mode_reglage == 1){ 
    var txt = selected_effect + "_" + tab_controls[selected_effect][tab_ind_controls[selected_effect]] + "_c";
    //bordercolor_ON si l'effet selectionné est actif, sinon bordercolor_OFF (mode RGBA, format float)
    if (LiveAPI(tab_paths[selected_effect]).get('value') == 1){
      this.patcher.getnamed("archetype_wind").subpatcher().getnamed(selected_effect + "_ext_c").bordercolor(bordercolor_ON);
      this.patcher.getnamed("archetype_wind").subpatcher().getnamed(txt).bordercolor(bordercolor_ON);
    } else{
      this.patcher.getnamed("archetype_wind").subpatcher().getnamed(selected_effect + "_ext_c").bordercolor(bordercolor_OFF);
      this.patcher.getnamed("archetype_wind").subpatcher().getnamed(txt).bordercolor(bordercolor_OFF);
    }
    // Contours de l'effet selectionné
    this.patcher.getnamed("archetype_wind").subpatcher().getnamed(selected_effect + "_ext_c").message("hidden",0);
    // Contour du control selectionné dand l'effet sélectionné
    this.patcher.getnamed("archetype_wind").subpatcher().getnamed(txt).message("hidden",0);
           
  }
}

function init_selected_effect(){// dernier paramètre réinitialisé à l'ouverture de la fenetre Archetype_wind
  selected_effect ='boost';
}

function dessine_trait(effect, obj){ // DESSINE UN SEUL TRAIT
  // Définit la position et la taille de l'affichage réduit
  var x = tab_img[obj][0];
  var y = tab_img[obj][1];
  var w = tab_img[obj][2];
  var h = tab_img[obj][3];
    
  // Dessine cette partie d'image (efface l'ancien trait)
  this.patcher.getnamed("archetype_wind").subpatcher().getnamed(effect+"_msg").message("set","drawpict","img",x,y,w,h,x,y,w,h);
  this.patcher.getnamed("archetype_wind").subpatcher().getnamed(effect+"_msg").message("bang");
  
  // Dessine le nouveau trait
  var angle = LiveAPI(tab_paths[obj]).get('value') * 4.71; // 4.71=pi*1.5 ou 3/4 de tour du bouton
  var xc_offset = parseInt( Math.cos(angle + 2.356) * taille_trait[effect] * pen_offset ); // pi*0.75=2.356
  var yc_offset = parseInt( Math.sin(angle + 2.356) * taille_trait[effect] * pen_offset );
  var x_long = parseInt( Math.cos(angle + 2.356) * taille_trait[effect] * (1-pen_offset)); // pi*0.75=2.356
  var y_long = parseInt( Math.sin(angle + 2.356) * taille_trait[effect] * (1-pen_offset)); 
  var x_pen = tab_boutton[obj][0];
  var y_pen = tab_boutton[obj][1];
  this.patcher.getnamed("archetype_wind").subpatcher().getnamed(effect+"_msg").message("set","moveto",x_pen+xc_offset,y_pen+yc_offset);
  this.patcher.getnamed("archetype_wind").subpatcher().getnamed(effect+"_msg").message("bang");
  this.patcher.getnamed("archetype_wind").subpatcher().getnamed(effect+"_msg").message("set","line",x_long,y_long);
  this.patcher.getnamed("archetype_wind").subpatcher().getnamed(effect+"_msg").message("bang");

  // dessine la ligne pedale si on n'a pas rattrapé la position du trait
  if ( (mode_reglage == 1) && (exp_active == 0) ){
    this.patcher.getnamed("archetype_wind").subpatcher().getnamed(effect+"_msg").message("set","pensize",2,0);
    this.patcher.getnamed("archetype_wind").subpatcher().getnamed(effect+"_msg").message("bang");
    this.patcher.getnamed("archetype_wind").subpatcher().getnamed(effect+"_msg").message("set","frgb",255,0,0);
    this.patcher.getnamed("archetype_wind").subpatcher().getnamed(effect+"_msg").message("bang");
    
    angle = velocity_old / 127 * 4.71; // position pédale d'expression (rappel: 4.71=pi*1.5 ou 3/4 de tour du bouton)
    x_long = parseInt( Math.cos(angle + 2.356) * taille_trait[effect]); // pi*0.75=2.356
    y_long = parseInt( Math.sin(angle + 2.356) * taille_trait[effect]);
    this.patcher.getnamed("archetype_wind").subpatcher().getnamed(effect+"_msg").message("set","moveto",x_pen,y_pen);
    this.patcher.getnamed("archetype_wind").subpatcher().getnamed(effect+"_msg").message("bang");
    this.patcher.getnamed("archetype_wind").subpatcher().getnamed(effect+"_msg").message("set","line",x_long,y_long);
    this.patcher.getnamed("archetype_wind").subpatcher().getnamed(effect+"_msg").message("bang");

    this.patcher.getnamed("archetype_wind").subpatcher().getnamed(effect+"_msg").message("set","pensize",pensize,0);
    this.patcher.getnamed("archetype_wind").subpatcher().getnamed(effect+"_msg").message("bang");
    this.patcher.getnamed("archetype_wind").subpatcher().getnamed(effect+"_msg").message("set","frgb",0,0,0);
    this.patcher.getnamed("archetype_wind").subpatcher().getnamed(effect+"_msg").message("bang");
  } 

  // Refresh le LCD avec la partie d'image mise à jour et le nouveau trait
  this.patcher.getnamed("archetype_wind").subpatcher().getnamed(effect+"_lcd").message("bang");

}

/*****************************
*  INPUT de l'interface MIDI *
*****************************/

function check_note(num_midi){  // Numéro de 'Note' ou 'CC' reçu), pas de différence de traitement
      
  // Toggle Boost pedal
  if (num_midi == 70){  // LAUNCH_ALL_MIDI_NOTE
    if (boost.get("value") == 0){ // boost = 0 (était désactivé)
      boost.set("value",1); // Pédale Boost mise sur ON dans le plugin
      exp_active = 0; // désactive la pédale afin de rattraper la position du controle
      var selected_obj = selected_effect + "_" + tab_controls[selected_effect][tab_ind_controls[selected_effect]];
      dessine_trait(selected_effect, selected_obj);
    } 
    else{ // boost = 1 (était déjà activé)
      if (mode_reglage == 0){
        boost.set("value",0); // Pédale Boost mise sur OFF dans le plugin
      } 
      else{ // boost=1, mode_réglage=1, boost n'était pas séléctionné avant 
        if ((selected_effect != "boost")){
          callback_boost([0,1]); // Pédale Boost reste sur ON -> lance la fonction callback
          exp_active = 0; // désactive la pédale afin de rattraper la position du controle
          var selected_obj = selected_effect + "_" + tab_controls[selected_effect][tab_ind_controls[selected_effect]];
          dessine_trait(selected_effect, selected_obj);
        } 
        else boost.set("value",0); // Pédale Boost mise sur OFF dans le plugin
      }
    } 
  }
  
  // Toggle Compressor pedal
  if (num_midi == 71){ // MUTE_MIDI_NOTE
    if (compressor.get("value") == 0){
      compressor.set("value",1);
      exp_active = 0;
    } 
    else{
      if (mode_reglage == 0) compressor.set("value",0); 
      else{
        if ((selected_effect != "compressor")) callback_compressor([0,1]); 
        else compressor.set("value",0); 
      }
    }
    log("fin midi compressor");
  }
  
  // Toggle Stompbox vs Réglage
  if (num_midi == 72){ // MUTE_MIDI_NOTE_LONG_PRESSED
    mode_reglage = !mode_reglage;
    exp_active = 0; // désactive la pédale afin de rattraper la position du controle
    log("mode reglage =", mode_reglage);
    update_contour();
  }
  
  // Toggle Overdrive pedal
  if (num_midi == 73){ // LEFT_CC
    if (overdrive.get("value") == 0){
      overdrive.set("value",1);
      exp_active = 0;
    }  
    else{
      if (mode_reglage == 0) overdrive.set("value",0); 
      else{
        if ((selected_effect != "overdrive")) callback_overdrive([0,1]); 
        else overdrive.set("value",0); 
      }
    } 
  }

  // Toggle Ampli
  if (num_midi == 74){ // RIGHT_CC
    if (ampli.get("value") == 0){
      ampli.set("value",1);
      exp_active =1;
    } 
    else ampli.set("value",0);
  }

  if (num_midi == 75){ // UP_CC=75
  }
    
  if (num_midi == 76){ // DOWN_CC
  }

  if (num_midi == 77){ // TRACK4_MIDI_NOTE
  }

  // Toggle Reverb
  if (num_midi == 78){ // TRACK3_MIDI_NOTE
    if (reverb.get("value") == 0){
      reverb.set("value",1);
      exp_active =1;
    } 
    else{
      if (mode_reglage == 0) reverb.set("value",0); 
      else{
        if ((selected_effect != "reverb")) callback_reverb([0,1]); 
        else reverb.set("value",0); 
      }
    } 
  }

  // Toggle Delay
  if (num_midi == 79){ // TRACK2_MIDI_NOTE
    if (delay.get("value") == 0){
      delay.set("value",1);
      exp_active =1;
    } 
    else{
      if (mode_reglage == 0) delay.set("value",0); 
      else{
        if ((selected_effect != "delay")) callback_delay([0,1]); 
        else delay.set("value",0); 
      }
    } 
  }

  // Toggle Chorus
  if (num_midi == 80){ // TRACK1_MIDI_NOTE
    if (chorus.get("value") == 0){
      chorus.set("value",1);
      exp_active = 0;
      var selected_obj = selected_effect + "_" + tab_controls[selected_effect][tab_ind_controls[selected_effect]];
      dessine_trait(selected_effect, selected_obj);
    } 
    else{
      if (mode_reglage == 0) chorus.set("value",0); 
      else{
        if ((selected_effect != "chorus")) callback_chorus([0,1]); 
        else chorus.set("value",0); 
      }
    } 
  }

  if (num_midi == 81){ // EXP_PEDAL1_CC
  }

  if (num_midi == 82){ // EXP_PEDAL2_CC
  }

  if (num_midi == 83){ // EXP_PEDAL3_CC
  }

  if (num_midi == 84){ // EXP_PEDAL4_CC
  }

  if (num_midi == 85){ // EXP_PEDAL5_CC
  }

  if (num_midi == 86){ // NOTE_EXT_BUTTON1 -> B = DOWN
    if (mode_reglage == 1){
      exp_active = 0; // désactive la pédale afin de rattraper la position du controle
      if (tab_ind_controls[selected_effect] > 1){
        tab_ind_controls[selected_effect] = tab_ind_controls[selected_effect] - 1;
      } else {
        tab_ind_controls[selected_effect] = tab_controls[selected_effect].length-1;
      }
    }
    var selected_obj = selected_effect + "_" + tab_controls[selected_effect][tab_ind_controls[selected_effect]];
    dessine_trait(selected_effect, selected_obj);
    update_contour();
  }

  if (num_midi == 87){ // NOTE_EXT_BUTTON2 -> A = UP
    if (mode_reglage == 1){
      exp_active = 0; // désactive la pédale afin de rattraper la position du controle
      if (tab_ind_controls[selected_effect] < (tab_controls[selected_effect].length-1)){
        tab_ind_controls[selected_effect] = tab_ind_controls[selected_effect] + 1;
      } else {
        tab_ind_controls[selected_effect] = 1;
      }
    }
    var selected_obj = selected_effect + "_" + tab_controls[selected_effect][tab_ind_controls[selected_effect]];
    dessine_trait(selected_effect, selected_obj);
    update_contour();
  }
  
}

function check_velocity(velocity){  // signal midi envoyé si chgt position de la pédale expression
  if ( (mode_reglage == 1) && (LiveAPI(tab_paths[selected_effect]).get('value') == 1) && (velocity != velocity_old)){
    
    velocity_old = velocity;
    var valeur = velocity / 127;
    var selected_obj = selected_effect + "_" + tab_controls[selected_effect][tab_ind_controls[selected_effect]];
    if (valeur > 0.98) valeur = 1;
    if (valeur < 0.01) valeur = 0;

    // si on a rattrapé la valeur du controle, on met la variable 'exp_active' à 1 
    if ( (exp_active == 0) && (Math.abs(LiveAPI(tab_paths[selected_obj]).get('value') - valeur)) < 0.1 ) exp_active = 1;
    if ( exp_active == 1){
      LiveAPI(tab_paths[selected_obj]).set('value',valeur);  // réglage du plugin avec nouvelle valeur
    }
    log("exp_active",exp_active);
    log("valeur",valeur);
    log("controle",LiveAPI(tab_paths[selected_obj]).get('value'));
    dessine_trait(selected_effect, selected_obj);
  }
}

/*****************************
*    CALLBACK                *
*****************************/

function callback_metronome(valeur){
  this.patcher.getnamed("archetype_wind").subpatcher().getnamed("metronome").message("hidden",!valeur[1]);
}

function callback_boost(valeur){
  this.patcher.getnamed("archetype_wind").subpatcher().getnamed("boost_panel").message("hidden",valeur[1]);
  selected_effect = "boost";
  update_contour();
}
function callback_boost_gain(valeur){
  //LiveAPI(tab_paths["boost_gain"]).set('value',valeur);
  //dessine_trait("boost","boost_gain");
}
function callback_boost_level(valeur){}
function callback_boost_treble(valeur){}
function callback_boost_bass(valeur){}

function callback_compressor(valeur){
  this.patcher.getnamed("archetype_wind").subpatcher().getnamed("compressor_panel").message("hidden",valeur[1]);
  selected_effect = "compressor";
  update_contour(); 
}
function callback_compressor_comp(valeur){}
function callback_compressor_level(valeur){}
function callback_compressor_attack(valeur){}

function callback_overdrive(valeur){
  this.patcher.getnamed("archetype_wind").subpatcher().getnamed("overdrive_panel").message("hidden",valeur[1]);
  selected_effect = "overdrive";
  update_contour();
}
function callback_overdrive_drive(valeur){}
function callback_overdrive_level(valeur){}
function callback_overdrive_tone(valeur){}

function callback_chorus(valeur){
  this.patcher.getnamed("archetype_wind").subpatcher().getnamed("chorus_panel").message("hidden",valeur[1]);
  selected_effect = "chorus";
  update_contour();
}
function callback_chorus_dry(valeur){}

function callback_delay(valeur){
  this.patcher.getnamed("archetype_wind").subpatcher().getnamed("delay_panel").message("hidden",valeur[1]);
  selected_effect = "delay";
  update_contour();
}
function callback_delay_mix(valeur){}
function callback_delay_feedback(valeur){}
function callback_delay_right(valeur){}
function callback_delay_amount(valeur){}
function callback_delay_time(valeur){}
function callback_delay_tempo(valeur){}
function callback_delay_left(valeur){}
function callback_delay_sync(valeur){}
function callback_delay_mode(valeur){}
function callback_delay_type(valeur){}

function callback_reverb(valeur){
  this.patcher.getnamed("archetype_wind").subpatcher().getnamed("reverb_panel").message("hidden",valeur[1]);
  selected_effect = "reverb";
  update_contour();
}
function callback_reverb_dry(valeur){}
function callback_reverb_decay(valeur){}
function callback_reverb_right(valeur){}
function callback_reverb_left(valeur){}
function callback_reverb_shimmer(valeur){}


function callback_ampli(valeur){
  this.patcher.getnamed("archetype_wind").subpatcher().getnamed("ampli_panel").message("hidden",valeur[1]);
  selected_effect = "ampli";
  update_contour();
}
function callback_ampli_type(valeur){}
function callback_ampli_cherubGain(valeur){}
function callback_ampli_cherubBass(valeur){}
function callback_ampli_cherubMiddle(valeur){}
function callback_ampli_cherubTreble(valeur){}
function callback_ampli_cherubPresence(valeur){}
function callback_ampli_cherubLevel(valeur){}


/*****************************
*    MAIN                    *
*****************************/
 
log("_______________________________________");
log("archetype_UI_main.js :" + new Date);

