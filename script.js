
function calculate() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const age = parseInt(document.getElementById('age').value);
    const gender = document.getElementById('gender').value;
    const activity = parseFloat(document.getElementById('activity').value);

    if (isNaN(weight) || isNaN(height) || isNaN(age) || !gender || isNaN(activity)) {
        alert("Please fill in all fields correctly.");
        return;
    }

    // Calculate BMI
    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);
    document.getElementById('bmi-result').textContent = `BMI: ${bmi.toFixed(2)}`;

    // Calculate BMR
    let bmr;
    if (gender === 'male') {
        bmr = 88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age);
    } else if (gender === 'female') {
        bmr = 447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age);
    }
    document.getElementById('bmr-result').textContent = `BMR: ${bmr.toFixed(2)} kcal/day`;

    // Calculate TDEE
    const tdee = bmr * activity;
    document.getElementById('tdee-result').textContent = `TDEE: ${tdee.toFixed(2)} kcal/day`;
}