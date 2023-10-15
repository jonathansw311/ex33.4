// include fs for writing a file
const fs = require('fs');

function cat(file){
//reads the file that is passed in, uses error first than data
    fs.readFile(`${file}`, 'utf8', function(err, data){
    if (err){
        console.log('error, the file you have requested does not exist!  Try again!!!  ERROR:', err);
        process.kill(1)
    }
    else{
        console.log('data:', data)
      
    }
})
}

//gets name of file that is passed in.  0 and 1 of process.argv are paths to node, and the other is path to file so we need
// to use [2]
let file = process.argv[2]
//calls the function with the passed in file from process.argv
cat(file)