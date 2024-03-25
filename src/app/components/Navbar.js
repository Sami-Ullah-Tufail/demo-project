import React from 'react'

import PropTypes from 'prop-types'

const Navnavbar = (props) => {
  return (
    <div
      style={{
        width: '1296px',
        height: '94.0999984741211px',
        display: 'flex',
        position: 'fixed',
        top:'0%',
        zIndex: '100',
        alignItems: 'center',
        flexShrink: '0',
        justifyContent: 'center',
        background: 'white',
        boxShadow : ' 0 2px 4px rgba(0, 0, 0, 0.1)',
      }}
    >
      <div
        style={{
          top: '0px',
          left: '1119.125px',
          width: '100%',
          height: '74.0999984741211px',
          display: 'flex',
          position: 'absolute',
          alignItems: 'flex-start',
          flexShrink: '0',
        }}
      >
        <div
          style={{
            top: '15px',
            left: '0px',
            width: '129px',
            height: '44.099998474121094px',
            display: 'flex',
            overflow: 'hidden',
            position: 'absolute',
            boxShadow: '0px 3px 4px 0px rgba(35, 35, 35, 0.07000000029802322) ',
            alignItems: 'flex-start',
            flexShrink: '0',
            borderColor: 'rgba(255, 255, 255, 1)',
            borderStyle: 'solid',
            borderWidth: '1px',
            borderRadius: '5px',
            backgroundColor: 'rgba(255, 255, 255, 1)',
          }}
        >
          <span
            style={{
              top: 12.546875,
              left: 41,
              color: 'rgba(37, 47, 63, 1)',
              height: 'auto',
              fontSize: 18,
              position: 'absolute',
              fontStyle: 'Medium',
              textAlign: 'left',
              fontFamily: 'Inter',
              fontWeight: 500,
              lineHeight: '18px',
              fontStretch: 'normal',
              textDecoration: 'none',
            }}
          >
            <span> Account</span>
          </span>
        </div>
      </div>
      <div
        style={{
          top: '0px',
          left: '0px',
          right: '0px',
          width: '607px',
          bottom: '0px',
          height: '83.5999984741211px',
          margin: 'auto',
          display: 'flex',
          position: 'absolute',
          alignItems: 'center',
          flexShrink: '0',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            top: '10px',
            left: '390.453125px',
            width: '201px',
            height: '43.599998474121094px',
            display: 'flex',
            overflow: 'hidden',
            position: 'absolute',
            boxShadow: '0px 3px 4px 0px rgba(35, 35, 35, 0.07000000029802322) ',
            alignItems: 'flex-start',
            flexShrink: '0',
            borderColor: 'rgba(79, 70, 229, 1)',
            borderStyle: 'solid',
            borderWidth: '1px 1px 0',
            borderRadius: '5px',
            backgroundColor: 'rgba(79, 70, 229, 1)',
          }}
        >
          <span
            style={{
              top: 12.796875,
              left: 44,
              color: 'rgba(255, 255, 255, 1)',
              height: 'auto',
              fontSize: 18,
              position: 'absolute',
              fontStyle: 'Medium',
              textAlign: 'left',
              fontFamily: 'Inter',
              fontWeight: 500,
              lineHeight: '18px',
              fontStretch: 'normal',
              textDecoration: 'none',
            }}
          >
            <span> All-Access Pass</span>
          </span>
          <img
            alt={props.iconAlt2}
            src={props.iconSrc2}
            style={{
              top: '14.59375px',
              left: '19px',
              width: '17px',
              height: '17px',
              position: 'absolute',
            }}
          />
        </div>
        <div
          style={{
            top: '10.296875px',
            left: '274.921875px',
            width: '86px',
            height: '43px',
            display: 'flex',
            position: 'absolute',
            alignItems: 'flex-start',
            flexShrink: '0',
          }}
        >
          <span
            style={{
              top: 8,
              left: 8,
              color: 'rgba(37, 47, 63, 1)',
              height: 'auto',
              fontSize: 18,
              position: 'absolute',
              fontStyle: 'Medium',
              textAlign: 'left',
              fontFamily: 'Inter',
              fontWeight: 500,
              lineHeight: '27px',
              fontStretch: 'normal',
              textDecoration: 'none',
            }}
          >
            <span>Support</span>
          </span>
        </div>
        <div
          style={{
            top: '10.296875px',
            left: '159.40625px',
            width: '77px',
            height: '43px',
            display: 'flex',
            position: 'absolute',
            alignItems: 'flex-start',
            flexShrink: '0',
          }}
        >
          <span
            style={{
              top: 8,
              left: 8,
              color: 'rgba(37, 47, 63, 1)',
              height: 'auto',
              fontSize: 18,
              position: 'absolute',
              fontStyle: 'Medium',
              textAlign: 'left',
              fontFamily: 'Inter',
              fontWeight: 500,
              lineHeight: '27px',
              fontStretch: 'normal',
              textDecoration: 'none',
            }}
          >
            <span>Brands</span>
          </span>
        </div>
        <div
          style={{
            width: '105px',
            height: '43px',
            display: 'flex',
            alignItems: 'flex-start',
            flexShrink: '0',
            left: '15px',
            position: 'absolute',
            top: '10px',
          }}
        >
          <span
            style={{
              color: 'rgba(37, 47, 63, 1)',
              height: 'auto',
              fontSize: 18,
              fontStyle: 'Medium',
              textAlign: 'left',
              fontFamily: 'Inter',
              fontWeight: 500,
              lineHeight: '27px',
              fontStretch: 'normal',
              textDecoration: 'none',
              left: 8,
              top: '10px',
              position: 'absolute',
            }}
          >
            <span>Templates</span>
          </span>
        </div>
      </div>
     <h1
        style={{
          top: '27.546875px',
          left: '0px',
          width: '150px',
          height: '39px',
          position: 'absolute',
          fontSize:'30px',
          color:'black',
        }}>LOGO</h1>
    </div>
  )
}

Navnavbar.defaultProps = {
  rootClassName: '',
  iconSrc1: '/icon1104-psnd.svg',
  iconAlt2: 'Icon1105',
  iconSrc: '/icon1104-t0oo.svg',
  iconSrc2: '/icon1105-jsfp.svg',
  imageSrc: 'LOGO',
  iconAlt1: 'Icon1104',
  imageAlt: 'Image1106',
  iconAlt: 'Icon1104',
}

Navnavbar.propTypes = {
  rootClassName: PropTypes.string,
  iconSrc1: PropTypes.string,
  iconAlt2: PropTypes.string,
  iconSrc: PropTypes.string,
  iconSrc2: PropTypes.string,
  imageSrc: PropTypes.string,
  iconAlt1: PropTypes.string,
  imageAlt: PropTypes.string,
  iconAlt: PropTypes.string,
}

export default Navnavbar