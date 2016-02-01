$(function () {
    var form = $('form');
    $(function () {
        $(form).submit(function(event) {
            event.preventDefault();
            var name = $('#name').val();
            var from = $('#from').val();
            var text = $('#text').val();

            var data = {
                name: name,
                from: from,
                text: text
            };
            $.ajax({
                    type:'POST',
                    url: 'http://do.ninemile.io:3003/apis/mailer',
                    dataType: 'json',
                    data: data
                })
                .done(function(sent) {
                    console.log(sent);
                    console.log("success");
                })
                .fail(function(error) {
                    console.log(error);
                    console.log("error");
                });

        });
    });
});
