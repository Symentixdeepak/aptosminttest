import React from 'react';

const Application = () => {
  return (
    <div>
      <div class='container'>
        <h1 class='text-center' style={{ fontFamily: 'Press Start 2P' }}>
          APTOSBOYS
        </h1>

        <p
          class='text-center'
          style={{ fontSize: '16px', textAlign: 'center' }}>
          Hey! We are AptosWizards early NFT Collection on Aptos Ecosystem. Do
          magic with your Wizard, meet people, dao, staking, and much more.
        </p>

        <p
          class='text-center'
          style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
          <img
            style={{ background: '#fff' }}
            class='icon-green'
            src='/discord.svg'
          />
          <img
            style={{ background: '#fff' }}
            class='icon-green'
            src='/twitter.svg'
          />
        </p>
        <p class='text-center' style={{marginTop:'55px'}}>
          <button type='button' class='btn btn-outline-primary'>
            MARKETPLACE
          </button>
        </p>
      </div>
    </div>
  );
};

export default Application;
