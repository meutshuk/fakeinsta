import type { NextPage } from "next";
import { useTranslation } from "react-i18next";
import { CustomButton } from "../common/CustomButton";

const Home: NextPage = () => {
  const { t } = useTranslation();
  return (
    <div>
      apple
      <CustomButton>{t("button.login")}</CustomButton>
    </div>
  );
};

export default Home;
