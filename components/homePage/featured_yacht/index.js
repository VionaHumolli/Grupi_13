class FeaturedYachtComponent extends HTMLElement {
    connectedCallback() {
        this.render()
    }

    render() {
        const image = this.getAttribute('image')
        const yachtName = this.getAttribute('yachtName')
        const price = this.getAttribute('price')


        this.innerHTML = ` 
        <link rel="stylesheet" href="../../components/homePage/featured_yacht/index.css">
        <div>
            <div class="yacht-item">
                <div>
                    <img src="${image}" class="yacht-item-img">
                </div>
                <div class="yacht-details">
                    <h1>${yachtName}</h1>
                    <div class="line"></div>
                    <div class="icon-row">
                        <img src="../../assets/pictures/homePage/crop.png" alt="Size Icon"><p>85” ft</p>
                        <img src="../../assets/pictures/homePage/users.png" alt="Guests Icon"><p>6 Guests</p>
                        <img src="../../assets/pictures/homePage/Vector.png" alt="Crew Icon"><p>5 Crew</p>
                    </div>
                    <div class="line"></div>
                    <p>Vitae nulla feugiat cursus id senectus cursus tristique lacinia ornare.</p>
                    <div class="price-section">
                        <p>${price}</p>
                        <button>Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    `
    }
}

customElements.define('featured-yacht', FeaturedYachtComponent )

