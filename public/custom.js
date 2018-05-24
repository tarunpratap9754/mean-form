$(function(){
var countryOptions;
    $.getJSON('countries.json',function(result){
        $.each(result,function(i,country) {
            countryOptions+="<option value='"
            +country.code+
            "'>"
            +country.name+
            "</option>";
        });
        $('#country').html(countryOptions);
    });
});