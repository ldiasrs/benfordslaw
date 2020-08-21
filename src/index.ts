// eslint-disable-next-line @typescript-eslint/no-var-requires
const chiSqTest = require("chi-squared-test");

interface Result {
    chiSquared: number | null;
    probability: number | null;
    terms: Array<number> | null;
}

export class BenfordsLaw {

    // See https://en.wikipedia.org/wiki/Benford%27s_law#Definition
    private benfords: Array<number> = [
        0.301,  // 1
        0.176,  // 2
        0.125,  // 3
        0.097,  // 4
        0.079,  // 5
        0.067,  // 6
        0.058,  // 7
        0.051,  // 8
        0.046   // 9
    ];
    private result: Result = {
        chiSquared: null,
        probability: null,
        terms: null
    };
    private dist: Array<number>;

    constructor(numbers: Array<number>) {
        const occurrences = this.countOccurrences(this.firstDigit(numbers));
        this.dist = this.countDistribution(occurrences)
        this.result = chiSqTest(this.dist, this.benfords, 0);
    }

    /**
     * Only return the first digit of every number but no zeroes
     * 
     * @param numbers       The numbers which should be filtered
     * @returns             Array of numbers with only the first digit and without zeroes
     */
    private firstDigit(numbers: Array<number>): Array<number> {
        const num: Array<number> = [];
        numbers.forEach((number) => {
            while(number >= 10) {
                number = Math.floor(number/10)
            }
            num.push(Math.trunc(number))
        })
        return num.filter((n) => n != 0).sort() // filter 0 from numbers
    }

    /**
     * Count the occurrences of every number in a array
     * 
     * @param numbers                   A array of the numbers which should be counted
     * @returns Map<Number, Number>     A map with the value and the counted occurrences
     */
    private countOccurrences(numbers: Array<number>): Map<number, number> {
        return numbers.reduce((a,b)=>a.set(b,a.get(b)+1||1),new Map);
    }

    /**
     * Get the distribution of 1 to 9 in the number array
     * 
     * @param occurrences               A map with the occurrences of every number in a array
     * @returns Array<number>           The distribution of the numbers
     */
    private countDistribution(occurrences: Map<number, number>): Array<number> {
        let sum = 0;
        const res: Array<number> = [];
        occurrences.forEach(element => {
            sum = sum + element
        });
        occurrences.forEach((value) => {
            res.push(value / sum)
        });
        return res
    }

    public getChiSquared(): number | null {
        return this.result.chiSquared;
    }

    public getProbability(): number | null {
        return this.result.probability;
    }

    public getTerms(): Array<number> | null {
        return this.result.terms;
    }

    public getDist(): Array<number> | null {
        return this.dist;
    }

}