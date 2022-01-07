const wojewodztwoNaslonecznienie = () => {
    const woj = document.getElementById("woj");
    const value = woj.options[woj.selectedIndex].value;
    switch (value) {
        case '1': //malopolskie
            return 1046;
        case '2': //slaskie
            return 1020;
        case '3': //dolnoslaskie
            return 993;
        case '4': //kujawsko-pomorskie
            return 857;
        case '5': //lodzkie
            return 978;
        case '6': //lubelskie
            return 975;
        case '7': //lubuskie
            return 830;
        case '8': //mazowieckie
            return 978;
        case '9': //opolskie
            return 1014;
        case '10': //podkarpackie
            return 1051;
        case '11': //podlaskie
            return 897;
        case '12': //pomorskie
            return 886;
        case '13': //swietokrzyskie
            return 982;
        case '14': //warminsko-mazurskie
            return 883;
        case '15': //wielkopolskie
            return 961;
        case '16': //zachodniopomorskie
            return 863;
    } //ilosc kWh rocznie z 1kW
}

const obliczRoczneZuzycie = () => {
    const okres = document.getElementById("okres");
    const zuzycie = document.getElementById("zuzycie");
    const value = okres.options[okres.selectedIndex].value;
    const wartoscZuzycia = (zuzycie.value == '') ? 0 : parseInt(zuzycie.value)

    switch (value) {
        case '1': //miesiac
            return 12 * wartoscZuzycia;
        case '2': //2 miesiace
            return 6 * wartoscZuzycia;
        case '3': //rok
            return wartoscZuzycia;
    }
}

const obliczMoc = () => {
    return ((obliczRoczneZuzycie() * 1.2) / wojewodztwoNaslonecznienie()).toFixed(2);
}

const wypiszMoc = () => {
    let kalkulator = document.getElementById("kalkulator");
    let wynik = document.getElementById("wynik");
    let div = document.createElement("div");
    let paragraf = document.createElement("p");

    const tekst = `Rekomendowana moc instalacji: <b>${obliczMoc()} kW</b>`

    paragraf.id = 'wynik';
    div.appendChild(paragraf)

    if (wynik === null) {
        paragraf.innerHTML = tekst;
        kalkulator.appendChild(div);
    } else {
        wynik.innerHTML = tekst;
    }
}
