import styled from "styled-components";
import wigVideo from "../assets/media/wig.webm";

const VideoContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  overflow: hidden;
  background-color: #000;
`;

const VideoElement = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export function BackgroundVideo() {
  return (
    <VideoContainer>
      <VideoElement src={wigVideo} autoPlay muted loop playsInline />
    </VideoContainer>
  );
}
