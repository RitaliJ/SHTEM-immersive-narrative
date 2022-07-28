//function to convert number of milliseconds into string of hours, minutes, and seconds
export function formatMs(millis: number) {
    const h = Math.floor(millis / 3600000);
    millis %= 3600000;
    const m = Math.floor(millis / 60000);
    millis %= 60000;
    const s = millis / 6000;
    return (
        h
            ? `${h} ${h === 1 ? "hour" : "hours"},
                ${m} ${m === 1 ? "minute" : "minutes"},
                and ${s.toFixed(3)} ${s === 1 ? "second" : "seconds"}`
            : m
                ? `${m} ${m === 1 ? "minute" : "minutes"}
                    and ${s.toFixed(3)} ${s === 1 ? "second" : "seconds"}`
                : `${s.toFixed(3)} ${s === 1 ? "second" : "seconds"}`
    );
}
