const fs = require("fs");
var db = {
    obj: {},
    get_val(e) {
        return this.obj[e]
    },
    set_val(e, o) {
        this.obj[e] = o
    },
    save(e) {
        fs.appendFile(`./${e}.json`, JSON.stringify(this.obj), function(e) {
            if (e) throw e;
            console.log("Saved!")
        })
    },
    del_val: e => {
        delete this.obj[e]
    },
    load: e => {
        db.obj = require(`./${e}.json`)
    }
};
module.exports = db;
