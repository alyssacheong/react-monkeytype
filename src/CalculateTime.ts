function CalculateTime(time: number): [number | string, number | string] {
    const seconds: number = Math.floor(time / 1000); // Convert milliseconds to whole seconds
    const hundredthsOfSecond: number = Math.floor((time % 1000) / 10); // Calculate hundredths of a second

    const secondsFormat = seconds < 10 ? `0${seconds}` : seconds;
    const hundredthsOfSecondFormat = hundredthsOfSecond < 10 ? `0${hundredthsOfSecond}` : hundredthsOfSecond;

    return [secondsFormat, hundredthsOfSecondFormat];
}

export default CalculateTime;