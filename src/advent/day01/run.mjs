import loadInput from "../../util/loadInput.mjs";

const calorieCounting = async () => {

    const calories = (await loadInput('./src/advent/day01/input.txt')).split('\n');
    let highestCalories = 0;
    let currentCount = 0;

    for (const calorie of calories) {
        if (calorie === '') {
            if (currentCount > highestCalories) {
                highestCalories = currentCount;
            }

            currentCount = 0;

            continue;
        }

        currentCount += parseInt(calorie);
    }


    return highestCalories;
}

export default calorieCounting;