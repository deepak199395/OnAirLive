import React, { useEffect, useRef } from 'react';
import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

const VideoCall = () => {
  const { id } = useParams();
  const roomID = id;
  const callContainer = useRef(null);

  useEffect(() => {
    if (!callContainer.current) return;

    const appID = Number(process.env.REACT_APP_ID);
    const serverSecret = process.env.REACT_APP_SECRET;
    
    if (!appID || !serverSecret) {
      console.error("Missing environment variables: REACT_APP_ID or REACT_APP_SECRET");
      return;
    }

    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID, serverSecret, roomID, Date.now().toString(), "deepak yadav"
    );

    const zp = ZegoUIKitPrebuilt.create(kitToken);
    
    zp.joinRoom({
      container: callContainer.current,
      sharedLinks: [
        {
          name: 'Share call link',
          url: `${window.location.origin}/video-call/${roomID}`,
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.OneONoneCall,
      },
    });

  }, [roomID]);
  console.log("REACT_APP_ID:", process.env.REACT_APP_ID);
  console.log("REACT_APP_SECRET:", process.env.REACT_APP_SECRET);
  
  return (
    <div
      className="myCallContainer"
      ref={callContainer}
      style={{ width: '100vw', height: '100vh' }}
    />
  );
};

export default VideoCall;
