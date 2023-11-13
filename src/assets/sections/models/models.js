// let slide = document.querySelectorAll('.model-card');
let flipContainer = document.querySelectorAll('.flip-container');
flipContainer.forEach(element => {
    element.addEventListener('click', function () {
        element.classList.add("rotate");
        element.addEventListener('click', function () {
            element.classList.remove("rotate");
        })
        return
    })
});

const balancerButton = document.querySelector('[data-block="balancer"]');
const machineButton = document.querySelector('[data-block="machine"]');
const balancerSwiper = document.querySelector('.balancer');
const machineSwiper = document.querySelector('.machine');

const CareerMachineButton = document.querySelector('[data-block="CareerMachine"]');
const CareerMachineSwiper = document.querySelector('.CareerMachine');
const CareerBalancerButton = document.querySelector('[data-block="CareerBalancer"]');
const CareerBalancerSwiper = document.querySelector('.CareerBalancer');


const GruzMachineButton = document.querySelector('[data-block="GruzMachine"]');
const GruzMachineSwiper = document.querySelector('.GruzMachine');
const GruzBalancerButton = document.querySelector('[data-block="GruzBalancer"]');
const GruzBalancerSwiper = document.querySelector('.GruzBalancer');


balancerButton.addEventListener('click', e => {
    balancerButton.classList.add('switches__active');
    machineButton.classList.remove('switches__active');
    machineSwiper.classList.add("none");
    balancerSwiper.classList.remove("none");
    return
});

machineButton.addEventListener('click', function () {
    machineButton.classList.add('switches__active');
    balancerButton.classList.remove('switches__active');
    balancerSwiper.classList.add("none");
    machineSwiper.classList.remove("none");
    return
});


CareerBalancerButton.addEventListener('click', e => {
    CareerBalancerButton.classList.add('switches__active');
    CareerMachineButton.classList.remove('switches__active');
    CareerMachineSwiper.classList.add("none");
    CareerBalancerSwiper.classList.remove("none");
    return
});


CareerMachineButton.addEventListener('click', function () {
    CareerMachineButton.classList.add('switches__active');
    CareerBalancerButton.classList.remove('switches__active');
    CareerBalancerSwiper.classList.add("none");
    CareerMachineSwiper.classList.remove("none");
    return
});

GruzMachineButton.addEventListener('click', function () {
    GruzMachineButton.classList.add('switches__active');
    GruzBalancerButton.classList.remove('switches__active');
    GruzBalancerSwiper.classList.add("none");
    GruzMachineSwiper.classList.remove("none");
    return
});

document.addEventListener('click', e => {
    const DataBranch = e.target.dataset.branch;
    if (DataBranch) {
        window.location.hash = "#" + DataBranch;
        if (document.querySelector(window.location.hash) === CareerBalancerButton) {
            CareerBalancerButton.classList.add('switches__active');
            CareerMachineButton.classList.remove('switches__active');
            CareerMachineSwiper.classList.add("none");
            CareerBalancerSwiper.classList.remove("none");
        };
        if (document.querySelector(window.location.hash) === balancerButton) {
            balancerButton.classList.add('switches__active');
            machineButton.classList.remove('switches__active');
            machineSwiper.classList.add("none");
            balancerSwiper.classList.remove("none");
        }
        history.pushState("", document.title, window.location.pathname);
    };
})

const CorghiButtonCars = document.querySelector('[data-block="corghi-cars-leg"]');
const CorghiButtonBalancer = document.querySelector('[data-block="corghi-balancer-leg"]');
const CorghiCars = document.querySelector('.corghi-cars-leg');
const CorghiBalancer = document.querySelector('.corghi-balancer-leg');

const CorghiButtonTrucks = document.querySelector('[data-block="corghi-trucks"]');
const CorghiButtonTrucksBalancer = document.querySelector('[data-block="corghi-trucks-balancer"]');
const CorghiTrucks = document.querySelector('.corghi-trucks');
const CorghiTrucksBalancer = document.querySelector('.corghi-trucks-balancer');

