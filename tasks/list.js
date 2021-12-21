$(window).on('load', function(){
    $(document).ready(function () {
        $.ajax({
            type: "GET",
            url: "list.json",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (result){
                let data = $.parseJSON(JSON.stringify(result));
                let active = [];
                let non_active = [];
                $.each(data, function (index, value) {
                    if (value.team[0].name != "-") {
                        let team = '';
                        for (let member of value.team) {
                            team = team + '<a href="https://t.me/'+ member.link +'">'+ member.name +'</a>, ';
                        }
                        team = team.substring(0, team.length -2);
                        $("#list").append('<div class="col-md-6 col-xs-12 p-md-5 p-2 py-5"><p class="color-primary font-weight-bold">'+value.title+'</p><p class="color-grey small">'+value.description+'</p><p class="color-primary small font-weight-bold">Team: '+ team +'</p></div>');
                    }
                });
                $("#list").append('<hr><div class="col-12 color-grey font-weight-bold">Проекти без команди</div>');
                $.each(data, function (index, value) {
                    if (value.team[0].name == "-") {
                        let team = '';
                        for (let member of value.team) {
                            team = team + '<a href="https://t.me/'+ member.link +'">'+ member.name +'</a>, ';
                        }
                        team = team.substring(0, team.length -2);
                        $("#list").append('<div class="col-md-6 col-xs-12 p-md-5 p-2 py-5"><p class="color-primary font-weight-bold">'+value.title+'</p><p class="color-grey small">'+value.description+'</p></div>');
                    }
                });
            }
        });
    });
});