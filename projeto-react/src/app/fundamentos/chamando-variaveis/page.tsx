export default function Page() {
    const nome = 'Yago Moreira';
    const idade = 31;

    return (
        <>
            nome idade
            <br />
            {nome} {idade}

            <div>{nome}</div>
            <div>nome</div>
            <div>idade</div>
            <div>{idade - 5}</div>
            <div>{nome.toLocaleUpperCase()}</div>
            <div>{Math.random()}</div>
        </>
    )
}