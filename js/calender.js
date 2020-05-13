        /* calendar built with the tutorial from https://liginc.co.jp/355474 */

        var sw = -1;
        var oned  = document.getElementById('one');
        var twod = document.getElementById('two');
        var threed = document.getElementById('three');
        var fourd = document.getElementById('four');
        var fived = document.getElementById('five');

          var i = 0;
            function wRes(){
              if(!(sw===-1 || (Math.abs($(window).width() - sw)/sw)*100 > 10))
              {
                return;
              }
              sw = $(window).width();
              console.log("called me"+i);
              i++;
              let h  = $(window).height();
		          oned.style.minHeight = h -$('#one').offset().top+"px";
		          twod.style.minHeight = h-45+"px";
		          threed.style.minHeight = h-45+"px";
              fourd.style.minHeight = h-45+"px";
              fived.style.minHeight = h-45+"px";
              $('.vcenter').css("top", ($('.vcenter').parent().height()-$('.vcenter').height())/2 +"px");
            }
            
            function lcal(){
              
              wRes();
            }
            function lcal1(){
             
              wRes();
              
            }
        $window.on('load',lcal);
        window.onresize = (wRes);
        
        
