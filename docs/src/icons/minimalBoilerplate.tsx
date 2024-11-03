type Props = {
    style: React.CSSProperties;
    stroke: number;
    color: string;
}

const MinimalBoilerplateIcon = ({ style, stroke ,color}) =>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={style}>
        <path d="M4 4L20 20" stroke={color} strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7.42871 15.4329V11.3615C7.42864 11.1329 7.48631 10.908 7.59635 10.7077C7.7064 10.5073 7.86527 10.338 8.05821 10.2155C8.25115 10.0929 8.47192 10.0211 8.70004 10.0066C8.92815 9.99217 9.15622 10.0356 9.36309 10.1328" stroke={color} strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10.0107 10.7761C10.0958 10.9535 10.1428 11.1516 10.1428 11.3615V15.4329" stroke={color} strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15.5713 10.0046C15.5713 11.5398 15.1189 13.6231 14.2141 15.4326" stroke={color} strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12.8569 9.99997C12.8569 11.5351 13.3093 13.6231 14.2141 15.4326" stroke={color} strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7.42871 13.6235H10.143" stroke={color} strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18.2856 15.4329V11.3615C18.2856 11.1329 18.3432 10.908 18.4533 10.7077C18.5633 10.5073 18.7222 10.338 18.9151 10.2155C19.1081 10.0929 19.3289 10.0211 19.557 10.0066C19.7851 9.99217 20.0132 10.0356 20.22 10.1328" stroke={color} strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M20.8677 10.7761C20.9527 10.9535 20.9998 11.1516 20.9998 11.3615V15.4329" stroke={color} strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18.2856 13.6235H20.9999" stroke={color} strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" />
        <path d="M2.00007 10.004L2.00007 13.6231C2.00007 14.103 2.19072 14.5633 2.53007 14.9026C2.86942 15.242 3.32968 15.4326 3.80959 15.4326L4.71436 15.4326L4.71436 14.5279" stroke={color} strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" />
    </svg>

export { MinimalBoilerplateIcon }