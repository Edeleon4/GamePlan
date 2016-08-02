var getMenuList = function(key){
  var ans = "";
  for(var prop in data["plays"][key]){
    console.log(key);
    var playName = data["plays"][key][prop].name;
    ans = ans +'<li><a href="play.html?playName='+playName+'">'+playName+'</a></li>';
  }
  if(ans === ""){
    ans = "<h4 style='text-align:center'>Currently you have no favorites</h4>";
  }
  return ans;
}

// Read a page's GET URL variables and return them as an associative array.
function getUrlVars()
{
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++)
    {

        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}
$(document).ready(function(){
  $("#top").html('<nav class="navbar navbar-default navbar-fixed-top">'+
        '<div class="container-fluid">'+
          '<!-- Brand and toggle get grouped for better mobile display -->'+
          '<div class="navbar-header">'+
            '<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">'+
              '<span class="sr-only">Toggle navigation</span>'+
              '<span class="icon-bar"></span>'+
              '<span class="icon-bar"></span>'+
              '<span class="icon-bar"></span>'+
            '</button>'+
            '<a class="navbar-brand" href="index.html">Game Plan</a>'+
          '</div>'+
          '<!-- Collect the nav links, forms, and other content for toggling -->'+
          '<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">'+
            '<ul class="nav navbar-nav">'+
              '<li class="dropdown">'+
                '<a href="index.html?breadCrumb=Offense" class="dropdown-toggle disabled" data-toggle="dropdown" role="button" aria-expanded="false">Offense<span class="caret"></span></a>'+
                '<ul class="dropdown-menu" role="menu">'+getMenuList("offense")+
                '</ul>'+
              '</li>'+
              '<li class="dropdown">'+
                '<a href="index.html?breadCrumb=Defense" class="dropdown-toggle disabled" data-toggle="dropdown" role="button" aria-expanded="false">Defense<span class="caret"></span></a>'+
                '<ul class="dropdown-menu" role="menu">'+getMenuList("defense")+
                '</ul>'+
              '</li>'+
              '<li class="dropdown">'+
                '<a href="index.html?breadCrumb=Favorites" class="dropdown-toggle disabled" data-toggle="dropdown" role="button" aria-expanded="false">Favorites<span class="caret"></span></a>'+
                '<ul id="favoritesMenu" class="dropdown-menu" role="menu">'+getMenuList("favorites")+
                  
                '</ul>'+
              '</li>'+
            '</ul>'+
            '<ul class="nav navbar-nav navbar-right">'+
              '<form id="search" class="navbar-form navbar-left" role="search">'+
                '<div class="form-group">'+
                  '<div id="search-field">'+
                    '<input type="text" class="typeahead form-control" placeholder="Search Play">'+
                  '</div>'+
                '</div>'+
                '<button type="submit" class="btn btn-default">Search</button>'+
              '</form>'+
            '</ul>'+
          '</div><!-- /.navbar-collapse -->'+
        '</div><!-- /.container-fluid -->'+
      '</nav>');
      $( ".dropdown" ).hover(function() {
        $( this ).toggleClass("open");
      }, function() {
        $( this ).toggleClass("open");
      });
});