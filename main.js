function calculate() {
    // Отримання значень від користувача
    var masavug = document.getElementById("masavug").value; // Донецьке газове вугілля марки ГР
    var masamaz = document.getElementById("masamaz").value; // Високосірчистий мазут марки 40
    var masagaz = document.getElementById("masagaz").value; // Природний газ із газопроводу Уренгой-Ужгород


    // додаткові значення необхідні для розрахунків
    var lowerHeatVug = 20.47; //нижча робоча теплота згоряння палива, МДж/кг;
    var lowerHeatMaz = 39.48;
    var lowerHeatGas = 33.08;
    var fractionAshVug = 0.8;//частка золи, яка виходить з котла у вигляді леткої золи;
    var fractionAshMaz = 1;
    var massContentAshVug = 25.2;//масовий вміст золи в паливі на робочу масу, %;
    var massContentAshMaz = 0.15;
    var massContentCombustibleSubstancesVug = 1.5;//масовий вміст горючих речовин у викидах твердих частинок, %;
    var massContentCombustibleSubstancesMaz = 0;
    var efficiencyCleaning = 0.985;//ефективність очищення димових газів від твердих частинок;
    //  Розрахунки
    var emvug = (Math.pow(10, 6) / lowerHeatVug) * fractionAshVug * (massContentAshVug / (100 - massContentCombustibleSubstancesVug)) * (1 - efficiencyCleaning);//Показник емісії твердих частинок при спалюванні вугілля 
    var vukvug = Math.pow(10, -6) * emvug * lowerHeatVug * masavug;//Валовий викид при спалюванні вугілля становитиме
    var emmaz = (Math.pow(10, 6) / lowerHeatMaz) * fractionAshMaz * (massContentAshMaz / (100 - massContentCombustibleSubstancesMaz)) * (1 - efficiencyCleaning);//Показник емісії твердих частинок при спалюванні мазуту
    var vukmaz = Math.pow(10, -6) * emmaz * lowerHeatMaz * masamaz;//Валовий викид при спалюванні мазуту
    var emgaz = 0;//Показник емісії твердих частинок при спалюванні природного газу
    var vukgaz = Math.pow(10, -6) * emgaz * lowerHeatGas * masagaz;//Валовий викид при спалюванні природного газу
    // Виведення результатів
    document.getElementById("result").innerHTML = "Результат: " +
        "<br> Показник емісії твердих частинок при спалюванні вугілля становитиме: " + emvug.toFixed(2) + " г/ГДж " +
        "<br> Валовий викид при спалюванні вугілля становитиме: " + vukvug.toFixed(2) + " т. " +
        "<br> Показник емісії твердих частинок при спалюванні мазуту становитиме: " + emmaz.toFixed(2) + " г/ГДж" +
        "<br> Валовий викид при спалюванні мазуту становитиме: " + vukmaz.toFixed(2) + " т." +
        "<br> Показник емісії твердих частинок при спалюванні природного газу становитиме: " + emgaz + " г/ГДж" +
        "<br> Валовий викид при спалюванні природного газу становитиме: " + vukgaz + " т.";
}