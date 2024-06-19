function Card () {
    const imageStyle = {
      objectFit: 'cover'
    }
  
    return (
      <div className='container bg-body-tertiary p-5' id='link3'>
        <div className='row'>
          <div className='col-md-8'>
            <h1>PPDB</h1>
            <div className='row'>
              <div className='col'>
                <div class='card mb-3'>
                  <div class='row g-0'>
                    <div class='col-md-4'>
                      <img
                        src={require('./image/lab.jpg')}
                        class='img-fluid rounded-start'
                        alt='...'
                        style={imageStyle}
                      />
                    </div>
                    <div class='col-md-8'>
                      <div class='card-body'>
                        <h5 class='card-title'>31 Jan 2024</h5>
                        <p class='card-text'>
                          Deadline Pendaftaran
                        </p>
                        <small class='text-body-secondary'>SMAN 21 BANDUNG</small>
                      </div>
                    </div>
                  </div>
                </div>
                <div class='card mb-3'>
                  <div class='row g-0'>
                    <div class='col-md-4'>
                      <img
                        src={require('./image/komputer.jpg')}
                        class='img-fluid rounded-start'
                        alt='...'
                        style={imageStyle}
                      />
                    </div>
                    <div class='col-md-8'>
                      <div class='card-body'>
                        <h5 class='card-title'>09 Feb 2024</h5>
                        <p class='card-text'>Pengumuman & Seleksi Berkas</p>
                        <p class='card-text'>
                          <small class='text-body-secondary'>SMAN 21 BANDUNG</small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class='card mb-3'>
                  <div class='row g-0'>
                    <div class='col-md-4'>
                      <img
                        src={require('./image/lab.jpg')}
                        class='img-fluid rounded-start'
                        alt='...'
                      />
                    </div>
                    <div class='col-md-8'>
                      <div class='card-body'>
                        <h5 class='card-title'>17-18 Feb 2024</h5>
                        <p class='card-text'>Tes Akademik (B.Inggris & MTK)</p>
                        <p class='card-text'>
                          <small class='text-body-secondary'>SMAN 21 BANDUNG</small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col'>
                <div class='card mb-3'>
                  <div class='row g-0'>
                    <div class='col-md-4'>
                      <img
                        src={require('./image/komputer.jpg')}
                        class='img-fluid rounded-start'
                        alt='...'
                        style={imageStyle}
                      />
                    </div>
                    <div class='col-md-8'>
                      <div class='card-body'>
                        <h5 class='card-title'>01-03 Mar 2024</h5>
                        <p class='card-text'>Cek Kesehatan</p>
                        <p class='card-text'>
                          <small class='text-body-secondary'>SMAN 21 BANDUNG</small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class='card mb-3'>
                  <div class='row g-0'>
                    <div class='col-md-4'>
                      <img
                        src={require('./image/lab.jpg')}
                        class='img-fluid rounded-start'
                        alt='...'
                        style={imageStyle}
                      />
                    </div>
                    <div class='col-md-8'>
                      <div class='card-body'>
                        <h5 class='card-title'>08-10 Mar 2024</h5>
                        <p class='card-text'>Psikotest</p>
                        <p class='card-text'>
                          <small class='text-body-secondary'>SMAN 21 BANDUNG</small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class='card mb-3'>
                  <div class='row g-0'>
                    <div class='col-md-4'>
                      <img
                        src={require('./image/komputer.jpg')}
                        class='img-fluid rounded-start'
                        alt='...'
                        style={imageStyle}
                      />
                    </div>
                    <div class='col-md-8'>
                      <div class='card-body'>
                        <h5 class='card-title'>16-17 Mar 2024</h5>
                        <p class='card-text'>Wawancara</p>
                        <p class='card-text'>
                          <small class='text-body-secondary'>SMAN 21 BANDUNG</small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-4  '>
            <img
              src={require('./image/imo.png')}
              className='img-fluid'
              alt='...'
            />
          </div>
        </div>
      </div>
    )
  }
  
  export default Card