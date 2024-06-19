import React from 'react';
import TeacherProfileCarousel from './TeacherProfileCarousel';
import ContactForm from './ContactForm';

const ContactSection = () => {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <TeacherProfileCarousel />
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
