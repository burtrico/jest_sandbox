const react = require('react')
const xlsxFile = require('read-excel-file/node');
const writeXlsxFile = require('write-excel-file/node')

const fs = require('fs');



const B = [
    'Backdrop',        'Bad - badass',  'Balls - Balling',
    'Baptized',        'Barbarian',     'Barbwire',
    'Bashes',          'Batter',        'Battle',
    'Bayou',           'Beast',         'Beat - Beatdown',
    'Beckon',          'Bed - bedtime', 'Bedlam',
    'Beg',             'Behead',        'Bell',
    'Benchmark',       'Best',          'Bet',
    'Beware',          'Beyond',        'Bid',
    'Big - Bigtime',   'Bionic',        'Birthright',
    'Black',           'Blackballed',   'Blackout',
    'Blast',           'Blend',         'Blessed',
    'Blood',           'Bloodthirsty',  'Blueprint',
    'Blues',           'Body - bodily', 'Boding',
    'Boiling',         'Bold',          'Bomb',
    'Born',            'Boss',          'Boudreaux',
    'Brace',           'Brave',         'Brawl',
    'Break',           'Breathless',    'Bred',
    'Broken',          'Bruiser',       'Brutally - brutality',
    'Brute - brutish', 'Built',         'Bull - bulldog',
    'Bulldoze',        'Bully',         'Burn',
    'Bury',            'Bus',           'Business',
    'Butcher',         'Buyrates',      'Bye'
  ];

const F = [
    'Fabulous',
    'Face',
    'Faction',
    'Facts',
    'Fade',
    'Faith',
    'Fall',
    'Fame - famous',
    'Fan',
    'Fantastic',
    'Fatal - fatally',
    'Fate',
    'Fear - fearful - fearless',
    'Feast',
    'Feats',
    'Feed',
    'Feel',
    'Feral',
    'Ferocious - ferocity',
    'Feud',
    'Fields',
    'Fierce',
    'Fight',
    'File',
    'Final',
    'Finish - finisher',
    'Fire - firepower',
    'First',
    'Fist',
    'Fit',
    'Fix',
    'Flame',
    'Flare',
    'Flash',
    'Flatline',
    'Flatten',
    'Flavor',
    'Flesh',
    'Flight fly',
    'Flow',
    'Flung',
    'Focus',
    'Foes',
    'Fold',
    'Followers',
    'Food',
    'For',
    'Forbidden',
    'Force - forceful',
    'Forearm',
    'Foreboding',
    'Forever',
    'Forges',
    'Formidable',
    'Forms',
    'Fracture',
    'Freak - freakish',
    'From',
    'Frozen',
    'Fuels',
    'Full - fully',
    'Funk - funky',
    'Fury - Furious - furiously - furor',
    "F'n"
  ];

const D = [
    'Daddy',
    'Dagger',
    'Daily',
    'Damage - damager',
    'Damn',
    'Danger',
    'Dare',
    'Dark - Darkness',
    'Date - Day',
    'Daze',
    'Dead - Deadly - Deadlier',
    'Deadlined',
    'Deadman',
    'Dealer',
    'Death - deathblow',
    'Debt',
    'Decimated',
    'Decision',
    'Declare - decree',
    'Dedicated',
    'Deeds',
    'Deep',
    'Defeat',
    'Defends',
    'Degree',
    'Deluxe',
    'Demand',
    'Demise',
    'Demolish - demolition',
    'Dent',
    'Departed',
    'Depot',
    'Design',
    'Destiny',
    'Destroy - destroyer - destruction',
    'Detach',
    'Detonated',
    'Detour',
    'Device',
    'Devoted - devotee',
    'Devour',
    'Diehard',
    'Diesel',
    'Different',
    'Dilemma',
    'Dine - dinner',
    'Dino',
    'Direct',
    'Disabled',
    'Disaster',
    'Discard',
    'Disciple',
    'Discipline',
    'Disclaimer',
    'Disembodied',
    'Dishrag',
    'Dismiss',
    'Dispatched',
    'Dispense',
    'Disposal - dispose',
    'Diss',
    'Dissect',
    'Dog',
    'Dojo',
    'Dollars',
    'Domain',
    'Dome',
    'Domination',
    'Done',
    'Doom',
    'Doomsday',
    'Doormat',
    'Doors',
    'Dose',
    'Down',
    'Dragon',
    'Dread',
    'Dreams',
    'Drill',
    'Drip',
    'Drone',
    'Drop',
    'Drum',
    'Dude',
    'Due',
    'Dungeon',
    'Dynamic',
    'Dynasty'
  ];



console.log("List lengths =", B.length, F.length, D.length, "B*F =", B.length * F.length)


const writeExcel = async () => {
    
    const concat = () => {
        let concatArray = [];

        for (let i = 0; i < B.length; i++) {
            for (let j = 0; j < F.length; j++) {
                const concatCell = { type: String, value: `${B[i]} ${F[j]}` }
                const concatRow = [concatCell]
    
                concatArray.push(concatRow)
    
                // for (let k = 0; k < D.length; k++) {
                //     const space = ' ';
                //     const concat = B[i] + space + F[j] + space + D[k]
                //     console.log(concat)
    
                //     concatArray.push(concatRow)
                // }
            }
        }
        // console.dir(concatArray, {'maxArrayLength': null})
        return concatArray
    } 
    
    const data = await concat()
    // console.log("data =", await data)
    // // const testData = [[{ type: String, value: `${B[0]} ${F[0]}` }]]

    await writeXlsxFile(data, {
        // columns, // (optional) column widths, etc.
        filePath: './excel/BFlist.xlsx'
      })
}

writeExcel()

// // convert JSON object to string
// const data = JSON.stringify({"B": B},{"F": F}, {"D": D});

// // write JSON string to a file
// fs.writeFile('concatList.json', data, (err) => {
//     if (err) {
//         throw err;
//     }
//     console.log("JSON data is saved.");
// });



