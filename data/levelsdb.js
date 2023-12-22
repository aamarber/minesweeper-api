const Level = require('../model/level');

class LevelsDB {
    constructor(){
        this.levels = [
            {
                "columns": 10,
                "rows": 10
            },
            {
                "columns": 30,
                "rows": 30
            }
            ,
            {
                "columns": 60,
                "rows": 60
            }
        ].map(levelData => {
            let level = new Level();
    
            level = {...levelData};
    
            return level;
        });
    }
}

const levelsDB = new LevelsDB();

module.exports = levelsDB;