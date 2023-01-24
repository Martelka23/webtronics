interface QuestionDropdownProps {
  title: string,
  text: string,
  isOpen: boolean
  onClick: () => void
}

export default function QuestionDropdown({ title, text, isOpen, onClick }: QuestionDropdownProps) {
  return (
    <div className={`question-dropdown ${isOpen ? 'open' : ''}`}>
      <div className="bg">
        <div className="content">
          <div className="content__top" onClick={onClick}>
            <h4>{title}</h4>
            <span>+</span>
          </div>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
}