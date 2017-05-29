export function getLetterGrade(score) {
    let limits = ['-', '', '+', '+']
    if(score > 100) return 'A+';
    if(score === 100) return 'A';
    if(score < 59 || score === 59) return 'F';

    var lCode = 74 - Math.floor(score / 10);
    var sign = limits[Math.floor((score % 10) / 3)]
    return String.fromCharCode(lCode) + sign;
}
