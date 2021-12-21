$(window).on('load', function(){
    $(document).ready(function () {
        $.ajax({
            type: "GET",
            url: "list.json",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (result){
                let data = $.parseJSON(JSON.stringify(result));
                data.sort(function(a, b) {
                    if (a.team.length < b.team.length) return 1;
                    if (a.team.length > b.team.length) return -1;
                    return 0;
                });
                $.each(data, function (index, value) {
                    let team = '';
                    for (let member of value.team) {
                        team = team + '<a href="https://t.me/'+ member.link +'">'+ member.name +'</a>, ';
                    }
                    team = team.substring(0, team.length -2);
                    $("#list").append('<div class="col-md-6 col-xs-12 p-5"><p class="color-primary font-weight-bold">'+(index+1)+ ". " +value.title+'</p><p class="color-grey small">'+value.description+'</p><p class="color-primary small font-weight-bold">Team: '+ team +'</p></div>');
                });
            }
        });
    });
});