window.CAT = (function () {



    function getCATValue(total, charge, pay, payments, periods, cat) {
        var i = 0;
        var value = charge / Math.pow((1 + (cat / 100)), 0 / periods);

        for (i = 1; i <= payments; i++) {
            value += pay / Math.pow((1 + (cat / 100)), i / periods);
        }
        return total - value;
    }
    var CAT = {
        get: function (amount, charge, byPeriod, totalPayments, periodsByYear) {
            var cat = 50, cat_min = 0, cat_max = 0, temp_cat;

            var counter = 0, tempVal;

            do {
                tempVal = getCATValue(amount, charge, byPeriod, totalPayments, periodsByYear, cat);
                if (tempVal > 0) {
                    temp_cat = cat;
                    cat = (cat + cat_min) / 2;
                    cat_max = temp_cat;
                } else if (cat_max == 0) {
                    cat_min = cat;
                    cat = cat + 50;
                } else {
                    temp_cat = cat;
                    cat = (cat + cat_max) / 2;
                    cat_min = temp_cat;
                }
                counter++;
            } while (counter <= 25);

            return { num: cat, formatted: cat.toFixed(2) }
        }
    };
    return CAT;
    

}());