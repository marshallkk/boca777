export const List = ({_id, nome, descricao, usuario, data_inclusao ,palavras_chave}) => {
  return (
    <html>
      <body>
      <div className="card text-bg-secondary mb-3"  key={_id}>
  <div className="card-header">Nome: {nome}</div>
  <div className="card-body">
    <p className="card-text">Descrição: {descricao}
                        Usuário: {usuario}
                        Data de Inclusão: {data_inclusao}
                        Palavras-Chave {palavras_chave}
    </p>
  </div>
</div>
      </body>
    </html>
          )
}
