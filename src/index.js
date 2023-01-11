module.exports = function toReadable (number) {
    let firstTwenty = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen','eighteen', 'nineteen'];
    let tens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    if(number < 20) {
        return firstTwenty[number]
    }
    if (number > 20 && number < 100) {
        let arrNum = number.toString().split('')
        return tens[arrNum[0] - 2] + ' ' + firstTwenty[arrNum[1]]
    }
}

console.log(toReadable(99))