const calculateTemp = () => {
    const numberTemp = document.getElementById('temp').Value;
    // console.log(numberTemp);

    const tempSelected = document.getElementById('temp_diff');
    const valueTemp = temp_diff.options[tempSelected.selectedIndex].Value;

    const celToFah = (cel) => {
        let Fahrenheit = Math.round((cel * 9 / 5) + 32);
        return Fahrenheit;

    }
    const FahtoCel = (fehr) => {
        let Fahrenheit = Math.round((fehr - 32) * 5 / 9);
        return celsius;

    }

    let result;

    if (valueTemp = 'cel') {
        result = celToFah(numberTemp);
        document.getElementById('resultContainer').innerHTML = `= ${result}°Fahrenheit`;



    } else {
        result = fehToCel(numberTemp);
        document.getElementById('resultContainer').innerHTML = `= ${result}°Celsius`;
    }




}