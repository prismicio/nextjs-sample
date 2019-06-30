import React from 'react';

const MultiSpinnder = () => (
  <div class='loader loader2'>
    <div>
      <div>
        <div>
          <div>
            <div>
              <div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Spinner = () => (
  <div className='spinner'>
    <style jsx>{`
      .spinner {
        border: 8px solid #f3f3f3; /* Light grey */
        border-top: 8px solid #3498db; /* Blue */
        border-radius: 50%;
        width: 40px;
        height: 40px;
        animation: spin 2s linear infinite;
        margin-left: auto;
        margin-right: auto;
        margin-top: 40px;
      }
      @keyframes spin {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
    `}</style>
  </div>
);

const Loader = () => (
  <MultiSpinnder />
);

export default Loader;
