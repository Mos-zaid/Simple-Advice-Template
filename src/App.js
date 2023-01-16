// import logo from './logo.svg';
import './App.scss';


function App() {
  return (
    <div className="App">
      <div className='advice'>
        <div className="advice__container">
          <h6 className="advice__no">Advice #117</h6>
          <p className="advice__text">"It is easy to sit up and take notice, what's difficult is getting up and taking action"</p>
          <picture >
            <source media="(min-width:650px)" srcset="pattern-divider-desktop.svg" />
            <source media="(min-width:465px)" srcset="pattern-divider-mobile.svg" />
            <img className="advice__img" src="pattern-divider-mobile.svg" alt="Pattern Divider" />
          </picture>
        </div>
        <div className='advice__absolute'>
          <picture>
            <img src="icon-dice.svg" alt="Icon Dice" />
          </picture>
        </div>
      </div>
    </div>
  );
}

export default App;
