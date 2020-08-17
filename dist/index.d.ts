export declare class BenfordsLaw {
    private benfords;
    private result;
    constructor(numbers: Array<number>);
    getChiSquared(): number | null;
    getProbability(): number | null;
    private firstDigit;
    /**
     * Count the occurrences of every number in a array
     *
     * @param numbers                   A array of the numbers which should be counted
     * @returns Map<Number, Number>     A map with the value and the counted occurrences
     */
    private countOccurrences;
    private countDistribution;
}
