import Header from "./Header";
import BottomNav from "./BottomNav";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main> {children}</main>
      <BottomNav />
    </>
  );
};

export default Layout;
