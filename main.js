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
        $('#toe-result').html('<div>Total Toe in Inches:<h2>' + (oneToe * 2).toFixed(2) + '</h2></div><div>Toe for One Wheel in Inches:<h2>' + oneToe.toFixed(2) + '</h2></div>');
    } else if ($('input[name = measurement]:checked').val() === 'inches') {
        oneToe = Math.atan((this.value) / ($('#diameter').val())) * 180 / Math.PI;
        $('#toe-result').html('<div> Total Toe in Degrees:<h2>' + (oneToe / 2).toFixed(2) + '</h1></div><div> Toe for One Wheel in Degrees:<h2>' + oneToe.toFixed(2) + '</h2></div>');
    }
}
$(diameter());
$('#circumference-calculator').change(diameter);

$('#total-toe-input').on('keyup', totalToe);

$(function(){
var banner = $('div:last');
if (banner.css('text-align') == 'right'){
  banner.hide();
}else return;
});
