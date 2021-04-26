import React from 'react';
import GymDetailsTabs from '../../../components/GymDetailsTabs';

const GymDetails = ({route}) => {
  return <GymDetailsTabs posts={route.params.posts} followers={route.params.followers}  followings={route.params.followingss}/>;
};
 
export default GymDetails;
