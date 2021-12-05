$(document).ready(function(){
    var hitBtn = $('button.damage'),
        reset = $('button.reset'),
        hBar = $('.health-bar'),
        bar = hBar.find('.bar'),
        hit = hBar.find('.hit');

    hitBtn.on("click", function(){
        var total = hBar.data('total'), //gets data from html
            value = hBar.data('value'); //gets data from html

        if (value < 0) {
            log("you dead, reset");
            return;
        }
        var damage = Math.floor(Math.random()* 6) + 15; //gets damage from 15-20
        var newValue = value - damage;

        var barWidth = (newValue / total) * 100; //decreases health bar when hit
        var hitWidth = (damage / value) * 100 + "%"; //decreases health bar when hit

        // show hit bar and set the width
        hit.css('width', hitWidth);
        hBar.data('value', newValue);

        setTimeout(function(){ //controls timing of bar going down
            hit.css({'width': '0'});
            bar.css('width', barWidth + "%");
        }, 200);
        //bar.css('width', total - value);

        log(value, damage, hitWidth);

        if( value < 0){
            log("DEAD");
        }
    });

    reset.on('click', function(e){
        hBar.data('value', hBar.data('total'));

        hit.css({'width': '0'});

        bar.css('width', '100%');
        log("resetting health to 100");
    });
});



function log(_total, _damage, _hitWidth){
    var log = $('.log');

    if(_damage !== undefined && _hitWidth !== undefined) {
        log.append("<div>Health:"+_total+" Damage:"+_damage+" + " + "</div>");
    } else {
        log.append("<div>"+_total+"</div>");
    }
};