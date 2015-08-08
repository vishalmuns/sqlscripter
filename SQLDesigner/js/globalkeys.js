// function myFunction(keyPressed) {
//     if(keyPressed == 'S' || keyPressed == 's')
//         alert("What");
// }


$(document).keypress(function(event){
    var controler = SQL.Designer;
    var key = String.fromCharCode(event.which);
    var menuOpen = $('.modal-dialog').is(':visible');
    var inputonfocus = $('input:focus').length > 0;
    //alert(inputonfocus);
    //alert(event.which);
    //alert(event.which + " " + event.ctrlKey);
    if(!menuOpen && !inputonfocus && event.which == 15) {
        controler.io.click();
    }
    else if(!menuOpen && !inputonfocus){
        if(event.which == 116 || event.which == 64) controler.tableManager.preAdd(event);
        else if(event.which == 110 || event.which == 78) controler.tableManager.preAddNote(event);
    }
});

$(document).ready(function () {
    var currentZoom = 1.0;
    var timeoutId;
    $('#zoomin').mousedown(function() {
        if(timeoutId || !correctZoomLevel()) return;
        timeoutId = setInterval(function() {
            $('#area').animate({ 'zoom': currentZoom += .1 }, 100);
        }, 100);
    }).mouseup(function() {
        clearInterval(timeoutId);
        timeoutId = null;
        if(!correctZoom()) return;
        $('#area').animate({ 'zoom': currentZoom += .1 }, 'slow');
        setInterval(function(){d.redraw();},300);
    });

    $('#zoomout').mousedown(function() {
        if(currentZoom < 0.6 || !correctZoomLevel()) return;
        if(timeoutId) return;
        timeoutId = setInterval(function() {
            if(currentZoom < 0.6) return;
            $('#area').animate({ 'zoom': currentZoom -= .1 }, 100);
        }, 100);
    }).mouseup(function() {
        clearInterval(timeoutId);
        timeoutId = null;
        if(currentZoom < 0.6 || !correctZoom()) return;
        $('#area').animate({ 'zoom': currentZoom -= .1 }, 'slow');
        setInterval(function(){d.redraw();},300);
    });

    $(document).keydown(function(event){
        var menuOpen = $('.modal-dialog').is(':visible');
        var inputonfocus = $('input:focus').length > 0;
        //alert(event.which);
        if(event.which == 187) {
            if(timeoutId) return;
            if(menuOpen || inputonfocus || !correctZoomLevel()) return;
            timeoutId = setInterval(function() {
                $('#area').animate({ 'zoom': currentZoom += .1 }, 100);
            }, 100);
        } else if(event.which == 189) {
            if(menuOpen || inputonfocus || !correctZoomLevel()) return;
            if(currentZoom < 0.6 || !correctZoom()) return;
            if(timeoutId) return;
            timeoutId = setInterval(function() {
                if(currentZoom < 0.6) return;
                $('#area').animate({ 'zoom': currentZoom -= .1 }, 100);
            }, 100);
        } else if (event.ctrlKey) {
            if (event.keyCode == 65 || event.keyCode == 97) { // 'A' or 'a'
              if(menuOpen || inputonfocus) return;
              event.preventDefault();
              // SELECT ALL MARKERS HERE...
              d.tableManager.selectAll();
            }
        }
    });

    $(document).keyup(function(event){
        var menuOpen = $('.modal-dialog').is(':visible');
        var inputonfocus = $('input:focus').length > 0;
        if(event.which == 187) {
            //alert(event.which);
            if(menuOpen || inputonfocus || !correctZoom()) return;
            clearInterval(timeoutId);
            timeoutId = null;
            $('#area').animate({ 'zoom': currentZoom += .1 }, 'slow');
            setInterval(function(){d.redraw();},300);
        } else if(event.which == 189) {
            if(menuOpen || inputonfocus || !correctZoom()) return;
            clearInterval(timeoutId);
            timeoutId = null;
            if(currentZoom < 0.6) return;
            $('#area').animate({ 'zoom': currentZoom -= .1 }, 'slow');
            setInterval(function(){d.redraw();},300);
        }
    });
    
    function correctZoomLevel() {
        return detectZoom.zoom() == 1 || detectZoom.zoom() == 0;
    }

    function correctZoom() {
        var zoom = detectZoom.zoom();
        if(zoom == 1 || zoom == 0)
            return true;
        var zoomlevel = zoom * 100;
        BootstrapDialog.alert({
            title: 'Zoom Error',
            message: 'You should set at 100% zoom level of your browser to use this function! Your current zoom level:' + zoomlevel + '%',
            type: BootstrapDialog.TYPE_WARNING, // <-- Default value is BootstrapDialog.TYPE_PRIMARY
            closable: true // <-- Default value is true
        });
        return false;
    }

    $('*').on('click dblclick scroll', function(){
      if($('#contextMenu').is(':visible')) $('#contextMenu').hide();
    });

    if(ismobile) $('#zoom').hide();
});