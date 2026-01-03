class ReadySailComponent extends HTMLElement {
    connectedCallback() {
        this.render()
    }

    render() {
        this.innerHTML = ` 
            <link rel="stylesheet" href="../../components/ready_to_set_sail/index.css">
            <div class="ready_to_set_sail">
                <div class="container_setsail">
                    <h1>Ready to Set Sail?</h1>
                    <p>Explore the world in style with Yachtera. Choose your dream yacht, select your destination, and embark on an unforgettable journey today!</p>
                    <div class="button_setsail">
                        <button class="book-now">Book Now</button>
                        <button class="contact-us">Contact Us</button>
                    </div>
                </div>
            </div>
        `
    }
}

customElements.define('ready-sail', ReadySailComponent)
