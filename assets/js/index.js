inputArray = []
function convertToHex(str) {
    var hex = '';
    for(var i=0;i<str.length;i++) {
        hex += ''+str.charCodeAt(i).toString(16);
    }
    return hex;
}
document.getElementsByTagName("button")[0].addEventListener("click", function(){
    
    inputs = document.getElementsByTagName("textarea");
    console.log(inputs);
    
    for (i = 0 ; i < inputs.length ; i ++){
        console.log(inputs[i].value);
        inputArray.push(inputs[i]);
    }
    console.log(inputArray);
    let from = inputArray[0].value;
    let to = inputArray[1].value.trim().split(",");
    let amount = inputArray[2].value;
    let memo = inputArray[3].value;

    memo = convertToHex(memo);

    output = document.getElementById("output");
    let outString = `zcash-cli z_sendmany "${from}" "[`;
    to.forEach(item => outString += `{\\"address\\": \\"${item}\\",\\"amount\\": ${amount}, \\"memo\\":\\"${memo}\\"},`);
    outString = outString.substring(0, outString.length - 1);
    outString+= ']"'
    output.value = outString;
  }); 





    