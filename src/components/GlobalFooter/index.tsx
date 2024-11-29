import React from "react";
import "./index.css";

/**
 * 全局底部栏组件
 * @constructor
 */
export default function GlobalFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="global-footer">
      <div>© {currentYear} 智练营刷题平台</div>
      <div>
        <a href="https://github.com/ZXH-hu/zhilian_sys-backend.git" target="_blank">
            坚持刷题，斩获 offer！
        </a>
      </div>
    </div>
  );
}
