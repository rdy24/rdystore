import Footer from "./Footer";
import MenuItem from "./MenuItem";

interface SideBarProps {
  activeMenu: "overview" | "transactions" | "settings";
}
export default function SideBar(props: SideBarProps) {
  const { activeMenu } = props;
  return (
    <>
      <section className="sidebar">
        <div className="content pt-50 pb-30 ps-30">
          <div className="user text-center pb-50 pe-30">
            <img
              src="/img/avatar-1.png"
              width="90"
              height="90"
              className="img-fluid mb-20"
            />
            <h2 className="fw-bold text-xl color-palette-1 m-0">Shayna Anne</h2>
            <p className="color-palette-2 m-0">shayna@anne.com</p>
          </div>
          <div className="menus">
            <MenuItem
              title="Overview"
              icon="ic-menu-overview"
              active={activeMenu === "overview"}
              href="/member"
            />
            <MenuItem
              title="Transactions"
              icon="ic-menu-transaction"
              active={activeMenu === "transactions"}
              href="/member/transactions"
            />
            <MenuItem title="Messages" icon="ic-menu-messages" href="/member" />
            <MenuItem title="Card" icon="ic-menu-card" href="/member" />
            <MenuItem title="Rewards" icon="ic-menu-reward" href="/member" />
            <MenuItem
              title="Settings"
              icon="ic-menu-setting"
              active={activeMenu === "settings"}
              href="/member/edit-profile"
            />
            <MenuItem title="Log Out" icon="ic-menu-logout" />
          </div>
          <Footer />
        </div>
      </section>
    </>
  );
}
