import React, {useEffect, useState} from "react";
import axios from 'axios';
import imageLogo1 from "../images/logo1.png";
import imageLogo2 from "../images/logo2.png";

export function Container (){
    const [data, setData]= useState([])
    useEffect(()=>{
        axios.get('http://localhost:8085/api/articles')
            .then(res => setData(res.data))
            .catch(err => console.log(err))
    }, [])
    return (
        <section className="content">
            <Menu_title/>


        </section>

    );

}
function Menu_title(){
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [articlesArray, setArticlesArray] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8085/api/articles')
            .then(res => {
                setData(res.data.data); // Récupérer les données de l'API dans res.data.data
                setLoading(false);
            })
            .catch(err => {
                console.error("Erreur lors de la récupération des données :", err);
                setLoading(false);
            });
    }, []);
    useEffect(() => {
        if (data.length > 0) {
            const articles = data.map(article => ({
                id: article.id,
                titre: article.titre,
                prix: article.prix,
                image: article.image
            }));
            setArticlesArray(articles);
        }
    }, [data]);

    return (
        <>

            <section className="title">
                <img src={imageLogo1}/>
                <h1 className="title-text">&nbsp;Notre Menu&nbsp;</h1>
                <img src={imageLogo2}/>
                <br />
            </section>
            <hr />
            <section className="article">
                <section className="categorie-1">
                    <h2 className="article-name">Nos Fajitas</h2>
                    <div className="products-list">
                        <div className="card">
                            {articlesArray.length > 0 && (
                                <img src={require(`../images-produtcs/${articlesArray[0].image}`)} alt=""/>
                            )}
                            <div className="card__content">
                                <p className="card__title" align="center">Commander</p>
                            </div>
                            <br/>
                        </div>
                        <div className="card">
                            {articlesArray.length > 0 && (
                                <img src={require(`../images-produtcs/${articlesArray[1].image}`)} alt=""/>
                            )}
                            <div className="card__content">
                                <p className="card__title" align="center">Commander</p>
                            </div>
                            <br/>
                        </div>
                        <div className="card">
                            {articlesArray.length > 0 && (
                                <img src={require(`../images-produtcs/${articlesArray[2].image}`)} alt=""/>
                            )}
                            <div className="card__content">
                                <p className="card__title" align="center">Commander</p>
                            </div>
                            <br/>
                        </div>
                    </div>
                    <div className="products-info-name">
                        {articlesArray.length > 0 && <h2>{articlesArray[0]?.titre}</h2>}
                        {articlesArray.length > 1 && <h2>{articlesArray[1]?.titre}</h2>}
                        {articlesArray.length > 2 && <h2>{articlesArray[2]?.titre}</h2>}
                    </div>
                    <div className="products-info-price">
                        {articlesArray.length > 0 && <h2>{articlesArray[0]?.prix}</h2>}
                        {articlesArray.length > 1 && <h2>{articlesArray[1]?.prix}</h2>}
                        {articlesArray.length > 2 && <h2>{articlesArray[2]?.prix}</h2>}
                    </div>

                    <div className="products-list">
                        <div className="card">
                            {articlesArray.length > 0 && (
                                <img src={require(`../images-produtcs/${articlesArray[3].image}`)} alt=""/>
                            )}
                            <div className="card__content">
                                <p className="card__title" align="center">Commander</p>
                            </div>
                            <br/>
                        </div>
                        <div className="card">
                            {articlesArray.length > 0 && (
                                <img src={require(`../images-produtcs/${articlesArray[4].image}`)} alt=""/>
                            )}
                            <div className="card__content">
                                <p className="card__title" align="center">Commander</p>
                            </div>
                            <br/>
                        </div>
                        <div className="card">
                            {articlesArray.length > 0 && (
                                <img src={require(`../images-produtcs/${articlesArray[5].image}`)} alt=""/>
                            )}
                            <div className="card__content">
                                <p className="card__title" align="center">Commander</p>
                            </div>
                            <br/>
                        </div>
                    </div>
                    <div className="products-info-name">
                        {articlesArray.length > 0 && <h2>{articlesArray[3]?.titre}</h2>}
                        {articlesArray.length > 1 && <h2>{articlesArray[4]?.titre}</h2>}
                        {articlesArray.length > 2 && <h2>{articlesArray[5]?.titre}</h2>}
                    </div>
                    <div className="products-info-price">
                        {articlesArray.length > 0 && <h2>{articlesArray[3]?.prix}</h2>}
                        {articlesArray.length > 1 && <h2>{articlesArray[4]?.prix}</h2>}
                        {articlesArray.length > 2 && <h2>{articlesArray[5]?.prix}</h2>}

                    </div>

                    <div className="voirPlus">
                        <a href="">Voir Plus</a>
                    </div>

                </section>

                <section className="categorie-1">
                    <h2 className="article-name">Nos Fajitas</h2>
                    <div className="products-list">
                        <div className="card">
                            {articlesArray.length > 0 && (
                                <img src={require(`../images-produtcs/${articlesArray[0].image}`)} alt=""/>
                            )}
                            <div className="card__content">
                                <p className="card__title" align="center">Commander</p>
                            </div>
                            <br/>
                        </div>
                        <div className="card">
                            {articlesArray.length > 0 && (
                                <img src={require(`../images-produtcs/${articlesArray[1].image}`)} alt=""/>
                            )}
                            <div className="card__content">
                                <p className="card__title" align="center">Commander</p>
                            </div>
                            <br/>
                        </div>
                        <div className="card">
                            {articlesArray.length > 0 && (
                                <img src={require(`../images-produtcs/${articlesArray[2].image}`)} alt=""/>
                            )}
                            <div className="card__content">
                                <p className="card__title" align="center">Commander</p>
                            </div>
                            <br/>
                        </div>
                    </div>
                    <div className="products-info-name">
                        {articlesArray.length > 0 && <h2>{articlesArray[0]?.titre}</h2>}
                        {articlesArray.length > 1 && <h2>{articlesArray[1]?.titre}</h2>}
                        {articlesArray.length > 2 && <h2>{articlesArray[2]?.titre}</h2>}
                    </div>
                    <div className="products-info-price">
                        {articlesArray.length > 0 && <h2>{articlesArray[0]?.prix}</h2>}
                        {articlesArray.length > 1 && <h2>{articlesArray[1]?.prix}</h2>}
                        {articlesArray.length > 2 && <h2>{articlesArray[2]?.prix}</h2>}
                    </div>

                    <div className="products-list">
                        <div className="card">
                            {articlesArray.length > 0 && (
                                <img src={require(`../images-produtcs/${articlesArray[3].image}`)} alt=""/>
                            )}
                            <div className="card__content">
                                <p className="card__title" align="center">Commander</p>
                            </div>
                            <br/>
                        </div>
                        <div className="card">
                            {articlesArray.length > 0 && (
                                <img src={require(`../images-produtcs/${articlesArray[4].image}`)} alt=""/>
                            )}
                            <div className="card__content">
                                <p className="card__title" align="center">Commander</p>
                            </div>
                            <br/>
                        </div>
                        <div className="card">
                            {articlesArray.length > 0 && (
                                <img src={require(`../images-produtcs/${articlesArray[5].image}`)} alt=""/>
                            )}
                            <div className="card__content">
                                <p className="card__title" align="center">Commander</p>
                            </div>
                            <br/>
                        </div>
                    </div>
                    <div className="products-info-name">
                        {articlesArray.length > 0 && <h2>{articlesArray[3]?.titre}</h2>}
                        {articlesArray.length > 1 && <h2>{articlesArray[4]?.titre}</h2>}
                        {articlesArray.length > 2 && <h2>{articlesArray[5]?.titre}</h2>}
                    </div>
                    <div className="products-info-price">
                        {articlesArray.length > 0 && <h2>{articlesArray[3]?.prix}</h2>}
                        {articlesArray.length > 1 && <h2>{articlesArray[4]?.prix}</h2>}
                        {articlesArray.length > 2 && <h2>{articlesArray[5]?.prix}</h2>}

                    </div>

                    <div className="voirPlus">
                        <a href="">Voir Plus</a>
                    </div>

                </section>
            </section>

        </>

    );


}


function Product() {
    return (
        <>
            <div className="card">
                <img src={imageLogo1}>
                </img>
                <div className="card__content">
                    <p className="card__title" align="center">Commander</p>
                </div>
                <br/>
            </div>


        </>

    )
        ;
}

