import './styles/global.css';
import { Habit } from './components/Habit';

export function App() {
  return (
    <div>
      <h1>Estilizando TailwindCSS </h1>
      <Habit completed={1}/>
      <Habit completed={2}/>
      <Habit completed={3}/>
    </div>
  )
}
