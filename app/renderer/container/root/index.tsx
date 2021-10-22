import React from 'react';
import './index.less';
import { useHistory } from 'react-router'
import Logo from '@assets/logo.png';
import { ROUTER_ENTRY, ROUTER_KEY } from '@common/constants/router'
import { shell } from 'electron';
import { isHttpOrHttpsUrl } from '@common/utils/router'
import { useSelector } from 'react-redux'

function Root() {
    const appName = useSelector((state: any) => state.globalModel.appName)
    console.log(appName);

    const history = useHistory()
    const onRouterToLink = (router: TSRouter.Item) => {
        if (isHttpOrHttpsUrl(router.url)) {
            shell.openExternal(router.url)

        } else {
            history.push(router.url)
        }
    }
    return (
        <div styleName="root">
            <div styleName="container">
                <img src={Logo} alt="" />
                <div className="title">VisResumeMook</div>
                <div className="tips">一个模板简历制作平台，让你的简历更加出众~</div>
                <div className="action">
                    {ROUTER_ENTRY.map((router: TSRouter.Item) => {
                        return (
                            <div key={router.key} styleName="item" onClick={() => {
                                onRouterToLink(router)
                            }}>{router.text}</div>
                        )
                    })}
                </div>
                <div className="copyright">
                    <div className="footer">
                        <p className="copyright">
                            Copyright © 2018-{new Date().getFullYear()} All Rights Reserved. Copyright By pengdaokuan
                     </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Root;