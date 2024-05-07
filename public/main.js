function calculate() {
    var dough = document.getElementById("numbers").value;

    var flour = dough / 1.6;
    var water = dough - flour;
    var salt = (flour * 2.5) / 100;
    var olive = (flour * 1) / 100;
    var yeast = (flour * 1) / 100;

    var answer = "مقدار آرد مورد نیاز شما: " + flour.toFixed(2) + " گرم<br>" +
                 "مقدار آب مورد نیاز شما: " + water.toFixed(2) + " گرم<br>" +
                 "مقدار نمک مورد نیاز شما: " + salt.toFixed(2) + " گرم<br>" +
                 "مقدار روغن زیتون مورد نیاز شما: " + olive.toFixed(2) + " گرم<br>" +
                 "مقدار مخمر مورد نیاز شما: " + yeast.toFixed(2) + " گرم";

    document.getElementById("answer").innerHTML = answer;
}
