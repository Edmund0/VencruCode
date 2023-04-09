import MainNav from '../Components/SettingFrame/MainNav';
import SideNav from '../Components/SettingFrame/SideNav';
import DetailFrame from '../Components/SettingFrame/DetailFrame';

function SettingDetailPage() {

   return (
    <div className="contentWrapper"> {/* Content Wrapper */}
        <MainNav></MainNav>

        <main>
            <header>Settings</header>
            <section>
                <SideNav></SideNav>
                <DetailFrame></DetailFrame>
            </section>
        </main>
    </div>
  );
}

export default SettingDetailPage;