const layout = {
    background: '#0041AB',
    position: 'relative',
    margin: 0,
    padding: 10,
    //'box-shadow': '0 -9px 5px 0 rgba(0,0,0,0.75)'
}

export default function Perfil(props) {
    return(
        <div style={layout}>
            {props.children}
            <style jsx global>{`
                amp-img {
                    border-radius: 10px;
                    box-shadow: 0 0 90px -34px;
                }
                h1 {
                    color: white;
                    padding-top: 20px;
                }
                p {
                    color: white;
                }
            `}</style>
        </div>
    )
}