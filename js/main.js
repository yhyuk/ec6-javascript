$(document).ready(function() {
    'use strict';
    paper.install(window);
    paper.setup(document.getElementById('mainCanvas'));

    // ex 1
    // var c = Shape.Circle(200, 200, 50);
    // c.fillColor = 'green';

    // ex 2
    // var c;
    // for (var x=25; x<400; x+=50) {
    //     for (var y=25; y<400; y+=50) {
    //         c = Shape.Circle(x, y, 20);s
    //         c.fillColor = 'cornflowerblue';
    //     }
    // }
    
    var tool = new Tool();

    tool.onMouseDown = function(event) {
      var c = Shape.Circle(200, 200, 80);
      c.fillColor = 'black';
        
      var text = new PointText(200, 200);
      text.justification = 'center';
      text.fillColor = 'white';
      text.fontSize = 20;
      text.content = 'Hello World';
    };

    paper.view.draw();
});
