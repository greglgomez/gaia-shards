// TODO: introduce an element of randomness into the game via cosmic dust with variable elemental content.

// initialise the universe
let universe = {
    elements: {
        hydrogen: {
            name: 'hydrogen',
            total: 0,
            symbol: 'H'
        },
        helium: {
            name: 'helium',
            total: 0,
            symbol: 'He'
        }
    },
    measures: {
        time: {
            name: 'time',
            total: 0,
            symbol: 's'
        },
        length: {
            name: 'length',
            total: 0,
            symbol: 'm'
        },
        mass: {
            name: 'mass',
            total: 0,
            symbol: 'kg'
        },
        temperature: {
            name: 'temperature',
            total: 0,
            symbol: 'K'
        },
        pressure: {
            name: 'pressure',
            total: 0,
            symbol: 'P'
        }
    },
    formations: {
        wisp: {
            name: 'wisp',
            requires: {
                hydrogen: 0
            }
        },
        cloud: {
            name: 'cloud',
            requires: {
                hydrogen: 20
            }
        },
        denseclump: {
            name: 'dense clump',
            requires: {
                hydrogen: 100
            }
        }
    }
};

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
*/

// generic clicker function
function clickElement(number, element) {
    let targetElement = universe.elements[element]; // address element
    targetElement.total += number; // increment element total
    document.getElementById( element ).innerHTML = targetElement.total; // update interface with new total
}

// acquire mass function
function addMass() {
    let massCost = Math.floor(10 * Math.pow(1.1,universe.measures.mass.total));
    if (universe.elements.hydrogen.total >= massCost) {
        universe.measures.mass.total += 1;
        universe.elements.hydrogen.total = universe.elements.hydrogen.total - massCost;
        document.getElementById('hydrogen').innerHTML = universe.elements.hydrogen.total;
        document.getElementById('mass').innerHTML = universe.measures.mass.total;
    }
    let nextCost = Math.floor(10 * Math.pow(1.1,universe.measures.mass.total));
    document.getElementById('massCost').innerText = `(${nextCost}H)`;
}



// functions sandbox
/* 
check universe.elements.hydrogen.total
against universe.formations.[i].requires.hydrogen
*/

// function checkNextFormation() {
//     for (let index = 0; index < array.length; index++) {
//         const number = array[index];
//         if (universe.elements.hydrogen.total >= universe.formations) {
            
//         }
//     }
// }




// game loop
window.setInterval(function(){
    clickElement(universe.measures.mass.total, 'hydrogen');
}, 1000);

/* 
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

