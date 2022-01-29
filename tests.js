fdb = require("./index")

fdb.set_val("a", "b")

if ( fdb.get_val("a") == "b" ){
	console.log("test 1 good")
}
else
{
	console.log("test1 fail")
	process.exit(1);

}


console.log("done")
