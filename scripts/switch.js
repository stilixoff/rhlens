const btnStandard = document.querySelector('.btn_standard');
const btnPremium = document.querySelector('.btn_premium');
const btnBest = document.querySelector('.btn_best');

const standardTitle = document.querySelector('.standard_title');
const premiumTitle = document.querySelector('.premium_title');
const bestTitle = document.querySelector('.best_title');

const boxStandard = document.querySelector('#standard-box');
const boxPremium = document.querySelector('#premium-box');
const boxBest = document.querySelector('#best-box');

btnStandard.onclick = () => {
    if(!standardTitle.classList.contains('.bg_standard')){
        standardTitle.classList.add('bg_standard')
        premiumTitle.classList.remove('bg_premium')
        bestTitle.classList.remove('bg_best')
        btnStandard.classList.add('bg_standard')
        btnPremium.classList.remove('bg_premium')
        btnBest.classList.remove('bg_best')
        boxStandard.classList.add('active')
        boxPremium.classList.remove('active')
        boxBest.classList.remove('active')
    }
}
btnPremium.onclick = () => {
    if(!btnPremium.classList.contains('bg_premium')){
        standardTitle.classList.remove('bg_standard')
        premiumTitle.classList.add('bg_premium')
        bestTitle.classList.remove('bg_best')
        btnStandard.classList.remove('bg_standard')
        btnPremium.classList.add('bg_premium')
        btnBest.classList.remove('bg_best')
        boxStandard.classList.remove('active')
        boxPremium.classList.add('active')
        boxBest.classList.remove('active')
    }
}
btnBest.onclick = () => {
    if(!btnBest.classList.contains('bg_best')){
        standardTitle.classList.remove('bg_standard')
        premiumTitle.classList.remove('bg_premium')
        bestTitle.classList.add('bg_best')
        btnStandard.classList.remove('bg_standard')
        btnPremium.classList.remove('bg_premium')
        btnBest.classList.add('bg_best')
        boxStandard.classList.remove('active')
        boxPremium.classList.remove('active')
        boxBest.classList.add('active')
    }
}