var getFavoriteButtonHTML = function(playName,isHomePage){
   var text = '<img id="star" src="../images/ystar.png" />';

    var isFavorite = isFavorited(playName);
    var starImg = isFavorite?'<img id="star" src="../images/ystar.png" />':'<img id="star" src="../images/star.png" />';
    var classes= "favorite";
    if(isHomePage){
      classes +="Home";
    }
  var favButton = '<button type="button" class ="'+classes+'" name ="'+playName+'"active="'+isFavorite+'">'+starImg+'</button>';
  return favButton;
}
var isFavorited = function(playName){
  var isFavorite = false;
  var favorites = data["plays"]["favorites"];
  for(var i = 0;i < favorites.length;i++){
    if(favorites[i].name === playName){
      isFavorite = true;
      break;
    }
  }
  return isFavorite;
}
var addFavoriteListeners = function(isFavoriteHome){
  var favClass = "favorite";
  if(isFavoriteHome){
    favClass += "Home";
  }
  $("."+favClass).click(function(e) {
          e.stopPropagation();

    var playName = $(this).attr("name");
    console.log(playName+"play");
      if ($(this).attr("active")==="false"){
        data["plays"]["favorites"].push(data[playName]);
        $(this).attr("active","true");
        $(this).attr("name",playName);

        var text = '<img id="star" src="../images/ystar.png" />';
      } else {

        console.log("true");
        var favorites = data["plays"]["favorites"];
        var index = -1;
        for(var i = 0; i<favorites.length;i++){
          if(favorites[i].name===playName){
            index = i;
          }
        }
          
        if (index > -1) {
          data["plays"]["favorites"].splice(index, 1);
        }
        $(this).attr("active","false");
        $(this).attr("name",playName);

        var text = '<img id="star" src="../images/star.png" />';
      }
      localStorage.setItem('data', JSON.stringify(data));
      $("#favoritesMenu").html(getMenuList("favorites"));

      $(this).html(text);

    });
}