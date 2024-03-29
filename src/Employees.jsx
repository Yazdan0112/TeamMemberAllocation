
//import images
import femaleProfile from './images/femaleProfile.jpg';
import maleProfile from './images/maleProfile.jpg';

//We are destructuring object into its individual employee value no need to do prop.
//destructructing allows makes us possible to unpack values in array or property of object into distincted variable 
//Moreover this is JS this hence use {}
const Employees = ({employees,selectedTeam,handleEmployeeCardClick,handleTeamSelectionChange}) => {

  
  
    
  return(
  
      <main className = "container">
        <div className ="row justify-content-center mt-3 mb-3">
          <div className = "col-8">

            <select className="form-select form-select-lg" value={selectedTeam} onChange={handleTeamSelectionChange}>
            <option value="TeamA">TeamA</option>
              <option value="TeamB">TeamB</option>
              <option value="TeamC">TeamC</option>
              <option value="TeamD">TeamD</option>
            </select>
             
          </div>
        </div>
        <div className ="row justify-content-center mt-3 mb-3">
          <div className = "col-8">
            <div className="card-collection">
              
        {
          employees.map((employee) => (
            <div id = {employee.id} className={(employee.teamName === selectedTeam?'card m-2 standout': 'card m-2')} style={{ cursor:"pointer"}} onClick={handleEmployeeCardClick}>
              {(employee.gender === 'male') ? <img src={maleProfile} className="card-img-top" />
              :<img src={femaleProfile} className="card-img-top"/>}
              <div className = "card-body">
              <h5 className="card-title"> Full Name: {employee.fullName}</h5>
                <p className="card-text"><b>Designation: </b>{employee.designation} </p>
              </div>
            </div>
          ))
        }
            </div>
          </div>    
        </div>      
      </main>
  )
}
export default Employees