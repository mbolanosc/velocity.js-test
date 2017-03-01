
$("#rect")
    .delay(500)
	  .velocity({ x: "+=350", y: "50%" })
    .velocity({ fillRed: 255, strokeWidth: 2 })
	  .velocity({ height: 100, width: 100 })
    .velocity("reverse", { delay: 250 });
