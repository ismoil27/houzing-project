import React from "react";
import { Body, ChangePassword, Container, Items } from "./style";
import image from "../../../assets/images/card2.jpeg";
const MyProfile = () => {
  return (
    <Container>
      <Container.Title>
        <h1>My Profile</h1>
        <span>Ready to jump back in?</span>
      </Container.Title>
      <Body>
        <Container.Content>
          <Container.Contact>
            <Container.ContentTitle>Contact Information</Container.ContentTitle>
            <Items>
              <Container.Input placeholder="First Name" />
              <Container.Input margin="true" placeholder="Last Name" />
            </Items>
            <Items>
              <Container.Input placeholder="Email" />
              <Container.Input margin="true" placeholder="Phone" />
            </Items>
            <Items>
              <Container.Input placeholder="Mobile" />
              <Container.Input margin="true" placeholder="Skype" />
            </Items>
            <Container.ContentTitle>Social Media</Container.ContentTitle>
            <Items>
              <Container.Input placeholder="Facebook Url" />
              <Container.Input margin="true" placeholder="Twitter Url" />
            </Items>
            <Items>
              <Container.Input placeholder="Linkedin Url" />
              <Container.Input margin="true" placeholder="Instagram Url" />
            </Items>
            <Container.TextArea rows="10" placeholder="About me" />
            <Container.Button>UPDATE PROFILE </Container.Button>
          </Container.Contact>

          <ChangePassword>
            <Container.ContentTitle>Contact Information</Container.ContentTitle>

            <Items>
              <Container.Input placeholder="Old Password" />
            </Items>
            <Items>
              <Container.Input placeholder="New Password" />
              <Container.Input
                margin="true"
                placeholder="Confirm New Password"
              />
            </Items>
            <Container.Button>CHANGE PASSWORD </Container.Button>
          </ChangePassword>
        </Container.Content>

        <Container.Img>
          <h2>Photo</h2>
          <img src={image} alt="" />
          <Container.Upload>UPLOAD PROFILE PHOTO</Container.Upload>
          <span>*minimum 500px x 500px</span>
        </Container.Img>
      </Body>
    </Container>
  );
};

export default MyProfile;
