module.exports = function toReadable (number) {
    let str = number.toString();

    // Проверяем число 0
    if(str === '0') {
        return 'zero';
    };

    let res = (number / 100).toFixed(2);
    res = (res + '').split('.');
    res = Number(res[1]);

    let numToNineteen = ['', 'one' , 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let numTens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let numScales = ['', '', '', 'hundred', 'thousand'];

    // Проверяем числа от 1 до 19
    if(str.length <= 2 && res <= 19){
        res = numToNineteen[number];
    };

    // Проверяем числа до 99
    if(str.length == 2 && res >= 19){
        res = `${numTens[str[0]]} ${numToNineteen[str[1]]}`;
    };

    // Проверяем числа до 999
    if(str.length > 2 && res <= 19){
        res = `${numToNineteen[str[0]]} ${numScales[str.length]} ${numToNineteen[res]}`;
    };

    if(str.length > 2 && res > 19){
        res = `${numToNineteen[str[0]]} ${numScales[str.length]} ${numTens[str[str.length - 2]]} ${numToNineteen[str[str.length - 1]]}`;
    }

    return res.trimEnd();
}
