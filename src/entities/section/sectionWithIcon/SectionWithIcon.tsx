import {FC} from 'react';
import './_sectionWithIcon.scss'
import Icon from "../../../shared/icon/Icon.tsx";
import {IconDefinition} from "@fortawesome/free-brands-svg-icons";
import SectionContentItem from "../sectionContentItem/SectionContentItem.tsx";

export interface SectionItem{
    title:string;
    dates?:string;
    info?:string;
}
interface SectionWithIconProps{
    icon: IconDefinition;
    sectionTitle:string;
    items:SectionItem[];
}
const SectionWithIcon : FC<SectionWithIconProps> = ({icon,sectionTitle,items =[]}) => {
    return (
        <section className="section">
            <div className="section__icon-divider">
                <Icon icon={icon}/>
                <div className="section__icon-divider-line"></div>
            </div>
            <div className="section__content">
                <h2 className="section__content-title">{sectionTitle}</h2>
                <div className="section__content-items">
                    {items.map(item =>
                        <SectionContentItem key={item.title} title={item.title} info={item.info} date={item.dates}/>
                    )}
                </div>
            </div>
        </section>
    );
};

export default SectionWithIcon;