$(function(){
    loadInfo();
});

function loadInfo() {
    $.ajax({
        type: "GET",
        url:"https://reqres.in/api/users?page=1",
        success: function (response) {
            console.log(response);
            var info = $.ajax('#info');
        }        
    });
    $.ajax({
        type: "GET",
        url:"https://reqres.in/api/users?page=2",
        success: function (response) {
            console.log(response);
            var info = $.ajax('#info');
        }        
    });
}