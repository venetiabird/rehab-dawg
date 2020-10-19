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
  if (difference > 0) {
    const timeLeftMap = formatTime(difference);
    return `${pad(timeLeftMap['minutes'])}:${pad(timeLeftMap['seconds'])}`;
  } 
  return 'All done!';
};

/** 
 * The return time is in seconds
*/
export const calculateActivityTime = (walkTimeStamps: number[]): number => {
  let result = 0;
  for (let i = 0; i < walkTimeStamps.length - 1; i += 2) {
    const timeDiff = (walkTimeStamps[i+1] - walkTimeStamps[i]);
    result += timeDiff;
  }
  return Math.round(result / 1000);
}

const pad = (input: number): string => input.toString().padStart(2, '0');
