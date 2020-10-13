export default class dataService {
    data = {
        device: [
            {
                id: 1,
                value: 25,
                name: 'temp',
                img: 'https://img.icons8.com/windows/64/000000/thermometer.png'
            },
            {
                id: 2,
                value: 23,
                name: 'volog',
                img: 'https://img.icons8.com/windows/64/000000/wet.png'
            },
            {
                id: 3,
                value: 22,
                name: 'tisk',
                img: 'https://img.icons8.com/windows/64/000000/barometer-gauge.png'
            }

        ],
        deviceControl: [
            {
                id: 1,
                name: 'LED1',
                type: 'LED',
                value: false,
                img: 'https://img.icons8.com/windows/64/000000/sun.png',
                timeWork:new Date().toDateString()
            },
            {
                id: 2,
                name: 'LED2',
                type: 'LED',
                value: true,
                img: 'https://img.icons8.com/windows/64/000000/sun.png',
                timeWork:new Date().toDateString()

            },
            {
                id: 3,
                name: 'LED3',
                type: 'LED',
                value: true,
                img: 'https://img.icons8.com/windows/64/000000/sun.png',
                timeWork:new Date().toDateString()
            },
            ]
    }

    getDeviceControl() {
        return this.data.deviceControl;

    }
    getDeviceControlID(id) {
        return this.data.deviceControl.filter(item=>item.id === id);

    }

    getDevice() {
        return this.data.device;


    }

    const
    mas = [

        [
            {
                id: 1,
                value: 1,
                name: 'temp',
                img: 'https://img.icons8.com/windows/64/000000/thermometer.png'
            },
            {
                id: 2,
                value: 1,
                name: 'volog',
                img: 'https://img.icons8.com/windows/64/000000/wet.png'
            },
            {
                id: 3,
                value: 1,
                name: 'tisk',
                img: 'https://img.icons8.com/windows/64/000000/barometer-gauge.png'
            },
            {
                id: 4,
                value: 1,
                name: 'light',
                img: 'https://img.icons8.com/windows/64/000000/sun.png'
            }

        ]

            [{
            id: 1,
            name: 'tisk',
            value: true
        },
            {
                id: 2,
                name: 'light',
                value: true
            }]

    ]
}