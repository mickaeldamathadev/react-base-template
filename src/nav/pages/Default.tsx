import React from 'react';

export default function Default() {
  const gitCommand =
    'git clone https://github.com/mickaeldamathadev/react-base-template.git';
  return (
    <div className="column">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/3/30/React_Logo_SVG.svg"
        height="300px"
      />
      Start coding with ReactJS and SASS
      <div>
        <p
          className="git-command"
          onClick={() => navigator.clipboard.writeText(gitCommand)}
        >
          git clone {gitCommand}
        </p>
        <p>Click to copy to clipboard</p>
      </div>
    </div>
  );
}
