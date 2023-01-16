'use strict';

function Tweet({ username, name, date, message}) {
  return (
    <div className="tweet">
      <h1>{message}</h1>
      <h2>by {name} ({username})</h2>
      <p>on {date}</p>
    </div>
  )
}