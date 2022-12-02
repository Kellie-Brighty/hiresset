import React from 'react'
import { useNavigate } from 'react-router';
import MainHeader from '../../components/main/MainHeader';

const TalentGetStarted = () => {
    const navigate = useNavigate();
  return (
    <div>
        <MainHeader />
        Let's get you started
        <button onClick={() => navigate("/talent_home")}>Save</button>
    </div>
  )
}

export default TalentGetStarted