import { useState } from "react";
import { Section } from "../types";
import AccordionSection from "./AccordionSection";

export default function Accordion() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const sections: Section[] = [
        {title: 'Integer vitae mi sit amet lorem rhoncus tincidunt et vitae massa?', content: 'Vivamus non auctor ligula. Sed tristique est sagittis purus malesuada suscipit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hac habitasse platea dictumst. Suspendisse augue dui, aliquet id rutrum tincidunt, hendrerit vel felis1.'},
        {title: 'Curabitur ultricies quis tortor eu tincidunt?', content: 'Vivamus non auctor ligula. Sed tristique est sagittis purus malesuada suscipit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hac habitasse platea dictumst. Suspendisse augue dui, aliquet id rutrum tincidunt, hendrerit vel felis2.'},
        {title: 'Sed aliquet, ante vel elementum venenatis, ante diam condimentum sem, non ullamcorper diam arcu id massa?', content: 'Vivamus non auctor ligula. Sed tristique est sagittis purus malesuada suscipit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hac habitasse platea dictumst. Suspendisse augue dui, aliquet id rutrum tincidunt, hendrerit vel felis3.'},
        {title: 'Ut eu metus non ante egestas molestie ultrices et augue?', content: 'Vivamus non auctor ligula. Sed tristique est sagittis purus malesuada suscipit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hac habitasse platea dictumst. Suspendisse augue dui, aliquet id rutrum tincidunt, hendrerit vel felis4.'},
        {title: 'Aenean sit amet sem in leo laoreet tincidunt nec at libero?', content: 'Vivamus non auctor ligula. Sed tristique est sagittis purus malesuada suscipit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hac habitasse platea dictumst. Suspendisse augue dui, aliquet id rutrum tincidunt, hendrerit vel felis5.'},
    ]

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <div className="accordions-wrapper">
            {sections.map((section, index) => (
                <AccordionSection 
                    key={index}
                    isOpen={openIndex === index}
                    title={section.title}
                    content={section.content}
                    onClick={() => handleToggle(index)}
                />
            ))}
        </div>
    )
}