import { it } from 'node:test';
import Character from '../js/character';
import Daemon from '../js/daemon';

let character;

beforeEach(() => {
  character = new Daemon('Anna', 'Daemon');
});
it('create new character', () => {
  character = new Daemon('Anna', 'Daemon');
  expect(character.name).toBe('Anna');
  expect(character.type).toBe('Daemon');
  expect(character.health).toBe(100);
  expect(character.level).toBe(1);
  expect(character.attack).toBe(10);
  expect(character.defence).toBe(40);
});

it('should rise the level', () => {
  character.levelUp();
  expect(character.level).toBe(2);
  expect(character.health).toBe(100);
  expect(character.attack).toBe(12);
  expect(character.defence).toBe(48);
});

it('should add damage', () => {
  character.damage(5);
  expect(character.health).toBeCloseTo(97.4);
});

it('should not add damage', () => {
  character.health = -1;
  character.damage(100);
  expect(character.health).toBe(-1);
});

test('Should throw an error because of invalid name ', () => {
  expect(() => {
    character = new Character('A', 'Daemon');
  }).toThrow('incorrect name');
});

test('should throw an error because of invalid type', () => {
  expect(() => {
    character = new Character('Anna', 123);
  }).toThrow('Invalid type');
});

test('should throw an error because of zero health', () => {
  expect(() => {
    const zeroHealthCharacter = new Character('Anna', 'Daemon');
    zeroHealthCharacter.health = 0;
    zeroHealthCharacter.levelUp();
  }).toThrow('нельзя повысить левел умершего');
});
