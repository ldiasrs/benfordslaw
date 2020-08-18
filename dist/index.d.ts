export declare class BenfordsLaw {
    private benfords;
    private result;
    private dist;
    constructor(numbers: Array<number>);
    /**
     * Only return the first digit of every number but no zeroes
     *
     * @param numbers       The numbers which should be filtered
     * @returns             Array of numbers with only the first digit and without zeroes
     */
    private firstDigit;
    /**
     * Count the occurrences of every number in a array
     *
     * @param numbers                   A array of the numbers which should be counted
     * @returns Map<Number, Number>     A map with the value and the counted occurrences
     */
    private countOccurrences;
    /**
     * Get the distribution of 1 to 9 in the number array
     *
     * @param occurrences               A map with the occurrences of every number in a array
     * @returns Array<number>           The distribution of the numbers
     */
    private countDistribution;
    getChiSquared(): number | null;
    getProbability(): number | null;
    getTerms(): Array<number> | null;
    getDist(): Array<number> | null;
}
