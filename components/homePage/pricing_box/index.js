class PricingBoxComponent extends HTMLElement {
    connectedCallback() {
        this.render()
    }

    render() {
        const packageName = this.getAttribute('packageName')
        const price = this.getAttribute('price')
        const firstListItem = this.getAttribute('firstListItem')
        const secondListItem = this.getAttribute('secondListItem')
        const thirdListItem = this.getAttribute('thirdListItem')
        const idealFor = this.getAttribute('idealFor')
        const backgroundColor = this.getAttribute('backgroundColor');
        const textColor = this.getAttribute('textColor') 
        const packageNameColor = this.getAttribute('packageNameColor') 
        const priceColor = this.getAttribute('priceColor')
        const ListItemColor = this.getAttribute('ListItemColor')



        this.innerHTML = ` 
            <link rel="stylesheet" href="../../components/homePage/pricing_box/index.css">
            <div class="pricing-box" style="background-color: ${backgroundColor}; color: ${textColor};" >
                <h2 style="color: ${packageNameColor};" >${packageName}</h2>
                <p>Purus quis semper elementum viverra tellus. Urna arcu pulvinar est</p>
                <div class="price" style="color: ${priceColor};">${price}<span class="price-period">/day</span></div>
                <button>Get Started!</button>
                <ul>
                    <li style="color: ${ListItemColor};"><span class="check-icon">✔</span>${firstListItem}</li>
                    <hr>
                    <li style="color: ${ListItemColor};"><span class="check-icon">✔</span>${secondListItem}</li>
                    <hr>
                    <li style="color: ${ListItemColor};"><span class="check-icon">✔</span>${thirdListItem}</li>
                </ul>
                <div class="ideal-for">Ideal For:${idealFor}</div>
            </div> 
        `
    }
}

customElements.define('pricing-box', PricingBoxComponent)
