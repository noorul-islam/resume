import React, { Component } from 'react';

class Skill extends Component {
  render() {


    if(this.props.data){
      var skillpic= "images/skillset.png";
      var skillmessage = this.props.data.skillmessage;

      var skills = this.props.data.skills.map(function(skills){
        var className = 'bar-expand '+skills.name.toLowerCase();
        return <li key={skills.name}><span style={{width:skills.level}}className={className}> <b>{skills.name}</b> </span></li>
      })
    }

    return (
      <section id="skill">
	 <div> <br /> <br /> </div>
      <div style={{background: "white"}} className="row skill">

         <div className="three columns header-col">
            <img className="profile-pic"  src={skillpic} alt="List of my(Noorul Islam) Skillset" />
         </div>

         <div className="nine columns main-col">

            <p>{skillmessage}
            </p>

				<div className="bars">
				   <ul className="skills">
					  {skills}
					</ul>
				</div>
			</div>
      </div>
   </section>
    );
  }
}

export default Skill;
