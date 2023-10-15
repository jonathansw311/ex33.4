// include fs for writing a file
const fs = require('fs');
//have to include axios
const axios = require('axios');

async function webCat(url){
//retreives the html from the url that is passed in
//and displays it in the console
    const res = await axios.get(url)
    console.log(res.data)

}

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


//uses the new URL to decide if url is valid or not.  If not there is an error and
//it defaults to a file
function fileOrURL(input){
    let url;
    try{
        url = new URL(input)
        webCat(url)
    }
    catch{
        cat(input)
    }


}

//gets name of file that is passed in.  0 and 1 of process.argv are paths to node, and the other is path to file so we need
// to use [2]
let input = process.argv[2]
//sends url to be classified as a file or input
fileOrURL(input)


