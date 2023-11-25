import { observer } from "mobx-react-lite";
import { useStore } from "../../app/stores/store";
import { Tab, Grid, Header } from "semantic-ui-react";
import ProfileCard from "./ProfileCard";

export default observer(function ProfileFollowings() {
    const {profileStore} = useStore();
    const {profile, followings, loadingFollowings, activeTab} = profileStore;

   

    return (
        <Tab.Pane loading ={loadingFollowings}>
            <Grid>
                <Grid.Column width={16}>
                    <Header 
                        floated='left' 
                        icon='user' 
                        content={activeTab === 3 ? `People following ${profile?.displayName}` : `people ${profile?.displayName} is following`} 
                        />
                </Grid.Column>
                <Grid.Column width={16}>
                    {followings.map(profile => (
                        <ProfileCard key={profile.username} profile={profile} />
                    ))}
                </Grid.Column>
            </Grid>
        </Tab.Pane>
    )
})