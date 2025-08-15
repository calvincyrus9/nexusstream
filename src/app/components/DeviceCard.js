// components/DeviceCard.js
import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  display: flex !important;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 20px 10px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
  height: 180px;

  &:hover {
    transform: translateY(-5px);
    background: rgba(99, 102, 241, 0.15);
    box-shadow: 0 0 15px rgba(240, 0, 248, 0.6);
  }

  @media (max-width: 768px) {
    height: 160px;
  }
  @media (max-width: 480px) {
    height: 150px;
  }
`;

const LogoWrapper = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 12px;

  img {
    width: 40px;
    height: 40px;
    object-fit: contain;
    filter: invert(1);
    opacity: 0.8;

    @media (max-width: 768px) {
      width: 36px;
      height: 36px;
    }
    @media (max-width: 480px) {
      width: 32px;
      height: 32px;
    }
  }
`;

const Title = styled.h3`
  color: rgb(152, 155, 118);
  font-size: 1rem;
  font-family: 'Oxanium', sans-serif;
  margin-bottom: 6px;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
  @media (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

const Description = styled.p`
  color: rgb(200, 200, 200);
  font-size: 0.8rem;
  font-family: 'Inter', sans-serif;

  @media (max-width: 768px) {
    font-size: 0.75rem;
  }
  @media (max-width: 480px) {
    font-size: 0.7rem;
  }
`;

const DeviceCard = ({ device }) => {
  return (
    <Card>
      <LogoWrapper>
        <Image src={device.logo} alt={`${device.name} logo`} width={100} height={48} className="h-12 w-auto mx-auto" />
      </LogoWrapper>
      <Title>{device.name}</Title>
      <Description>{device.description}</Description>
    </Card>
  );
};

export default DeviceCard;
