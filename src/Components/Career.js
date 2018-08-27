import React, { Component } from 'react';

class Career extends Component {
  render() {


    if(this.props.data){
      var careerpic= "images/career.jpg";

     var work = this.props.data.work.map(function(work){

        return <div key={work.company}><h3>{work.company}</h3>
            <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
			{work.description.split('#').map( f =>  <li key={f}  >  {f} </li> )}

        </div>
      })
    }

    return (
      <section id="career">
		<div> <br /> <br /> </div>
      <div style={{background: "white"}} className="row career">

         <div className="three columns header-col">
            <img className="profile-pic"  src={careerpic} alt="Noorul Islam Career Cantour" />
         </div>

         <div className="nine columns main-col">
          {work}
        </div>
    </div>

   </section>
    );
  }
}

export default Career;
