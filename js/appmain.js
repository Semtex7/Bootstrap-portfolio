$(document).ready(function() {
    var waypoint = new Waypoint({
        element: $('.showing'),

        handler: function(direction) {
            $(this.element).toggleClass("bounceInUp animated");
        },
				offset: "bottom-in-view"
    });

		var waypoint2 = new Waypoint({
				element: $('.btn-social'),

				handler: function(direction) {
						$(this.element).toggleClass("zoomInRight animated");
				},
				offset: "bottom-in-view"
		});

		var waypoint3 = new Waypoint({
				element: $('.left-animate'),

				handler: function(direction) {
						$(this.element).toggleClass("zoomInLeft animated");
				},
				offset: "bottom-in-view"
		});
});
//     var skillIcon = $(".skill-icon");

//     function animateIcon() {
//       var randomItem = skillIcon[Math.floor(Math.random()*skillIcon.length)];
//       $(randomItem).addClass("icon-animate")
//     };
//       setInterval(animateIcon,3000);
//
//     function clearClass() {
//       for (var i = 0; i < skillIcon.length; i++) {
//         if(skillIcon.hasClass("icon-animate")){
//             skillIcon.removeClass("icon-animate");
//         };
//       };
//     };
//     setInterval(clearClass,4000);
// });
