import React from 'react';

import dayjs from 'dayjs';

import './Contact.scss';

class Contact extends React.Component {
  
  // formatDate = (date) => {
  //   return new Date(date).toLocaleDateString();
  // }

  
  render() {
    return (
      <article data-testid="contact" className="contact" key={this.props.data.id}>
        <span data-testid="contact-avatar" className="contact__avatar">
          <img src={this.props.data.avatar} alt={this.props.data.name} />
        </span>
        <span data-testid="contact-name" className="contact__data">{this.props.data.name}</span>
        <span data-testid="contact-phone" className="contact__data">{this.props.data.phone}</span>
        <span data-testid="contact-country" className="contact__data">{this.props.data.country}</span>
        <span data-testid="contact-date" className="contact__data">{dayjs(this.props.data.admissionDate).format('DD/MM/YYYY')}</span>
        <span data-testid="contact-company" className="contact__data">{this.props.data.company}</span>
        <span data-testid="contact-department" className="contact__data">{this.props.data.department}</span>
      </article>
    );
  }
}

export default Contact;
