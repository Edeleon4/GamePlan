var plays = [];
var offense = data["plays"]["offense"];
var offenseNames = Object.keys(offense).map(function (key) {
  return offense[key]["name"];
});
var defense = data["plays"]["defense"];
var defenseNames = Object.keys(defense).map(function (key) {
  return defense[key]["name"];
});
plays = plays.concat(offenseNames, defenseNames);

var substringMatcher = function(strs) {
  return function findMatches(q, cb) {
    var matches, substrRegex;
 
    // an array that will be populated with substring matches
    matches = [];
 
    // regex used to determine if a string contains the substring `q`
    substrRegex = new RegExp(q, 'i');
 
    // iterate through the pool of strings and for any string that
    // contains the substring `q`, add it to the `matches` array
    $.each(strs, function(i, str) {
      if (substrRegex.test(str)) {
        // the typeahead jQuery plugin expects suggestions to a
        // JavaScript object, refer to typeahead docs for more info
        matches.push({ value: str });
      }
    });
 
    cb(matches);
  };
};

$(document).ready(function(){
  $('#search').submit(function (event) {
        console.log("keypress");

    event.preventDefault();
    if (plays.indexOf($("pre").text()) > -1) {
      location.assign("play.html?playName="+$("pre").text()); //selected datum object
    } else {
      console.log("no");
      $(".tt-dataset-play").html('div class="empty-message">No play matching search found</div>');
    }
  });
  $('#search-field .typeahead').typeahead({
    hint: true,
    highlight: true,
    minLength: 1
  },
  {
    name: 'plays',
    displayKey: 'value',
    source: substringMatcher(plays),
    templates: {
      empty: '<div class="empty-message">No play matching search found</div>'
    }
  }).on('typeahead:selected',function(obj, datum, name){
    console.log(obj);
    console.log(datum);
    console.log(name);
    if (plays.indexOf(datum.value) > -1) {
       location.assign("play.html?playName="+datum.value); //selected datum object
    }
  }).keypress(function (e) {
    if (e.which === 13) {
      e.preventDefault();
      if (plays.indexOf($("pre").text()) > -1) {
         location.assign("play.html?playName="+$("pre").text()); //selected datum object
      }
    }
  });
});