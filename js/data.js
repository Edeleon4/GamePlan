// use score like a normal variable, because it is one. then, eventually:
var setData = function(){
  var obj = {};
  obj["plays"] = {};
  var info1 ="Set your man up before using the screen. In other words, before rubbing off a screen, take a step away from the screen and fake like you're going the other direction. Then you can rub off the screen. This will get your defender off balance and give you more space.";
  var info2 = 'Run off screens shoulder to shoulder. There should be no space between you and the person setting the screen. This makes it difficult for the defense to "slip" through and take away your shot.';
  var info3 = 'Read the defense! One of the best skills you can learn as a player is how to read the defense. If your defender cheats over the screen, then you can flare the other direction so the defender gets stuck behind the screen. If the defender denies you the ball and overplays the passing lane, then back door them cutting hard to the basket. These are just a few examples. Learn the different ways you can read the defense. This will make you a better player!';
  var info4 = 'When cutting, vary your speed. In other words, you might want to take a few steps one direction at half speed, then quickly change direction sprinting off a screen. This keeps the defense guessing and off balance.';
  var info5 = 'Know where your teammates are at. This comes with experience and game awareness. The better you know your teammates and your offense, the easier it will be for you to find them and use their screens.';
  var info6 = "Never stand still for more than two seconds. If you're a great shooter, keep moving. Don't stand in one spot for more than two seconds.";

  obj["plays"]["offense"] = 
  [{"name":"5 out motion","type":"offense","info":info1,"video":"none","image":"fig1.png", "notes":[]},
  {"name":"3-2 motion offense","type":"offense","info":info2,"video":"none","image":"fig2.png", "notes":[]},
  {"name":"4 out 1 in motion","type":"offense","info":info3,"video":"none","image":"fig3.png", "notes":[]},
  {"name":"3 out 2 in Motion ","type":"offense","info":info4,"video":"none","image":"fig1.png",  "notes":[]},
  {"name":"Princeton Offense","type":"offense","info":info5,"video":"none","image":"fig2.png",  "notes":[]},
  {"name":"Triangle Offense","type":"offense","info":info6,"video":"none","image":"fig3.png",  "notes":[]}];

  obj["plays"]["defense"] = 
  [{"name":"Half-court zone","type":"defense","info":info1,"video":"none","image":"fig3.png", "notes":[]},
  {"name":"2-3 zone defense","type":"defense","info":info2,"video":"none","image":"fig2.png", "notes":[]},
  {"name":"1-2-2 Viking press","type":"defense","info":info3,"video":"none","image":"fig1.png", "notes":[]},
  {"name":"2-2-1 box press","type":"defense","info":info4,"video":"none","image":"fig3.png", "notes":[]},
  {"name":"Half-court press","type":"defense","info":info5,"video":"none","image":"fig2.png", "notes":[]},
  {"name":"Full-court press","type":"defense","info":info6,"video":"none","image":"fig1.png", "notes":[]}]
  obj["plays"]["favorites"] = [];
  for(var prop in obj["plays"]["offense"]){
    console.log(prop);
    obj[obj["plays"]["offense"][prop].name] = obj["plays"]["offense"][prop];
  }

  for(var prop in obj["plays"]["defense"]){
    console.log(prop);
    obj[obj["plays"]["defense"][prop].name] = obj["plays"]["defense"][prop];
  }

  return obj;
}

