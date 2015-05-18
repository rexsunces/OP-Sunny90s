$(function () {
    $("#button-1").singleTap(function () {
        $("#background-2").show();
        $("#modal-1").show();
        $("#modal-1-close").show();
    });
    $("#modal-1-close").singleTap(function () {
        $("#background-2").hide();
        $("#modal-1").hide();
        $("#modal-1-close").hide();
    });
    $("#button-2").singleTap(function () {
        $("#background-2").show();
        $("#modal-2").show();
        $("#modal-2-close").show();
    });
    $("#modal-2-close").singleTap(function () {
        $("#background-2").hide();
        $("#modal-2").hide();
        $("#modal-2-close").hide();
    });
    $("#button-3").singleTap(function () {
        $("#background-2").show();
        $("#modal-3").show();
        $("#modal-3-close").show();
        $("#form").show();
    });
    $("#modal-3-close").singleTap(function () {
        $("#background-2").hide();
        $("#modal-3").hide();
        $("#modal-3-close").hide();
        $("#form").hide();
    });
    $("#upload-area").click(function () {
        $("#upload-input").click();
    });
    $("#submit").click(function () {
        var name = $("#name").val();
        var age = $("#age").val();
        var sex = $("input[name='sex']:checked").val();
        var phone = $("#phone").val();
        var school = $("#school").val();
        var goodat = $("#goodat").val();
        var file = $("#upload-input").get(0).files[0];
        $.ajax({
            type: "POST",
            url:("/index.php?r=sun90/create&name=" + name + "&age=" + age + "&sex=" + sex + "&phone=" + phone + "&school=" + school + "&goodat=" + goodat),
            contentType: "application/octet-stream",
            processData: false,
            data: file,
            success: function (data) {
                if(data.success==true){
				alert("提交成功");
					//$('#submit').attr("src","\\"+data.data.photo);
				}
				else{
				alert("提交失败！");
				}
            },
            error: function () {
                alert("提交失败！");
            }
        })
    });
	$('#upload-input').change(function(e){
        var file = e.target.files[0];
        var reader = new FileReader();  
        reader.onload = function(e){
			var m="<img src='"+e.target.result+"' style='height:100%;width:100%'/>";
			$("#upload-area").empty();
			$(m).appendTo($("#upload-area"));		      
        }
        reader.readAsDataURL(file);
	});
});


