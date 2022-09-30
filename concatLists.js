const react = require('react')
const xlsxFile = require('read-excel-file/node');

const fs = require('fs');



const B = [   'Boudreaux', 'Big',          'Bigger',     'Biggest',     'Badder',
'Best',      'Built',        'Born',       'Bred',        'Balls',
'Boss',      'Bodies',       'Beg',        'Bye',         'Black',
'Blues',     'Brace',        'Braced',     'Bid',         'Bad',
'Baddest',   'Bus',          'Bed',        'Bet',         'Bell',
'Bull',      'Bomb',         'Bleeds',     'Bury',        'Beats',
'Bayou',     'Blended',      'Boiling',    'Bully',       'Beast',
'Blessed',   'Blood',        'Brawl',      'Brawling',    'Brave',
'Broken',    'Brute',        'Bedlam',     'Blasts',      'Bodily',
'Badass',    'Battle',       'Battles',    'Battling',    'Beat',
'Beaten',    'Bashes',       'Batter',     'Beckon',      'Beckoning',
'Beware',    'Beyond',       'Bionic',     'Boding',      'Buried',
'Bruising',  'Breaking',     'Brawler',    'Bolder',      'Beater',
'Burn',      'Burned',       'Backdrop',   'Baptized',    'Battler',
'Blasted',   'Bruiser',      'Brutish',    'Bruises',     'Bigtime',
'Bedtime',   'Beating',      'Balling',    'Bulldog',     'Bulldoze',
'Bulldozer', 'Beatdown',     'Blackout',   'Bulldozed',   'Bulldozes',
'Brutalize', 'Brutalized',   'Brutalizes', 'Blackballed', 'Barbarian',
'Barbwire',  'Beatdowns',    'Beheaded',   'Buyrates',    'Butchered',
'Benchmark', 'Business',     'Birthright', 'Breathless',  'Brutality',
'Blueprint', 'Bloodthirsty'];

const F = [  'For',       'From',      'Fit',        'Fitting',     'Fed',
'Feeding',   'Food',      'Fly',        'Flying',      'Fade',
'Faded',     'Fading',    'Feel',       'Felt',        'Fear',
'Fearful',   'Fall',      'Face',       'Flow',        'Foes',
'Fold',      'Fury',      'Fire',       'Faces',       'Falls',
'Flames',    'Fatal',     'Fatally',    'Feeds',       'Fight',
'Fights',    'Fighter',   'File',       'Flame',       'Flesh',
'Forges',    'Freak',     'Furor',      'Full',        'Frozen',
'Force',     'Flung',     'Flash',      'Flight',      'First',
'Faith',     'Famous',    'Fame',       'Fate',        'False',
'Fears',     'Fields',    'Feud',       'Fix',         'Forms',
'Fuels',     'Fully',     'Funk',       'Facing',      'Fallen',
'Feral',     'Final',     'Fires',      'Flare',       'Focus',
'Funky',     'Forceful',  'Feast',      'Fated',       'Facts',
'Feats',     'Feuds',     'Fists',      'Fierce',      'Falling',
'Faction',   'Fist',      'Flatten',    'Flavor',      'Fracture',
'Fractured', 'Ferocious', 'Furious',    'Fantastic',   'Fabulous',
'Fearless',  'Flattened', 'Fighting',   'Forearm',     'Forever',
'Freakish',  'Ferocity',  'Formidable', 'Frightening', 'Finish',
'Finisher',  'Flatline',  'Flatlined',  'Forbidden',   'Foreboding',
'Followers', 'Fan',       'Furiously',  'Firepower',   'Flattener'];

const D = [  'Doom',       'Destruction', 'Death',       'Discipline', 'Disciple',
'Due',        'Day',         'Damn',        'Dark',       'Daze',
'Deep',       'Dent',        'Debt',        'Dead',       'Dare',
'Date',       'Dine',        'Dino',        'Diss',       'Dog',
'Dojo',       'Dome',        'Dose',        'Done',       'Down',
'Drop',       'Drum',        'Dude',        'Daddy',      'Daily',
'Dared',      'Debts',       'Dazed',       'Deeds',      'Domes',
'Dread',      'Drill',       'Drone',       'Doors',      'Design',
'Depot',      'Downs',       'Dungeon',     'Dagger',     'Danger',
'Darker',     'Decision',    'Defeat',      'Defeated',   'Deadly',
'Demand',     'Demise',      'Devour',      'Drip',       'Dosing',
'Direct',     'Departed',    'Dealer',      'Decree',     'Degree',
'Defends',    'Deluxe',      'Detach',      'Device',     'Diesel',
'Dinner',     'Dragon',      'Dreams',      'Dismissed',  'Damage',
'Damager',    'Deadman',     'Deathly',     'Declared',   'Decried',
'Disposal',   'Devotee',     'Discard',     'Dismiss',    'Dispose',
'Dollars',    'Domain',      'Dynasty',     'Dynamic',    'Dropped',
'Disaster',   'Dilemma',     'Destiny',     'Detour',     'Disabled',
'Dissected',  'Darkness',    'Deadlier',    'Demolish',   'Demolition',
'Devoted',    'Diehard',     'Dishrag',     'Dispense',   'Doormat',
'Domination', 'Dispatched',  'Deadlined',   'Doomsday',   'Disclaimer',
'Decimated',  'Dedicated',   'Destroyed',   'Devours',    'Devoured',
'Different',  'Dissect',     'Disembodied', 'Detonator',  'Detonated',
'Destroyer',  'Deathblow'];

let concatArray = [];

console.log("List lengths =", B.length, F.length, D.length)


const concatLists = () => {
    for (let i = 0; i < B.length; i++) {
        console.log()
        for (let j = 0; j < F.length; j++) {
            for (let k = 0; k < D.length; k++) {
                const space = ' ';
                const concat = B[i] + space + F[j] + space + D[k]
                console.log(concat)

                concatArray.push(concat)
            }
        }
    }

console.table(concatArray);

}

// concatLists()

// // create a JSON object
// const user = {
//     "id": 1,
//     "name": "John Doe",
//     "age": 22
// };

// convert JSON object to string
const data = JSON.stringify({"B": B},{"F": F}, {"D": D});

// write JSON string to a file
fs.writeFile('concatList.json', data, (err) => {
    if (err) {
        throw err;
    }
    console.log("JSON data is saved.");
});



