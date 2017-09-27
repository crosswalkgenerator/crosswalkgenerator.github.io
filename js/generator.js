jQuery(function($) {
    var standard2 = {
        'Dublin Core': ['MARC', 'METS', 'MODS', 'VRA Core'],
        'MARC': ['Dublin Core', 'METS', 'MODS', 'VRA Core'],
        'METS': ['Dublin Core', 'MARC', 'MODS', 'VRA Core'],
        'MODS': ['Dublin Core', 'MARC', 'METS', 'VRA Core'],
        'VRA Core': ['Dublin Core', 'MARC', 'METS', 'MODS'],
    }
    
    var $standard2 = $('#location');
    $('#standard1').change(function () {
        var standard1 = $(this).val(), std2 = standard2[standard1] || [];
        
        var html = $.map(std2, function(std){
            return '<option value="' + std + '">' + std + '</option>'
        }).join('');
        $standard2.html(html)
    });
});
