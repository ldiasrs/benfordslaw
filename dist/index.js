"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BenfordsLaw = void 0;
// eslint-disable-next-line @typescript-eslint/no-var-requires
const chiSqTest = require("chi-squared-test");
class BenfordsLaw {
    constructor(numbers) {
        // See https://en.wikipedia.org/wiki/Benford%27s_law#Definition
        this.benfords = [
            0.301,
            0.176,
            0.125,
            0.097,
            0.079,
            0.067,
            0.058,
            0.051,
            0.046 // 9
        ];
        this.result = {
            chiSquared: null,
            probability: null,
            terms: null
        };
        const occurrences = this.countOccurrences(this.firstDigit(numbers));
        this.dist = this.countDistribution(occurrences);
        this.result = chiSqTest(this.dist, this.benfords, 0);
    }
    /**
     * Only return the first digit of every number but no zeroes
     *
     * @param numbers       The numbers which should be filtered
     * @returns             Array of numbers with only the first digit and without zeroes
     */
    firstDigit(numbers) {
        const num = [];
        numbers.forEach((number) => {
            while (number >= 10) {
                number = Math.floor(number / 10);
            }
            num.push(Math.trunc(number));
        });
        return num.filter((n) => n != 0).sort(); // filter 0 from numbers
    }
    /**
     * Count the occurrences of every number in a array
     *
     * @param numbers                   A array of the numbers which should be counted
     * @returns Map<Number, Number>     A map with the value and the counted occurrences
     */
    countOccurrences(numbers) {
        return numbers.reduce((a, b) => a.set(b, a.get(b) + 1 || 1), new Map);
    }
    /**
     * Get the distribution of 1 to 9 in the number array
     *
     * @param occurrences               A map with the occurrences of every number in a array
     * @returns Array<number>           The distribution of the numbers
     */
    countDistribution(occurrences) {
        let sum = 0;
        const res = [];
        occurrences.forEach(element => {
            sum = sum + element;
        });
        occurrences.forEach((value) => {
            res.push(value / sum);
        });
        return res;
    }
    getChiSquared() {
        return this.result.chiSquared;
    }
    getProbability() {
        return this.result.probability;
    }
    getTerms() {
        return this.result.terms;
    }
    getDist() {
        return this.dist;
    }
}
exports.BenfordsLaw = BenfordsLaw;
