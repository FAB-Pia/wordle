import { WORDS } from '../constants/wordlist'
import { solution as sol } from './words'
import { getStatuses } from './statuses'

function getRandomInt(max: number) {
    return Math.floor(Math.random() * max)
}

function getGuess(guesses: string[]) {
    const valid = getValidWords(guesses, sol)
    return(valid[getRandomInt(valid.length)].toUpperCase())
}

function getValidWords(guesses: string[], solution: string): string[] {
    var validLetters: string[] = [ 'abcdefghijklmnopqrstuvwxyz', 'abcdefghijklmnopqrstuvwxyz', 'abcdefghijklmnopqrstuvwxyz', 'abcdefghijklmnopqrstuvwxyz', 'abcdefghijklmnopqrstuvwxyz' ]
    for ( guess in guesses ) {
        var i = 0
        var status = getStatuses(solution, guesses)
        for ( letter in guess ) {
            if ( status[letter] === 'absent' ) {
                for ( column in validLetters ) {
                    validLetters[validLetters.indexOf(column)] = column.split('').splice(column.split('').indexOf(letter), 1).join('')
                }
            }
            validLetters[i] = validLetters[i].split('').splice(status[letter])
            i++
        }
    }
}

export default {
    getGuess: getGuess
}