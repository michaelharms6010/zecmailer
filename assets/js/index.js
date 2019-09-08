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
    console.log(from);
    let to = inputArray[1].value.trim().split(",");
    // remove whitespace and falsy items
    to = to.map( item => item.replace("\n",""));
    to = to.filter( item => item);
    console.log(to);
    let amount = inputArray[2].value;
    console.log(amount);
    let memo = inputArray[3].value;
    

    memo = convertToHex(memo);

    output = document.getElementById("output");
    let outString = `zcash-cli z_sendmany "${from}" "[`;

    to.forEach(item => outString += `{\\"address\\": \\"${item}\\",\\"amount\\": ${amount}, \\"memo\\":\\"${memo}\\"},`);
    
    outString = outString.substring(0, outString.length - 1);
    outString+= ']"'
    output.value = outString;
  }); 


  function myFunction() {
    var copyText = document.getElementById("output");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
    alert("Copied the text: " + copyText.value);
  }





    