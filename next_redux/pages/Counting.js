import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increase, decrease } from "../reducers/counter";
import Layout from "../components/Layout";

const Counting = () => {
  const { countNum } = useSelector((state) => ({
    countNum: state.counter.number,
  }));

  const dispatch = useDispatch();
  const onIncrease = useCallback((input) => dispatch(increase(input)), [
    dispatch,
  ]);
  const onDecrease = useCallback((input) => dispatch(decrease(input)), [
    dispatch,
  ]);

  const [input, setInput] = useState("");

  return (
      <Layout>
        <h3>Counting Number</h3>
        <h1>{countNum}</h1>
        <input
          value={input}
          placeholder="숫자를 입력하세요"
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={() => onIncrease(Number(input))}>+</button>
        <button onClick={() => onDecrease(Number(input))}>-</button>
      </Layout>
  );
};

export default Counting;