window.addEvent('domready', function() {
    // properties
    var properties = new Array();
    properties['zIndex'] = 1;
    properties['loadingText'] = 'Lade Bild #IMG# von #SIZE#...';
    // images
    var images = new Array();
    for (var i = 0; i < 32; i++) {
        images.push('https://s3-eu-west-1.amazonaws.com/thela/imageflip/zoe' + i + '.jpg');
    }
    var flipper = new ImageFlip(
        new Array('morph0', 'morph1', 'morph2', 'morph3', 'morph4'),
        new Array('d0', 'd1', 'd2', 'd3', 'd4'),
        new Array('next', 'previous'),
        images,
        properties);
        
    var accordion = new Accordion('h3.atStart', 'div.atStart', {
        opacity: false,
        onActive: function(toggler, element){
            toggler.setStyle('color', '#ff3300');
        },
     
        onBackground: function(toggler, element){
            toggler.setStyle('color', '#222');
        }
    }, $('accordion'));
});