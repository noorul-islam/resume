import React, { Component } from 'react';

class Resume extends Component {
  render() {


    if(this.props.data){
      var educationpic= "images/education.jpg";

      var education = this.props.data.education.map(function(education){
        return <div key={education.school}><h3>{education.school}</h3>
        <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
        <p>{education.description}</p></div>
      })

    }

    return (
      <section id="resume">

      <div className="row education">
         <div className="three columns header-col">
         	<img className="profile-pic" src={educationpic} alt="Noorul Islam Education" />
         </div>

         <div className="nine columns main-col">
            <div className="row item">
               <div className="twelve columns">
                 {education}
               </div>
            </div>
         </div>
      </div>

   </section>
    );
  }
}

export default Resume;
