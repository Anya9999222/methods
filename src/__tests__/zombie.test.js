import Zombie from '../js/zombie';

let character;

beforeEach(() => {
  character = new Zombie('Anna');
});
it('create new character correctly', () => {
  const correct = {
    attack: 40,
    defence: 10,
    health: 100,
    level: 1,
    name: 'Anna',
    type: 'Zombie',
  };
  expect(character).toEqual(correct);
});
it('should rise the level', () => {
  character.levelUp();
  const correct = {
    level: 2,
    health: 100,
    attack: 48,
    defence: 12,
    name: 'Anna',
    type: 'Zombie',
  };
  expect(character).toEqual(correct);
});

it('should add damage', () => {
  character.damage(5);
  expect(character.health).toBeCloseTo(95.5);
});
