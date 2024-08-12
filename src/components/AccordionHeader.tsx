function AccordionHeader (props: {title: string, isOpen: boolean, onClick:()=>void}) {
    return ( 
        <div className='accordion-single--header' onClick={props.onClick}>        
            <p className="accordion-single--header-title">{props.title}</p>
            <p className={props.isOpen ? 'open' : 'closed'}>+</p>
        </div>
     );
}

export default AccordionHeader;