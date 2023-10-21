import Undead from '../js/undead';

let character;

beforeEach(() => {
  character = new Undead('Anna');
});
it('create new character correctly', () => {
  const correct = {
    attack: 25,
    defence: 25,
    health: 100,
    level: 1,
    name: 'Anna',
    type: 'Undead',
  };
  expect(character).toEqual(correct);
});
it('should rise the level', () => {
  character.levelUp();
  const correct = {
    level: 2,
    health: 100,
    attack: 30,
    defence: 30,
    name: 'Anna',
    type: 'Undead',
  };
  expect(character).toEqual(correct);
});

it('should add damage', () => {
  character.damage(5);
  expect(character.health).toBeCloseTo(96.25);
});
