$(document).ready(function(e){


function get_json_data(id, parent_id){
    var html_code = '';
    $.getJSON('json_list.json',function(data){
        ListName =id.substr(0,1).toUpperCase() + id.substr(1);
        html_code += '<option value="">Select' + ListName +'</option>';
        $.each(data,function(key,value){
            if(value.parent_id == parent_id) {
                html_code += '<option value="">Select' + ListName +'</option>';
            }
        });
    });    
}
get_json_data('brand',0);

$(document).on('change','#brand', function(){
    var brand_id=$(this).val();
    if(brand_id !=''){
        get_json_data('category',brand_id);
    } else {
        $('#category').html('<option value="">Select Category</option>');    
    }
    $('#product').html('<option value="">Select Product</option>');
});

$(document).on('change','#category',function(){
    var category_id= $(this).val();
    if(category_id !=''){
        get_json_data('product',category_id);
    } else {
        $('#product').html('<option value="">Select Variant</option>');
    }
});

});