CorghiButtonBalancer.addEventListener('click',e =>{
    CorghiButtonBalancer.classList.add('switches__active');
    CorghiButtonCars.classList.remove('switches__active');
    CorghiCars.classList.add("none");
    CorghiBalancer.classList.remove("none");
    return
});

CorghiButtonCars.addEventListener('click',e =>{
    CorghiButtonCars.classList.add('switches__active');
    CorghiButtonBalancer.classList.remove('switches__active');
    CorghiBalancer.classList.add("none");
    CorghiCars.classList.remove("none");
    return
})

CorghiButtonTrucksBalancer.addEventListener('click',e =>{
    CorghiButtonTrucksBalancer.classList.add('switches__active');
    CorghiButtonTrucks.classList.remove('switches__active');
    CorghiTrucks.classList.add("none");
    CorghiTrucksBalancer.classList.remove("none");
    return
});

CorghiButtonTrucksBalancer.addEventListener('click',e =>{
    CorghiButtonTrucksBalancer.classList.add('switches__active');
    CorghiButtonTrucks.classList.remove('switches__active');
    CorghiTrucks.classList.add("none");
    CorghiTrucksBalancer.classList.remove("none");
    return
});

CorghiButtonTrucks.addEventListener('click',e =>{
    CorghiButtonTrucks.classList.add('switches__active');
    CorghiButtonTrucksBalancer.classList.remove('switches__active');
    CorghiTrucksBalancer.classList.add("none");
    CorghiTrucks.classList.remove("none");
    return
});

const TariffCarsButton = document.querySelector('[data-block="tariff-cars"]');
const TariffTrucksButton = document.querySelector('[data-block="tariff-trucks"]');
const TariffCars = document.querySelector('.tariff-cars');
const TariffTrucks = document.querySelector('.tariff-trucks');

TariffTrucksButton.addEventListener('click',e =>{
    TariffTrucksButton.classList.add('switches__active');
    TariffCarsButton.classList.remove('switches__active');
    TariffCars.classList.add("none");
    TariffTrucks.classList.remove("none");
    return
});

TariffCarsButton.addEventListener('click',e =>{
    TariffCarsButton.classList.add('switches__active');
    TariffTrucksButton.classList.remove('switches__active');
    TariffTrucks.classList.add("none");
    TariffCars.classList.remove("none");
    return
});


// balancerButton.forEach(elem => {
//     elem.addEventListener('click', function () {
//         element.classList.add('switches__active');
//         machineButton.forEach(e => {
//             e.classList.remove('switches__active');
//         });
//         machineSwiper.forEach(e => {
//             e.classList.add("none");
//             balancerSwiper.forEach(e => {
//                 e.classList.remove("none");
//             })
//         })
//     }
//     )
// });
// machineButton.forEach(elem => {
//     elem.addEventListener('click', function () {
//         elem.classList.add('switches__active');
//         balancerButton.forEach(e => {
//             e.classList.remove('switches__active');
//         });
//         balancerSwiper.forEach(e => {
//             e.classList.add("none");
//             machineSwiper.forEach(e => {
//                 e.classList.remove("none");
//             })
//         })
//     })
// });


// CareerBalancerButton.forEach(elem => {
//     elem.addEventListener('click', function () {
//         element.classList.add('switches__active');
//         CareerMachineButton.forEach(e=>{
//             e.classList.remove('switches__active');
//         });
//         CareerMachineSwiper.forEach(e=>{
//             e.classList.add("none");
//             CareerBalancerSwiper.forEach(e=>{
//                 e.classList.remove("none");
//             })
//         })
//     }
//     )
// })

// CareerMachineButton.forEach(elem => {
//     elem.addEventListener('click', function () {
//         let element = event.target;
//         elem.classList.add('switches__active');
//         CareerBalancerButton.forEach(e=>{
//             e.classList.remove('switches__active');
//         });
//         CareerBalancerSwiper.forEach(e=>{
//             e.classList.add("none");
//             CareerMachineSwiper.forEach(e=>{
//                 e.classList.remove("none");
//             })
//         })
//     })
// })
