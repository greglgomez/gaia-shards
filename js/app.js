/* eslint-disable no-unused-vars */

// initialise the universe
let currentFormation = 'wisp',
	nextFormationCost = 100,
	progress = 0,
	hydrogen = 0,
	hydrogenTotal = 0,
	hydrogenPS = 0,
	helium = 0,
	heliumTotal = 0,
	heliumPS = 0,
	mass = 0,
	massCost = 10,
	massTotal = 0,
	time = 0,
	temperature = 0,
	pressure = 0;

updateUI();

// update UI with resource totals
function updateUI() {
	// update resources
	$('#hydrogen').text(hydrogen);
	$('#helium').text(helium);

	// update measures
	$('#time').text(time + 's');
	$('#mass').text(mass);
	$('#temperature').text(temperature);
	$('#pressure').text(pressure);

	// update costs
	$('#massCost').text('(' + massCost + 'H)');

	// update rates
	$('#hps').text(hydrogenPS + ' H/s');

	// updates current formation
	$('#currentFormation').text(currentFormation);

	//disable buttons that are too expensive
	if ( hydrogen < massCost) {
		$('#addMass')
		.attr('data-toggle', 'tooltip')
		.attr('data-placement', 'right')
		.attr('title', 'not enough H');
	};
}

// increase hydrogen everytime hydrogen is clicked
$('#drawHydrogen').on('click', function() {
	hydrogen += 1;
	updateUI();
});

// add mass
$('#addMass').on('click', function() {
	if ( hydrogen < massCost ) {} else {
		// increment mass
		mass++;
		// increment hydrogen per second
		hydrogenPS++;
		// subtract mass cost from hydrogen
		hydrogen -= massCost;
		// increase mass cost
		massCost = Math.ceil(massCost * 1.1);
		// update formation progress
		updateProgress();
	}
});

// and then there was time
function timer() {
	time++;
}

// figures out current formation stage and set it in universe.currentFormation
function checkFormation() {
	if ( mass < 100 ) {
		currentFormation = 'wisp';
	} else if ( mass > 1000 ) {
		currentFormation = 'small cloud';
		nextFormationCost = 10000;
	} else if ( mass > 10000 ) {
		currentFormation = 'large cloud';
		nextFormationCost = 100000;
	} else if ( mass > 100000 ) {
		currentFormation = 'small clump';
		nextFormationCost = 1000000;
	} else if ( mass > 1000000 ) {
		currentFormation = 'large clump';
		nextFormationCost = 10000000;
	} else if ( mass > 10000000 ) {
		currentFormation = 'protostar';
		nextFormationCost = 100000000;
	}
};

// update formation progress bar
function updateProgress() {
	progress++;
	$('#pbar').css('width', progress + '%').attr('aria-valuenow', progress);
	$('#pbar').text(progress + '%');
}

// game loop
window.setInterval(function(){

	hydrogen += hydrogenPS;

	checkFormation();
	timer();
	updateUI();
}, 1000);

// save game
function save() {
	localStorage.setItem('save', JSON.stringify(universe));
	console.log(JSON.parse(localStorage.getItem('save')));
}

// load game
function load() {
	var gamesave = JSON.parse(localStorage.getItem('save'));

	if (typeof gamesave.elements.hydrogen.total !== "undefined") universe.elements.hydrogen.total = gamesave.elements.hydrogen.total;
	if (typeof gamesave.elements.helium.total !== "undefined") universe.elements.helium.total = gamesave.elements.helium.total;
	if (typeof gamesave.measures.mass.total !== "undefined") universe.measures.mass.total = gamesave.measures.mass.total;
}

/* 
STEPS TO STAR FORMATION
1. molecular clouds. pressure > gravity
2. dense clumps for gas and dust form. gravity > pressure
3. gains mass, gravity accelerates collapse
4. Rotation rate increases, creating cirucmstellar disk
    inner disk feeds protostar
    remaining disk flattens into protoplanetary disk
    planets form from the disk
5. planetary system forms
    star turns on (H burning in core)
    wind blows away disk
    planets sweep out orbits

star stages:
- nebula
- protostar
- 'late term' protostars - T Tauri stars - aren't fusing H yet
    circumstellar disks
    fast stellar winds
- pre-main sequence star
- main sequence star
 
RELATIONSHIP BETWEEN MATERIALS AND UNITS OF MEASURE
increase in hydrogen = increase in pressure & mass

TIPPING POINT - ENOUGH MASS TO HAVE GRAVITY
increase in mass = increase in gravity
increase in gravity = increase in mass

TIPPING POINT / COLLAPSE
gravity overcomes pressure & increases mass, temperature & pressure
*/

/* game idea for early upgrades:
    spend H to increase the speed at which you gain H
    spend H to increase efficiency you gain H
*/

/* ideal gas law
PV = nRT

P = Pressure (pascals)
V = Volume (cubic meters)
T = Temperature (kelvins)
n = amount of substance (moles)
R = Ideal Gas Constant
*/

/* 
TRIGGERS FOR FORMATION
clouds colliding
supernovae
young massive stars
    UV & fast stellar winds blow materials into 'walls'
*/
