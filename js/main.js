
function getNextEvent(){

var t = new Date(today.toDateString());
var ets = eList[eList.length-1]["w1"].split(', ');
var et = new Date(ets[1]+" "+ets[2]);
if(t-et>0){
    return "<p>No information yet!</p>";
}

var i  =0;
for(i = eList.length-1;i>=0;i--){
    var ets = eList[i]["w1"].split(', ');
    var et = new Date(ets[1]+" "+ets[2]);
    if(t - et > 0){
        return '<div class=\"neup\">'+'<p class=\"neup-t\">'+eList[i+1]["t"]+'<div class=\"neup-tme\">'+eList[i+1]["w1"]+'</div>'+'</p>\n'+'<p class=\"neup-w\">'+eList[i+1]["w2"]+'</p>\n'+'<p class=\"neup-d\">'+eList[i+1]["d"]+'</p>'+'</div>';
    }
    
}

}

function getMonthEvent(month, year){


    var darr = new Array();
    var i  =0;
    for(i = eList.length-1;i>=0;i--){
        var ets = eList[i]["w1"].split(', ');
        var et = new Date(ets[1]+" "+ets[2]);
        if(et.getMonth() == month && et.getFullYear() == year ){
            darr.push(eList[i]);
        }
        
    }
    var retstr = "";
    for(i=0;i<darr.length;i++){
        retstr = retstr+'<div class=\"neup\">' +'<p class=\"neup-t\">'+darr[i]["t"]+'<div class=\"neup-tme\">'+darr[i]["w1"]+'</div>'+'</p>\n'+'<p class=\"neup-w\">'+darr[i]["w2"]+'</p>\n'+'<p class=\"neup-d\">'+darr[i]["d"]+'</p>'+'</div>';
    }
    if(retstr===""){
        return "<p>No events this month!</p>";
    }

    return retstr ;
    
}



