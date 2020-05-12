        /* calendar built with the tutorial from https://liginc.co.jp/355474 */

        var sw = -1;
        var oned  = document.getElementById('one');
        var twod = document.getElementById('two');
        var threed = document.getElementById('three');
        var fourd = document.getElementById('four');
        var fived = document.getElementById('five');

        var $window = $(window);
        var $month = $('#js-month');
        var $yer = $('#js-yer');
        var $tbody = $('#js-calendar-body');
        
        var today = new Date();
        var currentYear = today.getFullYear(),
            currentMonth = today.getMonth();
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
              calendarHeading(currentYear, currentMonth);
              calendarBody(currentYear, currentMonth, today);
              $('#neup-id').html(getNextEvent());
              $('#moev').html(getMonthEvent(currentMonth, currentYear));
              $('#moev-h').html("Events for "+monthNames[currentMonth]+", "+currentYear+":");
              wRes();
            }
            function lcal1(){
              calendarHeading(currentYear, currentMonth);
              calendarBody(currentYear, currentMonth, today);
              $('#moev').html(getMonthEvent(currentMonth, currentYear));
              $('#moev-h').html("Events for "+monthNames[currentMonth]+", "+currentYear+":");
              wRes();
              
            }
        $window.on('load',lcal);
        window.onresize = (wRes);
        
        function calendarBody(year, month, today){
          var todayYMFlag = today.getFullYear() === year && today.getMonth() === month ? true : false;
          var startDate = new Date(year, month, 1);
          var endDate  = new Date(year, month + 1 , 0);
          var startDay = startDate.getDay();
          var endDay = endDate.getDate();
          var textSkip = true;
          var textDate = 1;
          var tableTd ='';
          var tableBody ='';
          
          for (var row = 0; row < 6; row++){
            var tr = '<tr>';
            
            for (var col = 0; col < 7; col++) {
              if (row === 0 && startDay === col){
                textSkip = false;
              }
              if (textDate > endDay) {
                textSkip = true;
              }
              var addClass = todayYMFlag && textDate === today.getDate() && !textSkip && (new Date()).getMonth() === month && (new Date()).getFullYear() === year ? 'is-today' : '';
              var textTd = textSkip ? '&nbsp;' : textDate++;
              var td = '<td class="'+addClass+'">'+textTd+'</td>';
              tr += td;
            }
            tr += '</tr>';
            tableBody += tr;
          }
          $tbody.html(tableBody);
        }
        
        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
          "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
        ];
        
        function calendarHeading(year, month){
          $month.text(monthNames[month]);
          $yer.text(year);
        }
