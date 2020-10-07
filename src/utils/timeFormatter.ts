interface Dictionary<T> {
  [key: string]: T;
}

export const timeLeftInMilliseconds = (walkTimeMilliSeconds: number): number => {
  const difference = walkTimeMilliSeconds  - 1000;
  if (difference > 0) {
    return difference;
  }
  return 0;
};

export const formatTime = (difference: number): Dictionary<number> => {
  const minutes = Math.floor((difference  / 60) % 60);
  const seconds = Math.floor((difference) % 60);
  return {
    "minutes": minutes,
    "seconds": seconds
  }
}

export const formatTimeLeft = (difference: number): Dictionary<number> | string => {
  console.log('---> difference', difference);
  if (difference > 0) {
    const timeLeftMap = formatTime(difference);
    console.log('---> difference', difference);
    return `${pad(timeLeftMap['minutes'])}:${pad(timeLeftMap['seconds'])}`;
  } 
  return 'All done!';
};

const pad = (input: number): string => input.toString().padStart(2, '0');
