/**
 * Created by KatherineLiu on 9/10/15.
 */

$(document).ready(function(){
    //    view PDF
    $('.viewPDF').on('click',function(){
        var pdf_link = $(this).attr('href');
        //var iframe = '<div class="iframe-container"><iframe src="'+pdf_link+'"></iframe></div>'
        //var iframe = '<object data="'+pdf_link+'" type="application/pdf"><embed src="'+pdf_link+'" type="application/pdf" /></object>'
        var iframe = '<object type="application/pdf" data="'+pdf_link+'" width="100%" height="500">No Support</object>'
        $.createModal({
            title:$(this).attr('name'),
            message: iframe,
            closeButton:true,
            scrollable:false
        });
        return false;
    });
//formatting view PDF
    (function(a){
        a.createModal=function(b){
            defaults={
                title:"",message:"Your Message Goes Here!",closeButton:true,scrollable:false
            };
            var b=a.extend({},defaults,b);
            var c=(b.scrollable===true)?'style="max-height: 420px;overflow-y: auto;"':"";
            html='<div class="modal fade" id="myModal">';
            html+='<div class="modal-dialog">';
            html+='<div class="modal-content">';
            html+='<div class="modal-header">';
            html+='<button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>';
            if(b.title.length>0){
                html+='<h4 class="modal-title">'+b.title+"</h4>"
            }
            html+="</div>";
            html+='<div class="modal-body" '+c+">";
            html+=b.message;html+="</div>";
            html+='<div class="modal-footer">';
            if(b.closeButton===true){
                html+='<button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>'
            }
            html+="</div>";
            html+="</div>";
            html+="</div>";
            html+="</div>";
            a("body").prepend(html);
            a("#myModal").modal().on("hidden.bs.modal",function(){a(this).remove()
            })
        }})(jQuery);





    $("#btnSendMsg").click(function(){
        alert("msg has been sent");
    });




//random color for the skills part
    //for(i=0;i<6;i++){
    //    $(".font"+i).css("background-color", "#"+randomColor[i]);
    //}

    //var randomColor;
    //for(var i=0;i<6;i++){
    //    randomColor[i]== Math.floor(Math.random()*16777215).toString(16);
    //    alert(randomColor[i]);
    //}

    //$(".font1").css("background-color", "#"+randomColor[0]);

    //$("viewPDF").click(function(){
    //    window.open("images/KatherineResume.pdf", "KatherineResume", window)
    //});


    //$(".font1").css("background-color", "#"+randomColor[0]);
    //$(".font1").css("background-color", "#"+randomColor[0]);
    //$(".font1").css("background-color", "#"+randomColor[0]);
    //$(".font1").css("background-color", "#"+randomColor[0]);
    //$(".font1").css("background-color", "#"+randomColor[0]);
    //$(".font1").css("background-color", "#"+randomColor[0]);


//Bootstrap instead of these JSP function
//	$('#artCarousel').carousel({
//    	interval: 5000,
//    	cycle: true
//  	});
});