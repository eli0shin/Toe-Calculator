function diameter() {
    var $w = $('#width').val();
    var $a = $('#aspect').val();
    var $ws = $('#wheel-size').val();
    $('#diameter').val((2 * ($w / 25.4) * ($a / 100) - ($ws * -1)).toFixed(2));
}

function totalToe() {
    var oneToe = 0;
    console.log(this.value);
    if ($('input[name = measurement]:checked').val() === 'degrees') {
        oneToe = (($('#diameter').val() / 2) * Math.sin(Math.PI * (this.value)) / 180) * 2;
        $('#one-toe-result').text('Toe for One Wheel in Inches: ' + oneToe.toFixed(2));
        $('#total-toe-result').text('Total Toe in Inches: ' + (oneToe * 2).toFixed(2));
    } else if ($('input[name = measurement]:checked').val() === 'inches') {
        oneToe = Math.atan((this.value) / ($('#diameter').val())) * 180 / Math.PI;
        $('#one-toe-result').text('Toe for One Wheel in Degrees: ' + oneToe.toFixed(2));
        $('#total-toe-result').text('Total Toe in Degrees: ' + (oneToe / 2).toFixed(2));
    }
}
$('#circumference-calculator').change(diameter);

$('#total-toe-input').on('keyup', totalToe);
