import React, { Component } from 'react';

class Contact extends Component {
  render() {

    if(this.props.data){
      /*
      var name = this.props.data.name;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var message = this.props.data.contactmessage;
      */
    if(this.props.data){

      var certifications = this.props.data.certifications.map(function(certifications){
        return <div key={certifications.school}><h3>{certifications.school}</h3>
        <p className="info">{certifications.degree} <span> &bull; </span><em className="date">{certifications.graduated}</em></p>
        <h2/></div>
      })
    }
}
    return (
      <section id="contact">

      <div className="row certifications">
         <div className="three columns header-col">
			<img className="profile-pic"  src="images/certifications.jpg" alt="Noorul Islam Career Cantour" />
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {certifications}
               </div>
            </div>
         </div>
      </div>

   </section>
    );
  }
}

export default Contact;
