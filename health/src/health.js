export function getStatus(character) {
    const { health } = character;
    if (health > 50) {
        return "healthy";
    }
    if (health >= 15) {
        return "wounded";
    }
    else {
        return "critical";
    }
}
export function validateCharacter(character) {
  if (!character || typeof character !== 'object') {
    throw new Error('Character must be an object');
  }
  
  if (typeof character.health !== 'number') {
    throw new Error('Health must be a number');
  }
  
  if (character.health < 0 || character.health > 100) {
    throw new Error('Health must be between 0 and 100');
  }
}