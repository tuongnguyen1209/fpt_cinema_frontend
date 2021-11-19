import React from "react";
import SettingAccount from "../../../components/molecules/setting_account_component/setting_account";
import { PageSettingAccountStyle } from "./page_setting_accountStyle";

const PageSettingAccount = () => {
    return (
        <PageSettingAccountStyle>
            <div className="container">
                <SettingAccount />
            </div>
        </PageSettingAccountStyle>
    )
}

export default PageSettingAccount;