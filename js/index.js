var changeToPlay = function(play){
	if(play !== undefined ){
    	location.assign("play.html?playName="+play.name);
    	console.log("changetoPlay");
	}
}
console.log("loaded");

var createHomePage = function(plays, menuType){

	var bodyText = "";
	if (menuType) {
		bodyText = 	'<div class="row">'+
			        '<ol class="breadcrumb">'+
			          '<li><a href="index.html">Home</a></li>'+
			          '<li id="titleCrumb">'+ menuType +'</li>'+
			        '</ol>'+
			      '</div>';
	} else {
		bodyText = '<div class="row">'+
				        '<ol class="breadcrumb">'+
				          '<li>All Plays</li>'+
				        '</ol>'+
				    '</div>'
	}
	for(var i = 0; i < Math.min(12,plays.length);i++){
		var thumbnail = "";
		thumbnail += '<div class="col-lg-3 col-md-3 col-sm-3 col-xs-6 text-center" ><div class="thumbnail">';
        thumbnail +='<div class="text playClick" name="'+plays[i].name+'">';
		var multiplier = 30;
		var imgWidth = 5*multiplier;
		var imgHeight =3*multiplier;
        thumbnail += '<img src="../images/'+plays[i].image+'" width="'+imgWidth+'" height="'+imgHeight+'"></h2><p class="playButton" name="'+plays[i].name+'">'+plays[i].name+'</p>';
        	thumbnail += getFavoriteButtonHTML(plays[i].name,true);
		
        thumbnail += '</div></div></div>';
		if(i%4 == 0){
			thumbnail = '<div class="row">'+thumbnail;
			if(i == Math.min(12,plays.length)-1){
				thumbnail+= '</div>';
			}
		}else if(i%4 == 3|| i == Math.min(12,plays.length)-1){
			thumbnail+= '</div>';
		}
		bodyText +=thumbnail;

	}
	$("#main_content").html(bodyText);
	addFavoriteListeners(true);
	$(".playClick").click(function(){
		console.log("playClick");
    	var play = data[$(this).attr("name")];
        changeToPlay(play);
    });
    
}




$(document).ready(function(){

    var defenseMoves = data["plays"]["defense"];
    var offenseMoves = data["plays"]["offense"];
    var moves = [];

    var summedLength = defenseMoves.length+offenseMoves.length;
    var menuType = getUrlVars()["breadCrumb"];
    if (menuType){
    	moves = data["plays"][menuType.toLowerCase()]
    }else{
    	for(var i = 0;i< summedLength;i++){
	    	if(i < defenseMoves.length){
	    		moves.push(defenseMoves[i]);
	    	}else{
	    		moves.push(offenseMoves[i%defenseMoves.length]);
	    	}
    	}
    }
    createHomePage(moves, menuType);
    console.log($("#search-field-input"));


});
