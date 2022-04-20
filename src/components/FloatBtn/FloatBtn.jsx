import React, { useState } from 'react';
import wpp from '../../assets/images/whatsapp.svg';
import github from '../../assets/images/gitlight.png';
import linkedin from '../../assets/images/linkedin.svg';
import gmail from '../../assets/images/gmail.svg';
import './float.scss';

function FloatBtn() {
  const [showBtns, setShowBtns] = useState(false);

  function handleShow() {
    setShowBtns(!showBtns);
  }

  return (
    <div>
      <div className="float-social-btns">
        {
          showBtns
            && (
            <>
              <div className="medias-btn">
                <a href="https://github.com/ArthurSimoess" target="_blank" rel="noreferrer">
                  <img src={github} alt="Github logo" />
                </a>
              </div>
              <div className="medias-btn">
                <a href="https://www.linkedin.com/in/arthurrsim%C3%B5es" target="_blank" rel="noreferrer">
                  <img src={linkedin} alt="Github logo" />
                </a>
              </div>
              <div className="medias-btn">
                <a href="https://api.whatsapp.com/send?phone=5531985756888&text=Ol%C3%A1%2C%20sou%20Arthur%20Sim%C3%B5es" target="_blank" rel="noreferrer">
                  <img src={wpp} alt="Github logo" />
                </a>
              </div>
              <div className="medias-btn">
                <buttom
                  type="button"
                  onClick={() => { navigator.clipboard.writeText('arthursimoes155@gmail.com'); }}
                >
                  <img src={gmail} alt="Gmail logo" />
                </buttom>
              </div>
            </>
            )
        }
        <button
          type="button"
          className="float-btn"
          onClick={handleShow}
        >
          {
            showBtns ? 'x' : '+'
          }
        </button>
      </div>
    </div>
  );
}

export default FloatBtn;
