jQuery(document).ready(function(){
	jQuery('.red-clr').click(function(){
		jQuery('body').addClass('red-clr-bar').removeClass('pink-clr-bar blue-clr-bar green-clr-bar yellow-clr-bar black-clr-bar');
	});
	jQuery('.green-clr').click(function(){
		jQuery('body').addClass('green-clr-bar').removeClass('pink-clr-bar blue-clr-bar red-clr-bar yellow-clr-bar black-clr-bar');
	});
	jQuery('.black-clr').click(function(){
		jQuery('body').addClass('black-clr-bar').removeClass('pink-clr-bar blue-clr-bar red-clr-bar yellow-clr-bar green-clr-bar');
	});
	jQuery('.yellow-clr').click(function(){
		jQuery('body').addClass('yellow-clr-bar').removeClass('pink-clr-bar blue-clr-bar red-clr-bar black-clr-bar green-clr-bar');
	});
	jQuery('.blue-clr').click(function(){
		jQuery('body').addClass('blue-clr-bar').removeClass('yellow-clr-bar pink-clr-bar red-clr-bar black-clr-bar green-clr-bar');
	});
	jQuery('.pink-clr').click(function(){
		jQuery('body').addClass('pink-clr-bar').removeClass('yellow-clr-bar blue-clr-bar red-clr-bar black-clr-bar green-clr-bar');
	});
});