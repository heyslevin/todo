const model = () => {

	const alerter = function() {alert("Fuck it")};

	const alertone = () => {alert("This works")};

	const logos = ["one","two","three"];


 	return {
		alerter,
		alertone,
		logos
 	}

 };

modeltest = model();
modeltest.alerter()
console.log(modeltest.logos)