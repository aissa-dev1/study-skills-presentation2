export function shuffleList<T>(array: T[]): T[] {
  const newArray = [...array];
  let currentIndex = newArray.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [newArray[currentIndex], newArray[randomIndex]] = [
      newArray[randomIndex],
      newArray[currentIndex],
    ];
  }

  return newArray;
}
