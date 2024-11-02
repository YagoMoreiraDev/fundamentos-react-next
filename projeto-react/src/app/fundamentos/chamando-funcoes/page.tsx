export default function Page() {

    function renderTituloESubtitulo() {
        return (
            <div>
                <h1>Titulo</h1>
                <h3>Subtitulo</h3>
                <hr />
            </div>
        )
    }
    
    function outraRenderConteudo() {
        return (
            <ul>
                <li>Yago Moreira</li>
                <li>Vitória Sales</li>
                <li>Bob</li>
            </ul>
        )
    }

    return (
        <div>
            renderTituloESubtitulo()
            <br />
            outraRenderConteudo()
            <hr />
            {renderTituloESubtitulo()}
            {outraRenderConteudo()}
        </div>
    )
}