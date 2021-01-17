{
    let delay = ms => new Promise(res => setTimeout(res, ms));

    async function pressAllButtons() {
        let buttons = $("#adbl-library-content-row-B08K32V928 > div.bc-row-responsive.bc-spacing-top-s2 > div.bc-col-responsive.bc-spacing-top-none.bc-col-10 > div > div.bc-col-responsive.adbl-library-action.bc-col-2.bc-col-offset-1 > div:nth-child(3) > span > a > span > span");
	    for(let button of buttons) {
			    console.log(button);
			    button.click();
		    	await delay(5000);
	    }
    }

    pressAllButtons();
}