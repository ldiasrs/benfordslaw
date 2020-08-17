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
        // No leading zeroes
        if (0 in occurrences.keys) {
            occurrences.delete(0);
        }
        const dist = this.countDistribution(occurrences);
        this.result = chiSqTest(dist, this.benfords, 1);
    }
    getChiSquared() {
        return this.result.chiSquared;
    }
    getProbability() {
        return this.result.probability;
    }
    firstDigit(numbers) {
        numbers.forEach((number) => {
            while (number >= 10) {
                number = Math.floor(number / 10);
            }
            return Math.trunc(number);
        });
        return numbers;
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
}
exports.BenfordsLaw = BenfordsLaw;
