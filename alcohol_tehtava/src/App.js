
import './App.css';
import {useState} from 'react';

function App() {
  const [weight, setWeight] = useState(0);
  const [bottles, setBottles] = useState(0.33);
  const [gender, setGender] = useState('male');
  const [time, setTime] = useState(0);
  const [AlcoholLvl, setAlcoholLvl] = useState(0);
  
  function handleSubmit(e){
    let result = 0;
    e.preventDefault();

    let litres = bottles * 0.33;
    let grams = litres * 8 * 4.5;
    let burning = weight / 10;
    let gramsLeft = grams - (burning * time);


    if (gender === 'male') {
      result = gramsLeft /  (weight * 0.7);

    } else {
      result = gramsLeft /  (weight * 0.6);

    }
    setAlcoholLvl(result);
  }

  return (

    <div className="container-fluid">
      <form onSubmit={handleSubmit}>
      <div>
        <div>
          <h3>Calculating alcohol blood level</h3>
        </div>
        <pre></pre>
        <div className="form-group">
        <label className="kentta1">Weight:</label>
        <input placeholder="In kilograms" type="number" step="1" onChange={e => setWeight(e.target.value)} />
      </div>
      </div>
      <div className="form-group">
        <label className="kentta2">Bottles:</label>
        <input  placeholder="In 0.33l size" type="number" step="1" onChange={e => setBottles(e.target.value)} />
      </div>
      <div className="form-group">
        <label className="kentta3">Time:</label>
        <input placeholder="In hours" type="number" step="1" onChange={e => setTime(e.target.value)} />
      </div>
      <div  className="form-group">
        <label>Gender</label>
        <div>
        <label className="mies"><input className="sp" type="radio" name="gender" value="male"
         defaultChecked onChange={e => setGender(e.target.value)}></input>Male</label>
         </div>
         <div>
        <label className="nainen"><input className="sp" type="radio" name="gender" value="female"
         onChange={e => setGender(e.target.value)}></input>Female</label>
      </div>
      </div>
      <div  className="form-group">
        <label>Alcohol blood level:&nbsp;</label>
        <output>{AlcoholLvl.toFixed(2)}</output>
      </div>
      <button className="btn btn-danger">Calculate</button>
      </form>
    </div>
  );
}


export default App;
