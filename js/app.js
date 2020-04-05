// initialise primodial materials
let hydrogen = {
    name: 'hydrogen',
    total: 0,
    symbol: 'H'
},
helium = {
    name: 'helium',
    total: 0,
    symbol: 'He'
};

// TODO - cosmic dust needs to be more complex and introduce random element into the game by having random composition.
/*let cosmicdust = {
    name: 'cosmic dust',
    total: 0,
    symbol: 'cd'
};*/

// initialise base units of the universe
let time = {
    name: 'time',
    total: 0,
    symbol: 's',
    description: 'The duration of 9192631770 periods of the radiation corresponding to the transition between the two hyperfine levels of the ground state of the caesium-133 atom.'
},
length = {
    name: 'length',
    total: 0,
    symbol: 'm',
    description: 'The distance travelled by light in vacuum in 1/299792458 second.'
},
mass = {
    name: 'mass',
    total: 0,
    symbol: 'kg',
    description: 'The kilogram is defined by setting the Planck constant h exactly to 6.62607015×10−34 J⋅s (J = kg⋅m2⋅s−2), given the definitions of the metre and the second.'
},
temperature = {
    name: 'temperature',
    total: 0,
    symbol: 'K',
    description: 'The kelvin is defined by setting the fixed numerical value of the Boltzmann constant k to 1.380649×10−23 J⋅K−1, (J = kg⋅m2⋅s−2), given the definition of the kilogram, the metre, and the second.'
};

// initialise derived units
pressure = {
    name: 'pressure',
    total: 0,
    symbol: 'P',
    description: ''
};

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
*/

/* 
star stages:
- nebula
- protostar
- 'late term' protostars - T Tauri stars - aren't fusing H yet
    circumstellar disks
    fast stellar winds
- pre-main sequence star
- main sequence star
*/


