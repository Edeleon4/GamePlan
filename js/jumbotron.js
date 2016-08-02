

$(document).ready(function(){
    var jumbotronHTML = '<div class="jumbotron">'+
                            '<div class="container-fluid ">'+
                                '<div class="row" id="jumborow">'+
                                    '<div class="col-lg-6 col-md-6" id="jumboleft">'+
                                        '<h1 id="feature">Featured Play</h1>'+
                                        '<h1 class="playClick" name="Princeton Offense" id="princeton">Princeton Offense</h1>'+
                                    '</div>'+
                                    '<div class="col-lg-6 col-md-6" id="jumboright">'+
                                        '<video width=auto height="350" autoplay controls id="featured-video">'+
                                          '<source src="../videos/none.mp4" type="video/mp4">'+
                                        'Your browser does not support the video tag.'+
                                        '</video>'+
                                    '</div>'+
                                '</div>'+
                            '</div>'
                        '</div>' ;
    var menuType = getUrlVars()["breadCrumb"];
    if(menuType === undefined){
        $("#jumbotronContainer").html(jumbotronHTML);
    }else{
        $("#jumbotronContainer").html("");
    }

});
