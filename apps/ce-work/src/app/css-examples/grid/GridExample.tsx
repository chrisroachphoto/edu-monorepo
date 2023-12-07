import style from "../page.module.css";
import classNames from "classnames/bind";

const cx = classNames.bind(style);

export default function GridExample() {
  return (
    <div className={cx("grid-container")}>
      <div className={cx("grid-item", "beige")} id="grid-1"></div>
      <div className={cx("grid-item", "diagonal-top")} id="grid-2">
        <div className={cx("text-overlay")}>Text</div>
      </div>
      <div className={cx("grid-item", "diagonal-bottom")} id="grid-3"></div>
      <div className={cx("grid-item", "beige")} id="grid-4">
        <div className={cx("text-overlay")}>Text</div>
      </div>
      <div className={cx("grid-item", "beige")} id="grid-5"></div>
      <div className={cx("grid-item", "diagonal-bottom")} id="grid-6">
        <div className={cx("text-overlay")}>Text words</div>
      </div>
    </div>
  );
}
