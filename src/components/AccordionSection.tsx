import AccordionHeader from "./AccordionHeader"

export default function AccordionSection(props: { onClick:()=>void, isOpen: boolean, content: string, title: string }) {

    return (
        <div className={`accordion-wrapper--single ${props.isOpen ? 'active' : ''}`}>        
            <AccordionHeader 
                title={props.title}
                isOpen={props.isOpen}
                onClick={props.onClick}
            />
            <p className="accordion-single--content">{props.content}</p>
        </div>
    )
}