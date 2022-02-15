import AccountSelect from "../components/AccountSelect";
import styles from "./Table.module.css";
import cx from "classnames";
import Expenses from "../components/Expenses";

export default function Table(props) {
  return (
    <div
      className={cx(styles.main, {
        [styles.accountSelector]: props.accountSelector,
      })}
    >
      <h1 className={styles.title}>{props.title}</h1>
      <div className={styles.table}>
        <Expenses rowNumber={props.rowNumber} />
      </div>
      {props.accountSelector ? (
        <div className={styles.account}>
          <AccountSelect />
        </div>
      ) : null}
    </div>
  );
}
