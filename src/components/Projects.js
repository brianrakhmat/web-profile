import React, { Component } from 'react';
import lepiku from '../images/lepiku.png'
import ipjpi from '../images/ipjpi.png'
import ujian from '../images/ujian.png'
import surat from '../images/surat.png'

class Projects extends Component {
  render() {
    return (
      <div className="Projects section flex-container">
        <div className="item">
          <img src={lepiku} className="thumb"/>
          <div className="overlay">
            <div className="text">
              <h3>Sistem Pendukung Keputusan Pemilihan Laptop</h3>
              <p><strong>Mencari rekomendasi pemilihan laptop</strong></p>
              <p>Dibangun menggunakan bahasa PHP</p>
              <p><a href="http://lepiku.azurewebsites.net" target="_blank" rel="noopener noreferrer">Explore App <i className="fa fa-external-link"/></a></p>
              <p><a href="https://github.com/brianrakhmat/lepiku" target="_blank" rel="noopener noreferrer">Repo <i className="fa fa-github" aria-hidden="true"/></a></p>
            </div>
          </div>
        </div>
        <div className="item">
          <img src={ujian} className="thumb"/>
          <div className="overlay">
            <div className="text">
              <h3>Sistem Ujian Online / Computer Based Test</h3>
              <p><strong>Mengerjakan Soal menggunakan Online</strong></p>
              <p>CodeIgniter, Materialize CSS</p>
              <p><a href="http://ujian.azurewebsites.net" target="_blank" rel="noopener noreferrer">Explore App  <i className="fa fa-external-link"></i></a></p>
              <p><a href="https://github.com/brianrakhmat/ujian" target="_blank" rel="noopener noreferrer">Repo <i className="fa fa-github" aria-hidden="true"/></a></p>
            </div>
          </div>
        </div>
        <div className="item">
          <img src={ipjpi} className="thumb"/>
          <div className="overlay">
            <div className="text">
              <h3>Sistem Keanggotaan IPJPI</h3>
              <p><strong>Sistem Keanggotaan Ikatan Purna Jamnas Pramuka Indonesia</strong></p>
              <p>Dibangun Menggunakan Bahasa PHP</p>
              <p><a href="https:/anggota.ipjpi.org" target="_blank" rel="noopener noreferrer">Explore App  <i className="fa fa-external-link"></i></a></p>
             </div>
          </div>
        </div>
        <div className="item">
          <img src={surat} className="thumb"/>
          <div className="overlay">
            <div className="text">
              <h3>Sistem Informasi Surat Mobile</h3>
              <p><strong>Sistem Informasi Surat Keluar dan Masuk</strong></p>
              <p>PHP, Javascript</p>
              <p><a href="http://surat.uin-suka.ac.id" target="_blank" rel="noopener noreferrer">Explore App  <i className="fa fa-external-link"></i></a></p>
             </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;