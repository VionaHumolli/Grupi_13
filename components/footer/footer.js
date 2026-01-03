class FooterComponent extends HTMLElement {
    connectedCallback() {
        this.render()
    }

    render() {
        this.innerHTML = `
            <link rel="stylesheet" href="../../components/footer/footer.css"/>

    <div class="footerContainer">
        <div class="footerLeftSide">
            <h2>YACHTERA</h2>
            <p>Whether you're seeking the thrill of a sleek performance yacht,
                 the spacious comfort of a family cruiser, or the unmatched elegance
                  of a superyacht, we have the perfect vessel for your journey. 
            </p>
            <div class="footerButton">
                <p class="footerButtonP">Start Live Chat</p>
            </div>
        </div>

        <div class="footerRightSideContainer">
            <div class="footerRightSide">
                <p class="footerTitle">Company</p>
                <p>Home</p>
                <p>About us</p>
                <p>Services</p>
                <p>Contact us</p>
            </div>
            <div class="footerRightSide">
                <p class="footerTitle">Resources</p>
                <p>Destination</p>
                <p>Yacht Rental</p>
                <p>Documentation</p>
                <p>Blog & News</p>
            </div>
            <div class="footerRightSide">
                <p class="footerTitle">Help</p>
                <p>Customer Support</p>
                <p>Terms & Conditions</p>
                <p>Privacy Policy</p>
            </div>
        </div>
    </div>

    <div class="footerBottomPart">
        <hr>
        <div class="footerText">
            <p class="footerTextp">CopyRight © 2024 Yachtera</p>
            <p class="footerTextp2">Design by TokoTem</p>
        </div>
    </div>


        `
    }
}

customElements.define('footer-component', FooterComponent)
