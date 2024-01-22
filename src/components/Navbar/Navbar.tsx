import "./Navbar.css";
import _i18n from "../../i18n";
import { useTranslation } from "react-i18next";
import { Button, Select, Space } from "antd";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
const Navbar = () => {
  const location = useLocation();

  const { t } = useTranslation();
  const changeLanguage = (lng: string) => {
    _i18n.changeLanguage(lng);
  };

  return (
    <nav>
      {location.pathname === "/layout" ? (
        <h1>{t("Layout & Style")}</h1>
      ) : location.pathname === "/form" ? (
        <h1>{t("Form & Table")}</h1>
      ) : (
        <h1></h1>
      )}

      <Space wrap>
        <Select
          defaultValue="en"
          style={{ width: 120 }}
          onChange={(value) => changeLanguage(value)}
          value={_i18n.language}
          options={[
            { value: "en", label: t("EN") },
            { value: "th", label: t("TH") },
          ]}
        />
        <Link to="/">
          <Button className="back">{t("Main page")}</Button>
        </Link>
      </Space>
    </nav>
  );
};

export default Navbar;
