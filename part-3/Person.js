'use strict';

function Person({ name, age, hobbies }) {
  return (
    <div>
      <p>Learn some information about this person.</p>
      <h1>{ name.length <= 8 ? name : name.slice(0, 8) }, { age }</h1>
      <h3>{ age >= 18 ? 'Please go vote!' : 'You must be 18' }</h3>
      <ul>
        { hobbies.map(h => <li>{ h }</li>)}
      </ul>
    </div>
  );
}