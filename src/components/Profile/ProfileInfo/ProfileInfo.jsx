import React from "react";
import Preloader from "../../common/Preloader";
import ProfileInfoCSS from "./ProfileInfo.module.css";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <>
      <div className={ProfileInfoCSS.mainFotoConteiner}></div>
      <div className={ProfileInfoCSS.ava}>
        <img src={props.profile.photos.small} alt="logo3" />
        <ProfileStatus
          status={props.status}
          updateStatus={props.updateStatus}
        />
        <div>{props.profile.aboutMe}</div>
        <div>{props.profile.fullName}</div>
        <div>{props.profile.userId}</div>
      </div>
    </>
  );
};

export default ProfileInfo;
