class HeaderComponent extends HTMLElement {
    connectedCallback() {
        this.render()
    }

    render() {
        const title = this.getAttribute('title')
        const page = this.getAttribute('page')
        
        this.innerHTML = `
            <link rel="stylesheet" href="../../components/header/header.css">
            <div class="headerContainer">
                <div class="headerLeftSide">
                    <img src="../../assets/pictures/aboutUs/instagram.png" class="headerImg"/>
                    <h5>official.yachtera</h5>
                    <img src="../../assets/pictures/aboutUs/twitter.png" class="headerImg"/>
                    <h5>yachtera</h5>
                </div>
                <div class="headerRightSide">
                    <img src="../../assets/pictures/aboutUs/phone.png" class="headerImg"/>
                    <h5>1233456789</h5>
                    <img src="../../assets/pictures/aboutUs/mail.png" class="headerImgMail"/>
                    <h5>support@yacht.com</h5>
                </div>
            </div>

            <div class="navbarContainer">
                <div class="navbarLeft">
                    <img src="../../assets/pictures/aboutUs/sailboat.png" class="navbarImg"/>
                    <h3>YACHTERA</h3>
                </div>

                <div class="navbarMiddle">
                    <p> <a href="../../pages/home_page/index.html">Home</a></p>
                    <p> <a href="../../pages/aboutUs/aboutUs.html">About us</a></p>
                    <p> <a href="../../pages/contactUs/contactUs.html">Contact</a></p>
                </div>

                <div class="navbarRightContainer">
                    <div class="navbarRight">
                        <p><a href="../../pages/LogIn/logIn.html">Log-in</a></p>
                     </div>
                </div>
            </div>

            <div class="blueHeader">
        <h1>${title}</h1>
        <div class="headerParagraph">
            <h5>HOME /</h5>
            <h6>${page}</h6>
        </div>
    </div>
        `
    }
}

customElements.define('header-component', HeaderComponent)
