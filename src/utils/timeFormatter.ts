import { Dictionary } from './types';

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
    'minutes': minutes,
    'seconds': seconds
  };
};


export const formatTimeLeft = (difference: number): Dictionary<number> | string => {
  if (difference > 0) {
    const timeLeftMap = formatTime(difference);
    return `${pad(timeLeftMap['minutes'])}:${pad(timeLeftMap['seconds'])}`;
  }
  return 'All done!';
};

export const formatTimeLeftCountUp = (difference: number): Dictionary<number> | string => {
  const timeLeftMap = formatTime(difference);
  return `${pad(timeLeftMap['minutes'])}:${pad(timeLeftMap['seconds'])}`;
};

const pad = (input: number): string => input.toString().padStart(2, '0');
