
let num = 0
$('#generate').click(()=>{

	
	num++
	// input = $('.tasklist').clone().attr('id','num'+num).attr('class','taskclone')
	let maininput =  $('<div class="thetask"><input type="text" class="task"/><button class="taskrem">Remove</button><button class="taskdone">Done</button>').attr('id','taskholder'+num).css('display','inline-block')
	if ($('#test').val() == ''){
		

	} else {
		
	$('.form').append(maininput);
	$('#taskholder'+num+' > .task').val($('#test').val());

	$('#test').val('')
	}
})


$(document).on("click" ,".taskrem",function(){
	$(this).parent().remove();
})

$(document).on("click" ,".taskdone",function(){
	$(this).parent().remove();

})





