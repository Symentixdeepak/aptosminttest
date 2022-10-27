import React from 'react';

const Bottom = () => {
  return (
    <>
      <h2 class='text-center' style={{ fontFamily: 'Press Start 2P' }}>
        ROADMAP
      </h2>
      <div class='container text-center' style={{ marginTop: '30px' }}>
        <div className='accordion' id='accordionExample'>
          <div class='accordion-item'>
            <h2 class='accordion-header' id='headingOne'>
              <button
                class='accordion-button'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#collapseOne'
                aria-expanded='true'
                aria-controls='collapseOne'>
                PHASE #1
              </button>
            </h2>
            <div
              id='collapseOne'
              class='accordion-collapse collapse show'
              aria-labelledby='headingOne'
              data-bs-parent='#accordionExample'>
              <div class='accordion-body'>
                <strong>This is the first item's accordion body.</strong> It is
                shown by default, until the collapse plugin adds the appropriate
                classes that we use to style each element. These classes control
                the overall appearance, as well as the showing and hiding via
                CSS transitions. You can modify any of this with custom CSS or
                overriding our default variables. It's also worth noting that
                just about any HTML can go within the{' '}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
          <div class='accordion-item'>
            <h2 class='accordion-header' id='headingTwo'>
              <button
                class='accordion-button collapsed'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#collapseTwo'
                aria-expanded='false'
                aria-controls='collapseTwo'>
                PHASE #2
              </button>
            </h2>
            <div
              id='collapseTwo'
              class='accordion-collapse collapse'
              aria-labelledby='headingTwo'
              data-bs-parent='#accordionExample'>
              <div class='accordion-body'>
                <strong>This is the second item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. These
                classes control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the{' '}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
          <div class='accordion-item'>
            <h2 class='accordion-header' id='headingThree'>
              <button
                class='accordion-button collapsed'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#collapseThree'
                aria-expanded='false'
                aria-controls='collapseThree'>
                PHASE #3
              </button>
            </h2>
            <div
              id='collapseThree'
              class='accordion-collapse collapse'
              aria-labelledby='headingThree'
              data-bs-parent='#accordionExample'>
              <div class='accordion-body'>
                <strong>This is the third item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. These
                classes control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the{' '}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
        </div>
      </div>
      <h2 style={{ marginTop: '100px' }} class='text-center'>
        OUR TEAM
      </h2>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '30px',
          marginTop: '50px',
        }}>
        {/* <div class="d-grid gap-3"> */}
        <div>
          <img src='aptos.jpg' style={{ height: '300px' }} />
          <p style={{ marginTop: '10px' }} class='text-center'>
            Dev
          </p>
        </div>
        <div>
          <img src='aptos.jpg' style={{ height: '300px' }} />
          <p style={{ marginTop: '10px' }} class='text-center'>
            Shubham
          </p>
        </div>
        <div>
          <img src='aptos.jpg' style={{ height: '300px' }} />
          <p style={{ marginTop: '10px' }} class='text-center'>
            Suhail
          </p>
        </div>
        <div>
          <img src='aptos.jpg' style={{ height: '300px' }} />
          <p style={{ marginTop: '10px' }} class='text-center'>
            Adtiya
          </p>
        </div>
        <div>
          <img src='aptos.jpg' style={{ height: '300px' }} />
          <p style={{ marginTop: '10px' }} class='text-center'>
            Yadav
          </p>
        </div>
        <div>
          <img src='aptos.jpg' style={{ height: '300px' }} />
          <p style={{ marginTop: '10px' }} class='text-center'>
            Mannu
          </p>
        </div>
        <div>
          <img src='aptos.jpg' style={{ height: '300px' }} />
          <p style={{ marginTop: '10px' }} class='text-center'>
            Actionn
          </p>
        </div>

        {/* <img src='aptos.jpg' style={{ height: '300px' }} />
        <img src='aptos.jpg' style={{ height: '300px' }} />
        <img src='aptos.jpg' style={{ height: '300px' }} />
        <img src='aptos.jpg' style={{ height: '300px' }} />
        <img src='aptos.jpg' style={{ height: '300px' }} />
        <img src='aptos.jpg' style={{ height: '300px' }} /> */}
      </div>
      <div style={{ marginTop: '120px',display:'flex',justifyContent:'center',gap:'15px',flexWrap:'wrap' }}>
        <div style={{gap:'10px'}}>
        <h6 class='text-center'>Copyright © AptosBoys. All Rights Reserved</h6>
        </div>
        <div style={{display:'flex',gap:'10px'}}>
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
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default Bottom;
