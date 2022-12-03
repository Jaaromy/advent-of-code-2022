import loadInput from "../../util/loadInput.mjs";

async function getSortedTotals() {
    const calories = (await loadInput('./src/advent/day01/input.txt')).split('\n');
    let currentCount = 0;
    const totals = [];

    for (const calorie of calories) {
        if (calorie === '') {
            totals.push(currentCount);

            currentCount = 0;

            continue;
        }

        currentCount += parseInt(calorie);
    }

    totals.sort((a, b) => b - a);

    return totals;
}

export const calorieCountingPt1 = async () => {
    const totals = await getSortedTotals();

    return totals[0];
}

export const calorieCountingPt2 = async () => {
    const totals = await getSortedTotals();

    return totals[0] + totals[1] + totals[2];
}
