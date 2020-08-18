import { BenfordsLaw } from './index';

test('test the distribution of 1,2,3,4,5,6,7,8,9', () => {
    const numbers = [1,2,3,4,5,6,7,8,9];
    const benfords = new BenfordsLaw(numbers);

    const chiSquared = benfords.getChiSquared();
    const probability = benfords.getProbability()?.toFixed(1);

    expect(chiSquared).toBe(0.40105320411553363);
    expect(probability).toBe("1.0");
})

test('test zeroes', () => {
    const numbers = [0,1,0,2,3,4,0,5,6,7,8,9,0];
    const benfords = new BenfordsLaw(numbers);

    const chiSquared = benfords.getChiSquared();

    expect(chiSquared).toBe(0.40105320411553363);
})

test('test the distribution of 9,8,7,6,5,4,3,2,1', () => {
    const numbers = [9,8,7,6,5,4,3,2,1];
    const benfords = new BenfordsLaw(numbers);

    const chiSquared = benfords.getChiSquared();
    const probability = benfords.getProbability()?.toFixed(1);

    expect(chiSquared).toBe(0.40105320411553363);
    expect(probability).toBe("1.0");
})

test('test the distribution of 12,25,38,40,54,63,75,83,96', () => {
    const numbers = [12,25,38,40,54,63,75,83,96];
    const benfords = new BenfordsLaw(numbers);

    const chiSquared = benfords.getChiSquared();
    const probability = benfords.getProbability()?.toFixed(1);

    // should be the same as in the previous tests because only the first digit gets checked
    expect(chiSquared).toBe(0.40105320411553363);
    expect(probability).toBe("1.0");
})

test('test the distribution of 122,256,382,402,546,632,757,832,964', () => {
    const numbers = [122,256,382,402,546,632,757,832,964];
    const benfords = new BenfordsLaw(numbers);

    const chiSquared = benfords.getChiSquared();
    const probability = benfords.getProbability()?.toFixed(1);

    // should be the same as in the previous tests because only the first digit gets checked
    expect(chiSquared).toBe(0.40105320411553363);
    expect(probability).toBe("1.0");
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

test('test getDist function', () => {
    const numbers = [3,6,6,9,4,9,1,1,8,4,7,2,5,3,1,4,8,4,2,2,6,1];
    const benfords = new BenfordsLaw(numbers);

    const dist = benfords.getDist();

    if(dist){
        expect(dist[0].toFixed(2)).toBe("0.18");
        expect(dist[1].toFixed(3)).toBe("0.136");
        expect(dist[3].toFixed(2)).toBe("0.18");
        expect(dist[4].toFixed(3)).toBe("0.045");
    }
})

test('test a random number array', () => {
    const numbers = [3,6,6,9,4,9,1,1,8,4,7,2,5,3,1,4,8,4,2,2,6,1];
    const benfords = new BenfordsLaw(numbers);

    const chiSquared = benfords.getChiSquared()?.toFixed(3);

    expect(chiSquared).toBe("0.303");
})

test('test a bigger array of random numbers', () => {
    const numbers = [1,2,2,2,5,6,3,8,2,4,0,2,5,4,6,6,3,2,7,5,7,8,3,2,9,6,4,1,3,2,6,9,4,1,4,7,4,9,2,1,4,9,2,6,8,3,8,9,3,8,3,5];
    const benfords = new BenfordsLaw(numbers);

    const chiSquared = benfords.getChiSquared()?.toFixed(3);

    expect(chiSquared).toBe("0.325");
})