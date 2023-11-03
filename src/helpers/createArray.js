export function createArray(number) {
    if (number < 1) {
      return [];  
    } else {
      return Array.from({ length: number - 1 }, (_, index) => index + 1);
    }
  }