// Fonction afin de déterminer si un nombre est premier ou non

export const numberIsPrime = (number) => {
  if (number < 2) return false;

  if (number === 2) return true;
  if (number % 2 === 0) return false;

  for (let i = 3; i <= Math.sqrt(number); i += 2) {
    if (number % i === 0) return false;
  }

  return true;
};
