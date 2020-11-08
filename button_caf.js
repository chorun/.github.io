const caffeine = {
    name: ['monstar', 'red', 'medicine', 'coffee', 'coke'],
    capacity: [142, 80, 200, 90, 50]
}

function sum_caf() {
    var total = 0;
    var lim = 3000;
    for (i = 0; i < caffeine.capacity.length; i++) {
        var num = document.getElementById(caffeine.name[i]).value;
        total = total + caffeine.capacity[i] * num;
    };
    document.getElementById("total_caf").innerHTML = total + "mg";
    if ((lim - total) > 0) {
        document.getElementById("limit=_caf").innerHTML = "残り" + (lim - total) + "mg";
    } else {
        document.getElementById("limit=_caf").innerHTML = "あなたは死にました。"
    }
}

function clearBtn(id) {
    document.getElementById(id).value = 0;
}