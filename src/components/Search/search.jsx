export const Search = ({busca, buscaODA}) =>{
    return (
        <html>
            <head>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet"/>
            <link href="https://getbootstrap.com/docs/5.2/assets/css/docs.css" rel="stylesheet"/>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous"></link>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js"></script>
            </head>
            <body className="p-3 m-0 border-0 bd-example">
        
            
            <nav className="navbar navbar-expand-lg bg-secondary opacity-75">
                <div className="container">
                    <a className="navbar-brand text-light" href="#">
                        <img src="https://www.bocaweb.com.br/images/logobocaweb.png" alt="BocaWeb" width="30" height="24"/>
                         BocaWeb
                    </a>
                </div>
                <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0"/>
                    <input className="form-control me-2" value= {busca} type="search" placeholder="O que deseja buscar" aria-label="Buscar" onChange={buscaODA}/>
                    <button className="btn btn-outline-light" type="submit">Buscar</button>
                </div>
                </div>
            </nav>
            
            </body>
      </html>
    )
}