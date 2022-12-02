import IconWeChat from "@/assets/svg/IconWeChat";
import IconWeiBo from "@/assets/svg/IconWeiBo";
import IncoAirbnb from "@/assets/svg/IncoAirbnb";
import React, { memo } from "react";
import { FooterWrapper } from "./style";

const AppFooter = memo(() => {
  return (
    <FooterWrapper>
      <div className="content">
        <ul className="content-top">
          <li className="content-top__item">
            <h4>爱彼迎</h4>
            <ul>
              <li>工作机会</li>
              <li>爱彼迎新闻</li>
              <li>政策</li>
              <li>无障碍设施</li>
            </ul>
          </li>

          <li className="content-top__item">
            <h4>发现</h4>
            <ul>
              <li>信任与安全</li>
              <li>旅行基金</li>
              <li>商务差旅</li>
              <li>爱彼迎杂志</li>
              <li>Airbnb.org</li>
            </ul>
          </li>

          <li className="content-top__item">
            <h4>出租</h4>
            <ul>
              <li>为什么要出租?</li>
              <li>房东义务</li>
              <li>开展体验</li>
              <li>资源中心</li>
            </ul>
          </li>

          <li className="content-top__item">
            <h4>客服支持</h4>
            <ul>
              <li>帮助</li>
              <li>邻里支持</li>
            </ul>
          </li>
        </ul>

        <section className="content-bottom">
          <article className="content-bottom__left">
            <IncoAirbnb />
            <div>
              <p>
                京ICP备16017121号 京ICP证 160773号&nbsp;
                <img src={require("@/assets/img/security.png")} alt="" />
                &nbsp;公网安备 11010502032345号 安彼迎网络（北京）有限公司&nbsp;
                <img
                  width="20"
                  height="20"
                  src={require("@/assets/img/license.png")}
                  alt=""
                />
                &nbsp;营业执照
              </p>
              <p>
                © 2022 Airbnb, Inc. All rights reserved.条款 · 隐私政策 ·
                网站地图 · 全国旅游投诉渠道 12301
              </p>
            </div>
          </article>
          
          <div className="content-bottom__right">
            <IconWeiBo />
            <IconWeChat />
          </div>
        </section>
      </div>
    </FooterWrapper>
  );
});

export default AppFooter;
