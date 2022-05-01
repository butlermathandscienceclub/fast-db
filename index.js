const fs = require("fs");
var db = {
    obj: {},
    get_val(e) {
        return this.obj[e]
    },
    set_val(e, o) {
        this.obj[e] = o
			fs.writeFile(`./kdb.json`, JSON.stringify(this.obj), 	function(e) {
            if (e) throw e;
            console.log("Saved!")
        })
    },
    save() {
        fs.writeFile(`./kdb.json`, JSON.stringify(this.obj), function(e) {
            if (e) throw e;
            console.log("Saved!")
        })
    },
    del_val: e => {
        delete this.obj[e]
    },
    load:  function() {
        db.obj = require(`./kdb.json`)
    }
};

module.exports = db;
