
const layout = {
    background: 'white',
    margin: 0,
    padding: '10px',
    //'box-shadow': '0 9px 8px -2px rgba(0,0,0,0.75)'
}

export default function Logo() {
    return(
        <div style={layout}>
            <amp-img
                width="100"
                height="100"
                src="/static/corman.png"
                alt="a cool image"
            />
        </div>


    )
}