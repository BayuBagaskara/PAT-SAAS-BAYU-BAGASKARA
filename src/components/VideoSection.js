function VideoSection () {
  return (
    <>
      <div class='container mt-5 pt-5' id='about'>
        
        <div class='row flex-lg-row-reverse align-items-center g-5 py-5'>
          <div class='col-12 col-sm-12 col-lg-6'>
            <video width='100%' height='auto' controls>
              <source src={require('./image/Profil SMAN 21 BANDUNG.mp4')} type='video/mp4' />
              Your browser does not support HTML video.
            </video>
          </div>
          <div class='col-lg-6'>
            <h1 class='display-5 fw-bold text-body-emphasis lh-1 mb-3'>
           Salikur Juara!
            </h1>
            <p style={{textAlign: 'justify'}}>
            Berbudi pekerti luhur, berprestasi dalam bidang akademik dan non akademik, serta berbudaya lingkungan,SMAN 21 Bandung didirikan pada tahun 1987, dilandasi dengan surat keputusan Menteri Pendidikan dan Kebudayaan No. 8897/0/1986 pada tanggal 22 desember 1986. SMAN 21 Bandung merupakan pengembangan dari SMAN 8 bandung yang melaksanakan kegiatan belajar mengajar di siang hari. 

Sejak tahun 1993, SMAN 21 Bandung  mempunyai bangunan tersendiri maka segala kegiatan belajar seluruhnya pindah ke jalan Manjahlega Ciwastra Bandung.


            </p>
            <div class='d-grid gap-2 d-md-flex justify-content-md-start'>
              <button type='button' class='btn btn-primary btn-lg px-4 me-md-2'>
                Selengkapnya
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default VideoSection;