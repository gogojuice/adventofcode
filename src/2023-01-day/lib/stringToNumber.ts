interface IStringAsNumber {
    [key: string] : string
}

const stringAsNumber: IStringAsNumber = {
    "one"   : "1",
    "two"   : "2",
    "three" : "3", 
    "four"  : "4",
    "five"  : "5",
    "six"   : "6",
    "seven" : "7",
    "eight" : "8",
    "nine"  : "9"
}

function stringToNumber(value: string): string {
    let result = value

    const regex = /(?=(one|two|three|four|five|six|seven|eight|nine))/g
    let splitStr = value.split('')
    Array.from(value.matchAll(regex)).forEach((one) => {
        const noToRepalce = stringAsNumber[one[1]]
        const idx = one.index !== undefined ? one.index : -1
        splitStr[idx] = noToRepalce
    })

    result = splitStr.join('')
    
    return result
}

export default stringToNumber