import React, { Component } from 'react';
import './assets/css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <nav className="navbar navbar-light bg-ml">
          <div className="container">

            <div className="row justify-content-center">

              <div className="col-10 p-0">

                  <div className="d-flex flex-nowrap">

                    <div>
                      <a className="navbar-brand" href="/">
                        <img src={require('../src/assets/img/Logo_ML.png')} alt="Logo de Mercado Libre" />
                      </a>
                    </div>

                    <div className="input-group col p-0">
                      <input type="text" className="form-control heavy-grey search" placeholder="Nunca dejes de buscar..." />
                      <span className="input-group-btn">
                        <button className="btn btn-light-grey" type="button">
                          <img src={require('../src/assets/img/ic_Search.png')} alt="Botão de busca" />
                        </button>
                      </span>
                    </div>

                  </div>

              </div>

            </div>

          </div>
        </nav>


        <div className="container">

          <div className="row justify-content-center">
            <div className="col-10">

              <div className="row">

                <ul className="breadcrumb medium-grey mb-0">
                  <li>Electrônica Áudio e Vídeo</li>
                  <li>iPod</li>
                  <li>Reproductores</li>
                  <li>iPod Touch</li>
                  <li>32 GB</li>
                </ul>

              </div>

              </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-10 wbox product mb-5">
              
                  <div className="row" itemscope itemtype="http://schema.org/Product">
                    <div className="col-9">
                      <img itemprop="image" src="https://http2.mlstatic.com/iphone-7-128gb-desbloqueado-dourado-ios-10-mn942bza-D_NQ_NP_746515-MLB25247504933_122016-O.webp" alt=""/>
                      
                      <h2 className="mt-2-ml description-title">Descrição do produto</h2>
                      <p className="mt-ml medium-grey description" itemprop="description">Loren ipsun dolor set amet</p>
                    
                    </div>
                    <div className="col-3">
                      <div className="seller mt-2-ml">Nuevo - 234 vendidos</div>
                      <h1 itemprop="name" className="name mt-ml">Deco Reverse Sombrero Oxford</h1>
                      <div itemprop="highPrice" className="price mt-2-ml">$ 1.980</div>
                      <button className="btn btn-blue mt-2-ml col-10">Comprar</button>
                    </div>
                  </div>

                  

            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default App;
