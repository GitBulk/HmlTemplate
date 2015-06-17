// web font loader
WebFontConfig = {
    google: {
        families: ['Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800',
                   'Lora:400,700,400italic,700italic',
                   'Raleway:400,300,700']
    },
    timeout: 2000
};

(function (d) {
    var wf = d.createElement('script'), s = d.scripts[0];
    wf.src = 'https://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true'
    s.parentNode.insertBefore(wf, s);
})(document);