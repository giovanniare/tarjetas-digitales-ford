import Head from 'next/head';

export const config = { amp: true };

const Historias = () => (
    <body>
        <Head>
            <script 
                async 
                key="amp-story"
                custom-element="amp-story" 
                src="https://cdn.ampproject.org/v0/amp-story-1.0.js"
            />
            <title>Historias Ford</title>
        </Head>
        <amp-story standalone=""
            title="ford"
            publisher="The AMP Team"
            publisher-logo-src="https://example.com/logo/1x1.png"
            poster-portrait-src="https://example.com/my-story/poster/3x4.jpg"
            poster-square-src="https://example.com/my-story/poster/1x1.jpg"
            poster-landscape-src="https://example.com/my-story/poster/4x3.jpg">
            <amp-story-page id="figo">
                <amp-story-grid-layer template="fill">
                    <amp-img animate-in="pan-left"
                        animate-in-duration="4s"
                        layout="responsive"
                        src="https://ventas.fordgdlzoo.com/wp-content/uploads/2019/05/Figo-2019.png"
                        width="300"
                        height="150">
                    </amp-img>
                </amp-story-grid-layer>
                <amp-story-grid-layer template="thirds">
                    <div animate-in="drop">
                        <h1>Aqui una promo</h1>
                    </div>
                </amp-story-grid-layer>
            </amp-story-page>
            <amp-story-page id="eco">
                <amp-story-grid-layer template="vertical">
                    <amp-img animate-in="pan-right"
                        animate-in-duration="4s"
                        layout="responsive"
                        src="https://ventas.fordgdlzoo.com/wp-content/uploads/2019/05/Ecosport.png"
                        width="300"
                        height="150">
                    </amp-img>
                </amp-story-grid-layer>
                <amp-story-grid-layer template="thirds">
                    <div animate-in="fade-in" animate-in-duration="2s">
                        <h1>Aqui otra promo</h1>
                    </div>
                </amp-story-grid-layer>
            </amp-story-page>
            <amp-story-page id="escape">
                <amp-story-grid-layer template="thirds">
                    <amp-img animate-in="zoom-out"
                        animate-in-duration="4s"
                        layout="responsive"
                        src="https://ventas.fordgdlzoo.com/wp-content/uploads/2019/05/Escape.png"
                        width="300"
                        height="150">
                    </amp-img>
                </amp-story-grid-layer>
                <amp-story-grid-layer template="thirds">
                    <div animate-in="fly-in-left" animate-in-duration="2s" grid-area="middle-third">
                        <div animate-in="fade-in" animate-in-duration="2s">
                            <h1>Aqui otra promo más</h1>
                        </div>
                    </div>
                </amp-story-grid-layer>
            </amp-story-page>
            <amp-story-page id="edge">
                <amp-story-grid-layer template="thirds">
                    <amp-img animate-in="zoom-out"
                        animate-in-duration="4s"
                        layout="responsive"
                        src="https://ventas.fordgdlzoo.com/wp-content/uploads/2019/05/Edge.png"
                        width="300"
                        height="150">
                    </amp-img>
                </amp-story-grid-layer>
                <amp-story-grid-layer template="thirds">
                    <div animate-in="twirl-in" grid-area="middle-third">
                        <h1>Aqui otra promo</h1>
                    </div>
                </amp-story-grid-layer>
            </amp-story-page>
            <amp-story-page id="lobo">
                <amp-story-grid-layer template="thirds">
                    <amp-img animate-in="zoom-out"
                        animate-in-duration="4s"
                        layout="responsive"
                        src="https://ventas.fordgdlzoo.com/wp-content/uploads/2019/05/Lobo.png"
                        width="300"
                        height="150">
                    </amp-img>
                </amp-story-grid-layer>
                <amp-story-grid-layer template="thirds">
                    <div animate-in="fly-in-left" grid-area="middle-third">
                        <h1>Aqui otra promo</h1>
                    </div>
                </amp-story-grid-layer>
            </amp-story-page>
            <amp-story-page id="mustang">
                <amp-story-grid-layer template="thirds">
                    <amp-img animate-in="zoom-out"
                        animate-in-duration="4s"
                        layout="responsive"
                        src="https://ventas.fordgdlzoo.com/wp-content/uploads/2019/05/Mustang.png"
                        width="300"
                        height="150">
                    </amp-img>
                </amp-story-grid-layer>
                <amp-story-grid-layer template="thirds">
                    <div animate-in="fly-in-right" grid-area="middle-third">
                        <h1>Aqui otra promo mas</h1>
                    </div>
                </amp-story-grid-layer>
            </amp-story-page>
            <amp-story-page id="ranger">
                <amp-story-grid-layer template="thirds">
                    <amp-img animate-in="zoom-out"
                        animate-in-duration="4s"
                        layout="responsive"
                        src="https://ventas.fordgdlzoo.com/wp-content/uploads/2019/05/Ranger.png"
                        width="300"
                        height="150">
                    </amp-img>
                </amp-story-grid-layer>
                <amp-story-grid-layer template="thirds">
                    <div animate-in="fly-in-bottom" grid-area="middle-third">
                        <h1>Hasta aqui las promos</h1>
                    </div>
                </amp-story-grid-layer>
            </amp-story-page>
        </amp-story>
        <style jsx>{`
            h1 {
                color: white;
            }
        `}</style>
    </body>
);

export default Historias;