$(document).ready(function()
{
	var indice=0;
	var risp= ["mondo", "111", "movio"];

	
	$("#enter").click(function()
	{
		if($("#passcode").val()==risp[indice])
		{
			$("#d"+indice).fadeOut("slow");
			$("#text").fadeOut("slow"); // 1
			
			$("#load").delay(600).fadeIn("slow").delay(500).fadeOut("slow"); //2
			$("#success").delay(2300).fadeIn("slow"); //3

			
			$(".icon.success").removeClass("animate").addClass("animate");
			$(".icon.success .line.tip").removeClass("animate-success-tip").addClass("animate-success-tip");
			$(".icon.success .line.long").removeClass("animate-success-long").addClass("animate-success-long");
			
			$("#success").delay(1000).fadeOut("slow"); //4
			
			indice++;
			$("#passcode").val("");
			
			$("#d"+indice).delay(4500).fadeIn("slow"); //5
			if(indice!=risp.length)
				$("#text").delay(4500).fadeIn("slow");
		}
		else
		{
			$("#d"+indice).fadeOut("slow");
			$("#text").fadeOut("slow"); // 1
			
			$("#load").delay(600).fadeIn("slow").delay(500).fadeOut("slow"); //2
			$("#error").delay(2300).fadeIn("slow"); //3


			$(".icon.error").addClass("animate-error-icon");
			$(".icon.error .x-mark").addClass("animate-x-mark");
			
			$("#error").delay(1000).fadeOut("slow"); //4
			
			$("#passcode").val("");
			
			$("#d"+indice).delay(4500).fadeIn("slow"); //5
			$("#text").delay(4500).fadeIn("slow");
		}
	});
	
//	numeri
	$("#t1").click(function()
	{
		var val=$("#passcode").val();
		$("#passcode").val(val+"1");
	});
	$("#t2").click(function()
	{
		var val=$("#passcode").val();
		$("#passcode").val(val+"2");
	});
	$("#t3").click(function()
	{
		var val=$("#passcode").val();
		$("#passcode").val(val+"3");
	});
	$("#t4").click(function()
	{
		var val=$("#passcode").val();
		$("#passcode").val(val+"4");
	});
	$("#t5").click(function()
	{
		var val=$("#passcode").val();
		$("#passcode").val(val+"5");
	});
	$("#t6").click(function()
	{
		var val=$("#passcode").val();
		$("#passcode").val(val+"6");
	});
	$("#t7").click(function()
	{
		var val=$("#passcode").val();
		$("#passcode").val(val+"7");
	});
	$("#t8").click(function()
	{
		var val=$("#passcode").val();
		$("#passcode").val(val+"8");
	});
	$("#t9").click(function()
	{
		var val=$("#passcode").val();
		$("#passcode").val(val+"9");
	});
	$("#t0").click(function()
	{
		var val=$("#passcode").val();
		$("#passcode").val(val+"0");
	});
//	prima
	$("#q").click(function()
	{
		var val=$("#passcode").val();
		$("#passcode").val(val+"q");
	});
	$("#w").click(function()
	{
		var val=$("#passcode").val();
		$("#passcode").val(val+"w");
	});
	$("#e").click(function()
	{
		var val=$("#passcode").val();
		$("#passcode").val(val+"e");
	});
	$("#r").click(function()
	{
		var val=$("#passcode").val();
		$("#passcode").val(val+"r");
	});
	$("#t").click(function()
	{
		var val=$("#passcode").val();
		$("#passcode").val(val+"t");
	});
	$("#y").click(function()
	{
		var val=$("#passcode").val();
		$("#passcode").val(val+"y");
	});
	$("#u").click(function()
	{
		var val=$("#passcode").val();
		$("#passcode").val(val+"u");
	});
	$("#i").click(function()
	{
		var val=$("#passcode").val();
		$("#passcode").val(val+"i");
	});
	$("#o").click(function()
	{
		var val=$("#passcode").val();
		$("#passcode").val(val+"o");
	});
	$("#p").click(function()
	{
		var val=$("#passcode").val();
		$("#passcode").val(val+"p");
	});

//	seconda
	$("#a").click(function()
	{
		var val=$("#passcode").val();
		$("#passcode").val(val+"a");
	});
	$("#s").click(function()
	{
		var val=$("#passcode").val();
		$("#passcode").val(val+"s");
	});
	$("#d").click(function()
	{
		var val=$("#passcode").val();
		$("#passcode").val(val+"d");
	});
	$("#f").click(function()
	{
		var val=$("#passcode").val();
		$("#passcode").val(val+"f");
	});
	$("#g").click(function()
	{
		var val=$("#passcode").val();
		$("#passcode").val(val+"g");
	});
	$("#h").click(function()
	{
		var val=$("#passcode").val();
		$("#passcode").val(val+"h");
	});
	$("#j").click(function()
	{
		var val=$("#passcode").val();
		$("#passcode").val(val+"j");
	});
	$("#k").click(function()
	{
		var val=$("#passcode").val();
		$("#passcode").val(val+"k");
	});
	$("#l").click(function()
	{
		var val=$("#passcode").val();
		$("#passcode").val(val+"l");
	});

//	terza
	$("#z").click(function()
	{
		var val=$("#passcode").val();
		$("#passcode").val(val+"z");
	});
	$("#x").click(function()
	{
		var val=$("#passcode").val();
		$("#passcode").val(val+"x");
	});
	$("#c").click(function()
	{
		var val=$("#passcode").val();
		$("#passcode").val(val+"c");
	});
	$("#v").click(function()
	{
		var val=$("#passcode").val();
		$("#passcode").val(val+"v");
	});
	$("#b").click(function()
	{
		var val=$("#passcode").val();
		$("#passcode").val(val+"b");
	});
	$("#n").click(function()
	{
		var val=$("#passcode").val();
		$("#passcode").val(val+"n");
	});
	$("#m").click(function()
	{
		var val=$("#passcode").val();
		$("#passcode").val(val+"m");
	});


//	seconda
	$("#space").click(function()
	{
		var val=$("#passcode").val();
		$("#passcode").val(val+" ");
	});
	$("#del").click(function()
	{
		var val=$("#passcode").val();
		$("#passcode").val(val.substring(0,val.length-1));
	});
	
});






