// GuestLayout.js
import { Outlet } from 'react-router-dom';
import SideBar from './SideBar/GuestSideBar';

const GuestLayout = () => {
  return (
  <div class="row vh-100 overflow-auto">
    <SideBar />  
    <div class="col d-flex flex-column h-sm-100">
        <main class="row overflow-auto">
            <div class="col pt-4">
                <h3>Vertical Sidebar that switches to Horizontal Navbar</h3>
                <p class="lead">An example multi-level sidebar with collasible menu items. The menu functions like an "accordion" where only a single menu is be open at a time.</p>
                <hr />
                <h3>More content...</h3>
                <p>Sriracha biodiesel taxidermy organic post-ironic, Intelligentsia salvia mustache 90's code editing brunch. Butcher polaroid VHS art party, hashtag Brooklyn deep v PBR narwhal sustainable mixtape swag wolf squid tote bag. Tote bag cronut semiotics, raw denim deep v taxidermy messenger bag. Tofu YOLO Etsy, direct trade ethical Odd Future jean shorts paleo. Forage Shoreditch tousled aesthetic irony, street art organic Bushwick artisan cliche semiotics ugh synth chillwave meditation. Shabby chic lomo plaid vinyl chambray Vice. Vice sustainable cardigan, Williamsburg master cleanse hella DIY 90's blog.</p>
                <p>Ethical Kickstarter PBR asymmetrical lo-fi. Dreamcatcher street art Carles, stumptown gluten-free Kickstarter artisan Wes Anderson wolf pug. Godard sustainable you probably haven't heard of them, vegan farm-to-table Williamsburg slow-carb readymade disrupt deep v. Meggings seitan Wes Anderson semiotics, cliche American Apparel whatever. Helvetica cray plaid, vegan brunch Banksy leggings +1 direct trade. Wayfarers codeply PBR selfies. Banh mi McSweeney's Shoreditch selfies, forage fingerstache food truck occupy YOLO Pitchfork fixie iPhone fanny pack art party Portland.</p>
            </div>
        </main>
        <footer class="row bg-light py-4 mt-auto">
            <div class="col"> Footer content here... </div>
        </footer>
    </div>
</div>
  );
};

export default GuestLayout;