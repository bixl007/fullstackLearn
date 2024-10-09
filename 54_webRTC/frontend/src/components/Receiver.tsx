import { useEffect } from "react";

export const Receiver = () => {
  useEffect(() => {
    const socket = new WebSocket("ws://localhost:8080");
    socket.onopen = () => {
      socket.send(JSON.stringify({ type: "receiver" }));
    };

    const video = document.createElement("video");
    document.body.appendChild(video);
    video.autoplay = true;

    const pc = new RTCPeerConnection();

    pc.ontrack = (event) => {
      video.srcObject = new MediaStream([event.track]);
    };

    socket.onmessage = (event) => {
      const message = JSON.parse(event.data);
      if (message.type === "createOffer") {
        pc.setRemoteDescription(message.sdp).then(() => {
          pc.createAnswer().then((answer) => {
            pc.setLocalDescription(answer);
            socket.send(
              JSON.stringify({
                type: "createAnswer",
                sdp: answer,
              })
            );
          });
        });
      } else if (message.type === "iceCandidate") {
        pc.addIceCandidate(message.candidate);
      }
    };

    return () => {
      socket.close();
      pc.close();
      video.srcObject = null;
    };
  }, []);

  return <div />;
};
