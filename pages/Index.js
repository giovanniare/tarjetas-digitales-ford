
import Head from 'next/head';
import Link from 'next/link';
import Style from '../components/Style';

export const config = { amp: true };

const HomePage = ({userAgent, test}) => {
    console.log(userAgent)
    return (
        <div>
            <Head>
                <title>Country | German Chavez</title>
                <link href="https://fonts.googleapis.com/css?family=Manjari&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css?family=Livvic|Manjari&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css?family=Lexend+Deca&display=swap" rel="stylesheet" />
                <script 
                    async 
                    custom-element="amp-social-share" 
                    src="https://cdn.ampproject.org/v0/amp-social-share-0.1.js" 
                />
                <script 
                    async 
                    custom-element="amp-iframe" 
                    src="https://cdn.ampproject.org/v0/amp-iframe-0.1.js"
                />
                <link 
                    rel="shortcut icon" 
                    href="/static/fo.jpg" 
                />
                <script 
                    async 
                    key="amp-carousel"
                    custom-element="amp-carousel" 
                    src="https://cdn.ampproject.org/v0/amp-carousel-0.1.js" 
                />

            </Head>
            <center>
                <p>calis</p>
                {test ? (
                <div className="mobil">
                    <div className="logo">
                        <amp-img
                            width="100"
                            height="100"
                            src="/static/corman.png"
                            alt="a cool image"
                        />
                    </div>
                    <div className="present">
                        <h1>German Chávez</h1>
                        <p>Gerente de Mercadotecnia</p>
                        <amp-img
                            width="300"
                            height="200"
                            src="/static/ger.png"
                            alt="El ger"
                        />
                        <div className="descripM">
                            <div className="infoM">
                                <h5>Aqui tu descripcion de empresa</h5>
                                <p>Eslogan</p>
                            </div>
                            <div className="infoM">
                                <h5>Aqui tu mision</h5>
                                <p>Desglose de mision</p>
                            </div>
                            <div className="infoM">
                                <h5>Aqui una frase</h5>
                                <p>Descripcion</p>
                            </div>
                        </div>
                    </div>
                    <div className="galeri">
                        <amp-carousel layout="responsive" width="300" height="200" type="slides" autoplay="2000">
                            <amp-img src="/static/coche1.jpg" width="300" height="200" layout="responsive" alt="a cool image"></amp-img>
                            <amp-img src="/static/coche2.jpg" width="300" height="200" layout="responsive" alt="a cool image1"></amp-img>
                            <amp-img src="/static/coche3.jpg" width="300" height="200" layout="responsive" alt="a cool image2"></amp-img>
                        </amp-carousel>
                    </div>
                    <div className="orgullo">
                        <amp-img src="/static/ogullosamente.png" width="200" height="100" />
                    </div>
                    <div className="agencia">
                        <amp-img src="/static/agencia-zoo-1.png" layout="responsive" width="200" height="100" />
                    </div>
                    <div className="redes">
                        <h3>Ford Country Zoológico</h3>
                        <h4>Visitanos</h4>
                        <a href="https://www.facebook.com/fordcountryzoologico/" target="_blank">
                            <amp-img alt="Sígueme en Facebook"
                                height="36" 
                                width="36" 
                                src="https://2.bp.blogspot.com/-28mh2hZK3HE/XCrIxxSCW0I/AAAAAAAAH_M/XniFGT5c2lsaVNgf7UTbPufVmIkBPnWQQCLcBGAs/s1600/facebook.png" 
                                title="Sígueme en Facebook"
                            />
                        </a>
                        <a href="https://www.instagram.com/fordcountryzoo" target="_blank">
                            <amp-img alt="Sígueme en Instagram!" 
                                height="36" 
                                width="36" 
                                src="https://4.bp.blogspot.com/-Ilxti1UuUuI/XCrIy6hBAcI/AAAAAAAAH_k/QV5KbuB9p3QB064J08W2v-YRiuslTZnLgCLcBGAs/s1600/instagram.png" 
                                title="Sígueme en Instagram!"
                            />
                        </a>
                        <a href="https://www.youtube.com/channel/UCo6yiEdVSrkO2Wb7I4E0dMQ?view_as=subscriber" target="_blank">
                            <amp-img alt="Sígueme en Youtube!" 
                                height="36" 
                                width="36" 
                                src="https://1.bp.blogspot.com/-CUKx1kAd-ls/XCrI4UAvNqI/AAAAAAAAIBI/-i1neUt8kZwP6YOsFOXX5p0Bnqa29m-JgCLcBGAs/s1600/youtube2.png" 
                                title="Sígueme en Youtube!"
                            />
                        </a>
                    </div>
                    <div className="contact">
                        <a href="tel:+5213319444957" id="tel">
                            <amp-img alt="Llamame"
                                height="120" 
                                width="120"
                                src="/static/tel.png"
                                title="Llamame"
                            />
                        </a>
                    </div>
                    <div className="contactM">
                        <amp-social-share type="email"
                            data-param-subject="test"
                            data-param-body="hola este es un test"
                            data-param-recipient="giovanniare9525@gmail.com"
                            width="120"
                            height="120"
                        ></amp-social-share>
                    </div>
                    <div className="contactW">
                        <a href="https://wa.me/5213319444957?text=Me%20gustaría%20saber%20el%20precio%20del%20coche">
                            <amp-img alt="Escribeme"
                                height="120" 
                                width="120"
                                src="/static/wa.png"
                                title="Escribeme"
                            />
                        </a>
                    </div>
                    <div className="promo">
                        <a href="https://www.fordgdlzoo.com/">
                            <amp-img alt="Promociones"
                                height="120" 
                                width="120"
                                src="/static/por.png"
                                title="Promociones"
                            />
                        </a>
                    </div>
                    <div className="historias">
                        <Link href="/historias">
                            <a>
                                <amp-img alt="historias"
                                    height="120" 
                                    width="300"
                                    src="/static/ford.png"
                                    title="Historias"   
                                />
                            </a>
                        </Link>
                        <h3>Mira las historias</h3>
                    </div>
                    <div className="maps">
                        <amp-iframe width="300"
                            height="300"
                            frameborder="0"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3731.615301730344!2d-103.31812564855595!3d20.725840603356144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428b08aad4e9591%3A0x7d5f04d82c1aedbc!2sFord+Country+Zoo+Motors!5e0!3m2!1ses!2smx!4v1556829388815!5m2!1ses!2smx"
                            sandbox="allow-scripts allow-same-origin allow-popups"
                        ></amp-iframe>
                    </div>
                 
                </div>
                ): (
                    <div className="compu">
                        <div className="logo">
                            <amp-img
                                width="200"
                                height="200"
                                src="/static/corman.png"
                                alt="a cool image"
                            />
                        </div>
                        <div className="present">
                            <h1>German Chávez</h1>
                            <p>Gerente de Mercadotecnia</p>
                            <amp-img
                                width="500"
                                height="300"
                                src="/static/ger.png"
                                alt="El ger"
                            />
                            <div className="descrip">
                                <div className="info">
                                    <h3>Aqui tu descripcion de empresa</h3>
                                    <p>Eslogan</p>
                                </div>
                                <div className="info">
                                    <h3>Aqui tu mision</h3>
                                    <p>Desglose de mision</p>
                                </div>
                                <div className="info">
                                    <h3>Aqui una frase</h3>
                                    <p>Descripcion</p>
                                </div>
                            </div>
                        </div>
                        <div className="galeri">
                            <amp-carousel layout="responsive" width="300" height="200" type="slides" autoplay="2000">
                                <amp-img src="/static/coche1.jpg" width="300" height="200" layout="responsive" alt="a cool image"></amp-img>
                                <amp-img src="/static/coche2.jpg" width="300" height="200" layout="responsive" alt="a cool image1"></amp-img>
                                <amp-img src="/static/coche3.jpg" width="300" height="200" layout="responsive" alt="a cool image2"></amp-img>
                            </amp-carousel>
                        </div>
                        
                    </div>
                )}
            </center>
            <Style />
            <style jsx>{`
                .logo {
                    background: white;
                    position: relative;
                    margin: 0;
                    padding: 1px;
                    
                }
                .present {
                    background: #0041AB;
                    position: relative;
                    margin: 0;
                    padding: 1px;
                    padding-bottom: 4rem; 
                }
                .present amp-img {
                    border-radius: 10px;
                    box-shadow: 0 0 90px -34px rgba(0,0,0,0.75);
                }
                .present h1 {
                    color: white;
                    padding-top: 20px;
                    font-family: 'Manjari', sans-serif;
                }
                .present p {
                    color: white;
                    padding-top: 20px;
                    font-family: 'Manjari', sans-serif;
                }
                
                .compu {
                    margin: 0;
                    padding: 0;
                }
                #test {
                    background: gray;
                    padding: 10px;    
                }
                .drop {
                    background: #E3E3E3;
                    margin: 20px;
                    text-align: left;
                    height: 10px;
                }
                .descrip {
                    margin-top: 4rem;
                    margin-bottom: 0;
                    padding: 0;
                }
                .info {
                    background: #E3E3E3;
                    padding: 10px;
                    margin-right: 10rem;
                    margin-left: 10rem;
                    text-align: left;
                    margin-top: 10px;
                }
                .info h3 {
                    color: #7B7B7B;
                    margin: 0;
                    margin-left: 2rem;
                    padding: 0;
                }
                .info p {
                    color: #7B7B7B;
                    margin: 0;
                    margin-left: 2rem;
                    padding: 10px;
                }
                .descripM {
                    margin-top: 3rem;
                }
                .infoM {
                    background: #E3E3E3;
                    padding: 10px;
                    margin-right: 2rem;
                    margin-left: 2rem;
                    text-align: left;
                    margin-top: 10px;
                }
                .infoM h5 {
                    color: #7B7B7B;
                    margin: 0;
                    margin-left: 2rem;
                    padding: 0;
                    font-family: 'Manjari', sans-serif;
                }
                .infoM p {
                    color: #7B7B7B;
                    margin: 0;
                    margin-left: 2rem;
                    padding: 10px;
                    font-family: 'Manjari', sans-serif;
                }
                .galeri {
                    padding: 0;
                    margin: 0;
                    background: #0041AB;
                    position: relative;
                }
                .galeri amp-carousel {
                    box-shadow: 0px -2px 38px 2px rgba(0,0,0,0.75);
                }
                .orgullo {
                    background-image: linear-gradient(#0041AB, #7887CB);
                    position: relative;
                    padding: 30px;
                }
                .agencia{
                    box-shadow: 0px 14px 31px -10px rgba(0,0,0,0.75);
                }
                .redes {
                    font-family: 'Lexend Deca', sans-serif;
                    color: #9B9B9B;
                }
                .redes a {
                    padding-right: 15px;
                }
                .contact a {
                    margin: 15px;
                }
                .contact amp-img {
                    margin: 30px;
                    margin-top: 50px;
                }
                .contactM amp-social-share {
                    margin: 30px;
                }
                .contactW amp-img {
                    margin: 30px;
                }
                .promo {
                    margin: 30px;
                }
                .historias {
                    font-family: 'Lexend Deca', sans-serif;
                    color: #9B9B9B;
                }
                .maps {
                    background-image: linear-gradient(#0041AB, #7887CB);
                    
                }
                .maps amp-iframe {
                    margin-bottom: 30px;
                    margin-top: 40px;
                }
            `}</style>
        </div>
    );
};

HomePage.getInitialProps = async ({ req }) => {
    var test;
    const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
    if(userAgent.search("Mobile") > 0){
        test = true;
    }
    else{
        test = false;
    }
    return { userAgent, test };
};


export default HomePage;


//https://amp-example.giovanniare9525.now.sh/*/