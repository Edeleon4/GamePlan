
$(document).ready(function(){
  $('input:radio[name=position]').click(function() {
    var val = $('input:radio[name=position]:checked').val();
    console.log("listened");
    if("No Position"!==val){
      setVideo("highlighting");
    }else{
      setVideo("none");
    }

  });

  $("#add_note_button").click(function() {
    console.log("you hit the add button");
    var title = decodeURIComponent(getUrlVars()["playName"]);
    var play = data[title];
    console.log(play);
    var text = $("#add_note_text").val(); 
    var time = $("#add_note_button").val();
    addNote(text, Number(time), play.name);
    var notes = addNotes(play);
 
    setNotes(notes);
  });
  $('#add_note_text').keypress(function (e) {
    if (e.which === 13) {
      e.preventDefault();
      
    }
  });

  
  $("video").bind("timeupdate", function () {
    var time = $("video")[0].currentTime;
    var low = 0;
    var high = commentStarts.length;
    while (low != high) {
      var mid = (low + high) / 2;
      if (commentStarts[mid] <= time) {
        low = mid + 1.
      } else {
        high = mid;
      }
    }
    $("#add_note_button").text("Add note at "+time.toFixed(2)+"s");
    $("#add_note_button").val(time.toFixed(2));

    if (!$("[index='"+(low-1)+"']").hasClass("active")) {
      $(".section").removeClass("active");
      $("[index='"+(low-1)+"']").toggleClass("active");
    }
  });
});

$(window).load(function() {
  updateNoteSize();
});

$(window).resize(function() {
  updateNoteSize();
})

var updateNoteSize = function() {
  var maxHeight = $('#right').height() - $('#addNote').height() - 15;
  $('#note-container').css("max-height", maxHeight);
}

var timeChanges = function(timeArray) {

}

var setNotes = function (text) {
   $("#notes").html(text);
   $(".delete").click(function(){
       console.log("you deleted a play");
       index = $(this).attr("name") 
       console.log("you deleted a play " +  index);
       play_name = decodeURIComponent(getUrlVars()["playName"]);
       deleteNote(index, play_name);
       var play = data[play_name];
       new_notes = addNotes(play)
       setNotes(new_notes);
   });  
   $(".section").click( function () {
    var sectionTime = $(this).attr("start");
    var video = $("video")[0];
    video.currentTime = sectionTime;
    $(".section").removeClass("active");
    $(this).toggleClass("active");
  });
}

var setTitle = function (text) {
   $("#title").prepend(text);
   $("#titleCrumb").text(text);

}
var setType = function (type) {
   $("#type").html("<a  href=index.html?breadCrumb="+type+">"+type+"</a>");

}

var setVideo = function (video_name) {
 var full_video_name = "../videos/" + video_name + ".mp4";
 var currentTime = video.currentTime;
 video.src = full_video_name;
 video.load();
 video.currentTime = currentTime;
 video.play();
}
var setIsFavorited = function(isFavorite,playName){
  if(isFavorite){
    var text = '<img id="star" src="../images/ystar.png" />';
    $(".favorite").html(text);
    $(".favorite").attr("active","true");

  }
      $(".favorite").attr("name",playName);

  addFavoriteListeners(false);
}

var setPlay = function(title, notes, video,type) {
 setType(type);
 setVideo(video);
 setTitle(title);
 setType(type);
 setNotes(notes);
}
var addNotes = function(play){
  var notesString = "<ul class='list-group'>";
  if(play.notes.length == 0){
     notesString +="<li><h1>Currently you have no notes</h1></li>"; 
  } 
  commentStarts = [];
  notes = play.notes;
  for(var i = 0; i < notes.length;i++){
    // console.log(notes[i]);
    var active = "";
    if(i == 0){
      active = "active";
    }
    notesString = notesString + "<li class='list-group-item section "+active+"' start="+notes[i].startTime+" index='"+i+"'>"+notes[i].text+ "<button  class = 'delete btn btn-default btn-xs' name = " + i + "><span class='glyphicon glyphicon-trash' aria-hidden='true'></span></button></li>";
    commentStarts.push(notes[i].startTime);
  }
  commentStarts.push($("video")[0].duration);
  notesString += "</ul>";
  return notesString;
}
var setPlayHandler = function() {
  var title = decodeURIComponent(getUrlVars()["playName"]);
  var play = data[title];
  var notes = addNotes(play);
  
  var video = play.video;
  var playName = play.name;
  setIsFavorited(isFavorited(playName),playName);
  var type = play.type.charAt(0).toUpperCase() + play.type.slice(1);;
  var info = play.info;
  
  setPlay(title, notes, video,type);
}


updateNoteSize();
setPlayHandler(3);
