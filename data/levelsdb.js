const fs = require('fs');
const Level = require('../model/level');

class LevelsDB {
    constructor(){
        this.levels = [];
    }
}

const readData = fs.readFileSync('./data/levels.json', 'utf8');

const jsonData = JSON.parse(readData);

let levelsDB = new LevelsDB();

levelsDB.levels = jsonData
    .map(levelData => {
        let level = new Level();

        level = {...levelData};

        return level;
    });

module.exports = levelsDB;