import Character from '../js/character';

let character;

beforeEach(() => {
  character = new Character('Anna', 'Daemon');
});
it('create new character', () => {
  const correct = {
    name: 'Anna',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: undefined,
    defence: undefined,
  };
  expect(character).toEqual(correct);
});
it('should throw an error because of zero health', () => {
  expect(() => {
    character.health = 0;
    character.levelUp();
  }).toThrow('нельзя повысить левел умершего');
});

it('should not add damage', () => {
  character.health = -1;
  character.damage(100);
  expect(character.health).toBe(-1);
});

test('Should throw an error because of invalid name ', () => {
  expect(() => {
    new Character('A', 'Daemon');
  }).toThrow(new Error('incorrect name'));
});

test('should throw an error because of invalid type', () => {
  expect(() => {
    new Character('Anna', 123);
  }).toThrow(new Error('Invalid type'));
});
