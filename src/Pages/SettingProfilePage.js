import MainNav from '../Components/SettingFrame/MainNav';
import SideNav from '../Components/SettingFrame/SideNav';
import ProfileFrame from '../Components/SettingFrame/ProfileFrame';

function SettingProfilePage() {

   return (
    <div className="body">
        <MainNav></MainNav>

        <main>
            <header>Settings</header>
            <section>
                <SideNav></SideNav>
                <ProfileFrame></ProfileFrame>
            </section>
        </main>
    </div>
  );
}

export default SettingProfilePage;