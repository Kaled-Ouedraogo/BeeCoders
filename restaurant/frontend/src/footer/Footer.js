import ContactLogo from "../images/contact_logo.png";
export function Footer(){
    return(
        <section className="footer">
            <div className="contact-container">
                <h1>Prendre contact</h1>
                <div className="form-container">
                    <br/><br/>
                    <form action="" className="contact-form">
                        <input type="text" placeholder="Nom et Prénom" required/>
                        <input type="email" name="" id="" placeholder="Adresse Email" required/>
                        <textarea name="" id="" cols="10" rows="10" placeholder="Votre message ici..."
                                  required></textarea>
                        <input type="submit" value="Envoyer" className="send-button"/>
                    </form>
                </div>
                <div className="map">
                    <img src={ContactLogo} alt="" />
                    </div>
            </div>

        </section>

    );
}