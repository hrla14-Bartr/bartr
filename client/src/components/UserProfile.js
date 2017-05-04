import React from 'react';
import { Link } from 'react-router';
import { Button } from 'semantic-ui-react';
 
const UserProfile = ({ profile, error }) => {
  console.log('this is userprofile PROFILE: ', profile)
  return(
    <div>
      <h1 style={{textAlign: 'center', fontSize: '30px'}}>{profile.name ? 'Hello, ' + profile.name : null}</h1>
      <img src={profile.picture} height="50px" />
      <br/>
      <h1 style={{}}><Link to='editprofile'><Button>Edit Profile</Button></Link></h1>
      <Link to='pastengagements'><Button>Past Engagements</Button></Link>
    </div>
  )
}

export default UserProfile;