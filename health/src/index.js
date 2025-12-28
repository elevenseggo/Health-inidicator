

import { getStatus, validateCharacter } from "./health";
const character = { name: "Маг", health: 90 };
try {
    validateCharacter(character);
    const status = getStatus(character);
    console.log("character is", status);
} catch (error) {
    console.error("Error:", error.message);
}

export { getStatus, validateCharacter };