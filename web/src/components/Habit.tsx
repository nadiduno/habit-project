interface HabitProps{
  completed: number
}
export function Habit(props : HabitProps){
  return (
    <div className="bg-violet-700 text-white w-10 rounded m-2 text-center justify-center">{props.completed}</div>
  )
}