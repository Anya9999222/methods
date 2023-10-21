import Daemon from '../js/daemon';

let character;

beforeEach(() => {
  character = new Daemon('Anna');
});
it('create new character correctly', () => {
  const correct = {
    attack: 10,
    defence: 40,
    health: 100,
    level: 1,
    name: 'Anna',
    type: 'Daemon',
  };
  expect(character).toEqual(correct);
});
it('should rise the level', () => {
  character.levelUp();
  const correct = {
    level: 2,
    health: 100,
    attack: 12,
    defence: 48,
    name: 'Anna',
    type: 'Daemon',
  };
  expect(character).toEqual(correct);
});

it('should add damage', () => {
  character.damage(5);
  expect(character.health).toBeCloseTo(97);
});
