import './.htaccess';
import './robots.txt';
import './assets/styles/index.scss';
import './assets/js/phonemask.js';
// import './assets/js/geo.js';
import './assets/components/modal/callback-modal/modal.js'
import './assets/components/swiper/swiper.js'
import './assets/sections/models/models.js'
import './assets/sections/presence/presence.js'
import './assets/sections/corghi/corghi-parallax.js'

// import './assets/components/modal/callback-modal'

// import YandexMetrika from './assets/js/analytics/yandex-metrika.js';
// import MangoOffice from './assets/js/analytics/mango-office.js';
// import Envybox from './assets/js/analytics/envybox.js';
// import FormSender from './assets/js/sender.js';
// import Roistat from './assets/js/analytics/roistat.js';

const analyticsTimeout = setTimeout(() => {
    new YandexMetrika([{
        id: 91840915,
        params: { webvisor: true },
    }]);
    new MangoOffice(23176);
    clearTimeout(analyticsTimeout);
}, 2000);

new Roistat('8d1d08aebc35d0292c2ca7b696150b7e');

const envyboxTimeout = setTimeout(() => {
    new Envybox();
    clearTimeout(envyboxTimeout);
}, 4000);

/* eslint-enable no-new */

const formSender = new FormSender({
    createLeadUrl: 'https://collector.centr-to.ru/lead/create',
    group_id: '',
    source: '',
    type: '',
});

document.addEventListener('DOMContentLoaded', () => {
    formSender.init();
});



