import SmallTitle from "../../../ui/smallTitle/SmallTitle"

interface ContactInfoSectionProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    title: string
}

export default function ContactInfoSection(props: ContactInfoSectionProps) {
    const { children, title, ...rest } = props

    return (
        <div {...rest} className="contact-info__section">
            <SmallTitle className='contact-info__title'>
                {title}
            </SmallTitle>

            {children}
        </div>
    )
}