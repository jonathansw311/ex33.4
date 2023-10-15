// include fs for writing a file
const fs = require('fs');
//have to include axios
const axios = require('axios');
let writedata=false;

//retreives the html from the url that is passed in
//and displays it in the console
async function webCat(url){
    const res = await axios.get(url)
        if(writedata){
        writeDataFile(res.data)
        }
        else{
        console.log(res.data)
        }}

async function cat(file){
    //reads the file that is passed in, uses error first than data
    fs.readFile(`${file}`, 'utf8', function(err, data){
            if (err){
            console.log('error, the file you have requested does not exist!  Try again!!!  ERROR:', err);
            process.kill(1)
        }
        else{
            if (writedata){
                writeDataFile(data)
            }
            else{
                console.log('data:', data)
            }
        }}
    )}
//if write data is set to true the input and data file to write to is sent here
    function writeDataFile(filedata){
        fs.writeFile( input2, filedata,  'utf8',  function(err){
            if(err){
                console.log("ERROR:", err)
                process.kill(1)
            }
            else{
                console.log(`it worked! ${input2} updated`)
            }
        })
    }

//uses the new URL to decide if url is valid or not.  If input is not a url, an error is thrown and
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
// to use [2], and 3 and 4 if additional arguments are passed in
let input1 = process.argv[2]
let input2 = process.argv[3]
let input3 = process.argv[4]

//checks the first argument to see if we are going to be writing in a file or not
if (input1 !== '--out'){
fileOrURL(input1)
}
else{
    writedata=true;
    fileOrURL(input3)
};
