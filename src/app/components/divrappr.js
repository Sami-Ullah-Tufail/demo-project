import React from 'react'

const Divfilterwrapper = (props) => {
  return (
    <div
      style={{
        backgroundColor: 'rgba(255, 255, 255, 1)',
        width: '1296px',
        height: '98px',
        display: 'flex',
        alignItems: 'flex-start',
        flexShrink: '0',
        borderRadius: '5px',
        borderWidth: '1px',
        borderColor: 'rgba(230, 231, 235, 1)',
        borderStyle: 'solid',
        position: 'relative',
        boxShadow: '0px 3px 4px 0px rgba(35, 35, 35, 0.07000000029802322) ',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          backgroundColor: 'rgba(79, 70, 229, 1)',
          width: '180px',
          height: '56px',
          display: 'flex',
          alignItems: 'flex-start',
          flexShrink: '0',
          borderRadius: '5px',
          position: 'absolute',
          top: '21px',
          left: '26px',
        }}
      >
        <div
          style={{
            width: '8px',
            height: '8px',
            display: 'flex',
            alignItems: 'flex-start',
            flexShrink: '0',
            borderWidth: '0 2px 2px 0',
            borderColor: 'rgba(255, 255, 255, 1)',
            borderStyle: 'solid',
            position: 'absolute',
            top: '21.812950134277344px',
            left: '162.27999877929688px',
          }}
        ></div>
        <div
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.0020000000949949026)',
            width: '180px',
            height: '56px',
            display: 'flex',
            alignItems: 'flex-start',
            flexShrink: '0',
            borderRadius: '6px',
            position: 'absolute',
            top: '0px',
            left: '0px',
            boxShadow: '0px 3px 4px 0px rgba(35, 35, 35, 0.07000000029802322) ',
            overflow: 'hidden',
          }}
        >
          <span
            style={{
              color: 'rgba(255, 255, 255, 1)',
              width: '70px',
              height: 'auto',
              textAlign: 'left',
              lineHeight: '32px',
              position: 'absolute',
              top: 12,
              left: 15,
              fontFamily: 'Inter',
              fontSize: 19.200000762939453,
              fontStretch: 'normal',
              fontStyle: 'Regular',
              fontWeight: 400,
              textDecoration: 'none',
            }}
          >
            <span>Newest Items</span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Divfilterwrapper
