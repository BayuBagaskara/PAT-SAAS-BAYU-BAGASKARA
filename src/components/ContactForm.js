import React from 'react';

const ContactForm = () => {
  return (
    <div className="col-md-6" id='link4'>
      <h2 className="text-center">Hubungi Kami</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Nama</label>
          <input type="text" className="form-control" id="name" />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" />
        </div>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">Pesan</label>
          <textarea className="form-control" id="message" rows="3"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Kirim</button>
      </form>
    </div>
  );
}

export default ContactForm;
