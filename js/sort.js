
// Copied reference from the PDF to tinker with. Having issues with the very first line again...

$('.faq-sort-list').click(function (e) {
    var $sort = this;
    var $faq = $('#faq-list');
    var $li = $('li', $list);


    $li.sort(function(a, b){
        var ta = $(a).text();
        var tb = $(b).text();

        if($($sort).hasClass('asc')){
            return (ta > tb) ? 1 : 0;
        } else {
            return (ta < tb) ? 1 : 0;
        }
    });
    $.each($li, function(index, row){
        $faq.append(row);
    });
    e.preventDefault();
});