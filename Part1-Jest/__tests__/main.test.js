const volume = require('../assets/scripts/main');

test('volume more than 66 expected level 3', () => {
    expect(volume(70)).toMatch(`./assets/media/icons/volume-level-3.svg`)
});

test('volume equal 66 expected level 2', () => {
    expect(volume(66)).toMatch(`./assets/media/icons/volume-level-2.svg`)
});

test('volume less than 66 more than 33 expected to be 2', () => {
    expect(volume(50)).toMatch(`./assets/media/icons/volume-level-2.svg`)
});

test('volume equal to 33 expected to be 1', () => {
    expect(volume(33)).toMatch(`./assets/media/icons/volume-level-1.svg`)
});

test('volume less than 33 more than 0 expected to be 1', () => {
    expect(volume(20)).toMatch(`./assets/media/icons/volume-level-1.svg`)
});

test('volume equal to 0 expected to be 0', () => {
    expect(volume(-1)).toMatch(`./assets/media/icons/volume-level-0.svg`)
});

test('volume less than 0 expected to be 0', () => {
    expect(volume(-1)).toMatch(`./assets/media/icons/volume-level-0.svg`)
});