import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { decrement, increment } from '../redux/slices/counterSlice';
import styles from '../styles/Home.module.css'

export default function Home() {
  const {value} = useAppSelector(state => state.counterReducer);
  const dispatch = useAppDispatch();
  return (
    <div className={styles.container}>
        <h1>{value}</h1>
        <button
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <br/>
        <br/>
        <br/>
        <button
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
    </div>
  )
}
