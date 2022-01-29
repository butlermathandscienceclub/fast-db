const fs = require("fs");
var db = {
    obj: {},
    get_val(i) {
        return this.obj[i];
    },
    set_val(name, val) {
        this.obj[name] = val;
    },
    save(name) {
        fs.appendFile(`./db/${name}.json`, JSON.stringify(this.obj), function(err) {
            if (err) throw err;
            console.log('Saved!');
        });
    },
    del_val: (name) => {
        delete this.obj[name];
    },
    load: (name) => {
        db.obj = require(`./db/${name}.json`)
    }
};
module.exports = db;
