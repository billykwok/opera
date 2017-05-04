import React from 'react';
import Cycle from 'cycle-react';

const Hello = Cycle.component('Hello', interactions =>
  interactions
    .get('OnNameChanged')
    .map(ev => ev.target.value)
    .startWith('')
    .map(name => (
      <div>
        <label>Name:</label>
        <input type="text" onChange={interactions.listener('OnNameChanged')} />
        <hr />
        <h1>Hello {name}</h1>
      </div>
    ))
);
