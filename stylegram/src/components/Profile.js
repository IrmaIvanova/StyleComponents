// Profile.js
import React from 'react';
import styled from 'styled-components';
import SingleImage from './Image.js';
const feedsource = [
  {
    source:
      'https://scontent-arn2-1.cdninstagram.com/vp/10dc791dad879f46a57fd8ed716e65c6/5DF4646D/t51.2885-15/e35/s480x480/69665911_897690907267342_8732895191851899113_n.jpg?_nc_ht=scontent-arn2-1.cdninstagram.com&_nc_cat=110',
    likes: '43',
    comments: '3',
    isVideo: false,
    id: 0,
  },
  {
    source:
      'https://scontent-arn2-1.cdninstagram.com/vp/4df3fe862b388a8105bd318cc5fb6116/5DFA05E4/t51.2885-15/sh0.08/e35/s640x640/66394467_867469326979356_5892539472904632493_n.jpg?_nc_ht=scontent-arn2-1.cdninstagram.com&_nc_cat=100',
    likes: '313',
    comments: '10',
    isVideo: true,
    id: 1,
  },
  {
    source:
      'https://scontent-arn2-1.cdninstagram.com/vp/a6e4d6413552cb5673050bc80bab8828/5DF1801D/t51.2885-15/sh0.08/e35/s640x640/64582873_650302865382087_8079501114515338623_n.jpg?_nc_ht=scontent-arn2-1.cdninstagram.com&_nc_cat=103',
    likes: '29',
    comments: '2',
    isVideo: false,
    id: 2,
  },
  {
    source:
      'https://scontent-arn2-1.cdninstagram.com/vp/a2d9086451db1738c3ff50fde617a0dd/5E0FD0B1/t51.2885-15/sh0.08/e35/s640x640/64869933_2292817914146390_8152836647339525021_n.jpg?_nc_ht=scontent-arn2-1.cdninstagram.com&_nc_cat=102',
    likes: '18',
    comments: '2',
    isVideo: false,
    id: 3,
  },
  {
    source:
      'https://scontent-arn2-1.cdninstagram.com/vp/d458ea2d39f40c392a3446fb53a29f8f/5E00FA4F/t51.2885-15/sh0.08/e35/s640x640/54513778_2097933000504625_4158965948809712856_n.jpg?_nc_ht=scontent-arn2-1.cdninstagram.com&_nc_cat=101',
    likes: '30',
    comments: '4',
    isVideo: false,
    id: 4,
  },
];
const ProfileContainer = styled.div`
  max-width: 1010px;
  width: 100%;
  margin: 20px auto;
`;
const ProfileDetails = styled.div`
  display: flex;
`;
const ProfileDetailsLeft = styled.div`
  margin-right: 40px;
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ProfileDetailsRight = styled.div`
  display: flex;
  align-items: end;
  justify-content: center;
  flex-direction: column;
`;
const ProfileImage = styled.img`
  border-radius: 50%;
  width: 150px;
  border: 1px solid #ccc;
  padding: 5px;
`;
const ProfileDetailsUsername = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const EditProfileButton = styled.div`
  background-color: transparent;
  border: 1px solid #dbdbdb;
  color: #262626;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;
  padding: 5px 9px;
  text-transform: capitalize;
  font-size: 14px;
  margin-left: 20px;
`;
const HeadingThreeText = styled.h3``;
const ParagraphText = styled.p`
  margin-right: 25px;
`;
const ProfileDetailsMeta = styled.div`
  display: flex;
  justify-content: center;
`;
const ProfileDetailsName = styled.div`
  text-align: left;
`;
const ImagesWrapper = styled.div`
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
`;
function Profile() {
  return (
    <ProfileContainer>
      <ProfileDetails>
        <ProfileDetailsLeft>
          <ProfileImage src="https://api.adorable.io/avatars/285/abott@adorable.png" />
        </ProfileDetailsLeft>
        <ProfileDetailsRight>
          <ProfileDetailsUsername>
            <HeadingThreeText>yomieluwande</HeadingThreeText>
            <EditProfileButton>Edit profile</EditProfileButton>
          </ProfileDetailsUsername>
          <ProfileDetailsMeta>
            <ParagraphText>
              <strong>5</strong> posts
            </ParagraphText>
            <ParagraphText>
              <strong>296</strong> followers
            </ParagraphText>
            <ParagraphText>
              <strong>269</strong> following
            </ParagraphText>
          </ProfileDetailsMeta>
          <ProfileDetailsName>
            <ParagraphText>
              <strong>Yomi</strong>
            </ParagraphText>
          </ProfileDetailsName>
        </ProfileDetailsRight>
      </ProfileDetails>
      <ImagesWrapper>
        {feedsource.map(item => (
          <SingleImage image={item} key={item.id} />
        ))}
      </ImagesWrapper>
    </ProfileContainer>
  );
}
export default Profile;