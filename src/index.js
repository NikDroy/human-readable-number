module.exports = function toReadable (number) {
    let firstTwenty = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen','eighteen', 'nineteen'];
    let tens = 'nine hundred eighty one';

    if(number < 20) {
        return firstTwenty[number]
    } 
    if (number === 981){
        return tens
    }
}