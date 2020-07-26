
$noOfShots = 3;
$minShots = 0;
$selectedX = -1;
$selectedY = -1;
$ship = {};


$played = $('#played');
$remaining = $("#remaining");
$reset = $("#reset");
$submit = $('#submit');
$form = $('#form');
$selectXCord = $('#selectXCord');
$selectYCord = $('#selectYCord');
$msg = $('.msg');


$form.submit(e => e.preventDefault());

function onPageLoadAndReset() {
    console.log($played);
    $played.empty();
    $played.append($minShots);
    $remaining.empty();
    $remaining.append($noOfShots);
    console.log("called..");
    $ship = randomXY();
    console.log($ship.x, $ship.y);
    $submit.prop('disabled', false);
    $noOfShots = 3;
    $minShots = 0;
    $selectedX = -1;
    $selectedY = -1;
    console.log($msg);
    $msg.hide();
}

function resetBoard() {
    $played.empty();
    $minShots = $minShots + 1;
    $noOfShots = $noOfShots - 1;
    $played.append($minShots);
    $remaining.empty();
    $remaining.append($noOfShots);
    if ($noOfShots == 0) {
        $submit.prop('disabled', true);
    }
}

function getRand(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function randomXY() {
    return {
        x: Math.floor(Math.random() * 10),
        y: Math.floor(Math.random() * 10)
    }
}

function onHit() {
    resetBoard();
    $X = +$selectXCord.val();
    $Y = +$selectYCord.val();
    console.log($X, $Y);

    if ($X == $ship.x && $Y == $ship.y) {
        $form.append("");
        $submit.prop('disabled', true);
        $msg.show();
    }

}

$submit.on("click", onHit);

onPageLoadAndReset();

$reset.on("click", onPageLoadAndReset);
