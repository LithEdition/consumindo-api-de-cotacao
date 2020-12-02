class cotacao {

    constructor(local, name, high, low, bid, ask) {

        this.local = local
        this.name = name
        this.high = high
        this.low = low
        this.bid = bid
        this.ask = ask
        this.value()
    }

    validation(res) {

        let obj = ''

        if(this.local === 'USD') obj = res.USD
        if(this.local === 'USDT') obj = res.USDT
        if(this.local === 'CAD') obj = res.CAD
        if(this.local === 'AUD') obj = res.AUD
        if(this.local === 'EUR') obj = res.EUR
        if(this.local === 'GBP') obj = res.GBP
        if(this.local === 'ARS') obj = res.ARS
        if(this.local === 'JPY') obj = res.JPY
        if(this.local === 'CHF') obj = res.CHF
        if(this.local === 'CNY') obj = res.CNY
        if(this.local === 'YLS') obj = res.YLS
        if(this.local === 'BTC') obj = res.BTC
        if(this.local === 'LTC') obj = res.LTC
        if(this.local === 'ETH') obj = res.ETH
        if(this.local === 'XRP') obj = res.XRP

        this.add(obj)
    }

    add(obj) {

        this.name.innerHTML = obj.name
        this.high.innerHTML += obj.high
        this.low.innerHTML += obj.low
        this.bid.innerHTML += obj.bid
        this.ask.innerHTML += obj.ask
    }

    value() {

        fetch(`https://economia.awesomeapi.com.br/json/all/${this.local}/`)
            .then(res => res.json())
            .then(res => {

                this.validation(res)

            })
            .catch(e => console.log('Deu erro: ', e))
    }
}


