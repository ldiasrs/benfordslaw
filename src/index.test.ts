import { BenfordsLaw } from './index';

test('test the distribution of 1,2,3,4,5,6,7,8,9', () => {
    const numbers = [1,2,3,4,5,6,7,8,9];
    const benfords = new BenfordsLaw(numbers);

    const chiSquared = benfords.getChiSquared();
    const probability = benfords.getProbability()?.toFixed(5);

    expect(chiSquared).toBe(0.40105320411553363);
    expect(probability).toBe("0.99994");
})

test('test the distribution of a bigger array', () => {
    const numbers = [1, 1, 1, 1, 1, 1, 1, 1, 
        2, 2, 2, 2,
        3, 3, 3, 
        4, 4, 
        5, 5, 
        6, 6, 
        7, 7, 
        8, 
        9];
    const benfords = new BenfordsLaw(numbers);

    const chiSquared = benfords.getChiSquared();

    expect(chiSquared).toBe(0.019868294035033682);
})