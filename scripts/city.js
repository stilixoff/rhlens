window.onload = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const indexCity = urlParams.get('city');

    const list = {
        kyiv: [{
                brand: "Оптика на Васильківській",
                address: "Київ, Вул.Васильківська 5/7",
                phone: "+380442572352",
                phone2: "+380932572352",
                email: "glazok.net.ua@i.ua",
                site: ""
            },
            {
                brand: "Оптика медтехніка",
                address: "Київ, метро Контрактова площа, вул. Костянтинівська, 2а, ТЦ Самсон, бутик 2",
                phone: "+380505870119",
                phone2: "",
                email: "",
                site: "www.family-optica.business.site"
            },
            {
                brand: "Family оптика",
                address: "Київ, вул. Петра Запорожця, 28",
                phone: "+380686146220",
                phone2: "",
                email: "",
                site: ""
            },
            {
                brand: "Toptiks",
                address: "Київ, вул. Поправки 4/39 А2",
                phone: "+380995529293",
                phone2: "",
                email: "  l.f.mokrousova@gmail.com",
                site: ""
            },
            {
                brand: "Оптика Института офтальмологии 'Ocular'",
                address: "Київ, вул. Пимоненка, 13 А",
                phone: "+380995529293",
                phone2: "",
                email: "  l.f.mokrousova@gmail.com",
                site: ""
            },
            {
                brand: "Центр Медичної Оптики Новобіличі",
                address: "Київ вул.Академіка Булаховського 26 (2 поверх)",
                phone: "+380663772560",
                phone2: "",
                email: "centr.med.optic@gmail.com",
                site: ""
            },
            {
                brand: "Oksi Optika",
                address: "Київ, проспект Науки, 4 (перший поверх)",
                phone: "",
                phone2: "",
                email: "",
                site: ""
            },
            {
                brand: "Oksi Optika",
                address: "Київ, проспект Голосіївський, 70(Готель Мир ,офіс 401)",
                phone: "+380961223970",
                phone2: "+380632732929",
                email: "",
                site: "OksiOptika.com.ua"
            },
            {
                brand: "Oksi Optika",
                address: "Київ, проспект Голосіївський, 70(Готель Мир ,офіс 401)",
                phone: "+3800687716658",
                phone2: "",
                email: "",
                site: ""
            },
            {
                brand: "Oksi Optika",
                address: "Ірпінь, вул. Університетська, 2/1, корпус 3",
                phone: "+380664142854",
                phone2: "+380961935828",
                email: "",
                site: ""
            },
            {
                brand: "Оптика Монокль",
                address: "Київ, пр-кт Голосіївський, 40 років 46/1",
                phone: "+3800442573320",
                phone2: "+380991744461",
                email: "morozlm05@gmail.com",
                site: ""
            },
            {
                brand: "Оптика Монокль",
                address: "Київ, Кирилівська 115/2",
                phone: "+380444682067",
                phone2: "+380991744461",
                email: "morozlm05@gmail.com",
                site: ""
            },
            {
                brand: "Оптика Монокль",
                address: "Київ, Шота Руставелі, 20",
                phone: "+380442870105",
                phone2: "+380991744461",
                email: "morozlm05@gmail.com",
                site: ""
            },
            {
                brand: "Оптика Sunrise",
                address: "Київ, вул.Харківське шоссе, 19",
                phone: "+380636654668",
                phone2: "",
                email: "",
                site: ""
            },
            {
                brand: "Оптика Sunrise",
                address: "Київ, вул.Бориспільська,9",
                phone: "+380663616921",
                phone2: "+380676073372",
                email: "",
                site: ""
            },
            {
                brand: "Оптика Sunrise",
                address: "Київ, вул.Драгоманова,40є",
                phone: "+30638114909",
                phone2: "",
                email: "",
                site: ""
            },
            {
                brand: "Оптика",
                address: "Ірпінь, вул. Д. Попова, 26а",
                phone: "+380632491839",
                phone2: "",
                email: "nataliavehtev@gmail.com",
                site: ""
            },
            {
                brand: "Оптика Look",
                address: "Ірпінь, вул. Соборна, 160, ТРЦ Жираф",
                phone: "",
                phone2: "",
                email: "",
                site: ""
            },
            {
                brand: "Оптика Look",
                address: "Ірпінь, вул. Новооскольська, 2Р",
                phone: "+380952181031",
                phone2: "+380979024620",
                email: "",
                site: ""
            },
            {
                brand: "Центр-Оптика",
                address: "Київ, бульвар Перова, 26б",
                phone: "+380974098869",
                phone2: "",
                email: "",
                site: ""
            },
            {
                brand: "Оптика Лик",
                address: "Київ вул. Шота Руставелі, 31 а",
                phone: "+380442874199",
                phone2: "",
                email: "",
                site: ""
            },
            {
                brand: "Оптика Лик",
                address: "Київ проспект Володимира Маяковського, 26",
                phone: "+380445155890",
                phone2: "",
                email: "",
                site: ""
            },
            {
                brand: "Оптика Лик",
                address: "Київ, бул. Кольцова 14а.",
                phone: "+380664645575",
                phone2: "+380674494503",
                email: "",
                site: ""
            },
            {
                brand: "Оптика Лик",
                address: "Київ, вул. Т. Драйзера 8",
                phone: "+380951352493",
                phone2: "+380674494503",
                email: "",
                site: "www.instagram.com/optikalik"
            },
            {
                brand: "Оптика Лик",
                address: "Київ, вул. О. Мишуги 11б",
                phone: "+380445754981",
                phone2: "+380674494503",
                email: "",
                site: ""
            },
            {
                brand: "OLA ОПТИКА",
                address: "Київ, пр. М.Бажана, 3г, м. Позняки, маг. 25",
                phone: "+380974037223",
                phone2: "",
                email: "",
                site: ""
            },
            {
                brand: "OLA ОПТИКА",
                address: "Київ, вул.Здолбунівська, 17 ТЦ АШАН Рів Гош",
                phone: "+380974037222",
                phone2: "",
                email: "",
                site: ""
            },
        ],
        dnepr: [{
                brand: "Оптика",
                address: "Дніпро, вул. Пушкіна 29",
                phone: "+380504808600",
                phone2: "",
                email: "annadand@gmail.com",
                site: ""
            },
            {
                brand: "Оптика Сити",
                address: "Кам'янське, вул.Миколи Лисенка, буд.13, кв.5",
                phone: "",
                phone2: "+380674217297",
                email: "varaksina79y@gmail.com",
                site: ""
            },
        ],
        kharkov: [{
                brand: "Офтальмика",
                address: "Харків, вул. Отакара Яроша, 16Г",
                phone: "+380577002717",
                phone2: "+380667002717",
                email: "",
                site: ""
            },
            {
                brand: "PROGRESSIV ОПТИКА",
                address: "Харків. вул. Я. Мудрого 6/8",
                phone: "+380660219464",
                phone2: "+380950965376",
                email: "progressivoptica@ukr.net",
                site: ""
            },
            {
                brand: "Джоні",
                address: "Харків, пр. Героїв Сталінграду, 140",
                phone: "+380636043801",
                phone2: "",
                email: "",
                site: ""
            },
            {
                brand: "Prestige",
                address: "Харків, вул.Трінклера, 28",
                phone: "+380993282120",
                phone2: "",
                email: "prestigeoptika@gmail.com",
                site: ""
            },
            {
                brand: "Оптика На Чайковського",
                address: "Харків, вул. Чайковського, 24",
                phone: "+380990152383",
                phone2: "",
                email: "optikashop.com@gmail.com",
                site: ""
            },
            {
                brand: "Ай-кью клінік",
                address: "Харьков, ул. Гв. Широнінців, 33",
                phone: "",
                phone2: "",
                email: "info@eyeqclinic.com.ua",
                site: ""
            },
        ],
        zaporizhzhia: [{
            brand: "Оптика",
            address: "Мелітополь, б-р 30-річчя Перемоги, буд.44, кв.30",
            phone: "+380977759531",
            phone2: "",
            email: "zrenieoptika@gmail.com",
            site: ""
        }],
        odessa: [{
                brand: "Оптика 5 звезд (медтехника)",
                address: "Одеса,вул.Торгівельна 29/31",
                phone: "+380689811501",
                phone2: "+380636650498",
                email: "optica5zvezd@gmail.com",
                site: ""
            },
            {
                brand: "Оптика 5 звезд (медтехника)",
                address: "Одеса,вул.Бочарова,2(Південний ринок)",
                phone: "+380638307286",
                phone2: "",
                email: "optica5zvezd@gmail.com",
                site: ""
            },
            {
                brand: "Room оптика",
                address: "Одеса,ТРЦ FONTAN SKY пер.Семафорний,4",
                phone: "+380487751547",
                phone2: "+380676542853",
                email: "",
                site: ""
            },
            {
                brand: "Жук оптика",
                address: "Одеса, вул.Маршала Говорова 10Б",
                phone: "+380487751553",
                phone2: "+380673258389",
                email: "",
                site: ""
            },
            {
                brand: "Оптика",
                address: "Одеса, 7-я Фонтана, вул.Фонтанськая дорога,65",
                phone: "+380487947991",
                phone2: "",
                email: "Fisenkovaleriy28@gmail.com",
                site: ""
            },
            {
                brand: "Оптика",
                address: "Одеса, 7-я Фонтана, вул.Фонтанська дорога,65",
                phone: "+380487947991",
                phone2: "",
                email: "Fisenkovaleriy28@gmail.com",
                site: ""
            },
            {
                brand: "Оптика",
                address: "Одеса, вул.Преображенська,37",
                phone: "+380487700635",
                phone2: "",
                email: "Fisenkovaleriy28@gmail.com",
                site: ""
            },
            {
                brand: "Оптика",
                address: "Одеса, вул.Новосельського,43",
                phone: "+380487704490",
                phone2: "",
                email: "Fisenkovaleriy28@gmail.com",
                site: ""
            },
            {
                brand: "Очкарик",
                address: "Одеса, вул.Рішельевська,78",
                phone: "+380487117867",
                phone2: "",
                email: "bdb@ukr.net",
                site: "www.ochkarik.ua"
            },
            {
                brand: "Очкарик",
                address: "Одеса, вул.Преображенсmка,66",
                phone: "+380487705802",
                phone2: "",
                email: "bdb@ukr.net",
                site: "www.ochkarik.ua"
            },
            {
                brand: "Очкарик",
                address: "Одеса, вул.Ак.Королева,49",
                phone: "+380487015902",
                phone2: "",
                email: "bdb@ukr.net",
                site: "www.ochkarik.ua"
            },
            {
                brand: "Очкарик",
                address: "Одеса, вул.Космонавтів,3",
                phone: "+380487433141",
                phone2: "",
                email: "bdb@ukr.net",
                site: "www.ochkarik.ua"
            },
            {
                brand: "Очкарик",
                address: "Одеса, вул.Пантелеймонівська,101",
                phone: "+380487048587",
                phone2: "",
                email: "bdb@ukr.net",
                site: "www.ochkarik.ua"
            },
            {
                brand: "EyeQ Optica",
                address: "Одеса, ж/м Радужний 15/4",
                phone: "+380666409042",
                phone2: "",
                email: "",
                site: "www.instagram.com/eyeq__optica"
            },
            {
                brand: "Твої Очкуляри",
                address: "Одеса, вул.Варненська 2/2",
                phone: "+380487983957",
                phone2: "+380639464488",
                email: "",
                site: ""
            },
            {
                brand: "Оптика",
                address: "Одеса, вул.Космонавтів,33",
                phone: "+380487367881",
                phone2: "+380949311881",
                email: "",
                site: ""
            },
            {
                brand: "Оптика",
                address: "Одеса, вул.Пантелеймонівська,70",
                phone: "+380487879490",
                phone2: "+380734852895",
                email: "",
                site: "www.instagram.com/optics.od"
            },
        ]
    };

    const uzhgorod = document.querySelector('.uzhgorod');
    const lvov = document.querySelector('.lvov');
    const lutsk = document.querySelector('.lutsk');
    const ivanoFrankovsk = document.querySelector('.ivano-frankovsk');
    const ternopol = document.querySelector('.ternopol');
    const rovno = document.querySelector('.rovno');
    const zhitomer = document.querySelector('.zhitomer');
    const chernovtcy = document.querySelector('.chernovtcy');
    const hmelnitsk = document.querySelector('.hmelnitsk');
    const vinitca = document.querySelector('.vinitca');
    const kyiv = document.querySelector('.kyiv');
    const sumy = document.querySelector('.sumy');
    const kharkov = document.querySelector('.kharkov');
    const poltava = document.querySelector('.poltava');
    const cherkasy = document.querySelector('.cherkasy');
    const kropivnitskiy = document.querySelector('.kropivnitskiy');
    const dnepr = document.querySelector('.dnepr');
    const zaporizhzhia = document.querySelector('.zaporizhzhia');
    const donetsk = document.querySelector('.donetsk');
    const lugansk = document.querySelector('.lugansk');
    const odessa = document.querySelector('.odessa');
    const nikolaev = document.querySelector('.nikolaev');
    const herson = document.querySelector('.herson');
    const krym = document.querySelector('.krym');
    const chernigov = document.querySelector('.chernigov');

    const cities = [chernigov, uzhgorod, lvov, lutsk, ivanoFrankovsk, ternopol, rovno, zhitomer, chernovtcy, hmelnitsk, vinitca, kyiv, sumy, kharkov, poltava, cherkasy, kropivnitskiy, dnepr, zaporizhzhia, donetsk, lugansk, odessa, nikolaev, herson, krym];
    const city = document.querySelectorAll('.data-city');
    const cityOption = document.getElementById('city-option');
    const inputCity = document.getElementById('city');
    const box = document.getElementById('city-boxes');
    
    const quantityOptics = (nameCityEN, nameCityUA) => {
        if(list[`${nameCityEN}`]){
            cityOption.innerHTML = `${nameCityUA} <br> Точок продажу: ${list[`${nameCityEN}`].length}`;
        } else {
            cityOption.innerHTML = `${nameCityUA} <br> Точок продажу поки що немає`
        }
    }

    for (let index = 0; index < city.length; index++) {
        city[index].addEventListener("click", (event) => {
            quantityOptics(event.target.dataset.city, event.target.attributes.title.value);
            for (let i = 0; i < cities.length; i++) {
                if (event.target.classList.contains(cities[i].dataset.city)) {
                    cities[i].classList.add('selected');
                } else {
                    cities[i].classList.remove('selected');
                }
            }
        }, false)
    }

    const innerBoxes = (value) => {
        if (list[value]) {
            for (let i = 0; i < list[value].length; i++) {
                if (i % 2 == 0) {
                    box.innerHTML += `
                    <div class="city-box">
                        <p class="optic-brand">
                            ${list[value][i].brand}
                        </p>
                        <p class="address-optics">
                            ${list[value][i].address}
                        </p>
                        <p class="contact-optics">
                            ${list[value][i].phone}
                        </p>
                        <p class="contact-optics">
                            ${list[value][i].phone2}
                        </p>
                        <p class="email-optics">
                            ${list[value][i].email}
                        </p>
                        <p>
                            ${list[value][i].site}
                        </p>
                    </div>
                `
                } else {
                    box.innerHTML += `
                        <div class="city-box dark">
                            <p class="optic-brand">
                                ${list[value][i].brand}
                            </p>
                            <p class="address-optics">
                                ${list[value][i].address}
                            </p>
                            <p class="contact-optics">
                                ${list[value][i].phone}
                            </p>
                            <p class="contact-optics">
                                ${list[value][i].phone2}
                            </p>
                            <p class="email-optics">
                                ${list[value][i].email}
                            </p>
                            <p>
                                ${list[value][i].site}
                            </p>
                        </div>
                    `
                }
            }
        } else {
            box.innerHTML = `<p style="color:white; margin-top: 10%" >Поки що у Вашому місті не має можливості придбати лінзи r+h. Пошукайте у найближчому місті</p>`
        }
    }

    for (let j = 0; j < cities.length; j++) {
        cities[j].addEventListener('click', (event) => {
            box.innerHTML = null;
            inputCity.value = event.target.dataset.city;
            innerBoxes(event.target.dataset.city);
        })

    }

    inputCity.onchange = (event) => {
        box.innerHTML = null;
        innerBoxes(event.target.value);
        quantityOptics(event.target.value, inputCity.options[inputCity.selectedIndex].label);
        for (let i = 0; i < cities.length; i++) {
            if (cities[i].classList.contains(inputCity.value)) {
                cities[i].classList.add('selected');
            } else {
                cities[i].classList.remove('selected');
            }
        }
    }

    if (indexCity) {
        inputCity.value = indexCity;
        quantityOptics(indexCity, inputCity.options[inputCity.selectedIndex].label);
        box.innerHTML = null;
        innerBoxes(indexCity);
        for (let i = 0; i < cities.length; i++) {
            if (cities[i].classList.contains(inputCity.value)) {
                cities[i].classList.add('selected');
            } else {
                cities[i].classList.remove('selected');
            }
        }
    }
}