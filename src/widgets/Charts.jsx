import AccountSelect from "../components/AccountSelect";
import BarChart from "../components/BarChart";
import LineChart from "../components/LineChart";
import styles from "./Charts.module.css";
import cx from "classnames";
import { useCallback, useState } from "react";

export default function Charts(props) {
  const [accountId, setAccountId] = useState(1);

  const onSelect = useCallback((account) => {
    setAccountId(account.id);
  }, []);

  return (
    <div
      className={cx(styles.main, {
        [styles.accountSelector]: props.accountSelector,
      })}
    >
      <h1 className={styles.title}>{props.title}</h1>
      <div className={styles.chart}>
        {props.chartType === "bars" ? (
          <BarChart tooltip={props.hasTooltip} accountId={accountId} />
        ) : (
          <LineChart accountId={accountId} />
        )}
      </div>
      {props.accountSelector ? (
        <div className={styles.account}>
          <AccountSelect onSelect={onSelect} />
        </div>
      ) : null}
    </div>
  );
}
