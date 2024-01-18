import QuestionsSideBarItem from "./QuestionsSideBarItem"
import items from "../data/questionsidebar.json"

export default function QuestionsSidebar() {
    return (
      <div className="sidebar">
          { items.map((item, index) => <QuestionsSideBarItem key={index} item={item} />) }
        </div>
    )
}