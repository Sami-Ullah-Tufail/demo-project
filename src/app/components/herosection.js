import React from 'react'

import PropTypes from 'prop-types'

const Herosection = (props) => {
  return (
    <div
      style={{
        width: '1100px',
        height: '351px',
        display: 'flex',
        position: 'relative',
        alignItems: 'flex-start',
        flexShrink: '0',
      }}
    >
      <div
        style={{
          top: '263px',
          left: '155px',
          width: '790px',
          height: '58px',
          display: 'flex',
          position: 'absolute',
          alignItems: 'flex-start',
          flexShrink: '0',
        }}
      >
        <input
          type="text"
          placeholder={props.inputsPlaceholder}
          style={{
            top: '0px',
            left: '0px',
            color: 'rgba(106, 114, 128, 0.5)',
            width: '790px',
            height: '58px',
            display: 'flex',
            fontSize: '14px',
            overflow: 'hidden',
            position: 'absolute',
            boxShadow: '0px 3px 4px 0px rgba(35, 35, 35, 0.07000000029802322) ',
            textAlign: 'left',
            alignItems: 'flex-start',
            flexShrink: '0',
            fontFamily: 'Inter',
            fontWeight: 400,
            borderColor: 'rgba(230, 231, 235, 1)',
            borderStyle: 'solid',
            borderWidth: '1px',
            borderRadius: '5px',
            backgroundColor: 'rgba(255, 255, 255, 1)',
          }}
        />
        <button
          style={{
            top: '6px',
            left: '738px',
            width: '46px',
            height: '46px',
            display: 'flex',
            position: 'absolute',
            alignItems: 'flex-start',
            flexShrink: '0',
            borderRadius: '5px',
            backgroundColor: 'rgba(224, 231, 255, 1)',
          }}
        >
          <img
            alt={props.iconAlt}
            src={props.iconSrc}
            style={{
              top: '14.5px',
              left: '14.5px',
              width: '17px',
              height: '17px',
              position: 'absolute',
            }}
          />
        </button>
      </div>
      <div
        style={{
          top: '0px',
          left: '12px',
          width: '1076px',
          height: '213px',
          display: 'flex',
          position: 'absolute',
          alignItems: 'flex-start',
          flexShrink: '0',
        }}
      >
        <div
          style={{
            top: '69px',
            left: '0px',
            width: '1076px',
            height: '144px',
            display: 'flex',
            position: 'absolute',
            alignItems: 'flex-start',
            flexShrink: '0',
          }}
        >
          <span
            style={{
              left: 9.4375,
              height: 'auto',
              position: 'absolute',
              fontStyle: 'Regular',
              textAlign: 'left',
              fontStretch: 'normal',
              fontWeight: '400',
              textDecoration: 'none',
              fontFamily: '"Inter"',
              fontSize: '16px',
              lineHeight: '24px',
              color: 'rgb(37, 47, 63)',
            }}
          >
            <span>
              Free Tailwind CSS templates for startup, saas, software and
              business websites. These templates will help you design a
              professional website
            </span>
            <br></br>
            <span>
              Free Tailwind CSS templates for startup, saas, software and
              business websites. These templates will help you design a
              professional website
            </span>
            <br></br>
            <span>
              Free Tailwind CSS templates for startup, saas, software and
              business websites. These templates will help you design a
              professional website
            </span>
            <br></br>
            <span>
              Free Tailwind CSS templates for startup, saas, software and
              business websites. These templates will help you design a
              professional website
            </span>
            <br></br>
            <span>
              Free Tailwind CSS templates for startup, saas, software and
              business websites. These templates will help you design a
              professional website
            </span>
            <br></br>
            <span>
              Free Tailwind CSS templates for startup, saas, software and
              business websites. These templates will help you design a
              professional website
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </span>
        </div>
        <span
          style={{
            top: -0.5,
            left: 219.953125,
            color: 'rgba(37, 47, 63, 1)',
            height: 'auto',
            fontSize: 45,
            position: 'absolute',
            fontStyle: 'Bold',
            textAlign: 'left',
            fontFamily: 'Inter',
            fontWeight: 700,
            lineHeight: '54px',
            fontStretch: 'normal',
            textDecoration: 'none',
          }}
        >
          <span>Free Tailwind CSS Templates</span>
        </span>
      </div>
    </div>
  )
}

Herosection.defaultProps = {
  rootClassName: '',
  iconAlt: 'Icon146',
  inputsPlaceholder: 'Search Templates ...',
  iconSrc: '/icon146-jahg.svg',
}

Herosection.propTypes = {
  rootClassName: PropTypes.string,
  iconAlt: PropTypes.string,
  inputsPlaceholder: PropTypes.string,
  iconSrc: PropTypes.string,
}

export default Herosection
