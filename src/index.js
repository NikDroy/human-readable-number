module.exports = function toReadable (number) {
    let firstNums = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let secondNums = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen','eighteen', 'nineteen'];
    let tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let arrNum = number.toString().split('');
    let res = '';
    if(number < 10) {
        res = firstNums[arrNum];
    }
    if(number >= 10 && number < 20){
        res = secondNums[arrNum[1]]
    }
    if(number >= 20 && number < 100) {
        if(arrNum[1] === '0'){
            res = tens[arrNum[0]]
        }else if(arrNum[1] !== '0'){
           res = `${tens[arrNum[0]]} ${firstNums[arrNum[1]]}` 
        }
    }
    if(number >= 100) {
        if(arrNum[1] === '1' && arrNum[2] === '0'){
            res = `${firstNums[arrNum[0]]} hundred ten`; 
        } 
            else if(arrNum[1] === '0' && arrNum[2] !== '0'){
                res = `${firstNums[arrNum[0]]} hundred ${firstNums[arrNum[2]]}`;
            } 
            else if(arrNum[2] === '0' && arrNum[1] !== '0'){
                res = `${firstNums[arrNum[0]]} hundred ${tens[arrNum[1]]}`;
            } 
            else if(arrNum[1] === '1'){
                res = `${firstNums[arrNum[0]]} hundred ${secondNums[arrNum[2]]}`;
            }     
            else if(number % 100 == 0){
            res = `${firstNums[arrNum[0]]} hundred`;
            }
        else { 
                res = `${firstNums[arrNum[0]]} hundred ${tens[arrNum[1]]} ${firstNums[arrNum[2]]}`;
            }
        }
    return res;
}