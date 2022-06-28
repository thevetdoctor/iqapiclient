import React from 'react';

export default function LineComponent () {
  return (
    <div>
      {/* 👇️ colored horizontal line */}
      <hr
        style={{
          background: 'lime',
          color: 'lime',
          borderColor: 'lime',
          height: '3px',
        }}
      />

      {/* 👇️ colored horizontal line */}
      <div
        style={{
          background: 'lime',
          height: '3px',
        }}
      />

      {/* 👇️ basic horizontal line */}
      <hr />

      {/* 👇️ horizontal line with text */}
      <div
        style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}
      >
        <div style={{flex: 1, height: '1px', backgroundColor: 'black'}} />

        <div>
          <p style={{width: '70px', textAlign: 'center'}}>Example</p>
        </div>

        <div style={{flex: 1, height: '1px', backgroundColor: 'black'}} />
      </div>
    </div>
  );
}