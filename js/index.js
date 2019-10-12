$(document).ready(function() {

    // start trnsfer from json to js

    for (i = 0; i < videoteca.length; i++) {

        $(".libreria").append(`
		<div class="col-lg-6 row">
			<div class="containerSingelMovie row">
				<div class="image col-lg-6" >
				<img width="100%" height="100%" src="${videoteca[i].img}" alt="${videoteca[i].title}">
				</div>
				<div class="containerStoryMovie text-white col-lg-4">
				<div class="title">${videoteca[i].title}</div>
				<br>
				<br>
				<div><h1><small>${videoteca[i].story}</h1></small></div>
				<br>
				<div class = "effectbutton d-flex justify-content-between">
					<button class=" row col-lg-2 button">
						<h1 class="text-success"><span><i class="fas fa-thumbs-up"></span></i></h1>
					</button>	
						<span class="totalLikes numberLikeStyle">${videoteca[i].like}</span>
					</div>	
			</div>										
					
		</div>
	`);

    }

    // like counter

    var counter = $(".button");
    var newValue = $(".totalLikes");

    for (let i = 0; i < videoteca.length; i++) {

        $(counter[i]).on('click', function() {
            ++videoteca[i].like;
            $(newValue[i]).text(videoteca[i].like);
        });
    }


});