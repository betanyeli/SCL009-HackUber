import React from 'react';
import './Components.css';
import Navbar from './Navbar'
import Footer from './Footer'
//import data from '../Twitter.json'
//const data = require('../Twitter.json')
//import { Doughnut } from 'react-chartjs-2';


const DashboardView = ()=>{


    //  //
        return (
            <React.Fragment>
                <Navbar />
                {/* Begin page content */}
                <main role='main' className='flex-shrink-0'>
                    <section className="bg-dark">
                        <div className="card text-center text-light">
                            <div className="card-header bg-primary  p-5">
                            </div>
                            <div className="card-body  bg-primary  p-5">
                                <h1 className="card-title display-3">Últimas tendencias</h1>
                                <form className="navbar-form" role="search">
                                    <div className="input-group add-on">
                                        <div className="input-group-btn">
                                            <button className="btn btn-default" type="submit"><i className="fas fa-hashtag"></i></button>
                                        </div>
                                        <input className="form-control" placeholder="Buscar" type="text"></input>
                                    </div>
                                </form>
                                <button className="btn btn-primary mt-2" type="submit">Analizar</button>
                                {/* <p className="card-text">
                                    <a className="effect-underline mr-2 text-success" href="/">#Servicio</a>
                                    <a className="effect-underline mr-2 text-info" href="/">#Promoción</a>
                                    <a className="effect-underline mr-2 text-warning" href="/">#Taxi</a>
                                    <a className="effect-underline mr-2 text-danger" href="/">#Funa</a>
                                    <a className="effect-underline mr-2 text-success" href="/">#Conductor</a>
                                    <a className="effect-underline mr-2 text-info" href="/">#Tarifa</a>
                                    <a className="effect-underline mr-2 text-warning" href="/">#Cobro</a>
                                </p> */}
                <p className="card-text">
                    <a className="effect-underline mr-2" href="/" data-toggle="tooltip" data-html="true" title="Mi uber driver:Excelente servicio">#Servicio</a>

                    <a className="effect-underline mr-2 " href="/" data-toggle="tooltip" data-html="true" title="Mi uber driver:Excelente servicio">#Promoción</a>
                    <a className="effect-underline mr-2 " href="/" data-toggle="tooltip" data-html="true" title="Mi uber driver:Excelente servicio">#Taxi</a>
                    <a className="effect-underline mr-2 " href="/" data-toggle="tooltip" data-html="true" title="Mi uber driver:Excelente servicio">#Funa</a>
                    <a className="effect-underline mr-2 " href="/" data-toggle="tooltip" data-html="true" title="Venía en el Uber y el conductor no hablo en todo el camino. ¡5 estrellas! ¡Excelente servicio!">#Conductor</a>
                    <a className="effect-underline mr-2 " href="/" data-toggle="tooltip" data-html="true" title="Mi uber driver:Excelente servicio">#Tarifa</a>
                    <a className="effect-underline mr-2 " href="/" data-toggle="tooltip" data-html="true" title="Mi uber driver:Excelente servicio">#Cobro</a>
                </p>


                            </div>
                            <div className="card-footer bg-primary p-5">

                            </div>
                        </div>
                    </section>

                </main>
                <Footer />

            </React.Fragment>
        )
    }


export default DashboardView;